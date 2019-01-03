import { createAction } from 'redux-actions'
import { uniqueId } from 'lodash'

export const addItem = createAction('ADD_ITEM', item => ({ id: uniqueId(), ...item}))
export const removeItem = createAction('REMOVE_ITEM')
export const resetList = createAction('RESET_LIST')

