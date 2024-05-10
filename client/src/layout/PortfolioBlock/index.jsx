import React from 'react';
import Container from '../Container';
import styles from './PortfolioBlock.module.css';
import PortfolioItem from './PortfolioItem';
import { Link, useNavigate } from 'react-router-dom';

const PortfolioBlock = ({ block, editBlock, deleteBlock }) => {

    return (
        <div className={styles.block}>
            <Container>
                <div className={styles.heading}>
                    <h4 className={styles.title}>{block.title}</h4>
                    <button onClick={() => editBlock(block._id)} className={styles.btn}>
                        Изменить название
                    </button>
                    <button onClick={() => deleteBlock(block._id)} className={styles.btn}>
                        Удалить
                    </button>
                    <Link to={`/portfolio/add/${block._id}`} className={styles.btn}>
                        Добавить проект
                    </Link>
                </div>
                <div className={styles.layout}>
                    {block.projects?.map((id, i) => (
                        <PortfolioItem blockId={block._id} id={id} key={i}/>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default PortfolioBlock;
