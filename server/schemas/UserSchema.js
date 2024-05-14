import { Schema, model, ObjectId } from 'mongoose';

const UserSchema = new Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
});

export const User = model('User', UserSchema);
