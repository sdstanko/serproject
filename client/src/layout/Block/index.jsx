import React from 'react';
import Container from '../Container';
import styles from './Block.module.css';
import Line from './Line'

const Block = ({ label, text, children, scrollto }) => {
    return (
        <div ref={scrollto} className={styles.block}>
            <Container>
                <Line />
                <h2 className={styles.title}>{label}</h2>
                {text && <p className={styles.text}>{text}</p>}
                {children}
            </Container>
        </div>
    );
};

export default Block;
