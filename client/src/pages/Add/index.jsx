import React from 'react';
import styles from './Add.module.css';
import projectAPI from '../../services/projectAPI.js';
import { useParams, useNavigate } from 'react-router-dom';
import { RequestFunctions } from '../../requestFunctions';

const Add = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const requestFunctions = new RequestFunctions(null, null);

    const submitFunc = async (e) => {
        e.preventDefault();

        const sendForm = new FormData();
        sendForm.append('blockId', id);
        for (let i = 0; i < e.target.elements.length; i++) {
            let current = e.target.elements[i];
            if (current.nodeName === 'INPUT') {
                if (current.type === 'text') {
                    sendForm.append(current.name, current.value);
                }
                if (current.type === 'file') {
                    for (let i = 0; i < current.files.length; i++) {
                        sendForm.append(current.name, current.files[i]);
                    }
                }
            }
        }

        const token = await requestFunctions.checkAuth();
        const response = await projectAPI.create(sendForm, token);
        if (response._id) {
            navigate('/portfolio');
        }
    };
    return (
        <div className={styles.page}>
            <div className={styles.inner}>
                <form
                    encType="multipart/form-data"
                    className={styles.form}
                    method="POST"
                    onSubmit={(e) => submitFunc(e)}
                >
                    <label className={styles.label} htmlFor="name">
                        Короткое название (обязательно):
                        <input id="name" name="name" className={styles.input} type="text" />
                    </label>
                    <label className={styles.label} htmlFor="fullname">
                        Полное название
                        <input id="fullname" name="fullname" className={styles.input} type="text" />
                    </label>
                    <label htmlFor="">
                        <input type="file" accept="image/*" multiple name={`images`} id="" />
                    </label>

                    <button className={styles.btn} type="submit">
                        Загрузить проект
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Add;
