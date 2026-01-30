const express = require("express");
const router = express.Router();

const playlist_musicacontrollers = (require("../controller/playlist_musica.controllers"));

router.get = ("/playlist_musica", playlist_musicacontrollers.listar);
router.get = ("/playlist_musica/:id_playlist_musica", playlist_musicacontrollers.buscar);
router.post = ("/playlist_musica", playlist_musicacontrollers.Cadastrar);
router.delete = ("/playlist_musica/:id_playlist_musica", playlist_musicacontrollers.apagar);

module.exports = router;
