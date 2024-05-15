import React from 'react';
import Button from '../../components/Button';
import styles from './Prices.module.css';

const PriceCard = ({ card }) => {
    return (
        <div className={styles.card}>
            <div className={styles.body}>
                <h5 className={styles.title}>{card.title}</h5>
                <h6 className={styles.price}>{card.price}</h6>
                <ul className={styles.list}>
                    {card.list.map((el, i) => (
                        <li className={styles.line} key={i}>
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
            <Button label={'Заказать проект'} scroll={true} />
        </div>
    );
};

export default PriceCard;
