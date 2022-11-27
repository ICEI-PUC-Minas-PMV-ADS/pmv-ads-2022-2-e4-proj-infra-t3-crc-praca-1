// import all do redux-saga
// Combine de sagas 

import { all } from "redux-saga/effects";
import example from "./examples/sagas";
// yield e uma funcao procedural que espera ser terminado o processo
// para ser executado
export default function* rootSaga() {
    return yield all([example]);
}
