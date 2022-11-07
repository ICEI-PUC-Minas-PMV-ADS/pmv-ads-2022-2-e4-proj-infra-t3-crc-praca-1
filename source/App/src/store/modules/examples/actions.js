// importando os types para serem utilizados da seguinte forma se eu mudar
// e dinamico pq se trata de algo importado
import * as types from './types';
// aqui parece que vai ser a action caso o botao seja disparado para 
// para ser pego pelo reducer 
// logo em seguida vai ser utilizado pela dispatch
export function clicaBotaoRequest() {
    // retornando o objeto a qual estou usando o objeto
    // ja sei quais types sao existente 
    // para nao criar com nome igual para nao duplicar 
    return {
        type: types.BOTAO_CLICADO_REQUEST
    };
}
export function clicaBotaoSuccess() {

    // retornando o objeto a qual estou usando o objeto
    // ja sei quais types sao existente 
    // para nao criar com nome igual para nao duplicar 
    return {
        type: types.BOTAO_CLICADO_SUCCESS
    };
}
export function clicaBotaoFailure() {

    // retornando o objeto a qual estou usando o objeto
    // ja sei quais types sao existente 
    // para nao criar com nome igual para nao duplicar 
    return {
        type: types.BOTAO_CLICADO_FAILURE
    };
}

// // pede a requisicao primeiro ao saga
// acao -> reducer -> retorna state 
// acao (request)-> saga -> reducer -> att o status/success/fail. 
//  agora quando vamos fazer requisicoes async 
// o midleware e um a parte dependendo da requisicao para o back-end
// ele pega e faz se passar ou se der erro.