import react, { useContext } from 'react';

import blockAPI from './services/blockAPI';
import userAPI from './services/userAPI';

export class RequestFunctions {
    constructor(data, setData) {
        this.data = data;
        this.setData = setData;
    }

    checkAuth = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            alert('Вы не авторизованы/срок авторизации прошел');
            return;
        }

        const response = await userAPI.check(token);
        if (response.token) {
            return response.token;
        } else {
            alert('Вы не авторизованы/срок авторизации прошел');
            return;
        }
    };

    createBlock = async () => {
        const token = await this.checkAuth();
        if (!token) return;
        const title = prompt('Введите название категории', '');
        if (!title) return;
        const response = await blockAPI.create({ title: title }, token);
        if (response._id) {
            this.setData([...this.data, response]);
        }
    };

    editBlock = async (id) => {
        const token = await this.checkAuth();
        if (!token) return;
        const title = prompt('Введите новое название категории', '');
        if (!title) return;
        const response = await blockAPI.update(id, { title: title }, token);
        if (response._id) {
            const newData = this.data?.map((block) =>
                block._id === response._id ? { ...block, title: title } : block,
            );

            this.setData(newData);
        }
    };

    deleteBlock = async (id) => {
		const token = await this.checkAuth();
        if (!token) return;
        const confirm = window.confirm(
            'Вы уверены что хотите удалить категорию? Все проекты также будут удалены',
        );
        if (!confirm) return;

        const response = await blockAPI.delete(id, token);
        if (response._id) {
            this.setData(this.data.filter((block) => block._id != response._id));
        }
    };
}


