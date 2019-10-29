import { DECREMENT_OCTAVE, INCREMENT_OCTAVE } from './types';
import { AnyAction } from 'redux';

export interface IncrementOctave extends AnyAction {
}

export interface DecrementOctave extends AnyAction {
}

export const incrementOctave = (): IncrementOctave => ({
    type: INCREMENT_OCTAVE,
});

export const decrementOctave = (): DecrementOctave => ({
    type: DECREMENT_OCTAVE,
});