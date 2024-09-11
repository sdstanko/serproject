import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const storage = multer.diskStorage({
    destination: (_, file, cb) => {
        const path = 'static';
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path);
        }
        cb(null, path);
    },
    filename: (req, file, cb) => {
        const extension = file.originalname.split('.')[file.originalname.split('.').length - 1];
        const fileName = `${uuidv4()}.${extension}`;
        cb(null, fileName);
    },
});

const upload = multer({
    storage,
});

export default upload.array('images', 30);
