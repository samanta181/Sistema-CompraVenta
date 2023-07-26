import routerx from 'express-promise-router';
import personaController from '../controllers/personaController';
import auth from '../middlewares/auth';
const router=routerx();

router.post('/add',auth.verifyUsuario,personaController.add);
router.get('/query',auth.verifyUsuario,personaController.query);
router.get('/list',auth.verifyUsuario,personaController.list);
router.get('/listClientes',auth.verifyUsuario,personaController.listClientes);
router.get('/listProveedores',auth.verifyUsuario,personaController.listProveedores);
router.put('/update',auth.verifyUsuario,personaController.update);
router.delete('/remove',auth.verifyUsuario,personaController.remove);
router.put('/activate',auth.verifyUsuario,personaController.activate);
router.put('/desactivate',auth.verifyUsuario,personaController.desactivate);


export default router;


