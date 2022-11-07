import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from '../examples/actions';
import * as types from '../examples/types';
const requisicao = () => {

    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
// la no login a gente disparou a request 
// takeLatest pega so o ultimo clique 
// all permite colocar varias acoes
// chamar as promises e o saga utiliza funcoes geradoras

function* exampleRequest() {
    try {
        // passei a referencia para o call do redux-saga
        // se eu tivesse parametros eu passaria por virgula
        yield call(requisicao);
        // disparar uma action para 
        yield put(actions.clicaBotaoSuccess());

    } catch {
        yield put(actions.clicaBotaoFailure());
    }

}
// exportando o redux-saga que vai escutar a request de 
// todas o ultimo clique faz isso
export default all([takeLatest(
    takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
)]);


