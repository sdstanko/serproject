import React from 'react';
import styles from './Block.module.css';

const Line = () => {
    return (
        <div className={styles.linewrapper}>
            <div className={styles.opacity_left}></div>
            <div className={styles.line}></div>
            <div className={styles.opacity_right}></div>
        </div>
    );
};

export default Line;
