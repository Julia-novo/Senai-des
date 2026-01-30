const express = require("express");
const router = express.Router();

const EmailController = require("../controllers/email.controllers");

router.get("/Email", EmailController.listarEmail);
router.get("/Email/:id", EmailController.buscarEmail);
router.post("/cliente", EmailController.cadastrarEmail);
router.delete("/cliente/:id", EmailController.excluirEmail);
router.put("/cliente", EmailController.atualizarEmail);


module.exports = router;