import axios, { AxiosError } from 'axios';
const baseUrl = 'http://5.187.2.171/api';

export class Base {
    constructor(endpoint) {
        this.endpoint = endpoint;
        this.url = baseUrl + this.endpoint;
    }

    async getAll() {
        let dataResponse;
        try {
            let data = await axios.get(this.url);
            dataResponse = data.data;
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error);
                return [];
            }
        }

        if (dataResponse?.status === 404) {
            return [];
        }

        return dataResponse;
    }

    async getById(id) {
        const { data } = await axios.get(this.url + '/' + id);
        return data;
    }

    async create(data, token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const { data: responseData } = await axios.post(this.url, data, config);
        return responseData;
    }

    async update(id, data, token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const { data: responseData } = await axios.patch(this.url + '/' + id, data, config);
        return responseData;
    }

    async delete(id, token) {
        const config = {
            headers: { Authorization: `Bearer ${token}` },
        };
        const { data: responseData } = await axios.delete(this.url + '/' + id, config);
        return responseData;
    }
}
