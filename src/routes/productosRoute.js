let express = require('express');
let router= express.Router();
let productosController = require('../controllers/productosController');

router.get('/creacion',productosController.creacionProducto);
router.get('/detalle',productosController.detalleProducto);
router.get('/edicion',productosController.edicionProducto);
router.get('/listado',productosController.listadoProducto);

module.exports= router;