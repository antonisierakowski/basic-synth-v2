import Tone from 'tone';

export class Synth {
    private synth: any = null;

    constructor() {
        this.synth = new Tone.PolySynth(10);

        this.synth.voices.forEach(voice => { // todo: develop separate methods
            voice.envelope.attack = 0.01;
            voice.envelope.decay = 1;
            voice.envelope.sustain = 1;
            voice.envelope.release = 0.5;
            voice.oscillator.type = 'triangle'
        });

        this.synth.output.output.gain.input.value = 0.5;
        this.synth.chain(Tone.Master);
    }
 
    public noteOn(note: string): void {
        this.synth.triggerAttackRelease(note, 10);
    }

    public noteOff(note: string): void {
        this.synth.triggerRelease(note);
    }
}