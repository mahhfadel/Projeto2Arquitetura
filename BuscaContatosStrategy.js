/*
O padrão de Strategy foi escolhido para implementar a
funcionalidade de busca de contatos, garantindo que esta
possa variar independentemente dos algoritmos de busca. 
Com o Strategy, é possível encapsular famílias de algoritmos
e torná-las intercambiáveis. Isso significa que diferentes
estratégias de busca podem ser definidas e selecionadas dinamicamente 
durante a execução do programa, sem a necessidade de modificar o código existente.
Isso promove uma maior flexibilidade e extensibilidade ao sistema, 
permitindo a adição de novas estratégias de busca no futuro sem impactar o restante do código.
*/

//classe do strategy
// tambem entra como um dos principios dop solid 
//I - Interface Segregation Principle (Princípio da Segregação de Interface)
class BuscaContatosStrategy {
    buscar(contatos, termo) {}
  }
  
  module.exports = BuscaContatosStrategy;