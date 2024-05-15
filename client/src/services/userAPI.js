import { Base } from './baseAPI';
import axios from 'axios';

class User extends Base {
    constructor(endpoint) {
        super(endpoint);
    }

    async login(user) {
        const { data: responseData } = await axios.post(this.url + '/login', user);
        return responseData;
    }

    async check(token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };

        if (token) {
            const { data: responseData } = await axios.get(this.url + '/auth', config);

            if (responseData.token) {
                localStorage.setItem('token', responseData.token);
                return responseData;
            }
        } else {
            return { message: 'Не авторизован' };
        }
    }
}

export default new User('/user');
