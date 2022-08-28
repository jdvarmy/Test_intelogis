import { combineReducers } from 'redux';
import routingReducer from './routing/routingReducer';

const rootReducer = combineReducers({
  routingReducer,
});

export default rootReducer;
