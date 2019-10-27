import { pressedKeysReducer } from './currentlyPressedKeys/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { currentOctaveReducer } from './currentOctave/reducer';
import { createStore, combineReducers } from 'redux';

const rootReducer = combineReducers({
    pressedKeysReducer,
    currentOctaveReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());