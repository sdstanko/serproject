import jwt from 'jsonwebtoken';
import config from 'config';

export default function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.json({ message: 'Не авторизован' });
        }
        const decoded = jwt.verify(token, config.get('secretKey'));
        req.user = decoded;
        next();
    } catch (e) {
        res.json({ message: 'Не авторизован' });
    }
}
