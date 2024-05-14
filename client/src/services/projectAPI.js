import { Base } from './baseAPI';
import axios from 'axios';

class Project extends Base {
    constructor(endpoint) {
        super(endpoint);
    }

    async delete(id, data, token) {
        const config = {
            data: data,
            headers: { Authorization: `Bearer ${token}` },
        };
        const { data: responseData } = await axios.delete(this.url + '/' + id, config);
        return responseData;
    }
}

export default new Project('/project');
