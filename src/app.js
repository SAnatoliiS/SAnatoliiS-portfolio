import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './containers/Main';
import configureStore from './store/configureStore';

const store = configureStore();
const provider = (
  <Provider store={store}>
    <Main />
  </Provider>
)

ReactDOM.render(provider, document.getElementById('app'));
