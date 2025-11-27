const express = require("express");
const router = express.Router();

const reservasControllers = require("../controllers/reservas.controllers");

router.get("/reservas", reservasControllers.listar);
router.post("/reservas", reservasControllers.cadastrar);
router.delete("/reservas/:id", reservasControllers.excluir);
router.put("/reservas/:id",reservasControllers.atualizar);

module.exports = router;