import { KEY_PRESSED, KEY_RELEASED } from './types';
import { AnyAction } from 'redux';
import { KeyboardInput } from '../../interfaces/KeyboardInput';

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

export const keyPressed = (key: KeyboardInput): KeyPressed => ({
    type: KEY_PRESSED,
    payload: {
        key: key.toLowerCase(),
    },
})

export const keyReleased = (key: KeyboardInput): KeyReleased => ({
    type: KEY_RELEASED,
    payload: {
        key: key.toLowerCase(),
    },
})