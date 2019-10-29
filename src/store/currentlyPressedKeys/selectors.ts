import { AppState } from '../index';

export const isKeyPressedSelector = (state: AppState, key: string): boolean => (
    state.pressedKeysReducer.currentlyPressedKeys.includes(key)
);