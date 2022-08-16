import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas/sagas';
import reducer from './reducers/reducers';

const store = (preloadedState?: any) => {
  const composeEnhancer: typeof compose = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, preloadedState, composeEnhancer(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(saga);

  return store;
};

export default store();
