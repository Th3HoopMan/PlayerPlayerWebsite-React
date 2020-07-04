import { Component} from 'react';
import styles from  './AboutUs.module.css';
import SectionHeader from '../SectionHeader/SectionHeader';

import Joseph from '../Assets/joseph_head.png';
import Arsene from '../Assets/arsene_head.png';
import twitterLogo from '../Assets/twitter_logo.png';
import instagramLogo from '../Assets/ig_logo.png';

const aboutUsTitle = "Running a show takes a village.";


class AboutUs extends Component  {

    //There may be no need to have state here, should probably propogate state up to main App, could also use a boolean, this state
    // does not need to be maintained
    state = {}

    //TODO:  Handle Click function
    handleClick = () => {

    }

    render() {
        return (
        <div className={styles.container}>
            <div className={styles.aboutUs}>
                <div className={styles.header}>
                    <h4>Meet the Guys Behind Each Episode.</h4>
                </div>
                <div className={styles.profiles}>
                    <div className={styles.profileContainer}>
                        <div className={`${styles.picContainer} ${styles.joePhoto}`}>
                            <img
                                className={styles.pic}
                                src={Joseph}
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



                    <div className={styles.profileContainer}>
                        <div className={`${styles.picContainer} ${styles.arsenePhoto}`}>
                            <img
                                className={styles.pic}
                                src={Arsene}
                            />
                        </div>
                        <div className={styles.personalDetails}>
                            <h4>Arsene Lakpa</h4>
                            <h5>Co Founder / Co Host</h5>
                        </div>
                        <div className={styles.logos}>
                            <a href="https://twitter.com/LeekyLeek13" target="_blank">
                                <img 
                                    className={styles.socialMediaIcon}
                                    src={twitterLogo} 
                                    alt="Twitter Logo"
                                />
                            </a>
                            <a href="https://instagram.com/ArseneLakpa" target="_blank">
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
                            Arsene works as a Full-Time software developer out of Atlanta. He enjoys a wide array of
                            games, often picking out the hidden indie gems among the blockbuster titles. His other hobbies 
                            include cooking, watching tv and movies, and boolin around.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
        );
    }
}

export default AboutUs;