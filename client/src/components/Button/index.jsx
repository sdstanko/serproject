import React, { useContext } from 'react';
import styles from './Button.module.css';
import { ContactRefContext } from '../../pages/Main';

const Button = ({ label, scroll }) => {
    const contactRef = useContext(ContactRefContext);

    const smoothScroll = () => {
        if (scroll) {
            contactRef?.current.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <button onClick={() => smoothScroll()} className={styles.button}>
            {label}
        </button>
    );
};

export default Button;
