import React from 'react';
import styles from './Contact.module.css';
import Block from '../../layout/Block';
import ContactCard from './ContactCard';
import { contactData } from '../../data';

const Contact = ({ scrollto }) => {
    return (
        <Block label={'Связаться с нами'} scrollto={scrollto}>
            <div className={styles.contacts}>
                {contactData.map((el, i) => (
                    <ContactCard link={el.link} icon={el.icon} key={i} />
                ))}
            </div>
            <div className={styles.text}>
                <div className={styles.callus}>Позвоните нам</div>
                <a className={styles.telephone} href="tel:+79268567667">
                    +7-926-856-76-67
                </a>
            </div>
        </Block>
    );
};

export default Contact;
