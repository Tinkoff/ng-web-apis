import {describe, expect, it} from '@jest/globals';
import {of} from 'rxjs';

import {toValueByte} from '../src/operators/to-value-byte';

describe('toValueByte', () => {
    it('extracts value byte', () => {
        const event = new MIDIMessageEvent('midimessage', {
            data: new Uint8Array([1, 2, 3]),
        }) as WebMidi.MIDIMessageEvent;

        of(event)
            .pipe(toValueByte())
            .subscribe(result => {
                expect(result).toBe(3);
            });
    });
});
