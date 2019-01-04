import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import { Provider } from 'react-redux';
import Main from './containers/Main';
import configureStore from './store/configureStore';
import './styles/styles.scss';

const store = configureStore();
const provider = (
	<Provider store={store}>
		<Main />
	</Provider>
);

ReactDOM.render(provider, document.getElementById('app'));
