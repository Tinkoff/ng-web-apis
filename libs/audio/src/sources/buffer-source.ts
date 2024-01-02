import {
    Attribute,
    Directive,
    EventEmitter,
    Inject,
    Input,
    OnDestroy,
    Output,
} from '@angular/core';
import {of, Subject, switchMap} from 'rxjs';

import {audioParam} from '../decorators/audio-param';
import {AudioBufferService} from '../services/audio-buffer.service';
import {AUDIO_CONTEXT} from '../tokens/audio-context';
import {asAudioNode} from '../tokens/audio-node';
import {CONSTRUCTOR_SUPPORT} from '../tokens/constructor-support';
import {AudioParamInput} from '../types/audio-param-input';
import {parse} from '../utils/parse';

@Directive({
    standalone: true,
    selector: '[waAudioBufferSourceNode]',
    inputs: [
        'loop',
        'loopStart',
        'loopEnd',
        'channelCount',
        'channelCountMode',
        'channelInterpretation',
    ],
    providers: [asAudioNode(WebAudioBufferSource)],
    exportAs: 'AudioNode',
})
export class WebAudioBufferSource extends AudioBufferSourceNode implements OnDestroy {
    @Input('buffer')
    set bufferSetter(source: AudioBuffer | string | null) {
        this.buffer$.next(source);
    }

    @Input('detune')
    @audioParam('detune')
    detuneParam?: AudioParamInput;

    @Input('playbackRate')
    @audioParam('playbackRate')
    playbackRateParam?: AudioParamInput;

    @Output()
    ended?: EventEmitter<void>;

    buffer$!: Subject<AudioBuffer | string | null>;

    constructor(
        @Inject(AudioBufferService) audioBufferService: AudioBufferService,
        @Inject(AUDIO_CONTEXT) context: BaseAudioContext,
        @Inject(CONSTRUCTOR_SUPPORT) modern: boolean,
        @Attribute('autoplay') autoplay: string | null,
        @Attribute('detune') detuneArg: string | null,
        @Attribute('playbackRate') playbackRateArg: string | null,
    ) {
        const detune = parse(detuneArg, 0);
        const playbackRate = parse(playbackRateArg, 1);

        if (modern) {
            super(context, {detune, playbackRate});
            WebAudioBufferSource.init(this, null, autoplay, audioBufferService);
        } else {
            const result = context.createBufferSource() as WebAudioBufferSource;

            Object.setPrototypeOf(
                WebAudioBufferSource.prototype,
                Object.getPrototypeOf(result),
            );
            Object.setPrototypeOf(result, WebAudioBufferSource.prototype);

            result.playbackRate.value = playbackRate;
            WebAudioBufferSource.init(result, null, autoplay, audioBufferService);

            return result;
        }
    }

    static init(
        that: WebAudioBufferSource,
        _node: AudioNode | null,
        autoplay: string | null,
        audioBufferService: AudioBufferService,
    ): void {
        if (autoplay !== null) {
            that.start();
        }

        const ended = new EventEmitter<void>();

        that.ended = ended;
        that.onended = () => ended.emit();
        that.buffer$ = new Subject<AudioBuffer | string | null>();
        that.buffer$
            .pipe(
                // eslint-disable-next-line @typescript-eslint/promise-function-async
                switchMap(source =>
                    typeof source === 'string'
                        ? audioBufferService.fetch(source)
                        : of(source),
                ),
            )
            .subscribe(buffer => {
                that.buffer = buffer;
            });
    }

    ngOnDestroy(): void {
        this.buffer$.complete();

        try {
            this.stop();
        } catch {
            // noop
        }

        this.disconnect();
    }
}