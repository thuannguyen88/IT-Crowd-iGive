import React, { useEffect, useState } from "react";
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Card from "../../Components/Card/index.js";
import Navbar from "../../Components/Navbar/index.js";
import styles from "../../styles/profile.module.css";
import Head from "next/head";

// import EditProfileModal from "../Components/EditProfileModal";

export const getStaticPaths = async () => {
	const res = await fetch("https://it-crowd-project.herokuapp.com/api/users");
	const data = await res.json();
	const users = data.payload;
	const paths = users.map((user) => {
		return {
			params: { id: user.id.toString() },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (ctx) => {
	const id = ctx.params.id;

	const dbUsersRes = await fetch(
		"https://it-crowd-project.herokuapp.com/api/users"
	);
	const dbUsersData = await dbUsersRes.json();

	const dbListingsRes = await fetch(
		"https://it-crowd-project.herokuapp.com/api/listings"
	);
	const dbListingsData = await dbListingsRes.json();
	console.log(dbListingsData);

	const staticRes = await fetch(
		"https://it-crowd-project.herokuapp.com/api/users/" + id
	);

	const staticData = await staticRes.json();

	return {
		props: {
			currentUser: staticData.payload[0],
			listings: dbListingsData.payload,
			users: dbUsersData.payload,
		},
	};
};

function Profile({ users, listings, currentUser }) {
	console.log(currentUser.id);

	const userListings = listings.filter(
		(items) => items.user_id === currentUser.id
	);

	useEffect(() => {
		setUpdatedListings(userListings);
	}, []);

	const [editProfileModalShow, setEditProfileModalShow] = React.useState(false);
	const [updatedListings, setUpdatedListings] = useState(listings);
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading ...</div>;
	if (error) return <div>{error.message}</div>;

	const handleDelete = async (id) => {
		console.log(id);
		const res = await fetch(
			`https://it-crowd-project.herokuapp.com/api/items/${id}`,
			{
				method: "DELETE",
			}
		);

		const data = await res.json();
		console.log(data);
		setUpdatedListings(
			updatedListings.filter((listing) => listing.item_id !== id)
		);
	};

	return (
		<div className="main-container">
			<Head>
				<title>iGive</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
				<style>
					@import
					url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
				</style>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				></link>
			</Head>
			<Navbar
				avatar={!currentUser ? user.picture : currentUser.avatar}
				users={users}
			/>

			<div className={styles.flexboxContainer}>
				{/* </div> */}
				<div className={styles.profileTopContainer}>
					<div className={styles.profileContainer}>
						<div className={styles.imageContainer}>
							<img
								className={styles.userImg}
								src={!currentUser ? user.picture : currentUser.avatar}
							/>
							<div className={styles.profileInfoBox}>
								<div className={styles.block1}>
									<p className={styles.profileTitle}>
										Full Name:{" "}
										{currentUser
											? `${currentUser.first_name} ${currentUser.last_name}`
											: null}
									</p>
								</div>

								<div className={styles.block3}>
									<p className={styles.profileTitle}>
										Email: {currentUser.email}{" "}
									</p>
								</div>

								<div className={styles.block2}>
									<p className={styles.profileTitle}>
										Address: {currentUser ? `${currentUser.address}` : null}
									</p>
								</div>
							</div>
						</div>

						<div className={styles.bioBox}>
							<p className={styles.profileTitle}>Bio</p>
							<p>{currentUser ? `${currentUser.user_bio}` : null}</p>
						</div>
					</div>

					<div className={styles.buttons}>
						<p className={styles.editBtn}>Edit</p>
						{/* <p className={styles.editBtn} onClick={() => handleFormMode()}>
							Finish Profile
						</p> */}
						<button
							variant="primary"
							onClick={() => setEditProfileModalShow(true)}
							className={styles.btn}
						>
							Finish profile
						</button>
						{/* <EditProfileModal
							users={users}
							show={editProfileModalShow}
							onHide={() => setEditProfileModalShow(false)}
						/> */}
					</div>
					{/* <ProvideInfoForm
						showEditModal={showEditModal}
						setShowEditModal={setShowEditModal}
					/> */}
				</div>
			</div>
			<div className={styles.btnSection}>
				<button className={styles.giveBtn}>Give Item</button>
				<button className={styles.searchBtn}>Search Item</button>
			</div>

			<h2 className={styles.title}>My Listing</h2>

			{/*  */}
			<div className={`${styles.flexItems} ${styles.flexItem3}`}>
				{/* USER ID FOR FETCHING ITEMS */}
				{/* <Card userID={id} /> */}

				{updatedListings?.map((listing) => (
					<Card
						user={user}
						handleDelete={handleDelete}
						item_id={listing.item_id}
						user_id={listing.user_id}
						category={listing.category}
						item_name={listing.item_name}
						item_description={listing.item_description}
						use_by_date={listing.use_by_date}
						date_added={listing.date_added}
						quantity={listing.quantity}
						item_image={listing.item_image}
						is_reserved={listing.is_reserved}
						availability={listing.availability}
						time_slot={listing.time_slot}
						cloudinary_id={listing.cloudinary_id}
						avatar={listing.avatar}
						user_bio={listing.user_bio}
						currentUser={currentUser}
					/>
				))}
			</div>
		</div>
		// </div>
	);
}

//Fetching data to PROPS
// export async function getServerSideProps() {

//   const res = await fetch(`https://it-crowd-project.herokuapp.com/api/users`);
//   const data = await res.json();

//   // By returning { props: { allUsers } }, the PostAuth component
//   // will receive `allUsers` as a prop at BUILD time
//   return {
//       props:
//           { users: data.payload },
//     }

// }

// export const getServerSideProps = withPageAuthRequired({
// 	async getServerSideProps() {
// 		const usersRes = await fetch(
// 			`https://it-crowd-project.herokuapp.com/api/users`
// 		);
// 		const usersData = await usersRes.json();

// 		const listingsRes = await fetch(
// 			`https://it-crowd-project.herokuapp.com/api/listings`
// 		);
// 		const listingsData = await listingsRes.json();
// 		// By returning { props: { allUsers } }, the PostAuth component
// 		// will receive `allUsers` as a prop at BUILD time
// 		return {
// 			props: { users: usersData.payload, listings: listingsData.payload },
// 		};
// 	},
// });

export default Profile;
