import { Component} from 'react';
import styles from  './HostProfile.module.css';

import twitterLogo from '../Assets/twitter_logo.png';
import instagramLogo from '../Assets/ig_logo.png';

const HostProfile = ({profilePicSrc}) => {
    return (
        <div className={styles.profileContainer}>
        <div className={`${styles.picContainer} ${styles.joePhoto}`}>
            <img
                className={styles.pic}
                src={profilePicSrc}  //profilepic, background color, twitterSrc, instaSrc, name, title, bio
            />
        </div>
        <div className={styles.personalDetails}>
            <h4>Joseph Hooper</h4>
            <h5>Co Founder / Co Host</h5>
        </div>
        <div className={styles.logos}>
            <a href="https://twitter.com/Th3hoopman" target="_blank">
                <img 
                    className={styles.socialMediaIcon}
                    src={twitterLogo} 
                    alt="Twitter Logo"
                />
            </a>
            <a href="https://instagram.com/Th3hoopman" target="_blank">
                <img 
                    className={styles.socialMediaIcon}
                    src={instagramLogo} 
                    alt="Instagram Logo"
                />
            </a>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.personalDetails}>
            <p>
            Joseph is a Full-Time software developer living in Seattle. He's been gaming since he
            was a wee boy and as a result has grown passionate about not only video games in general but 
            the industry and culture surrounding them. When he's not playing games he spends time collecting 
            sneakers, catching up on his favorite anime, and eating around the city.
            </p>
        </div>
    </div> 
    );
}

export default HostProfile;