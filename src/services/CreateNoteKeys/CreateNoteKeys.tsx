import { NoteKey as NoteKeyInterface } from '../../interfaces/NoteKey';
import NoteKey from '../../components/NoteKey/NoteKey'
import * as React from 'react';
import { Synth } from '../Synth/Synth';

export class CreateNoteKeys {
    public static create(noteKeys: NoteKeyInterface[], octave: number, synthInstance: Synth): JSX.Element[] {
        return noteKeys.map((noteKey, index) => {
            return <NoteKey
                note={`${noteKey.note}${octave + (Math.floor(index / 12))}`}
                keyToPress={noteKey.key}
                synth={synthInstance}
                key={noteKey.key + index}
            />
        })
    }
}