import axios from "axios/index";
import qs from 'qs';
import { hideLoading, showLoading } from "../Loading/loadingActions";
import {
    TODO_ADD,
    TODO_INIT,
    TODO_TOGGLE,
    TODO_DELETE,
    TODO_FILTER
} from './todoActionTypes';

export const initTodo = () => {
    return (dispatch) => {
        axios.get('http://localhost:5000/todo/')
            .then((response) => {
                dispatch({
                    type: TODO_INIT,
                    payload: response.data.todos
                });
                dispatch(hideLoading());
            });
    };
};

export const addTodo = (text) => {
    return (dispatch) => {
        dispatch(showLoading());
        axios({
            method: 'post',
            url: 'http://localhost:5000/todo/new',
            headers: {
                "Content-type": 'application/x-www-form-urlencoded'
            },
            data: qs.stringify({
                text
            })
        }).then((response) => {
            dispatch({
                type: TODO_ADD,
                ...response.data.todo
            });
            dispatch(hideLoading());
        });
    };
};

export const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch(showLoading());
        axios.post(`http://localhost:5000/todo/${id}/delete`)
            .then((response) => {
                dispatch({
                    type: TODO_DELETE,
                    id
                });
                dispatch(hideLoading());
            });
    };
};

export const toggleTodo = (id) => {
    return (dispatch) => {
        dispatch(showLoading());
        axios.post(`http://localhost:5000/todo/${id}/toggle`)
            .then((response) => {
                dispatch({
                    type: TODO_TOGGLE,
                    id
                });
                dispatch(hideLoading());
            });
    };
};

export const filterTodo = (filter) => {
    return {
        type: TODO_FILTER,
        filter
    }
};