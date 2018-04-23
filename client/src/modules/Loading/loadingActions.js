import {
    LOADING_HIDE,
    LOADING_SHOW
} from "./loadingActionTypes";

export const hideLoading = () => {
    return {
        type: LOADING_HIDE
    }
};

export const showLoading = () => {
    return {
        type: LOADING_SHOW
    }
};