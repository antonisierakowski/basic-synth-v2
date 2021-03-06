import { KEY_PRESSED, KEY_RELEASED } from './types';
import { AnyAction } from 'redux';

export interface CurrentlyPressedKeysState {
    currentlyPressedKeys: string[],
}

const initialState: CurrentlyPressedKeysState = {
    currentlyPressedKeys: [],
};

export const pressedKeysReducer = (state: CurrentlyPressedKeysState = initialState, action: AnyAction) => {
    switch (action.type) {
        case KEY_PRESSED:
            if (!state.currentlyPressedKeys.includes(action.payload.key)) {
                return {
                    ...state,
                    currentlyPressedKeys: [
                        ...state.currentlyPressedKeys,
                        action.payload.key, // if it doesnt exist
                    ],
                }
            }
            return state;
        case KEY_RELEASED:
            if (Object.values(state.currentlyPressedKeys).includes(action.payload.key)) {
                return {
                    ...state,
                    currentlyPressedKeys: state.currentlyPressedKeys.filter(key => key !== action.payload.key),
                }
            }
            return state;
        default:
            return state;
    }
}