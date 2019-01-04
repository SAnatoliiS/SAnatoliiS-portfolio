import { handleActions } from 'redux-actions';
import * as actions from '../actions/chosen';

const chosenReducerDefaultState = null;

const chosenItemId = handleActions(
	{
		[actions.choose](state, { payload: id }) {
			return id;
		},
		[actions.unChoose]() {
			return chosenReducerDefaultState;
		}
	},
	chosenReducerDefaultState
);

export default chosenItemId;
