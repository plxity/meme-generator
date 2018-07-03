import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import {createStore ,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer/index';
import {fetchJson} from './action/index';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
const store =createStore(rootReducer ,applyMiddleware(thunk));
store.subscribe(()=> console.log('store',store.getState()));
store.dispatch(fetchJson());

ReactDOM.render(
    <Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
