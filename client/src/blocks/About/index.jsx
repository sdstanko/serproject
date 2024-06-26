import React from 'react';
import styles from './About.module.css';
import Block from '../../layout/Block';

const About = ({ scrollto }) => {
    return (
        <Block label={'О нашей студии'} scrollto={scrollto}>
            <div className={styles.wrapper}>
                <div className={styles.img}></div>
            </div>
            <p className={styles.text}>
                Рассвет 72 — это команда дизайнеров интерьера и архитекторов, мы работают вместе уже
                более 15 лет. Мы знаем все нюансы дизайна и строительства, создавая функциональные
                пространства для наших клиентов. В нашей команде есть ведущие дизайнеры и
                архитекторы, а также менеджеры по подбору мебели и аксессуаров, которые будут
                закреплены за проектом до его завершения. Коллектив под руководством главного
                дизайнера/архитектора создает лучшие проекты, которые в последствии могут быть
                опубликованы в лучшие архитектурные и дизайн журналы по желанию заказчика. Наша
                команда обеспечит комфортную атмосферу для сопровождения проекта, соблюдая сроки и
                лучшее качество на рынке, реализовывая проекты во всех уголках нашей страны и
                зарубежья.
            </p>
        </Block>
    );
};

export default About;
