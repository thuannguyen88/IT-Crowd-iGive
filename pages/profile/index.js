import React from "react";

function Index() {
  return <div>index</div>;
}

export default Index;

// import React from "react";
// import Card from "../../Components/Card/index.js";
// import Navbar from "../../Components/Navbar/index.js";
// import styles from "../../styles/profile.module.css";
// import Link from "next/link";
// import Head from "next/head";
// import Button from "../../Components/Button";
// import { useUser } from "@auth0/nextjs-auth0";

// // getServerSideProps

// export const getStaticProps = async () => {
// 	const res = await fetch("https://it-crowd-project.herokuapp.com/api/users");
// 	const data = await res.json();

// 	return {
// 		props: { profiles: data.payload },
// 	};
// };

// const Profiles = ({ profiles }) => {
// 	const { user, error, isLoading } = useUser();

// 	if (isLoading) return <div>Loading ...</div>;
// 	if (error) return <div>{error.message}</div>;

// 	const particularUser = profiles.filter(
// 		(parUser) => parUser.email === user.email
// 	);

// 	const {
// 		id,
// 		first_name,
// 		last_name,
// 		email,
// 		address,
// 		is_active,
// 		cloudinary_id,
// 		avatar,
// 		user_bio,
// 	} = particularUser;

// 	return (
// 		<div className="main-container">
// 			<Head>
// 				<title>Profile</title>
// 				<meta name="description" content="Generated by create next app" />
// 				<link rel="icon" href="/favicon.ico" />
// 				<style>
// 					@import
// 					url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
// 				</style>
// 				<link
// 					rel="stylesheet"
// 					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
// 				></link>
// 			</Head>
// 			<Navbar />

// 			<div className={styles.form}>
// 				<form></form>
// 			</div>

// 			<div className={styles.flexboxContainer}>
// 				<div className={`${styles.flexItems} ${styles.flexItem1}`}>
// 					<div className={styles.userImg}>
// 						<Link href="/">
// 							<a>
// 								<img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
// 							</a>
// 						</Link>
// 						<span className={`fa fa-camera ${styles.camera}`}></span>
// 						<div className={styles.stars}>
// 							<span className={`fa fa-star ${styles.checked}`}></span>
// 							<span className={`fa fa-star ${styles.checked}`}></span>
// 							<span className={`fa fa-star ${styles.checked}`}></span>
// 							<span className={`fa fa-star ${styles.checked}`}></span>
// 							<span class="fa fa-star"></span>
// 						</div>
// 					</div>
// 				</div>

// 				<div className={`${styles.flexItems} ${styles.flexItem2}`}>
// 					<div className={styles.profileInfoBox}>
// 						<div className={styles.block1}>
// 							<h4 className={styles.profileTitle}>Name</h4>
// 							<h5 className={styles.infoLine}>
// 								`${first_name} ${last_name}`
// 							</h5>
// 						</div>
// 						<div className={styles.block2}>
// 							<h4 className={styles.profileTitle}>Address</h4>
// 							<h5 className={styles.infoLine}>{address}</h5>
// 						</div>
// 						<div className={styles.block3}>
// 							<h4 className={styles.profileTitle}>Email</h4>
// 							<h5 className={styles.infoLine}>{email}</h5>
// 						</div>

// 						<button className={styles.editBtn}>Edit</button>
// 					</div>
// 				</div>
// 				<div className={`${styles.flexItems} ${styles.flexItem4}`}>
// 					<h4 className={styles.profileTitle}>Bio</h4>
// 					<p>{user_bio}</p>
// 				</div>
// 				<div className={styles.btnSection}>
// 					<button className={styles.giveBtn}>Give Item</button>
// 					<button className={styles.searchBtn}>Search Item</button>
// 				</div>

// 				<h2 className={styles.title}>My Listing</h2>

// 				<div className={`${styles.flexItems} ${styles.flexItem3}`}>
// 					<Card />
// 					<Card />
// 					<Card />
// 					<Card />
// 					<Card />
// 					<Card />
// 					<Card />
// 					<Card />
// 					<Card />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export const getServerSideProps = withPageAuthRequired();

// export default Profiles;
