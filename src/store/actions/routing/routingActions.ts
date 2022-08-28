import { createAction } from 'typesafe-actions';
import { RoutingType } from '../../../types/types';

const scope = '@routing';

export const changeRouting = createAction(`${scope}/CHANGE_ROUTING`)<RoutingType>();
export const changeSelectedRouting = createAction(`${scope}/CHANGE_SELECTED_ROUTING`)<RoutingType>();

export const changePoint = createAction(`${scope}/CHANGE_POINT`)<RoutingType>();
