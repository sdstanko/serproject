import ApiError from '../error/ApiError.js';
import { BlockModel } from '../models/Block.js';

class BlockController {
    constructor() {
        this.model = new BlockModel();
    }

    create = async (req, res, next) => {
        try {
            const { title } = req.body;
            const block = await this.model.create(title);
            return res.json(block);
        } catch (e) {
            return next(e);
        }
    };

    getAll = async (req, res) => {
        const blocks = await this.model.getAll();
        return res.json(blocks);
    };

    findById = async (req, res) => {
        const _id = req.params.id;
        const manufacturer = await this.model.findById(_id);
        return res.json(manufacturer);
    };

    update = async (req, res) => {
        const _id = req.params.id;
        const { title } = req.body;
        const block = await this.model.update(_id, title);
        return res.json(block);
    };

    delete = async (req, res) => {
        const _id = req.params.id;
        const response = await this.model.delete(_id);
        return res.json(response);
    };
}

export default new BlockController();
