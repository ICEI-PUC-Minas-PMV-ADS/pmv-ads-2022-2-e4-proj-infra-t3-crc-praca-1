// aprendendo a separar o reducer 
// create-store ja esta depreciado mas da pra usar ainda
// essa funcao create store ira receber um cara que chama reducer que ira servir 
// entao o cara que a gente passar escuta as acoes 
// state atual e action
// acao -> reducer -> newState(manipula ) = state(atual) -> retorna o novo
// precisa ser dar console.log(action) para saber a que a funcao foi ativada
// IMPORTANDO OS TYPES DA APLICACAO PARA SEREM UTILIZADOS COMO REFERENCIA EXATA
import * as types from '../Auth/types';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false
};
// entao o reducer ja recebe o valor inicial de botaoClicado como false;no parametros
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    // quando for mandado e o provider que tem a config do store do redux escutar
    // ele vai usar esse swtich aqui para tomar uma decisao

    // primeira acao e saga a qual a gente chama
    switch (action.type) {

        case types.LOGIN_SUCCESS:
            {

                //    action.payload eu passei esssas c ongf
                const newState = { ...initialState };
                newState.isLoggedIn = true;
                newState.isLoading = true;
                newState.token = action.payload.token;
                // newState.user = {
                //     id: action.payload.id,
                //     name: action.payload.username,
                //     cpf: action.payload.cpf
                // };

                newState.user.id = action.payload.id;
                newState.user.name = action.payload.username;
                newState.user.cpf = action.payload.cpf;
                newState.user.email = action.payload.email;
                newState.user.department = action.payload.department.id;


                // lembrando todo app fica esperando essas actions tanto ele como o saga tambem
                // se der erro vai retornar logo de uma vez a questao do tudo false 
                return newState;
            }

        case types.REGISTER_FAILURE:
            {
                const newState = { ...initialState };
                // lembrando todo app fica esperando essas actions tanto ele como o saga tambem
                // se der erro vai retornar logo de uma vez a questao do tudo false 
                return newState;
            }


        case types.REGISTER_SUCCESS:
            {
                const newState = { ...initialState };
                newState.user.name = action.payload.name;
                newState.user.cpf = action.payload.cpf;
                newState.user.email = action.payload.email;
                // lembrando todo app fica esperando essas actions tanto ele como o saga tambem
                // se der erro vai retornar logo de uma vez a questao do tudo false 
                return newState;
            }


        case types.LOGIN_FAILURE:
            {
                const newState = { ...initialState };
                // lembrando todo app fica esperando essas actions tanto ele como o saga tambem
                // se der erro vai retornar logo de uma vez a questao do tudo false 
                return newState;
            }
        default:
            return state;
    }
};
