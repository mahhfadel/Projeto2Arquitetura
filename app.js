const ContatoService = require('./contatoService');
const Menu  = require("./Menu")
const ContatoPrinter = require("./contatoPrinter");
const GerenciadorContatos = require('./GerenciadorContatos');



// Inicialização das classes nececssarias e da CLI
const gerenciador = new GerenciadorContatos();
const contatoService = new ContatoService(gerenciador);
const contatoPrinter = new ContatoPrinter();
const mainMenu = new Menu(contatoService,contatoPrinter,gerenciador)

mainMenu.mostrarMenu();

