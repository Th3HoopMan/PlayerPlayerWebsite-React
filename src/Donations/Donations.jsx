import React from 'react';
import styles from './Donations.module.css';
import donationButton from '../Assets/BuyACoffee.png';
import coffee from '../Assets/coffee.png';




const header1 = `Enjoy the Content? Buy us a Coffee.`

const details = "Player Player is a passion project that is completely funded from money out of our own pockets. " +
                "If you enjoy the content and want help us keep the mics on, click the button below!"

const Donations = () => {
    return(
    <div  className={styles.donations}>
        <div className={styles.header}>
            <h4>{header1}</h4>
            <img
                className={styles.coffee}
                src={coffee}
                alt="Coffee"
            />
            <h5>{details}</h5>
            <a href="https://ko-fi.com/th3hoopman" target="_blank" rel="noopener noreferrer">
                <img
                    className={styles.donationButton}
                    src={donationButton}
                    alt="Ko-Fi Support Link"
                />
            </a>

        </div>
    </div>

    );
}

export default Donations;