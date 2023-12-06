import {inject, InjectionToken} from '@angular/core';

import {WINDOW} from './window';

export const SPEECH_SYNTHESIS = new InjectionToken<SpeechSynthesis>(
    `[SPEECH_SYNTHESIS]: An abstraction over window.speechSynthesis object`,
    {
        factory: () => inject(WINDOW).speechSynthesis,
    },
);
