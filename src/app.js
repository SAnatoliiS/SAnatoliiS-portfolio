import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './containers/Main';
import configureStore from './store/configureStore';
import { startLoadItems } from './actions/items';
import 'bootstrap';
import './styles/styles.scss';

const store = configureStore();
const provider = (
	<Provider store={store}>
		<Main />
	</Provider>
);

store.dispatch(startLoadItems());
ReactDOM.render(provider, document.getElementById('app'));
