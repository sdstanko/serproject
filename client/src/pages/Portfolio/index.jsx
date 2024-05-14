import React, { useContext, useState, useEffect } from 'react';
import styles from './Portfolio.module.css';
import Header from '../../components/Header/index';
import { MenuContext, AuthContext } from '../../App';
import PortfolioBlock from '../../layout/PortfolioBlock';
import blockAPI from '../../services/blockAPI';
import { RequestFunctions } from '../../requestFunctions.js';

const Portfolio = () => {
    const { isAuth } = useContext(AuthContext);
    const [data, setData] = useState();
    const requestFunctions = new RequestFunctions(data, setData);

    const getData = async () => {
        const fetchedData = await blockAPI.getAll();
        setData(fetchedData);
    };

    useEffect(() => {
        getData();
    }, []);

    const { openMenu, setOpenMenu } = useContext(MenuContext);
    return (
        <div className={styles.portfolio}>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            {isAuth && (
                <button onClick={() => requestFunctions.createBlock()} className={styles.add_btn}>
                    Добавить категорию
                </button>
            )}
            {data &&
                data?.map((block, i) => (
                    <PortfolioBlock
                        block={block}
                        editBlock={requestFunctions.editBlock}
                        deleteBlock={requestFunctions.deleteBlock}
                        key={i}
                    />
                ))}
        </div>
    );
};

export default Portfolio;
