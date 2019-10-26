import React, { useEffect, useMemo } from 'react';
import './App.css';
import NoteKey from './components/NoteKey';
import { connect } from 'react-redux';
import { keyPressed, keyReleased } from './store/currentlyPressedKeys/actions';
import { Synth } from './services/Synth';

function App({ keyPress, keyRelease }) {
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
      <NoteKey note="C" keyToPress="a" synth={synthInstance}/>
      <NoteKey note="C#" keyToPress="w" synth={synthInstance}/>
      <NoteKey note="D" keyToPress="s" synth={synthInstance}/>
      <NoteKey note="D#" keyToPress="e" synth={synthInstance}/>
      <NoteKey note="E" keyToPress="d" synth={synthInstance}/>
      <NoteKey note="F" keyToPress="f" synth={synthInstance}/>
      <NoteKey note="F#" keyToPress="t" synth={synthInstance}/>
      <NoteKey note="G" keyToPress="g" synth={synthInstance}/>
      <NoteKey note="G#" keyToPress="y" synth={synthInstance}/>
      <NoteKey note="A" keyToPress="h" synth={synthInstance}/>
      <NoteKey note="A#" keyToPress="u" synth={synthInstance}/>
      <NoteKey note="B" keyToPress="j" synth={synthInstance}/>
      <NoteKey note="C" keyToPress="k" synth={synthInstance}/>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  keyPress: key => dispatch(keyPressed(key)),
  keyRelease: key => dispatch(keyReleased(key)),
})

export default connect(null, mapDispatchToProps)(App);
