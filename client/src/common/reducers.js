import { combineReducers } from 'redux';
import * as todoReducers from '../modules/Todo/todoReducers';
import * as loadingReducers from '../modules/Loading/loadingReducers';

const allReducers = Object.assign({},
    todoReducers,
    loadingReducers
);

const reducers = combineReducers(allReducers);

export default reducers;