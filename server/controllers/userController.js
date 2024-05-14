import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import bcrypt from 'bcryptjs';
import { UserModel } from '../models/User.js';
import ApiError from '../error/ApiError.js';

class UserController {
    constructor() {
        this.model = new UserModel();
    }

    registration = async (req, res, next) => {
        try {
            const user = req.body;
            if (!user.username || !user.password) {
                return next(ApiError.badRequest('Not all values passed to server'));
            }

            const token = await this.model.create(user);
            return res.json({ token });
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    };

    login = async (req, res, next) => {
        try {
            const user = req.body;

            const token = await this.model.login(user);
            return res.json({ token });
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    };

    check = async (req, res, next) => {
        const user = req.user;
        const token = await this.model.check(user);
        return res.json({ token });
    };
}

export default new UserController();
