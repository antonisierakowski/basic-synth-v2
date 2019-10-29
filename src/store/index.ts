import { pressedKeysReducer } from './currentlyPressedKeys/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currentOctaveReducer } from './currentOctave/reducer';
import { createStore, combineReducers, applyMiddleware, Store } from 'redux';
import { CurrentOctaveState } from './currentOctave/reducer';
import { CurrentlyPressedKeysState } from './currentlyPressedKeys/reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';

export interface AppState {
    pressedKeysReducer: CurrentlyPressedKeysState,
    currentOctaveReducer: CurrentOctaveState,
}

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    pressedKeysReducer,
    currentOctaveReducer,
});

export const store: Store<AppState> = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    ),
);

sagaMiddleware.run(rootSaga);