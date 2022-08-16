import { AnyAction } from 'redux';
import { StateType } from 'typesafe-actions';

export type RootAction = AnyAction;
export type RootState = StateType<ReturnType<typeof import('../store/reducers/reducer').default>>;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
    RootState: RootState;
  }
}
