const express = require("express");

const tarefasRoutes = express.Router();

const tarefasController = require("../controllers/tarefas.controllers");

tarefasRoutes.get("/tarefas", tarefasController.listartarefas);
tarefasRoutes.get("/tarefas/:id", tarefasController.buscartarefas);
tarefasRoutes.post("/funcionarios", tarefasController.cadastrartarefas);
tarefasRoutes.delete("/funcionarios/:id", tarefasController.excluirtarefas);
tarefasRoutes.put("/funcionarios", tarefasController.atualizartarefas);


module.exports = tarefasRoutes;