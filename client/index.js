import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import Navbars from './component/Navbars';

ReactDOM.render(<Navbars />, document.getElementById('navbar'));
ReactDOM.render(<App />, document.getElementById('root'));
