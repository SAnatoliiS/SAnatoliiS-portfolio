import { handleActions } from 'redux-actions';
import * as actions from '../actions/items';

const itemsReducerDefaultState = [];

const items = handleActions(
	{
		[actions.addItem](state, { payload: item }) {
			return [...state, item];
		},
		[actions.removeItem](state, { payload: removeItemId }) {
			return state.filter(({ id }) => id !== removeItemId);
		},
		[actions.resetList]() {
			return itemsReducerDefaultState;
		},
		[actions.loadItems](state, { payload: items }) {
			return items;
		}
	},
	itemsReducerDefaultState
);

export default items;
