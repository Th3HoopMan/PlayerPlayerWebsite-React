import React, { Component } from 'react';
import styles from  './AboutUs.module.css';
import Joseph from '../Assets/joseph_head.png';
import Arsene from '../Assets/arsene_head.png';
import HostProfile from './HostProfile/HostProfile';

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
                    <HostProfile
                        profilePicSrc={Joseph}
                        bgColor="#D90368"
                        twitterSrc="https://twitter.com/Th3hoopman"
                        instaSrc="https://instagram.com/Th3hoopman"
                        name="Joseph Hooper"
                        title="Co Founder / Co Host"
                    >
                        <p>
                            Joseph is a full-time software developer living in Seattle. He's been gaming since he
                            was a wee boy and as a result has grown passionate about not only video games in general but 
                            the industry and culture surrounding them. When he's not playing games he spends time collecting 
                            sneakers, catching up on his favorite anime, and eating around the city.
                        </p>
                    </HostProfile>
                    <HostProfile
                        profilePicSrc={Arsene}
                        bgColor="#FFCA00"
                        twitterSrc="https://twitter.com/LeekyLeek13"
                        instaSrc="https://instagram.com/ArseneLakpa"
                        name="Arsene Lakpa"
                        title="Co Founder / Co Host"
                    >
                        <p>
                            Arsene works as a full-time software developer out of Atlanta. He enjoys a wide array of
                            games, often picking out the hidden indie gems among the blockbuster titles. His other hobbies 
                            include cooking, watching tv and movies, and boolin around.
                        </p>
                    </HostProfile>
                </div>
            </div>



        </div>
        );
    }
}

export default AboutUs;