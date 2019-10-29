import { types } from './types';
import { AnyAction } from 'redux';

export interface IncrementOctave extends AnyAction {
}

export interface DecrementOctave extends AnyAction {
}

export const incrementOctave = (): IncrementOctave => ({
    type: types.INCREMENT_OCTAVE,
});

export const decrementOctave = (): DecrementOctave => ({
    type: types.DECREMENT_OCTAVE,
});