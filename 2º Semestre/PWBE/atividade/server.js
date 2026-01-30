const express = require('express');
const cors = require('cors');

const filmesRoutes = require("./src/routes/filmes.routes");
const locacoesRoutes = require("./src/routes/locacoes.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use(filmesRoutes);
app.use(locacoesRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});