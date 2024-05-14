import ApiError from '../error/ApiError.js';
import { ProjectModel } from '../models/Project.js';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import webp from 'webp-converter';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class ProjectController {
    constructor() {
        this.model = new ProjectModel();
    }

    create = async (req, res, next) => {
        const images = [];
        for (let i = 0; i < req.files.length; i++) {
            const file = req.files[i];
            const nameSplit = file.filename.split('.');
            const extension = nameSplit[nameSplit.length - 1];
            if (extension !== 'webp') {
                const result = await imagemin([`static/${file.filename}`], {
                    destination: 'static',
                    plugins: [imageminWebp({ quality: 80 })],
                });
                images.push(result[0].destinationPath.split('/')[1]);
                fs.unlinkSync(result[0].sourcePath);
            } else {
                images.push(file.filename)
            }
        }

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
        console.log(response);
        return res.json(response);
    };
}

export default new ProjectController();
