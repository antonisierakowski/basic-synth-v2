import { KEY_PRESSED } from '../currentlyPressedKeys/types';
import { takeEvery, put } from 'redux-saga/effects';
import { KeyboardInput } from '../../interfaces/KeyboardInput';
import { incrementOctave, decrementOctave } from './actions';

export function* changeCurrentOctave(action) {
    switch (action.payload.key) {
        case KeyboardInput.z:
            yield put(decrementOctave())
            return;
        case KeyboardInput.x:
            yield put(incrementOctave())
            return;
        default:
            return;
    } 
}

export function* changeCurrentOctaveSaga() {
    yield takeEvery(KEY_PRESSED, changeCurrentOctave);
}