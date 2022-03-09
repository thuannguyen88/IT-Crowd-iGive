import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useRef } from "react";
import Navbar from "../../Components/Navbar";
import styles from "../../styles/listings.module.css";
import Searchbar from "../../Components/Searchbar";
import Head from "next/head";
import Card from "../Card";
import { useUser } from "@auth0/nextjs-auth0";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import GiveAwayModal from "../GiveAwayModal";

function ListingsPage({
	users,
	listings,
	showToast,
	isShowAlert,
	setIsShowAlert,
}) {
	const { user, error, isLoading } = useUser();
	const [searchedListings, setSearchedListings] = useState(listings);

	const [giveItemModalShow, setGiveItemModalShow] = React.useState(false);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;

	//currentUser matches the authenticated user with their info in our db
	const currentUser = users.find((currUser) => currUser.email === user.email);

	//this function is passed down to the searchbar component below
	// it fires each time a key is pressed
	const filterListings = (e) => {
		//it is a case insensitive search
		const searchedLetters = e.target.value.toLowerCase();
		// and filters our params using .includes() method
		const filteredListings = listings.filter((listing) => {
			return (
				listing.full_name.toLowerCase().includes(searchedLetters) ||
				listing.category.toLowerCase().includes(searchedLetters) ||
				listing.item_name.toLowerCase().includes(searchedLetters) ||
				listing.address.toLowerCase().includes(searchedLetters) ||
				listing.date_added.toLowerCase().includes(searchedLetters)
			);
		});
		// set the value to the piece of state above - we map through this state below
		setSearchedListings(filteredListings);
	};

	return (
		<>
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
			{/* if the user isn't yet registered - use their default picture */}
			{/* if the user is registered - use their uploaded picture */}
			<Navbar
				avatar={!currentUser ? user.picture : currentUser.avatar}
				users={users}
			/>
			<div className={styles.searchbar}>
				{/* here we take in filterListings func from above */}
				<Searchbar filterListings={filterListings} />
			</div>
			<div className={styles.container}>
				{/* mapping over our filtered listings from search*/}
				{/* it is just listings by default (if nothing is searched)*/}

				{searchedListings.map((listing) => (
					<div key={listing.item_id}>
						<Card
							item_id={listing.id}
							user_id={listing.user_id}
							full_name={listing.full_name}
							email={listing.email}
							address={listing.address}
							is_active={listing.is_active}
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
							users={users}
						/>
					</div>
				))}
			</div>

			<div className={styles.iconContainer}>
				<FontAwesomeIcon
					icon={faCirclePlus}
					size={"5x"}
					className={styles.faIcon}
					onClick={() => setGiveItemModalShow(true)}
				/>

				<GiveAwayModal
					users={users}
					show={giveItemModalShow}
					onHide={() => setGiveItemModalShow(false)}
					showToast={showToast}
					isShowAlert={isShowAlert}
					setIsShowAlert={setIsShowAlert}
				/>
			</div>
		</>
	);
}
export default ListingsPage;
