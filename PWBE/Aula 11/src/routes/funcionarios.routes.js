const express = require("express");

const funcionariosControllers = require("../controllers/funcionarios.controllers");

const funcionariosRoutes = express.Router();

funcionariosRoutes.get('/funcionarios/listar', funcionariosControllers.listarfuncionario);
funcionariosRoutes.get("/funcionarios/:id", funcionariosControllers.buscarfuncionario);
funcionariosRoutes.post("/funcionario", funcionariosControllers.cadastrarfuncionario);
funcionariosRoutes.delete("/funcionario/:id", funcionariosControllers.excluirfuncionario);
funcionariosRoutes.put("/funcionarios", funcionariosControllers.atualizarfuncionario);

module.exports = funcionariosRoutes;