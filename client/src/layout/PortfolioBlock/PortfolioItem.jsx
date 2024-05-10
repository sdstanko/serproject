import React, { useState, useEffect } from 'react';
import styles from './PortfolioBlock.module.css';
import projectAPI from '../../services/projectAPI.js';
import { useNavigate } from 'react-router-dom';

const PortfolioItem = ({ id, blockId }) => {
    const navigate = useNavigate();

    const [item, setItem] = useState();

    const getProject = async () => {
        const project = await projectAPI.getById(id);
        setItem(project);
    };

    const deleteProject = async (e) => {
        e.stopPropagation()
        if (window.confirm('Хотите удалить проект?')) {
            await projectAPI.delete(id, { data: { blockId: blockId } });
            setItem(null);
        }
    };

    useEffect(() => {
        getProject();
    }, []);

    return (
        <>
            {item && (
                <>
                    <div className={styles.item} onClick={() => navigate(`/portfolio/${id}`)}>
                        <div className={styles.photo}>
                            <img
                                className={styles.img}
                                src={`http://5.187.2.171/api/${item?.images?.[0]}`}
                                alt=""
                            />
                        </div>
                        <div className={styles.label}>
                            {item?.name}
                            <button
                                onClick={(e) => deleteProject(e)}
                                className={[styles.btn, styles.delete_btn].join(' ')}
                            >
                                Удалить
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default PortfolioItem;
