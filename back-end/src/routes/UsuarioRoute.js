const express = require('express');
const app = express.Router();

const usuarioController = require('../controllers/UsuarioController')

app.get("/",usuarioController.Cadastrar)

module.exports = app