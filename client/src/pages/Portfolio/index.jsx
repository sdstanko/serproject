import React, { useContext } from 'react';
import styles from './Portfolio.module.css';
import Header from '../../components/Header/index';
import { MenuContext } from '../../App';
import PortfolioBlock from '../../layout/PortfolioBlock';
import Button from '../../components/Button';
import blockAPI from '../../services/blockAPI';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Portfolio = () => {
    const [data, setData] = useState();

    const getData = async () => {
        const fetchedData = await blockAPI.getAll();
        setData(fetchedData);
    };

    useEffect(() => {
        getData();
    }, []);

    const createBlock = async () => {
        const title = prompt('Введите название категории', '');
        if (!title) return;
        const response = await blockAPI.create({ title: title });
        if (response._id) {
            setData([...data, response]);
        }
    };

    const editBlock = async (id) => {
        const title = prompt('Введите новое название категории', '');
        if (!title) return;
        const response = await blockAPI.update(id, { title: title });
        if (response._id) {
            const newData = data?.map((block) =>
                block._id === response._id ? { ...block, title: title } : block,
            );

            setData(newData);
        }
    };

    const deleteBlock = async (id) => {
        const confirm = window.confirm(
            'Вы уверены что хотите удалить категорию? Все проекты также будут удалены',
        );
        if (!confirm) return;

        const response = await blockAPI.delete(id);
        if (response._id) {
            setData(data.filter((block) => block._id != response._id));
        }
    };

    const { openMenu, setOpenMenu } = useContext(MenuContext);
    return (
        <div className={styles.portfolio}>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <button onClick={() => createBlock()} className={styles.add_btn}>
                Добавить категорию
            </button>
            {data &&
                data?.map((block, i) => (
                    <PortfolioBlock
                        block={block}
                        editBlock={editBlock}
                        deleteBlock={deleteBlock}
                        key={i}
                    />
                ))}
        </div>
    );
};

export default Portfolio;
