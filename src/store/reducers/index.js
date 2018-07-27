//import redux component for combinig reducers
import {combineReducers} from 'redux';

//importing reducers files
import burgerBuilderReducer from './burgerBuilder';
import orderReducer from './order';
import authReducer from './auth';
//creating reducer
const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer
})

export default rootReducer;