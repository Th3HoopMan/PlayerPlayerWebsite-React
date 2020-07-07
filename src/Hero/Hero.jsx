import React from 'react';
import styles from './Hero.module.css';
import show_logo from '../Assets/show_logo.png';
import gameboy from '../Assets/gameboy.png';
import spotify_logo from '../Assets/listen_spotify.png';
import itunes_logo from '../Assets/apple_podcasts.png';
import rss_logo from '../Assets/rss_badge.png';

const hero = () => {
    return(
    <div className={styles.background}>
        <div className={styles.hero}>
            <div className={styles.logo}>
                <img 
                    src={show_logo}
                    alt="Player Player Podcast Logo"
                >     
                </img>
            </div>
            <div className={styles.focusPoint}>
                <div className={styles.gameboy}>
                    <img 
                        src={gameboy}
                        alt="Gameboy"
                    />     
                </div>      
                <div className={styles.heroTag}>     
                    <h3>
                        Let's Talk About Video Games.
                    </h3>
                </div>
            </div>

            <div className={styles.showLinks}>
                <a href="https://podcasts.apple.com/us/podcast/player-player-a-video-game-podcast/id1407038144">
                    <img 
                        className={styles.podcastLogo} 
                        src={itunes_logo}
                        alt="Itunes logo"    
                    />
                </a>
                <a href="https://open.spotify.com/show/3oNzUYeq8gfRal3MpklVOH">
                    <img 
                        className={styles.podcastLogo}
                        src={spotify_logo}
                        alt="Spotify logo"
                    />
                </a>
                <a href="https://playerplayer.podbean.com/feed.xml">
                    <img 
                        className={styles.podcastLogo}
                        src={rss_logo}
                        alt="Rss logo"
                    />
                </a>
            </div>
        </div>

    </div>
    );
}

export default hero;