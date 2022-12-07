// Combinar varios reducers as funcoes 
// criados
import auth from '../modules/Auth/reducer';

import { combineReducers } from "redux";
// aqui estou passando todos reducers para um reducers que vira
// somente um reducers e utilizado na seguinte forma
// la no store principal onde fica todo provider da aplicacao

export default combineReducers({
    auth
});