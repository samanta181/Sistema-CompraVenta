import routerx from 'express-promise-router';
import categoriaController from '../controllers/categoriaController';
import auth from '../middlewares/auth';
const router=routerx();

router.post('/add',auth.verifyAlmacenero,categoriaController.add);

router.get('/query',auth.verifyAlmacenero,categoriaController.query);
router.get('/list',auth.verifyAlmacenero,categoriaController.list);

router.put('/update',auth.verifyAlmacenero,categoriaController.update);

router.delete('/remove',auth.verifyAlmacenero,categoriaController.remove);
router.put('/activate',auth.verifyAlmacenero,categoriaController.activate);
router.put('/desactivate',auth.verifyAlmacenero,categoriaController.desactivate);


export default router;