import { all } from 'redux-saga/effects';
import { changeCurrentOctaveSaga } from './currentOctave/sagas';

export function* rootSaga() {
  yield all([
    changeCurrentOctaveSaga()
  ]);
}