import React from 'react';
import styles from  './ContactForm.module.css';

import SectionHeader from '../SectionHeader/SectionHeader';
import walkie from '../Assets/walkie.png';
import twitterLogo from '../Assets/twitter_logo.png';
import instagramLogo from '../Assets/ig_logo.png';
import emailIcon from '../Assets/email.svg';


const contactTitle = "Let's chat."
const contactSubtitle = "Reach out to us and send us your feedback or show contributions!"
const contactForm = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headingText}>
                        <SectionHeader
                            mainText={contactTitle}
                            subtitile={contactSubtitle}
                        />
                    </div>
                    <div className={styles.imgContainer}>                
                        <img className={styles.walkie}
                        src={walkie}
                        />
                    </div>
                </div>

                <div className={styles.siteSocials}>
                <a className={styles.social} href="https://twitter.com/PlayerPlayerPod" target="_blank">
                    <img  className={styles.socialIcon} src={twitterLogo} />
                </a>
                <a href="https://instagram.com/PlayerPlayerPod" target="_blank">
                    <img className={styles.socialIcon} src={instagramLogo} />
                </a>
                <a href="mailto:admin@playerplayerpod.com" target="_blank">
                    <img className={styles.socialIcon} src={emailIcon} />
                </a>
            </div>
            </div>


        </div>
    );
}

export default contactForm;