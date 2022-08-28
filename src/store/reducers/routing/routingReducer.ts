import { createReducer } from 'typesafe-actions';
import routingItemsMock from '../../mock/routingItemsMock';
import { combineReducers } from 'redux';
import { RoutingType } from '../../../types/types';
import { changeSelectedRouting, changeRouting } from '../../actions/routing/routingActions';

const initialRoutingItems: RoutingType[] = routingItemsMock as RoutingType[];

const routing = createReducer(initialRoutingItems).handleAction(changeRouting, (state, { payload }) => {
  const newRouting = new Map();
  state.forEach((item) => newRouting.set(item.key, item));
  newRouting.set(payload.key, payload);

  return Array.from(newRouting.values());
});
const selected = createReducer<RoutingType | null>(null).handleAction(changeSelectedRouting, (_, action) => ({
  ...action.payload,
}));

const routingReducer = combineReducers({
  routing,
  selected,
});

export default routingReducer;
