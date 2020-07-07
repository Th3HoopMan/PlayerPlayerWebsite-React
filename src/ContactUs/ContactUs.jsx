import React from 'react';
import styles from './ContactUs.module.css';
import socialGuy from '../Assets/selfie-boy.png';
import twitterLogo from '../Assets/twitter_logo.png';
import email from '../Assets/email.png';



const header1 = `Join the Conversation.\nBe a Part of the Show.`

const details = "We want this show to be community driven. Have a topic, comment, hot take, piece of feedback, or desire to be on the show?"

const ContactUs = () => {
    return(
    <div  className={styles.container}>
        <div className={styles.contactUs}>
            <div className={styles.textContent}>
                <h4> {header1} </h4>
                <h5> {details} </h5>
                <div className={styles.socialLinks}>
                    <a className={styles.twitter} href="twitter.com/PlayerPlayerPod">
                        Tweet Us.
                        <img 
                                className={styles.twitterIcon}
                                src={twitterLogo} 
                                alt="Twitter Logo"
                            />
                    </a>
                </div>
                <div className={styles.socialLinks}>
                    <a className={styles.email} href="mailto: admin@Playerplayerpod.com">
                        Email Us.
                        <img 
                            className={styles.emailIcon}
                            src={email} 
                            alt="Email Icon"
                        />
                    </a>
                </div>
            </div>
            <img
                className={styles.supportingImage}
                src={socialGuy}
                alt="Guy on social media"
            />
            
        </div>
    </div>

    );
}

export default ContactUs;