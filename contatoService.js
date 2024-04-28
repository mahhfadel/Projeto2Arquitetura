// Criada para suprir o principio Single Responsibility Principle (Princípio da Responsabilidade Única), dessa forma cada classe executa uma função especifica
class ContatoService {
    constructor(gerenciadorContatos) {
      this.gerenciadorContatos = gerenciadorContatos;
    }
  
    adicionarContato(nome, telefone, email) {
      this.gerenciadorContatos.adicionarContato(nome, telefone, email);
    }
  
    removerContato(contato) {
      this.gerenciadorContatos.removerContato(contato);
    }
  
    buscarContatos(nome, estrategiaBusca) {
      return this.gerenciadorContatos.buscarContatos(nome, estrategiaBusca);
    }
  }

  module.exports = ContatoService;