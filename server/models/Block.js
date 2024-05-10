import ApiError from '../error/ApiError.js';
import { Block } from '../schemas/BlockSchema.js';
import { Project } from '../schemas/ProjectSchema.js';

export class BlockModel {
    async create(title) {
        const candidate = await Block.findOne({ title });
        if (candidate) {
            return ApiError.forbidden('Block with this name already exists');
        }

        const block = new Block({
            title,
            projects: [],
        });
        return await block.save();
    }

    async getAll() {
        let blocks;

        try {
            blocks = await Block.find();
        } catch (e) {
            return ApiError.internal('Server error');
        }

        if (blocks.length === 0) {
            return ApiError.notFound('None blocks found');
        }

        return blocks;
    }

    async update(_id, title) {
        let block;

        try {
            block = await Block.findByIdAndUpdate(
                _id,
                {
                    title,
                },
                { returnDocument: 'after' },
            );
        } catch (e) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        if (!block) {
            return ApiError.notFound(`Manufacture with this id doesn't exists`);
        }

        return block;
    }

    async delete(_id) {
        let block;

        try {
            block = await Block.findByIdAndDelete(_id);
        } catch (e) {
            return ApiError.notFound(`block with this id doesn't exists`);
        }

        if (!block) {
            return ApiError.notFound(`block with this id doesn't exists`);
        }

        block.projects.forEach(async (project) => {
            await Project.findByIdAndDelete(project._id);
        });

        return block;
    }
}
