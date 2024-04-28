// Criada para suprir o principio Single Responsibility Principle (Princípio da Responsabilidade Única), dessa forma cada classe executa uma função especifica
class ContatoPrinter {
    printContatos(contatos) {
      contatos.forEach((contato, index) => {
        console.log(`${index + 1}. Nome: ${contato.nome} - Telefone: ${contato.telefone} - Email: ${contato.email}`);
      });
    }
  }
  module.exports = ContatoPrinter;