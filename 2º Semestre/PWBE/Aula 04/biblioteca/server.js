const express = require("express");//importa um modulo
const cors = require("cors");

const usuariosroutes = require("./src/routes/usuarios.routes");

const app = express();//carrega configuracao inicial do express

app.use(cors());//aplica CORS ao express
app.use(express.json());//habilita comunicação com o json 

app.use(usuariosroutes);//inclui as rotas ao express

app.listen(3000, () => {
    console.log("Servidor Online na porta 3000");
});