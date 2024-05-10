import { Schema, model, ObjectId } from 'mongoose';

const BlockSchema = new Schema({
    title: { type: String, unique: true, required: true },
    projects: [{ type: ObjectId, ref: 'Model' }],
});

export const Block = model('Block', BlockSchema);
