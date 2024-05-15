import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../layout/Container';
import Button from '../Button';
import styles from './Intro.module.css';

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.image}>
                <div className={styles.inner}>
                    <Container>
                        <div className={styles.body}>
                            <h1 className={styles.title}>Студия архитектуры и дизайна</h1>
                            <p className={styles.text}>
                                Архитектура и дизайн квартир, частных и общественных пространств в
                                современном стиле
                            </p>
                            <div className={styles.buttons}>
                                <Button label={'Заказать проект'} scroll={true} />
                                <Link to="portfolio">
                                    <Button label={'Посмотреть портфолио'} scroll={false} />
                                </Link>
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Intro;
