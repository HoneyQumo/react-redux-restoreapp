import { createStore, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";

import reducer from "./reducers";

const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    next(action);
}

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        });
    }

    return next(action);
}


const store = createStore(reducer, applyMiddleware(ThunkMiddleware, stringMiddleware, logMiddleware));

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(() => dispatch({
        type: 'DELAYED_ACTION'
    }), timeout);
};

store.dispatch(delayedActionCreator(3000));

store.dispatch('HELLO_WORLD');

export default store;