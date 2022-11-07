// Combinar varios reducers as funcoes 
// criados
import exampleReducers from '../modules/examples/reducer';

import { combineReducers } from "redux";
// aqui estou passando todos reducers para um reducers que vira
// somente um reducers e utilizado na seguinte forma
// la no store principal onde fica todo provider da aplicacao

export default combineReducers({
    exampleReducers
});