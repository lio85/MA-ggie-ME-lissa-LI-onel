let express = require('express');
let router= express.Router();
let inicioController = require('../controllers/inicioController');

router.get('/',inicioController.index);

router.get('/carrito',inicioController.carrito);

module.exports= router;