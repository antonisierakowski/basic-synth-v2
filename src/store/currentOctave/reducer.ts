import { INCREMENT_OCTAVE, DECREMENT_OCTAVE } from './types';
import { CONSTANTS } from '../../constants';
import { AnyAction } from 'redux';

const { MIN_OCTAVE, MAX_OCTAVE } = CONSTANTS;

export interface CurrentOctaveState {
    currentOctave: number,
}

const initialState: CurrentOctaveState = {
    currentOctave: 4,
};

export const currentOctaveReducer = (state: CurrentOctaveState = initialState, action: AnyAction) => {
    const { currentOctave } = state;
    switch (action.type) {
        case INCREMENT_OCTAVE:
            if (currentOctave < MAX_OCTAVE) {
                return {
                    currentOctave: currentOctave + 1,
                }
            }
            return state;
        case DECREMENT_OCTAVE:
            if (currentOctave > MIN_OCTAVE) {
                return {
                    currentOctave: currentOctave - 1,
                }
            }
            return state;
        default:
            return state;
    }
}