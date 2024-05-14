import React, { useState, useEffect } from 'react';
import styles from './PortfolioBlock.module.css';
import projectAPI from '../../services/projectAPI.js';
import userAPI from '../../services/userAPI';
import { useNavigate } from 'react-router-dom';
import { RequestFunctions } from '../../requestFunctions';

const PortfolioItem = ({ id, blockId, isAuth }) => {
    const navigate = useNavigate();
    const requestFunctions = new RequestFunctions(null, null);

    const [item, setItem] = useState();

    const getProject = async () => {
        const project = await projectAPI.getById(id);
        setItem(project);
    };

    const deleteProject = async (e) => {
        e.stopPropagation();
        // const token = localStorage.getItem('token');
        // if (!token) {
        //     alert('Вы не авторизованы/срок авторизации прошел');
        //     return;
        // }
        // await userAPI.check(token);
        const token = await requestFunctions.checkAuth();

        if (window.confirm('Хотите удалить проект?')) {
            const data = { blockId: blockId };
            await projectAPI.delete(id, data, token);
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
                            {isAuth && (
                                <button
                                    onClick={(e) => deleteProject(e)}
                                    className={[styles.btn, styles.delete_btn].join(' ')}
                                >
                                    Удалить
                                </button>
                            )}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default PortfolioItem;
