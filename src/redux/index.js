import {combineReducers, createStore,  applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import GetDataReducer from './reducers/GetDataReducer';
import TableReducer from './reducers/TableReducer'
import SearchReducer from './reducers/SearchReducer';


const rootReducer = combineReducers({
    GetDataReducer,
    TableReducer,
    SearchReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;