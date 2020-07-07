import React from 'react';
import styles from  './HostProfile.module.css';

import twitterLogo from '../../Assets/twitter_logo.png';
import instagramLogo from '../../Assets/ig_logo.png';

const HostProfile = ({profilePicSrc, bgColor, twitterSrc, instaSrc, name, title, bio, children}) => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.picContainer} style={{backgroundColor: bgColor}}>
                <img
                    className={styles.pic}
                    src={profilePicSrc} 
                    alt="host cartoon headshot"
                />
            </div>
            <div className={styles.personalDetails}>
                <h4>{name}</h4>
                <h5>{title}</h5>
            </div>
            <div className={styles.logos}>
                <a href={twitterSrc}>
                    <img 
                        className={styles.socialMediaIcon}
                        src={twitterLogo} 
                        alt="Twitter Logo"
                    />
                </a>
                <a href={instaSrc}>
                    <img 
                        className={styles.socialMediaIcon}
                        src={instagramLogo} 
                        alt="Instagram Logo"
                    />
                </a>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.personalDetails}>
                {children}
            </div>
    </div> 
    );
}

export default HostProfile;