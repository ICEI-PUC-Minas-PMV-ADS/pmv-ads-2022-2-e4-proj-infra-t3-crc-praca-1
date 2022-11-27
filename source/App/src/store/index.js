import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
//  uma funcao que ira intermediar todo app

// create-store ja esta depreciado mas da pra usar ainda
// essa funcao create store ira receber um cara que chama reducer que ira servir 
// entao o cara que a gente passar escuta as acoes 
// state atual e action
// acao -> reducer -> newState(manipula ) = state(atual) -> retorna o novo
// precisa ser dar console.log(action) para saber a que a funcao foi ativada
// agora iremos configurar o redux-persist
// importando o persist configurado para salvar os itens do local storage
import persistedReducers from '../store/modules/reduxPersist';

import rootreducer from './modules/rootreducer';
//importando os sagas Midlewares que sao funcoes que pasam pelo app
import rootSaga from './modules/rootsaga';
// entao o reducer ja recebe o valor inicial de botaoClicado como false;no parametros
// criando o saga middleware

const sagaMiddleware = createSagaMiddleware();
// essa vai passar por todo app
const Store = createStore(persistedReducers(rootreducer), applyMiddleware(sagaMiddleware));

// agora estamos botando para rodar o middleware
// criei um store agora estou exportando  ele
sagaMiddleware.run(rootSaga);
// importando o persistor depois de ter usado a definicao do persist quem eu quero que ele salve
// agora eu usei a funcao para persistedReducers

export const persistor = persistStore(Store);
// passei o store com os persist e midlewares
export default Store;
// Provider esta sendo usado
// agora vou falar no app qual e o stado da aplicacao

// pede a requisicao primeiro ao saga
// acao -> reducer -> retorna state 
// acao (request)-> saga -> reducer -> att o status/success/fail. 
//  agora quando vamos fazer requisicoes async 
// o midleware e um a parte dependendo da requisicao para o back-end
// ele pega e faz se passar ou se der erro.