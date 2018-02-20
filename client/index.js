import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

ReactDOM.render(
                <Provider store={createStore(reducers)}>
                <App />
                </Provider>, document.getElementById('root'));
