import React from "react";
import Modal from "react-bootstrap/Modal";
import styles from "../../styles/pickUpModal.module.css";

function PickUpModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Header closeButton className={styles.header}>
				<h1>{props.full_name}</h1>
				<p>{props.is_active}</p>

				<div className={styles.avatar}>
					<img src={props.avatar}></img>
				</div>
			</Modal.Header>
			<Modal.Body className={styles.body}>
				<div className={styles.bodyLeft}>
					<div className={styles.imgContainer}>
						<img src={props.item_image} height="100%" width="100%"></img>
					</div>
				</div>
				<div className={styles.bodyRight}>
					<h4>{props.item_name}</h4>
					<p>{props.category}</p>
					<p>{props.date_added}</p>
					<p>{props.item_description}</p>
					<p>{props.quantity}</p>
					<p>{props.use_by_date}</p>
					<p>{props.address}</p>
				</div>
			</Modal.Body>
			<Modal.Footer className={styles.footer}>
				<div className={styles.footerLeft}>
					<p>{props.availability}</p>
					<p>{props.time_slot}</p>
				</div>
				<div className={styles.footerRight}>
					<button className={styles.btn}>Request Item</button>
					<button onClick={props.onHide} className={styles.btn}>
						Close
					</button>
				</div>
			</Modal.Footer>
		</Modal>
	);
}

export default PickUpModal;
