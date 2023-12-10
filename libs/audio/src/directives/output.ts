import {Directive, Inject, Input, OnDestroy} from '@angular/core';

import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {AUDIO_NODE} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {connect} from '../utils/connect';

@Directive({
    standalone: true,
    selector: `[waOutput]`,
})
export class WebAudioOutput extends GainNode implements OnDestroy {
    @Input()
    set waOutput(destination: AudioNode | AudioParam | undefined) {
        this.disconnect();
        connect(this, destination);
    }

    constructor(
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @Inject(AUDIO_NODE) node: AudioNode | null,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
    ) {
        if (modern) {
            super(context);
            connect(node, this);
        } else {
            const result = context.createGain();

            Object.setPrototypeOf(result, WebAudioOutput.prototype);
            connect(node, result);

            return result as WebAudioOutput;
        }
    }

    static init(that: WebAudioOutput, node: AudioNode | null): void {
        connect(node, that);
    }

    ngOnDestroy(): void {
        this.disconnect();
    }
}