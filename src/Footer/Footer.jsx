import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <p>
                 Thanks for checking out our page! This footer is just a gentle reminder to 
                 take care of yourself, be nice to others, and keep gaming.
                </p>
            </div>
        </div>
    );
}

export default Footer;