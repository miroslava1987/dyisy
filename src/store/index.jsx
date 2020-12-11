import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {MODULE_NAME as productsModulName} from './products/selectors';
import {reducer as productReducer} from './products/reducer';

const rootReducer = combineReducers({
    [productsModulName]: productReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));