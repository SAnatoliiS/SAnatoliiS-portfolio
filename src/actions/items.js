import { createAction } from 'redux-actions';
import uuid from 'uuid';
import {
	addItemToLocalStorage,
	readItemsFromLocalStorage,
	removeItemFromLocalStorage,
	resetItemsInLocalStorage
} from '../utils/exploreLocalStorage';

export const addItem = createAction('ADD_ITEM');
export const startAddItem = item => dispatch => {
	const newItem = { id: uuid(), ...item };
	addItemToLocalStorage(newItem);
	dispatch(addItem(newItem));
};

export const removeItem = createAction('REMOVE_ITEM');
export const startRemoveItem = id => dispatch => {
	removeItemFromLocalStorage(id);
	dispatch(removeItem(id));
};

export const resetList = createAction('RESET_LIST');
export const startResetList = () => dispatch => {
	resetItemsInLocalStorage();
	dispatch(resetList());
};

export const loadItems = createAction('LOAD_ITEMS');
export const startLoadItems = () => dispatch => {
	const items = readItemsFromLocalStorage();
	if (items) {
		dispatch(loadItems(items));
	}
};
