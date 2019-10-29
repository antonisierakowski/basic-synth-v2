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
import { KeyboardInput } from '../interfaces/KeyboardInput';
import { currentOctaveSelector } from '../store/currentOctave/selectors';

type Props = {
  keyPress: (key: KeyboardInput) => KeyPressed;
  keyRelease: (key: KeyboardInput) => KeyReleased;
  currentOctave: number;
}

const App: React.FunctionComponent<Props> = ({ keyPress, keyRelease, currentOctave }: Props): JSX.Element => {
  const synthInstance: Synth = useMemo(() => new Synth(), []);

  const handleKeydown = (e: KeyboardEvent): void => {
    try {
      keyPress(KeyboardInput[e.key]);
    } catch {}
  }

  const handleKeyup = (e: KeyboardEvent): void => {
    try {
      keyRelease(KeyboardInput[e.key])
    } catch {}
  };

  useEffect(() => {
  
    const body = document.querySelector('body');
    body.addEventListener('keydown', handleKeydown);
    body.addEventListener('keyup', handleKeyup);

    return () => {
      body.removeEventListener('keydown', handleKeydown);
      body.removeEventListener('keyup', handleKeyup);
    }
  }, []);

  return (
    <div className="App">
      { CreateNoteKeys.create(NoteKeysMapping, currentOctave, synthInstance) }
    </div>
  );
}

const mapStateToProps = (state: AppState): Partial<Props> => ({
  currentOctave: currentOctaveSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch): Partial<Props> => ({
  keyPress: (key: KeyboardInput) => dispatch(keyPressed(key)),
  keyRelease: (key: KeyboardInput) => dispatch(keyReleased(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
