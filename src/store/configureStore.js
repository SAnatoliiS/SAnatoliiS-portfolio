import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import itemsReducer from '../reducers/items'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      form: formReducer,
      items: itemsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
