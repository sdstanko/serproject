import React, { useContext } from 'react';
import styles from './Button.module.css';
import { ContactRefContext } from '../../pages/Main';

const Button = ({ label }) => {
    const contactRef = useContext(ContactRefContext);

    return (
        <a
            onClick={() =>
                contactRef?.current.scrollIntoView({
                    behavior: 'smooth',
                })
            }

            className={styles.button}
        >
            {label}
        </a>
    );
};

export default Button;
