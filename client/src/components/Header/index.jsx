import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ openMenu, setOpenMenu, refsArr }) => {
    const scrollFunc = (ref) => {
        setOpenMenu(false);

        if (!ref?.current) return;
        ref?.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <header className={styles.header}>
            <nav className={openMenu ? [styles.nav, styles.nav_active].join(' ') : styles.nav}>
                <ul className={[styles.list, styles.list_left].join(' ')}>
                    <li onClick={() => scrollFunc(refsArr?.[1])} className={styles.item}>
                        <Link to="/" className={styles.link}>
                            Услуги
                        </Link>
                    </li>
                    <li onClick={() => scrollFunc(refsArr?.[3])} className={styles.item}>
                        <Link to="/" className={styles.link}>
                            О нас
                        </Link>
                    </li>
                    <li onClick={() => scrollFunc()} className={styles.item}>
                        <Link to="/portfolio" className={styles.link}>
                            Портфолио
                        </Link>
                    </li>
                </ul>
                <ul className={[styles.list, styles.list_center].join(' ')}>
                    {
                        <li className={[styles.item, styles.logo].join(' ')}>
                            <Link to="/" className={styles.link}>
                                Рассвет 72
                            </Link>
                        </li>
                    }
                </ul>
                <ul className={[styles.list, styles.list_right].join(' ')}>
                    <li onClick={() => scrollFunc(refsArr?.[2])} className={styles.item}>
                        <Link to="/" className={styles.link}>
                            Цены
                        </Link>
                    </li>
                    <li onClick={() => scrollFunc(refsArr?.[4])} className={styles.item}>
                        <Link to="/" className={styles.link}>
                            Как мы работаем
                        </Link>
                    </li>
                    <li onClick={() => scrollFunc(refsArr?.[5])} className={styles.item}>
                        <Link to="/" className={styles.link}>
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
            <div
                className={
                    openMenu ? [styles.burger, styles.burger_active].join(' ') : styles.burger
                }
                onClick={() => setOpenMenu(!openMenu)}
            >
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
        </header>
    );
};

export default Header;
