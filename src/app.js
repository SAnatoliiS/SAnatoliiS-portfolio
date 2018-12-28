import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Greeting from './containers/Greeting';
import configureStore from './store/configureStore';

const store = configureStore();
const provider = (
  <Provider store={store}>
    <Greeting />
  </Provider>
)

ReactDOM.render(provider, document.getElementById('app'));