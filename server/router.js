import Router from 'express';
import blockController from './controllers/blockController.js';
import projectController from './controllers/projectController.js';
import userController from './controllers/userController.js';
import multerMiddleware from './middlewares/multerMiddleware.js';
import authMiddleware from './middlewares/authMiddleware.js';

const router = new Router();

router.post('/block', authMiddleware, blockController.create);
router.get('/block', blockController.getAll);
router.patch('/block/:id', authMiddleware, blockController.update);
router.delete('/block/:id', authMiddleware, blockController.delete);

router.post('/project', authMiddleware, multerMiddleware, projectController.create);
router.get('/project/:id', projectController.findById);
router.delete('/project/:id', authMiddleware, projectController.delete);

router.post('/user/login', userController.login);
router.get('/user/auth', authMiddleware, userController.check);

export default router;
