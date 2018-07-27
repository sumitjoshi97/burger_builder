import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';
const initiaState = {
    token: null,
    userId: null,
    error: null,
    loading: null
}

const authStart = (state, action) => {
    return updateObject( state, { error: null, loading: true } );
}

const authSuccess = (state, action) => {
    return updateObject( state, {
        token: action.token,
        userId: action.userId,
        error: null,
        loading: false
    } )
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null
    })
}

const reducer = (state = initiaState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: 
            return authStart(state, action);

        case actionTypes.AUTH_SUCCESS: 
            return authSuccess(state, action);

        case actionTypes.AUTH_FAIL: 
           return authFail(state, action);

        case actionTypes.LOG_OUT:
            return authLogout(state, action);
        default: 
            return state;
    }
}

export default reducer;