// aprendendo a separar o reducer 
// create-store ja esta depreciado mas da pra usar ainda
// essa funcao create store ira receber um cara que chama reducer que ira servir 
// entao o cara que a gente passar escuta as acoes 
// state atual e action
// acao -> reducer -> newState(manipula ) = state(atual) -> retorna o novo
// precisa ser dar console.log(action) para saber a que a funcao foi ativada
// IMPORTANDO OS TYPES DA APLICACAO PARA SEREM UTILIZADOS COMO REFERENCIA EXATA
import * as types from '../examples/types';

const initialState = {
    botaoClicado: false
};
// entao o reducer ja recebe o valor inicial de botaoClicado como false;no parametros
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    // quando for mandado e o provider que tem a config do store do redux escutar
    // ele vai usar esse swtich aqui para tomar uma decisao

    // primeira acao e saga a qual a gente chama 
    switch (action.type) {

        case types.BOTAO_CLICADO_REQUEST:
            // agora e necessario criar um novo state e retornalo pq nao se pode alterar
            // O PROPIO DA APLICACAO
            // E SIM O CERTO E ALTERAR o novo por causa de nao ferrar a aplicacao
            // copiei o estado atual la em parametros agora vou 
            console.log('Estou fazendo a requisicao');
            return state;


        case types.BOTAO_CLICADO_SUCCESS:
            // agora e necessario criar um novo state e retornalo pq nao se pode alterar
            // O PROPIO DA APLICACAO
            // E SIM O CERTO E ALTERAR o novo por causa de nao ferrar a aplicacao
            // copiei o estado atual la em parametros agora vou 
            let newState = { ...state };
            // a propiedade da const vai receber o contrario de seu valor de fals/true true/fals
            newState.botaoClicado = !newState.botaoClicado;
            return newState;

        case types.BOTAO_CLICADO_FAILURE:
            // agora e necessario criar um novo state e retornalo pq nao se pode alterar
            // O PROPIO DA APLICACAO
            // E SIM O CERTO E ALTERAR o novo por causa de nao ferrar a aplicacao
            // copiei o estado atual la em parametros agora vou 

            console.log('error');
            // a propiedade da const vai receber o contrario de seu valor de fals/true true/fals
            return state;

        default:
            return state;
    }
};
