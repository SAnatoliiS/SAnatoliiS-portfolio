import { createAction } from 'redux-actions';
import { closeChosenItemModal } from './modals';

export const choose = createAction('CHOOSE_ITEM');
export const unChoose = createAction('UNCHOOSE_ITEM');
