import {inject, InjectionToken} from '@angular/core';
import {NAVIGATOR} from '@ng-web-apis/common';

import {SYSEX} from './sysex';

export const WA_MIDI_ACCESS = new InjectionToken<Promise<globalThis.MIDIAccess>>(
    '[WA_MIDI_ACCESS]: Promise for MIDIAccess object',
    {
        providedIn: 'root',
        factory: async () => {
            const navigatorRef = inject(NAVIGATOR);
            const sysex = inject(SYSEX);

            return navigatorRef.requestMIDIAccess
                ? navigatorRef.requestMIDIAccess({sysex})
                : Promise.reject(new Error('Web MIDI API is not supported'));
        },
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_MIDI_ACCESS}
 */
export const MIDI_ACCESS = WA_MIDI_ACCESS;
