import { createStore, combineReducers, applyMiddleware, compose, Store, StoreEnhancer, AnyAction } from 'redux';
import thunk from 'redux-thunk';

import modal from './modal';

const rootReducer = combineReducers({
  modal
});

let enhancer: StoreEnhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  import('redux-logger')
    .then(({ default: logger }) => {
      enhancer = compose(applyMiddleware(thunk, logger));
    });
}

export default function configureStore (preloadedState: {}): Store<AppState, AnyAction> {
  return createStore(rootReducer, preloadedState, enhancer);
}
