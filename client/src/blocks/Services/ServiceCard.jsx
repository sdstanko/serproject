import React from 'react';
import styles from './Services.module.css';

const ServiceCard = ({ img, label, text }) => {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={require(`../../assets/services/${img}`)} alt="" />
            <h4 className={styles.label}>{label}</h4>
            <p className={styles.text}>{text}</p>
        </div>
    );
};

export default ServiceCard;
