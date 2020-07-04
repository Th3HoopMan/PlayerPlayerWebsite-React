import React from 'react';
import styles from './SectionHeader.module.css';

const sectionHeader = ({mainText, subtitile}) => {
    return (
        <div className={styles.sectionHeader}>
            <h1>{mainText}</h1>
            <div className={styles.divider}></div>
            <h5>{subtitile}</h5>
        </div>
    );
}

export default sectionHeader;