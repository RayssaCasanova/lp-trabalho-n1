const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes'); // Importa as rotas do arquivo routes.js

app.use(express.json());
app.use('/api', routes); // Define o prefixo /api para as rotas

app.use(express.static('view')); // Define a pasta view como pública


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});