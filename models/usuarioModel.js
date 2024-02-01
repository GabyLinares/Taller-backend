const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombres: String,
  apellidos: String,
  direccion: String,
  telefono: String,
  email: { type: String, unique: true, required: true },
  password: String,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
