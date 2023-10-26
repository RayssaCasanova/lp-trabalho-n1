const Cliente = require('../models/Cliente');
const clienteModel = new Cliente();

const clienteController = {
  async getAllClientes(req, res) { 
    const clientes = await clienteModel.getAllClientes();
    res.json(clientes);
  },

  async createCliente(req, res) {
    const { nome, telefone, email, cpf } = req.body;
    const novoCliente = await clienteModel.createCliente(nome, telefone, email, cpf);
    res.json(novoCliente);
  },

  async updateCliente(req, res) {
    const cpf = req.params.cpf
    const { nome, telefone, email } = req.body;
    const clienteAtualizado = await clienteModel.updateCliente(nome, telefone, email, cpf);
    res.json(clienteAtualizado);
  },

  async deleteCliente(req, res) {
    const cpf = req.params.cpf;
    const clienteExcluido = await clienteModel.deleteCliente(cpf);
    res.json(clienteExcluido);
  }
};

module.exports = clienteController;