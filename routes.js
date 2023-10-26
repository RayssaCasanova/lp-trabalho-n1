const express = require('express');
const router = express.Router();

const clienteController = require('./controllers/clienteController');// Importa o controlador de clientes

// Rotas para a entidade "usuario"
router.get('/data', clienteController.getAllClientes);
router.post('/data', clienteController.createCliente);
router.put('/data/:cpf', clienteController.updateCliente);
router.delete('/data/:cpf', clienteController.deleteCliente);

module.exports = router;

