import { useState } from "react";
import styles from "./styles/amountSelection.module.css"


export default function AmountSelection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedServingSize, setSelectedServingSize] = useState('');

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    const handleOutsideClick = (event) => {
        if (!event.target.classList.contains(styles.modalContent)) {
            handleModalClose();
        }
    };
    const handleServingSizeClick = (size) => {
        setSelectedServingSize(size);
        handleModalClose();
    };

    return (
        <div className={styles.amountBox}>
            Amount
            <div className={styles.amountBoxSelect}>
                <button
                    className={styles.amountBoxSelectBtn}
                    onClick={handleModalOpen}
                >
                    {selectedServingSize || 'Select Serving Size'}
                </button>
            </div>
            {isModalOpen && (
                <div
                    className={styles.modalBackground}
                    onClick={handleOutsideClick}
                >
                    <div className={styles.modalContent}>
                        <button onClick={handleModalClose}>Close Modal</button>
                        <div className={styles.servingSizeBtnsContainer}>
                            {/* add images and stuff within these buttons! */}
                            <button className={styles.servingSizeBtn} onClick={() => handleServingSizeClick('Button 1')}>Button 1</button>
                            <button className={styles.servingSizeBtn} onClick={() => handleServingSizeClick('Button 2')}>Button 2</button>
                            <button className={styles.servingSizeBtn} onClick={() => handleServingSizeClick('Button 3')}>Button 3</button>
                            <button className={styles.servingSizeBtn} onClick={() => handleServingSizeClick('Button 4')}>Button 4</button>
                            <button className={styles.servingSizeBtn} onClick={() => handleServingSizeClick('Button 5')}>Button 5</button>
                            <button className={styles.servingSizeBtn} onClick={() => handleServingSizeClick('Button 6')}>Button 6</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
