import React, { useEffect, useMemo } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { keyPressed, keyReleased } from '../store/currentlyPressedKeys/actions';
import { Synth } from '../services/Synth/Synth';
import { CreateNoteKeys } from '../services/CreateNoteKeys/CreateNoteKeys';
import { NoteKeysMapping } from '../services/CreateNoteKeys/NoteKeysMapping';
import { Dispatch } from 'redux';
import { KeyPressed, KeyReleased } from '../store/currentlyPressedKeys/actions';
import { AppState } from '../store';

type Props = {
  keyPress: (key: string) => KeyPressed;
  keyRelease: (key: string) => KeyReleased;
  currentOctave: number;
}

const App: React.FunctionComponent<Props> = ({ keyPress, keyRelease, currentOctave }: Props): JSX.Element => {
  const synthInstance: Synth = useMemo(() => new Synth(), []);

  useEffect(() => {
    const body = document.querySelector('body');
    body.addEventListener('keydown', e => keyPress(e.key));
    body.addEventListener('keyup', e => keyRelease(e.key));

    return () => {
      body.removeEventListener('keydown', e => keyPress(e.key));
      body.removeEventListener('keyup', e => keyRelease(e.key));
    }
  }, []);

  return (
    <div className="App">
      { CreateNoteKeys.create(NoteKeysMapping, currentOctave, synthInstance) }
    </div>
  );
}

const mapStateToProps = (state: AppState): Partial<Props> => ({
  currentOctave: state.currentOctaveReducer.currentOctave,
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<Props> => ({
  keyPress: key => dispatch(keyPressed(key)),
  keyRelease: key => dispatch(keyReleased(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
