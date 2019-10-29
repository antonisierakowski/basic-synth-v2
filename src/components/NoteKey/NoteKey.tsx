import React, { useEffect } from 'react'
import './NoteKey.css';
import { connect } from 'react-redux';
import { Synth } from '../../services/Synth/Synth';
import { AppState } from '../../store';
import { isKeyPressedSelector } from '../../store/currentlyPressedKeys/selectors';

type Props = {
  note: string;
  isPressed: boolean;
  synth: Synth;
  keyToPress: string,
}

const NoteKey: React.FunctionComponent<Props> = ({ note, isPressed, synth }: Props): JSX.Element => {
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

const mapStateToProps = (state: AppState, ownProps: Props): Partial<Props> => ({
  isPressed: isKeyPressedSelector(state, ownProps.keyToPress),
});

export default connect(mapStateToProps)(NoteKey);