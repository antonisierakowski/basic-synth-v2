import { types } from './types';

export const incrementOctave = () => ({
    type: types.INCREMENT_OCTAVE,
})

export const decrementOctave = (key) => ({
    type: types.DECREMENT_OCTAVE,
})