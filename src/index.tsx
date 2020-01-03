import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';
import { appReducer } from './reducers';
import { Provider } from 'react-redux'
import { TAppState } from './types';

export type TGlobalState = {
    appModule: TAppState
};

const rootReducer = combineReducers({
    appModule: appReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
