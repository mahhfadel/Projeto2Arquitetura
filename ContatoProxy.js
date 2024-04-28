//O padrão Proxy foi escolhido para facilitar a adição de contatos no futuro, sem precisar mudar o código atual. O Proxy atua como um intermediário entre o usuário e o objeto principal (no nosso caso, o Gerenciador de Contatos), permitindo que tarefas adicionais sejam feitas antes ou depois de chamar o objeto principal. Isso cria uma camada de controle e abstração sobre as operações, possibilitando a implementação de permissões, cache, registros de atividade, e outras funcionalidades.

 // classe do proxy
class ContatoProxy {
    constructor(realContato) {
      this.realContato = realContato;
    }
  
    get nome() {
      return this.realContato.nome;
    }
  
    get telefone() {
      return this.realContato.telefone;
    }
  
    get email() {
      return this.realContato.email;
    }
  }
  
  module.exports = ContatoProxy;
