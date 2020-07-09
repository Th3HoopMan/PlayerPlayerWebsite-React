import React from 'react';
import styles from './ContentPitch.module.css';
import vault from '../Assets/vault_cropped.png';



const header = "Dive into a Treasure Trove of Content."
const details = "Over the past couple of years we've discussed hundreds of topics. From the market potential of chocolate chipless cookies to our thoughts " + 
"the unveiling of the PS5, our discussions know no bounds."

const ContentPitch = () => {
    return(
    <div  className={styles.container}>
        <div className={styles.treasureTrove}>
         <img
                className={styles.vault}
                src={vault}
                alt="Vault"
            />
            <div className={styles.textContent}>
                <h4>{header}</h4>
                <h5>{details}</h5>
            </div>

        </div>    
    </div>

    );
}

export default ContentPitch;