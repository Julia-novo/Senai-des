const loginController = require('../controllers/login.controller');

const express = require('express');
const validate = require('../middlewares/auth');

const loginRoutes = express.Router();

loginRoutes.post('/login', loginController.Login);
loginRoutes.post('/register', loginController.cadastrarUsuario);
loginRoutes.get('/validate', validate);
loginRoutes.get('/register', loginController.listarUsuarios);
loginRoutes.post('/register', loginController.postAutor);

module.exports = loginRoutes;