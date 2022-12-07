// importando os types para serem utilizados da seguinte forma se eu mudar
// e dinamico pq se trata de algo importado
import * as types from './types';
// aqui parece que vai ser a action caso o botao seja disparado para 
// para ser pego pelo reducer 
// logo em seguida vai ser utilizado pela dispatch
export function loginRequest(payload) {
    // retornando o objeto a qual estou usando o objeto
    // ja sei quais types sao existente 
    // para nao criar com nome igual para nao duplicar 
    // pegar os dados e passar
    return {
        type: types.LOGIN_REQUEST,
        payload
    };
}
export function loginSuccess(payload) {

    // recebi o payload que na verdade e o token e as congis do usuario
    // retornando o objeto a qual estou usando o objeto
    // ja sei quais types sao existente 
    // para nao criar com nome igual para nao duplicar 
    return {
        type: types.LOGIN_SUCCESS,
        payload
    };
}
export function loginFailure(payload) {

    // retornando o objeto a qual estou usando o objeto
    // ja sei quais types sao existente 
    // para nao criar com nome igual para nao duplicar 
    return {
        type: types.LOGIN_FAILURE,
        payload
    };
}

export function registerRequest(payload) {

    // retornando o objeto a qual estou usando o objeto
    // ja sei quais types sao existente 
    // para nao criar com nome igual para nao duplicar 
    return {
        type: types.REGISTER_REQUEST,
        payload
    };
}

export function registerSuccess(payload) {

    // retornando o objeto a qual estou usando o objeto
    // ja sei quais types sao existente 
    // para nao criar com nome igual para nao duplicar 
    return {
        type: types.REGISTER_SUCCESS,
        payload
    };
}

export function registerFailure(payload) {

    // retornando o objeto a qual estou usando o objeto
    // ja sei quais types sao existente 
    // para nao criar com nome igual para nao duplicar 
    return {
        type: types.REGISTER_FAILURE,
        payload
    };
}

// vou fazer requisicoa -> saga vai esperar o sucesso -> ai ele vai passar esse token -> reducer que vai deixar a variavel token acessivel por toda aplicacao
// // pede a requisicao primeiro ao saga
// acao -> reducer -> retorna state 
// acao (request)-> saga -> reducer -> att o status/success/fail. 
//  agora quando vamos fazer requisicoes async 
// o midleware e um a parte dependendo da requisicao para o back-end
// ele pega e faz se passar ou se der erro.