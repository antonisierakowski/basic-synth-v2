import { types } from './types';

export const keyPressed = (key) => ({
    type: types.KEY_PRESSED,
    payload: {
        key: key.toLowerCase(),
    },
})

export const keyReleased = (key) => ({
    type: types.KEY_RELEASED,
    payload: {
        key: key.toLowerCase(),
    },
})