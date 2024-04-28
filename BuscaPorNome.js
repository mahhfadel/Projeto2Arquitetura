// importaçoes necessarias
const BuscaContatosStrategy = require('./BuscaContatosStrategy');

// classe BuscaPorNome implementado o Strategy
class BuscaPorNome extends BuscaContatosStrategy {
  buscar(contatos, termo) {
    return contatos.filter(contato => contato.nome.includes(termo));
  }
}

module.exports = BuscaPorNome;