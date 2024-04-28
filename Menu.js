const readline = require('readline');
const BuscaPorNome = require("./BuscaPorNome");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

// Criada para suprir o principio Single Responsibility Principle (Princípio da Responsabilidade Única), dessa forma cada classe executa uma função especifica
class Menu {
    //Criada para suprir o principio Dependency Inversion Principle (Princípio da Inversão de Dependência), que significa que você não precisa instanciar as classes diretamente; basta usar o construtor.

    constructor(contatoService, contatoPrinter, gerenciadorContatos) {
      this.contatoService = contatoService;
      this.contatoPrinter = contatoPrinter;
      this.gerenciadorContatos = gerenciadorContatos;
    }
    
  
    mostrarMenu() {
      console.log('\nEscolha uma opção:');
      console.log('1----------Adicionar Contato');
      console.log('2------------Remover Contato');
      console.log('3------------Listar Contatos');
      console.log('4---Buscar Contatos por Nome');
      console.log('5-----------------------Sair');
  
  
  
      rl.question('Opção: ', opcao => {
        switch (opcao) {
          case '1':
            this.adicionarContato(rl);
            break;
          case '2':
            this.removerContato(rl);
            break;
          case '3':
            this.listarContatos();
            break;
          case '4':
            this.buscarContatosPorNome(rl);
            break;
          case '5':
            rl.close();
            break;
          default:
            console.log('Opção inválida!');
            this.mostrarMenu();
            break;
        }
      });
    }
  
    adicionarContato(rl) {
      rl.question('Nome: ', nome => {
        rl.question('Telefone: ', telefone => {
          rl.question('Email: ', email => {
            this.contatoService.adicionarContato(nome, telefone, email);
            console.log('Contato adicionado com sucesso!');
            this.mostrarMenu();
          });
        });
      });
    }
  
    removerContato(rl) {
      this.listarContatos();
      rl.question('Digite o número do contato a ser removido: ', index => {
        if (index >= 0 && index < this.gerenciadorContatos.contatos.length) {
          const contato = this.gerenciadorContatos.contatos[index];
          this.contatoService.removerContato(contato);
          console.log('Contato removido com sucesso!');
        } else {
          console.log('Índice de contato inválido!');
        }
        this.mostrarMenu();
      });
    }
  
    listarContatos() {
      const contatos = this.gerenciadorContatos.listarContatos();
      console.log('Lista de contatos:');
      this.contatoPrinter.printContatos(contatos);
      this.mostrarMenu();
    }
  
    buscarContatosPorNome(rl) {
        rl.question('Digite o nome do contato: ', nome => {
          const estrategiaBusca = new BuscaPorNome();
          const resultadosBusca =  this.contatoService.buscarContatos(nome, estrategiaBusca);
          console.log(`Resultado da busca '${nome}':`);
          this.contatoPrinter.printContatos(resultadosBusca);
          this.mostrarMenu();
        });
      }
      
    }
    module.exports = Menu;