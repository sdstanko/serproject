import React from 'react';
import styles from './Title.module.css';

const Title = ({ text, color }) => {
    return (
        <h1 className={color === 'white' ? [styles.title, styles.white].join(' ') : styles.title}>
            {text}
        </h1>
    );
};

export default Title;
