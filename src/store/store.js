import { throttle } from 'lodash'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducer/index'
import { loadState, saveState } from './localStorage'

const configureStore = () => {
  const persistedState = loadState();
  const middlewares = [thunk];
  const enhancers = [applyMiddleware(...middlewares)];
  const composeEnhancers = process.env.NODE_ENV !== 'production'
    && typeof window === 'object'
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      shouldHotReload: false,
    })
    : compose;

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(...enhancers),
  );
  console.log('store', store)
  store.subscribe(
    throttle(() => {
      saveState({
          auth: store.getState().auth,
        // auth: store.getState().auth,
        // userCompanies: store.getState().userCompanies,
        // userQuote: store.getState().userQuote,
      });
    }),
  );

  return store;
};

export default configureStore;
