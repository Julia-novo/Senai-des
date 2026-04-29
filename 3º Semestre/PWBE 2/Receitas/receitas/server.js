require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


const produtosRoutes = require("./src/routes/produtos.routes");

app.use("/publicacao", produtosRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});