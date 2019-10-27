import React, { useEffect } from 'react'
import './NoteKey.css';
import { connect } from 'react-redux';

function NoteKey({ note, isPressed, synth }) {
  useEffect(() => {
    if (isPressed) {
      console.log(`attack: ${note}`);
      synth.noteOn(note);
    }
    if (!isPressed) {
      console.log(`release: ${note}`);
      synth.noteOff(note);
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
});

export default connect(mapStateToProps)(NoteKey);