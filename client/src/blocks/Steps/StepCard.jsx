import React from 'react';
import styles from './Steps.module.css';

const StepCard = ({ card }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imgWrapper}>
                <img
                    className={styles.img}
                    src={require(`../../assets/steps/${card.img}`)}
                    alt=""
                />
            </div>
            <div className={styles.body}>
                <h6 className={styles.title}>{card.title}</h6>
                <p className={styles.text}>{card.text}</p>
                <ul className={styles.list}>
                    {card?.list?.map((el, i) => (
                        <li className={styles.line} key={i}>
                            {el}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StepCard;
