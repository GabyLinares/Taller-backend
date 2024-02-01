require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const usuariosRoutes = require('./routes/usuariosRoutes');

const app = express();

mongoose.connect(process.env.MONGODB_URI);

app.use(express.json());
app.use(express.static('views'));

app.use('/usuarios', usuariosRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
