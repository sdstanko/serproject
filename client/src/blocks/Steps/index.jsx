import React from 'react';
import styles from './Steps.module.css';
import Block from '../../layout/Block';
import StepCard from './StepCard';
import { stepsData } from '../../data';

const Steps = ({ scrollto }) => {
    return (
        <Block label={'Этапы работ'} scrollto={scrollto}>
            <div className={styles.column}>
                {stepsData.map((card, i) => (
                    <StepCard card={card} key={i} />
                ))}
            </div>
        </Block>
    );
};

export default Steps;
