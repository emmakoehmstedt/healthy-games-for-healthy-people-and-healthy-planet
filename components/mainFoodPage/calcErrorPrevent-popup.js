import { useState, useEffect } from "react";
import { useCalculatorUpdate } from "../../context/calculatorContext";
import styles from "./styles/calcErrorPrevent-popup.module.css";

export default function CalcErrorPrevent() { 
	const calculatorFunctions = useCalculatorUpdate();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleModalOpen = () => {
		setIsModalOpen(true);
	};
	const handleModalClose = () => {
		setIsModalOpen(false);
	};


	return (
		<div>
			<button
				className={styles.clearCalcButton}
				onClick={handleModalOpen}
			>
				clear calculation
			</button>
			{isModalOpen && (
				<div className={styles.offWhiteBG}>
					<div className={styles.errorPreventPopup}>
						<div className={styles.errorPreventPopup_div1}>
							<img
								className={styles.calculatoricon}
								alt=""
								src="/calculatorIcon.png"
							/>
							<h1>Are you sure you want to clear your calculator?</h1>
						</div>
						<div className={styles.errorPreventPopup_div2}>
							If you clear your calculator, it will be empty!
							<div className={styles.errorPreventPopup_div2_1}>
								<button className={styles.errorPreventPopup_b} onClick={handleModalClose}>
									<b>No</b>
								</button>
								<button 
									className={styles.errorPreventPopup_b} 
									onClick={() => {
										handleModalClose();
										calculatorFunctions.onClearCalculator();
									}}
								>
									<b>Yes</b>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}