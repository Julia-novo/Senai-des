const express = require("express");
const router = express.Router();

const alunoControllers = require("../controllers/aluno.controllers");

router.get("/aluno", alunoControllers.listar);
router.post("/aluno", alunoControllers.cadastrar);
router.delete("/aluno/:id", alunoControllers.excluir);
router.put("/aluno/a",alunoControllers.atualizar);

module.exports = router;
