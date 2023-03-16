import {applyMiddleware, legacy_createStore as creaStore, combineReducers} from "redux";
import {composeWithDevTools}from 'redux-devtools-extension';
import {productsReducer} from'./reducer/productsReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    productsReducer
})

export const store = creaStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

