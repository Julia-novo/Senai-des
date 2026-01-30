const express = require("express");
const router = express.Router();

const musica = (require("../controller/musica.controllers"));

router.get("/musica", musica.listar);
router.get("/musica/:id",musica.buscar );
router.post("/musica", musica.cadastrar);
// router.post("/musica", musica.atualizar);
router.delete("/musica/:id", musica.apagar);

module.exports = router;
