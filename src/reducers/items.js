import { handleActions } from 'redux-actions';
import * as actions from '../actions/items';

const itemsReducerDefaultState = [
	{ id: '0', title: 'Example Item', info: 'Extra info about this item' }
];

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
		}
	},
	itemsReducerDefaultState
);

export default items;
