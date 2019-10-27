import React, { useEffect, useMemo } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { keyPressed, keyReleased } from '../store/currentlyPressedKeys/actions';
import { Synth } from '../services/Synth';
import { CreateNoteKeys } from '../factories/CreateNoteKeys/CreateNoteKeys'
import { NoteKeysMapping } from '../factories/CreateNoteKeys/NoteKeysMapping'

function App({ keyPress, keyRelease, currentOctave }) {
  const synthInstance = useMemo(() => new Synth(), []);

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

const mapStateToProps = (state) => ({
  currentOctave: state.currentOctaveReducer.currentOctave,
});

const mapDispatchToProps = (dispatch) => ({
  keyPress: key => dispatch(keyPressed(key)),
  keyRelease: key => dispatch(keyReleased(key)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
