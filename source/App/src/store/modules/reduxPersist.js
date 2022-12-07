import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
// importando o storage do redux para gaurdar informacoes
// os states ele decide aonde ele quer salvar.

// passando o parametro como segundo argumento para funcao
// salvando na verdade o reducer que e um estado global do app
// que vai ser o auth la em rootReducers

// eslint-disable-next-line import/no-anonymous-default-export
export default reducers => {
    //salvar a whitelist no rootreducer quais reducers/ que mudam de estado e pra eu salvar
    // example
    // 
    const persistedReducers = persistReducer(
        {
            key: 'praca-crc',
            storage,
            whitelist: ['auth']
        }
        , reducers);

    return persistedReducers;
}