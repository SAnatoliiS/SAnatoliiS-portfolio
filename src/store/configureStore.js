import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as formReducer } from 'redux-form'
import itemsReducer from '../reducers/items'
import chosenReducer from '../reducers/chosen'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      form: formReducer,
      items: itemsReducer,
      chosenItemId: chosenReducer
    }),
    composeEnhancers()
  );

  return store;
};
