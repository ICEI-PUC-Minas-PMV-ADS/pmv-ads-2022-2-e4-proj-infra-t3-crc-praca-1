import { call, put, all, takeLatest } from 'redux-saga/effects';
import * as actions from '../Auth/actions';
import * as types from '../Auth/types';
import { toast } from 'react-toastify';
import Axios from '../../../services/Axios';
import axios from 'axios';
import history from '../../../services/history';
import { useSelector } from 'react-redux';

import { get } from 'lodash';
import { Navigate } from 'react-router-dom';
// la no login a gente disparou a request 
// takeLatest pega so o ultimo clique 
// all permite colocar varias acoes
// chamar as promises e o saga utiliza funcoes geradoras
// agora vou colocar tambem o path a qual ele estava o prevPath anterior

function* loginRequest({ payload }) {
    try {
        // passei a referencia para o call do redux-saga
        // se eu tivesse parametros eu passaria por virgula
        // passando o login e a senha para criar o token
        const response = yield call(Axios.post,
            '/login',
            {
                name: payload.name,
                senha: payload.senha,
            }


        );

        yield put(actions.loginSuccess(response.data));

        toast.success("Login efetuado com sucesso!");

        // Axios.defaults.headers.Authorization = "Bearer " + response.data.token;

        // yield call();
        // // disparar uma action para 
        // yield put(actions.loginRequest());
        // assim que for pego a acao dessa action

    } catch (e) {
        toast.error("Usuario ou senha invalidos.");
        yield put(actions.loginFailure());
    }

}
// exportando o redux-saga que vai escutar a request de 
// quando clicar no botao vai ficar esperando o action type e o payload
// assim que chegar ele vai realizar a seguinte expressao

// todas o ultimo clique faz isso
// exportei para utilizar
function persistRehydrat({ payload }) {
    // passei a referencia para o call do redux-saga
    // se eu tivesse parametros eu passaria por virgula
    // passando o login e a senha para criar o token
    const token = get(payload, 'auth.token');
    if (!token) return;

    Axios.defaults.headers.Authorization = "Bearer " + token;

}

function* registerRequest({ payload }) {
    const { id, name, cpf, email, senha, foto, department } = payload;
    // Axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // Axios.defaults.headers.Authorization = "Bearer " + token;
    // console.log(token);
    try {

        if (id) {
            yield call(Axios.put, '/users/', {
                id,
                name,
                cpf,
                email,
                senha,
                foto,
                "department": {
                    "id": department
                }
            });
            //yield put(actions.registerSuccess({ name, cpf, email, foto }));
            toast.success("Conta alterada com sucesso!");
            toast.error("Realize o login novamente, para continuar utilizando o sistema.");
            Navigate('/login');
        }
        // cadastrar
        if (!id) {
            yield call(Axios.post, '/users/', {
                name,
                cpf,
                email,
                senha,
                foto,
                "department": {
                    "id": department
                },
                "group": {
                    "id": 2
                }
            });
            yield put(actions.registerSuccess({ name, cpf, email, foto }));
            toast.success("Conta Criada com sucesso!");
            toast.error("Realize o login novamente, para continuar utilizando o sistema.");
            Navigate('/login');
        }

    } catch (error) {
        const status = get(error, 'response.status');
        if (status !== 200)
            toast.error("Ocorreu um erro tente novamente mais tarde! / Tente entrar novamente.");
        return;
    }

}
// aqui esta as funcoes mas ele so usa quando o type bate igual 
export default all([
    takeLatest(types.LOGIN_REQUEST, loginRequest),
    takeLatest(types.PERSIST_REHYDRATE, persistRehydrat),
    takeLatest(types.REGISTER_REQUEST, registerRequest)

]);


