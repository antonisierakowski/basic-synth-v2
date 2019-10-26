import { types } from './types';

const initialState = {
    currentlyPressedKeys: [],
};

export const pressedKeysReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.KEY_PRESSED:
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
        case types.KEY_RELEASED:
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