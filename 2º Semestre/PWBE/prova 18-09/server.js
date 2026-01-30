const express = require ("express");
const cors = require ("cors");

const clientesRoutes = require("./routers/clientes.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(clientesRoutes);

app.listen(3000, ()=>{
    console.log("Servidor Online na porta 3000");
});