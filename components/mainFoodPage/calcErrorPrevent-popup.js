import { useState } from "react";
import styles from "./calcErrorPrevent-popup.module.css";

export default function CalcErrorPrevent() { 
	return (
		<div className={styles.offWhiteBG}>
			{/* <div onClick={clearCalculator}></div> */}
			<div className={styles.errorPreventPopup}>
				<div>
					<img
						className={styles.calculatoricon}
						alt=""
						src="/calculatorIcon.png"
					/>
					<h1>Are you sure you want to clear your calculator?</h1>
				</div>
				<div>
					If you clear your calculator, it will be empty!
					<b>No</b>
					<b>Yes</b>
				</div>
			</div>
		</div>
	)
}