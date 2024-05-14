import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from 'config';
import ApiError from '../error/ApiError.js';
import { User } from '../schemas/UserSchema.js';

const generateJwt = (_id, username) => {
    return jwt.sign({ _id, username }, config.get('secretKey'), { expiresIn: '24h' });
};

export class UserModel {
    async create(user) {
        const { username, password } = user;

        const candidate = await User.findOne({ username });
        if (candidate) {
            return ApiError.badRequest('User with this username already exists');
        }

        const hashPassword = await bcrypt.hash(password, 7);
        const newUser = new User({ username, password: hashPassword });
        await newUser.save();

        const token = generateJwt(newUser._id, newUser.username);
        return token;
    }

    async login(user) {
        const { username, password } = user;
        const existingUser = await User.findOne({ username: username });

        if (!existingUser) {
            return ApiError.badRequest('User with this username not found');
        }
        let comparePassword = bcrypt.compareSync(password, existingUser.password);
        if (!comparePassword) {
            return ApiError.forbidden('Incorrect password');
        }

        return generateJwt(existingUser._id, existingUser.username);
    }

    async check(user) {
        return generateJwt(user._id, user.username);
    }
}
