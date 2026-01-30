const express = require("express");

const projetosControllers = require("../controllers/projetos.contollers");

const projetosRoutes = express.Router();

projetosRoutes.get("/Projeto", projetosControllers.listarprojeto);
projetosRoutes.get("/Projeto/:id", projetosControllers.buscarprojeto);
projetosRoutes.post("/funcionario", projetosControllers.cadastrarprojeto);
projetosRoutes.delete("/funcionarios/:id", projetosControllers.excluirprojeto);
projetosRoutes.put("/funcionarios/atualizar", projetosControllers.atualizarprojeto);


module.exports = projetosRoutes;