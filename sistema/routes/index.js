import routerx from 'express-promise-router';
import categoriaRouter from './categoria';
import articuloRouter from './articulo';
import usuarioRouter from './usuario';
import personaRouter from './persona';
import ingresoRouter from './ingreso';
import ventaRouter from './venta';
const router=routerx();
router.use('/categoria',categoriaRouter);
router.use('/articulo',articuloRouter);
router.use('/usuario',usuarioRouter);
router.use('/persona',personaRouter);
router.use('/ingreso', ingresoRouter);
router.use('/venta', ventaRouter);

export default router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzY5ODk3YzhjZTc1Y2I0ZjMxMTI2OWQiLCJpYXQiOjE2Njc4Njc5NjUsImV4cCI6MTY2Nzk1NDM2NX0.SzR8FGs4J5lCTNZcdv3E2mkYW8WUrmH1cUYEX0qmek4//