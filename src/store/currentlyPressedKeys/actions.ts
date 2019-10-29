import { types } from './types';
import { AnyAction } from 'redux';

export interface KeyPressed extends AnyAction {
    payload: {
        key: string,
    },
}

export interface KeyReleased extends AnyAction {
    payload: {
        key: string,
    },
}

export const keyPressed = (key: string): KeyPressed => ({
    type: types.KEY_PRESSED,
    payload: {
        key: key.toLowerCase(),
    },
})

export const keyReleased = (key: string): KeyReleased => ({
    type: types.KEY_RELEASED,
    payload: {
        key: key.toLowerCase(),
    },
})