import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import cors from 'cors';
import router from './router.js';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = config.get('serverPort') || 4000;
app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }));

app.use('', router);

const start = async () => {
    try {
        mongoose.connect(config.get('dbUrl'));
        app.listen(PORT, () => console.log('app started on port ' + PORT));
    } catch (e) {}
};

start();
