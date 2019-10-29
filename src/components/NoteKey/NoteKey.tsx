import React, { useEffect } from 'react'
import './NoteKey.css';
import { connect } from 'react-redux';
import { Synth } from '../../services/Synth/Synth';
import { AppState } from '../../store';
import { isKeyPressedSelector } from '../../store/currentlyPressedKeys/selectors';
import { KeyboardInput } from '../../interfaces/KeyboardInput';

type Props = {
  note: string;
  isPressed: boolean;
  synth: Synth;
  keyToPress: KeyboardInput,
}

const NoteKey: React.FunctionComponent<Props> = ({ note, isPressed, synth }: Props): JSX.Element => {
  useEffect(() => {
    if (isPressed) {
      synth.noteOn(note);
    }
    if (!isPressed) {
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