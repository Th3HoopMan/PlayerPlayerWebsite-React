import React from 'react';
import styles from './ContactUs.module.css';
import socialGuy from '../Assets/selfie-boy.png';
import vault from '../Assets/vault_cropped.png';
import twitterLogo from '../Assets/twitter_logo.png';
import email from '../Assets/email.png';



const header1 = `Join the Conversation.\nBe a Part of the Show.`
const header3 = "Dive into a Treasure Trove of Content."

const details = "We want this show to be community driven. Have a topic, comment, hot take, piece of feedback, or desire to be on the show?"
const details2 = "Over the past couple of years we've discussed hundreds of topics. From the market potential of chocolate chipless cookies to reacting to " + 
"the unveiling of the PS5, our discussions know no bounds."
const callToAction = "Listen long enough and you may find more value in the show than you expect. ¯\\_(ツ)_/¯"

const ContactUs = () => {
    return(
    <div  className={styles.container}>
        <div className={styles.contactUs}>
            <div className={styles.textContent}>
                <h4> {header1} </h4>
                <h5> {details} </h5>
                <div className={styles.socialLinks}>
                    <a className={styles.twitter} href="twitter.com/PlayerPlayerPod" target="_blank">
                        Tweet Us.
                        <img 
                                className={styles.twitterIcon}
                                src={twitterLogo} 
                                alt="Twitter Logo"
                            />
                    </a>
                </div>
                <div className={styles.socialLinks}>
                    <a className={styles.email} href="mailto: admin@Playerplayerpod.com" target="_blank">
                        Email Us.
                        <img 
                                className={styles.emailIcon}
                                src={email} 
                                alt="Twitter Logo"
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