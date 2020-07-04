import React from 'react';
import styles from './Donations.module.css';
import coffee from '../Assets/BuyACoffee.png';




const header1 = `Enjoy the Content? Buy us a Coffee.`

const details = "Player Player is a passion project that is completely funded from money out of our own pockets. " +
                "If you enjoy the content and want help us keep the mics on, click the button below!"

const Donations = () => {
    return(
    <div  className={styles.donations}>
        <div className={styles.header}>
            <h4>{header1}</h4>
            <h5>{details}</h5>
            <a href="https://ko-fi.com/th3hoopman" target="_blank">
                <img
                    className={styles.vault}
                    src={coffee}
                    alt="Ko-Fi Support Link"
                />
            </a>

        </div>
    </div>

    );
}

export default Donations;