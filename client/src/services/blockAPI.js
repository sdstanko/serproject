import { Base } from './baseAPI';

class Block extends Base {
    constructor(endpoint) {
        super(endpoint);
    }
}

export default new Block('/block');
