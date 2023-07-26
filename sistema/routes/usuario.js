import routerx from 'express-promise-router';
import usuarioController from '../controllers/usuarioController';
import auth from '../middlewares/auth';
const router=routerx();

router.post('/add',usuarioController.add);
router.get('/query',auth.verifyAdministrador,usuarioController.query);
router.get('/list',auth.verifyAdministrador,usuarioController.list);
router.put('/update',auth.verifyAdministrador,usuarioController.update);
router.delete('/remove',auth.verifyAdministrador,usuarioController.remove);
router.put('/activate',auth.verifyAdministrador,usuarioController.activate);
router.put('/desactivate',auth.verifyAdministrador,usuarioController.desactivate);
router.post('/login',usuarioController.login);

export default router;