//importaçoes necessarias
const ContatoProxy = require('./ContatoProxy');
const Contato =  require("./Contato");

// classe GerenciadorContatos
class GerenciadorContatos {
  constructor() {
    this.contatos = [];
  }
// funçao de adicionnar
  adicionarContato(nome, telefone, email) {
    const novoContato = new Contato(nome, telefone, email);
    // utilizando o proxy (para mais detalhes veja o arquivo ContatoProxy.js)
    const proxy = new ContatoProxy(novoContato);
    this.contatos.push(proxy);
  }
// funçao de remover
  removerContato(contato) {
    const index = this.contatos.indexOf(contato);
    if (index !== -1) {
      this.contatos.splice(index, 1);
    }
  }
// funçao de listar os contatos 
  listarContatos() {
    return this.contatos;
  }
// funçao de buscar o contato 
  buscarContatos(termo, estrategia) {
    return estrategia.buscar(this.contatos, termo);
  }
}

module.exports = GerenciadorContatos;