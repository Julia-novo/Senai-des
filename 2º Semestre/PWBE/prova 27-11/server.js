const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const alunoRoutes = require('./src/routes/aluno.routes');
const reservasRoutes = require('./src/routes/reservas.routes');
const salaRoutes = require('./src/routes/turma.routes')
app.use(express.json());
app.use(cors());

app.use(alunoRoutes);
app.use(reservasRoutes);
app.use(salaRoutes);

app.listen(port, () => {
    console.log('Servidor online na ' + port);
})