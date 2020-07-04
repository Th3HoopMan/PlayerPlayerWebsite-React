import React from 'react';
import styles from './Overview.module.css';

import sega_controller from '../Assets/sega-controller.png';
import graphics_card from '../Assets/graphics_card.png';
import gaming_mouse from '../Assets/gaming_mouse.png';


const overviewTitle1 = "Honestly?";
const overviewTitle2 = "We're Just Vibing Over Here.";
const overviewSubtitle = "probably doesn't exist yet, but our show is pretty good.";

const overview = () => {
    return (
        <div className={styles.overview}>
            <div className={styles.background}></div>
            <div className={styles.header}>
                <h4>{overviewTitle1}</h4>
                <h4>{overviewTitle2}</h4>
                <h5>
                    The Player Player podcast is your weekly forum to 
                    discuss, debate, praise, predict, and laugh about video 
                    games and the culture surrounding them. <span className={styles.highlighted}>Every Thursday of every
                    week</span> your two favorite hosts (and sometimes a special guest) link
                    up to craft casual and candid discussion that is packed up and shot over 
                    the internet for your listening pleasure.
                </h5>
            </div>
            <div className={styles.supportingImages}>
                <img
                    src={sega_controller}
                    alt="Sega Controller"
                />
                <img
                    src={graphics_card}
                    alt="Graphics Card"
                />
                <img
                    src={gaming_mouse}
                    alt="Gaming Mouse"
                />
            </div>
        </div>
    );
}

export default overview;