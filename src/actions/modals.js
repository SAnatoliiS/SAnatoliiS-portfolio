import { createAction } from 'redux-actions'

export const openNewItemModal = createAction('OPEN_NEW_ITEM_MODAL')
export const closeNewItemModal = createAction('CLOSE_NEW_ITEM_MODAL')

export const openChosenItemModal = createAction('OPEN_CHOSEN_ITEM_MODAL')
export const closeChosenItemModal = createAction('CLOSE_CHOSEN_ITEM_MODAL')
