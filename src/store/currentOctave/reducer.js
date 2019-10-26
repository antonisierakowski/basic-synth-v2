import { types } from './types';

const MAX_OCTAVE = 7;
const MIN_OCTAVE = 0;

const initialState = {
    currentOctave: 4,
};

export const currentOctaveReducer = (state = initialState, action) => {
    const { currentOctave } = state;
    switch (action.type) {
        case types.INCREMENT_OCTAVE:
            if (currentOctave < MAX_OCTAVE) {
                return {
                    currentOctave: currentOctave + 1,
                }
            }
            return state;
        case types.DECREMENT_OCTAVE:
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