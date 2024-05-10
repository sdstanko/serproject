import ApiError from '../error/ApiError.js';
import { Project } from '../schemas/ProjectSchema.js';
import { Block } from '../schemas/BlockSchema.js';

export class ProjectModel {
    async create(blockId, name, fullname, images) {
        const project = new Project({
            name: name,
            fullname: fullname,
            images: images,
        });

        const newProject = await project.save();

        await Block.findByIdAndUpdate(blockId, { $push: { projects: newProject._id } });
        return newProject;
    }

    async findById(_id) {
        let project;
        try {
            project = await Project.findById(_id);
        } catch (e) {}

        if (!project) {
            return ApiError.notFound(`project with this id doesn't exists`);
        }
        return project;
    }

    async delete(projectId, blockId) {
        let project;

        try {
            project = await Project.findByIdAndDelete(projectId);
        } catch (e) {
            return ApiError.notFound(`project with this id doesn't exists`);
        }

        if (!project) {
            return ApiError.notFound(`project with this id doesn't exists`);
        }

        await Block.findByIdAndUpdate(blockId, { $pull: { projects: projectId } });

        return project;
    }
}
