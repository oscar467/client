import {applyMiddleware, legacy_createStore as creaStore, combineReducers} from "redux";
import {composeWithDevTools}from 'redux-devtools-extension';
import {productsReducer} from'./reducer/productsReducer';
import {categoriesR} from './reducer/categorysReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    productsReducer,
    categoriesR
})

export const store = creaStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

