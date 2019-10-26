import React, { useEffect } from 'react'
import './NoteKey.css';
import { connect } from 'react-redux';

function NoteKey({ note, isPressed, synth, currentOctave }) {
  useEffect(() => {
    const currentNote = `${note + currentOctave}`;
    if (isPressed) {
      console.log(`attack: ${currentNote}`);
      synth.noteOn(currentNote);
    }
    if (!isPressed) {
      console.log(`release: ${currentNote}`);
      synth.noteOff(currentNote);
    }
  }, [isPressed])

  return (
    <div
      id={`keyNote${note}`}
      className={`key ${isPressed ? 'key--pressed' : ''}`}
    >
      {note}
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  isPressed: state.pressedKeysReducer.currentlyPressedKeys.includes(ownProps.keyToPress),
  currentOctave: state.currentOctaveReducer.currentOctave,
});

export default connect(mapStateToProps)(NoteKey);