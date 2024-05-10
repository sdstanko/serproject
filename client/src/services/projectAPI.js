import { Base } from './baseAPI';

class Project extends Base {
    constructor(endpoint) {
        super(endpoint);
    }
}

export default new Project('/project');
