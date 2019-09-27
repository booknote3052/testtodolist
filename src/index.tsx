import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';
import ReduxPromise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import { loadState, saveState } from './localstore/localstore'
const persistStore = loadState()
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     reducer,
//     composeEnhancers(applyMiddleware(thunkMiddleware, ReduxPromise)),
// );
const store = createStore(
    reducer,
    persistStore, composeEnhancers(applyMiddleware(thunkMiddleware, ReduxPromise))
);

store.subscribe(() => {
    saveState(store.getState())
})
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
