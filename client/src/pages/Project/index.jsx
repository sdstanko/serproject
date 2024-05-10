import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Project.module.css';
import Header from '../../components/Header';
import Container from '../../layout/Container';
import { MenuContext } from '../../App.js';
import projectAPI from '../../services/projectAPI.js';

const Project = () => {
    const { openMenu, setOpenMenu } = useContext(MenuContext);
    const { id } = useParams();
    const [project, setProject] = useState();
    const [popup, setPopup] = useState(false);
    const [popupImg, setPopupImg] = useState(0);

    const getData = async () => {
        const fetchedData = await projectAPI.getById(id);
        setProject(fetchedData);
    };

    useEffect(() => {
        getData();
    }, []);

    const openPopup = (i) => {
        setPopup(true);
        setPopupImg(i);
    };

    const closePopup = () => {
        setPopup(false);
        setPopupImg(0);
    };

    const swipeLeft = () => {
        if (popupImg > 0) {
            setPopupImg(popupImg - 1);
        } else {
            return;
        }
    };

    const swipeRight = () => {
        if (popupImg < project.images.length - 1) {
            setPopupImg(popupImg + 1);
        } else {
            return;
        }
    };

    const closeByClickOnBlur = (e) => {
        const el = e.target
        const content = el.closest('#popup_content');
        if (content == null) {
            closePopup()
        }
    };

    return (
        <div className={styles.project}>
            <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
            <Container>
                {project && (
                    <div className={styles.inner}>
                        <p className={styles.fullname}>{project.fullname}</p>
                        <div className={styles.layout}>
                            {project.images?.map((img, i) => (
                                <div
                                    className={styles.picture}
                                    key={i}
                                    onClick={() => openPopup(i)}
                                >
                                    <img
                                        src={`http://5.187.2.171/api/${img}`}
                                        className={styles.image}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <div
                    id="popup"
                    className={popup ? [styles.popup, styles.popup_open].join(' ') : styles.popup}
                >
                    <div className={styles.popup_body} onClick={(e) => closeByClickOnBlur(e)}>
                        <div id="popup_content" className={styles.popup_content}>
                            <a className={styles.popup_close} onClick={() => closePopup()}>
                                X
                            </a>
                            <div
                                className={[styles.popup_arrow, styles.popup_arrow_left].join(' ')}
                                onClick={() => swipeLeft()}
                            >
                                {'<'}
                            </div>
                            <div
                                className={[styles.popup_arrow, styles.popup_arrow_right].join(' ')}
                                onClick={() => swipeRight()}
                            >
                                {'>'}
                            </div>
                            <div className={styles.popup_picture}>
                                <img
                                    className={styles.popup_img}
                                    src={`http://5.187.2.171/api/${project?.images[popupImg]}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Project;
