import ApiError from '../error/ApiError.js';
import { MakeModel } from '../models/Make.js';

class ManufacturerController {
    constructor() {
        this.model = new MakeModel();
    }

    create = async (req, res, next) => {
        try {
            const { name, abrv } = req.body;
            const manufacturer = await this.model.create(name, abrv);
            return res.json(manufacturer);
        } catch (e) {
            return next(e);
        }
    };

    getAll = async (req, res) => {
        const manufacturers = await this.model.getAll();
        return res.json(manufacturers);
    };

    findById = async (req, res) => {
        const _id = req.params.id;
        const manufacturer = await this.model.findById(_id);
        return res.json(manufacturer);
    };

    update = async (req, res) => {
        const _id = req.params.id;
        const { name, abrv } = req.body;
        const manufacturer = await this.model.update(_id, name, abrv);
        return res.json(manufacturer);
    };

    delete = async (req, res) => {
        const _id = req.params.id;
        const response = await this.model.delete(_id);
        return res.json(response);
    };
}

export default new ManufacturerController();
