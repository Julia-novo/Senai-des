const express  = require("express");
const cors = require("cors");

const musicaRoutes = require("./src/routes/musica.routes");
const playlist_MusicaRoutes = require("./src/routes/playlist_musica.routes");
const playlistRoutes = require("./src/routes/playlist.routes");
const usuariosRoutes = require("./src/routes/usuarios.routes");

const app = express ();
app.use(cors());
app.use(express.json());

app.use(musicaRoutes);
app.use(playlist_MusicaRoutes);
app.use(playlistRoutes);
app.use(usuariosRoutes);

app.listen(3000, () => {
    console.log("servidor online na porta 3000");
});


