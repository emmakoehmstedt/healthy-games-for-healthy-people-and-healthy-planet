import { useState, useEffect } from "react";
import styles from "./styles/calcErrorPrevent-popup.module.css";

export default function CalcErrorPrevent({onClose}) { 
	const handleNoClick = () => {
		// Close the modal without clearing the calculator
		onClose();
	  };
	
	const handleYesClick = () => {
		// Perform action to clear the calculator
		// Close the modal after clearing the calculator
		{/* <div onClick={clearCalculator}></div> */}
		onClose();
	};
	useEffect(() => {
		const handleClickOutside = (event) => {
		  // Check if the clicked element is outside of the modal
		  if (
			event.target.closest('.errorPreventPopup') === null &&
			event.target.closest('.offWhiteBG') === null
		  ) {
			// Close the modal
			onClose();
		  }
		};
	
		// Add event listener to handle clicks outside of the modal
		document.body.addEventListener('click', handleClickOutside);
	
		// Cleanup by removing event listener when the component unmounts
		return () => {
		  document.body.removeEventListener('click', handleClickOutside);
		};
	  }, [onClose]);

	return (
		<div className={styles.offWhiteBG}>
			<div className={styles.errorPreventPopup}>
				<div className={styles.errorPreventPopup_div1}>
					<img
						className={styles.calculatoricon}
						alt=""
						src="/calculatorIcon.png"
					/>
					<h3>Are you sure you want to clear your calculator?</h3>
				</div>
				<div className={styles.errorPreventPopup_div2}>
					If you clear your calculator, it will be empty!
					<div className={styles.errorPreventPopup_div2_1}>
						<b className={styles.errorPreventPopup_b}>No</b>
						<b className={styles.errorPreventPopup_b}>Yes</b>
					</div>
				</div>
			</div>
		</div>
	)
}