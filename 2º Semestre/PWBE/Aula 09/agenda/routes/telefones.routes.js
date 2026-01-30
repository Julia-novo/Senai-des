const express = require("express");
const router = express.Router();

const telefonesController = require("../controllers/telefones.controllers");

router.get("/telefones", telefonesController.listartelefone);
router.get("/telefones/:id", telefonesController.buscartelefone);
router.post("/cliente", telefonesController.cadastrartelefone);
router.delete("/cliente/:id", telefonesController.excluirtelefone);
router.put("/cliente", telefonesController.atualizartelefone);

module.exports = router;
