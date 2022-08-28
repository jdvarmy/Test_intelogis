import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSagas from './sagas/rootSagas';
import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const configureStore = (preloaded?: any) => {
  const store = createStore(rootReducer, preloaded, applyMiddleware(...middleware));

  sagaMiddleware
    .run(rootSagas)
    .toPromise()
    .catch((e) => console.error({ message: e.message, source: 'saga error', stacktrace: e.sagaStack }));

  return store;
};
