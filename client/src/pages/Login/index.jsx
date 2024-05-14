import React, { useContext } from 'react';
import styles from './Login.module.css';
import userAPI from '../../services/userAPI.js';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const submitFunc = async (e) => {
        e.preventDefault();
        const user = { username: e.target[0].value, password: e.target[1].value };

        const response = await userAPI.login(user);
        if (response.token) {
            localStorage.setItem('token', response.token);
            setIsAuth(true);
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
                    <label className={styles.label} htmlFor="username">
                        Логин
                        <input id="username" name="username" className={styles.input} type="text" required/>
                    </label>
                    <label className={styles.label} htmlFor="password">
                        Пароль
                        <input id="password" name="password" className={styles.input} type="password" required/>
                    </label>

                    <button className={styles.btn} type="submit">
                        Вход
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
