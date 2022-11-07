import { createStore } from 'redux';
// create-store ja esta depreciado mas da pra usar ainda
// essa funcao create store ira receber um cara que chama reducer que ira servir 
// entao o cara que a gente passar escuta as acoes 
// state atual e action
// acao -> reducer -> newState(manipula ) = state(atual) -> retorna o novo
// precisa ser dar console.log(action) para saber a que a funcao foi ativada
import rootreducer from './modules/rootreducer';
// entao o reducer ja recebe o valor inicial de botaoClicado como false;no parametros

const Store = createStore(rootreducer);
// criei um store agora estou exportando  ele
export default Store;
// agora vou falar no app qual e o stado da aplicacao

// pede a requisicao primeiro ao saga
// acao -> reducer -> retorna state 
// acao (request)-> saga -> reducer -> att o status/success/fail. 
//  agora quando vamos fazer requisicoes async 
// o midleware e um a parte dependendo da requisicao para o back-end
// ele pega e faz se passar ou se der erro.