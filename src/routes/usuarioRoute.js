let express = require('express');
let router= express.Router();
let usuarioController = require('../controllers/usuarioController');

router.get('/login', usuarioController.login);
router.get('/perfil', usuarioController.perfil);
router.get('/registro', usuarioController.registro);

module.exports= router;