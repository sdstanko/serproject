import axios, { AxiosError } from 'axios';
const baseUrl = 'http://localhost:4000/api/';

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

    async create(data) {
        const { data: responseData } = await axios.post(this.url, data);
        return responseData;
    }

    async update(id, data) {
        const { data: responseData } = await axios.patch(this.url + '/' + id, data);
        return responseData;
    }

    async delete(id, data) {
        const { data: responseData } = await axios.delete(this.url + '/' + id, data);
        return responseData;
    }
}
