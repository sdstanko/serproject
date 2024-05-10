import React from 'react';
import styles from './Contact.module.css';

const ContactCard = ({ icon, link }) => {
    return (
        <a href={link} className={styles.card}>
            <img className={styles.icon} src={require(`../../assets/contacts/${icon}`)} alt="" />
        </a>
    );
};

export default ContactCard;
