import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// importando o storage do redux para gaurdar informacoes
// os states ele decide aonde ele quer salvar.

// passando o parametro como segundo argumento para funcao

// eslint-disable-next-line import/no-anonymous-default-export
export default reducers => {
    //salvar a whitelist no rootreducer quais reducers/ que mudam de estado e pra eu salvar
    // example
    // 
    const persistedReducers = persistReducer(
        {
            key: 'NOME-DA-APLICACAO',
            storage,
            whitelist: ['exampleReducers']
        }
        , reducers);

    return persistedReducers;
}