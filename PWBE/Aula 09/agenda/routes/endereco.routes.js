const express = require("express");
const router = express.Router();

const EnderecoController = require("../controllers/endereço.controllers");

router.get("/Endereco", EnderecoController.listarEndereco);
router.get("/Endereco/:id", EnderecoController.buscarEndereco);
router.post("/cliente", EnderecoController.cadastrarEndereco);
router.delete("/cliente/:id", EnderecoController.excluirEndereco);
router.put("/cliente", EnderecoController.atualizarEndereco);


module.exports = router;
