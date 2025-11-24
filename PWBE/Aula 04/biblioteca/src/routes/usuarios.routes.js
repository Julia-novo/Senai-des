const express = require("express");
const router = express.Router();

const usuarioscontroller = require("../controllers/usuarios.controller");

//define metodos e rotas da aplicação
router.get("/usuarios", usuarioscontroller.listar);
router.get("/usuarios/:matricula",usuarioscontroller.buscar);
router.post("/usuario", usuarioscontroller.cadastrar);
router.delete("/usuarios/:matricula", usuarioscontroller.apagar);
router.put("/usuario/",usuarioscontroller.atualizar);
router.patch("/usuario/:matricula", usuarioscontroller.alterar);

module.exports = router;
