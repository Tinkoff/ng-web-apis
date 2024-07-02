import {InjectionToken} from '@angular/core';

import MIDIOutput = WebMidi.MIDIOutput;

export const WA_MIDI_OUTPUT = new InjectionToken<Promise<MIDIOutput | undefined>>(
    '[WA_MIDI_OUTPUT]: MIDIOutput object',
);

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_OUTPUT}
 */
export const MIDI_OUTPUT = WA_MIDI_OUTPUT;
