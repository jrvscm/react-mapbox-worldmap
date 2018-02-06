import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk);

const store = createStore(
    combineReducers({
    }),
    compose(middleware, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);