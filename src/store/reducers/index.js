//import redux component for combinig reducers
import {combineReducers} from 'redux';

//importing reducers files
import burgerBuilderReducer from './burgerBuilder';
import orderReducer from './order';

//creating reducer
const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    order: orderReducer
})

export default rootReducer;