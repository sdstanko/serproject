import { Schema, model, ObjectId } from 'mongoose';

const ProjectSchema = new Schema({
    name: { type: String },
    fullname: { type: String },
    images: { type: Array, required: true },
});

export const Project = model('Project', ProjectSchema);
