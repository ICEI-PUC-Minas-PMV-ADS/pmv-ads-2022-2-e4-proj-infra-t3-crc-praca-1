// import all do redux-saga
// Combine de sagas 
// todos sagas que vao ser usados

import { all } from "redux-saga/effects";
import auth from "./Auth/sagas";
// yield e uma funcao procedural que espera ser terminado o processo
// para ser executado
export default function* rootSaga() {
    return yield all([auth]);
}
