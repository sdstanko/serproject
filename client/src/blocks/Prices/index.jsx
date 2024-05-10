import React from 'react';
import Block from '../../layout/Block';
import PriceCard from './PriceCard';
import styles from './Prices.module.css';
import { priceData } from '../../data';

const Prices = ({ scrollto }) => {
    return (
        <Block
            label={'Наши тарифы'}
            text={
                'Выберите тариф, который подходит вам, свяжитесь с нами и закажите дизайн-проект.'
            }
            scrollto={scrollto}
        >
            <div className={styles.row} id={'#prices'}>
                {priceData.map((card, i) => (
                    <PriceCard key={i} card={card} />
                ))}
            </div>
        </Block>
    );
};

export default Prices;
