import { AppState } from ".."

export const currentOctaveSelector = (state: AppState): number => (
    state.currentOctaveReducer.currentOctave
)