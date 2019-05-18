import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';

import App from './components/App';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.querySelector('#root'));
