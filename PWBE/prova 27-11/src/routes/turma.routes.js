const express = require("express");
const router = express.Router();

const turmaControllers = require("../controllers/turma.controllers");

router.get("/turma", turmaControllers.listar);
router.post("/turma", turmaControllers.cadastrar);
router.delete("/turma/:id", turmaControllers.excluir);
router.put("/turma/:id",turmaControllers.atualizar);

module.exports = router;