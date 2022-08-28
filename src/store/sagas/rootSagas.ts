import { all } from 'redux-saga/effects';
import routingSaga from './routing/routingSaga';

export default function* rootSagas() {
  yield all([routingSaga()]);
}
