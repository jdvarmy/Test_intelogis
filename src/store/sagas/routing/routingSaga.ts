import { put, select, takeLatest } from 'redux-saga/effects';
import { changePoint, changeRouting, changeSelectedRouting } from '../../actions/routing/routingActions';
import { routingSelector } from '../../selectors/selectors';

function* changeItemPointWatcher({ payload }: ReturnType<typeof changePoint>) {
  yield put(changeRouting(payload));

  const { selected } = yield select(routingSelector);
  if (selected && selected.key === payload.key) {
    yield put(changeSelectedRouting(payload));
  }
}

export default function* routingSaga() {
  yield takeLatest(changePoint, changeItemPointWatcher);
}
