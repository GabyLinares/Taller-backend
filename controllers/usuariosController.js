const Usuario = require('../models/usuarioModel');

exports.registrarUsuario = async (req, res) => {
    try {
      const nuevoUsuario = new Usuario(req.body);
      const usuarioGuardado = await nuevoUsuario.save();
      res.status(201).json(usuarioGuardado);
    } catch (error) {
      res.status(500).json({ error: 'Error al registrar usuario' });
    }
  };

  exports.actualizarUsuario = async (req, res) => {
    try {
      const usuarioActualizado = await Usuario.findByIdAndUpdate(
        req.body.id,
        req.body,
        { new: true }
      );
  
      if (!usuarioActualizado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      res.json(usuarioActualizado);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar usuario' });
    }
  };

  exports.borrarUsuario = async (req, res) => {
    try {
      const usuarioBorrado = await Usuario.findByIdAndDelete(req.body.id);
  
      if (!usuarioBorrado) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      res.json(usuarioBorrado);
    } catch (error) {
      res.status(500).json({ error: 'Error al borrar usuario' });
    }
  };

exports.listarTodosUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de usuarios' });
  }
};

exports.listarUsuarioPorEmail = async (req, res) => {
    try {
      const usuario = await Usuario.findOne({ email: req.body.email });
  
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      res.json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener el usuario por email' });
    }
  };