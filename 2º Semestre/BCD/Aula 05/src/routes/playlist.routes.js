const express = require("express");
const router = express.Router();

const playlistcontrollers = (require("../controller/playlist.controllers"));

router.get = ("/playlist", playlistcontrollers.listar);
router.get = ("/playlist/:id_playlist", playlistcontrollers.buscar);
router.post = ("/playlist", playlistcontrollers.cadastrar);
router.delete = ("/playlist/:id_playlist", playlistcontrollers.apagar);

module.exports = router;
