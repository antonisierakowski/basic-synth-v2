import { NoteKey as NoteKeyInterface } from '../../interfaces/NoteKey';
import NoteKey from '../../components/NoteKey/NoteKey'
import * as React from 'react';
import { Synth } from '../../services/Synth';

export class CreateNoteKeys {
    public static create(noteKeys: NoteKeyInterface[], octave: number, synthInstance: Synth): any {
        return noteKeys.map((noteKey, index) => {
            return <NoteKey
                note={`${noteKey.note}${octave + (Math.floor(index / 11))}`}
                keyToPress={noteKey.key}
                synth={synthInstance}
            />
        })
    }
}