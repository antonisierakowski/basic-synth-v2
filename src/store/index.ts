import { pressedKeysReducer } from './currentlyPressedKeys/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currentOctaveReducer } from './currentOctave/reducer';
import { createStore, combineReducers } from 'redux';
import { CurrentOctaveState } from './currentOctave/reducer';
import { CurrentlyPressedKeysState } from './currentlyPressedKeys/reducer';

export interface AppState {
    pressedKeysReducer: CurrentlyPressedKeysState,
    currentOctaveReducer: CurrentOctaveState
}

const rootReducer = combineReducers({
    pressedKeysReducer,
    currentOctaveReducer,
});

export const store: AppState = createStore(rootReducer, composeWithDevTools());