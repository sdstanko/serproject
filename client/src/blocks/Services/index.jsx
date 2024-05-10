import React, { useContext } from 'react';
import styles from './Services.module.css';
import Block from '../../layout/Block';
import ServiceCard from './ServiceCard';
import { serviceData } from '../../data';

const Services = ({ scrollto }) => {
    return (
        <Block
            label={'Наши услуги'}
            text={
                'Мы создаем функциональные дизайнерские проекты от маленьких до больших пространств'
            }
            scrollto={scrollto}
        >
            <div className={styles.row}>
                {serviceData.map((el, i) => (
                    <ServiceCard key={i} img={el.img} label={el.label} text={el.text} />
                ))}
            </div>
        </Block>
    );
};

export default Services;
