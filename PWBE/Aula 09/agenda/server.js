const express = require('express');
const cors = require('cors');

const contatosRoutes = require("./routes/contatos.routes.js")
const enderecoRoutes = require("./routes/endereco.routes.js");
const emailRoutes = require("./routes/email.routes.js");
const telefonesRoutes = require("./routes/telefones.routes.js")

const app = express();

app.use(express.json());
app.use(cors());

app.use(contatosRoutes);
app.use(enderecoRoutes);
app.use(emailRoutes);
app.use(telefonesRoutes);

app.listen(3000, () => {
    console.log("Servidor Online");
});