 const express = require("express");
 const router = express.Router();
 
 const usuarioscontrollers = (require("../controllers/usuarios.controller"));
 
 router.get = ("/usuarios", usuarioscontrollers.listar);
 router.get = ("/usuarios/:id_usuario", usuarioscontrollers.buscar);
 router.post = ("/usuarios", usuarioscontrollers.Cadastrar);
 router.delete = ("/usuarios/:usuario", usuarioscontrollers.apagar);
 
 module.exports = router;
 