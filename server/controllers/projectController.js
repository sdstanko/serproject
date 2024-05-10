import ApiError from '../error/ApiError.js';
import { ProjectModel } from '../models/Project.js';

class ProjectController {
    constructor() {
        this.model = new ProjectModel();
    }

    create = async (req, res, next) => {
        const images = [];
        req.files.forEach((file) => {
            images.push(file.filename)
        })
        try {
            const { blockId, name, fullname } = req.body;
            const project = await this.model.create(blockId, name, fullname, images);
            return res.json(project);
        } catch (e) {
            return next(e);
        }
    };

    findById = async (req, res, next) => {
        const _id = req.params.id;
        const project = await this.model.findById(_id);
        return res.json(project);
    };

    delete = async (req, res) => {
        const { blockId } = req.body;
        const projectId = req.params.id;
        const response = await this.model.delete(projectId, blockId);
        return res.json(response);
    };
}

export default new ProjectController();
