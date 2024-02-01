const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/registrar', usuariosController.registrarUsuario);
router.put('/actualizar', usuariosController.actualizarUsuario);
router.delete('/borrar', usuariosController.borrarUsuario);
router.get('/listartodos', usuariosController.listarTodosUsuarios);
router.get('/listarporemail', usuariosController.listarUsuarioPorEmail);

module.exports = router;
