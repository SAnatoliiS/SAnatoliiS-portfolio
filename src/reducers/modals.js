import { handleActions } from 'redux-actions';
import * as actions from '../actions/modals';

const modalsReducerDefaultState = {
	newItem: false,
	chosenItem: false
};

const isOpenModals = handleActions(
	{
		[actions.openNewItemModal](state) {
			return { ...state, newItem: true };
		},
		[actions.closeNewItemModal](state) {
			return { ...state, newItem: false };
		},
		[actions.openChosenItemModal](state) {
			return { ...state, chosenItem: true };
		},
		[actions.closeChosenItemModal](state) {
			return { ...state, chosenItem: false };
		}
	},
	modalsReducerDefaultState
);

export default isOpenModals;
