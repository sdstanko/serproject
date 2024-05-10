import Router from 'express';
import blockController from './controllers/blockController.js';
import projectController from './controllers/projectController.js';
import multerMiddleware from './middlewares/multerMiddleware.js'

const router = new Router();

router.post('/block', blockController.create);
router.get('/block', blockController.getAll);
router.patch('/block/:id', blockController.update);
router.delete('/block/:id', blockController.delete);

router.post('/project', multerMiddleware, projectController.create);
router.get('/project/:id', projectController.findById);
router.delete('/project/:id', projectController.delete);

export default router;
