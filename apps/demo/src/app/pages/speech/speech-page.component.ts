import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {
    continuous,
    isSaid,
    skipUntilSaid,
    SPEECH_SYNTHESIS_VOICES,
    SpeechRecognitionService,
    SpeechSynthesisUtteranceOptions,
    takeUntilSaid,
    TextToSpeechDirective,
    UtterancePipe,
} from '@ng-web-apis/speech';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';
import {TuiContextWithImplicit, TuiLetModule, tuiPure} from '@taiga-ui/cdk';
import {
    TuiButtonModule,
    TuiDataListModule,
    TuiLabelModule,
    TuiTooltipModule,
} from '@taiga-ui/core';
import {TuiSelectModule, TuiTextAreaModule} from '@taiga-ui/kit';
import {filter, map, merge, Observable, repeat, retry, share} from 'rxjs';

@Component({
    standalone: true,
    selector: 'speech-page',
    imports: [
        CommonModule,
        FormsModule,
        TuiLetModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiTextAreaModule,
        TuiButtonModule,
        TuiLabelModule,
        TuiTooltipModule,
        TuiSidebarModule,
        TextToSpeechDirective,
        UtterancePipe,
    ],
    templateUrl: './speech-page.component.html',
    styleUrls: ['./speech-page.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpeechPageComponent {
    private readonly recognition$ = inject(SpeechRecognitionService);
    protected readonly platformId = inject(PLATFORM_ID);
    protected readonly voices$ = inject(SPEECH_SYNTHESIS_VOICES);
    protected readonly isBrowser = isPlatformBrowser(this.platformId);
    protected paused = true;

    protected voice = null;

    protected text = 'Hit play/pause to speak this text';

    protected readonly nameExtractor = ({
        $implicit,
    }: TuiContextWithImplicit<SpeechSynthesisVoice>): string => $implicit.name;

    @tuiPure
    protected get record$(): Observable<SpeechRecognitionResult[]> {
        return this.result$.pipe(
            skipUntilSaid('Okay Angular'),
            takeUntilSaid('Thank you Angular'),
            repeat(),
            continuous(),
        );
    }

    @tuiPure
    protected get open$(): Observable<boolean> {
        return merge(
            this.result$.pipe(
                filter(isSaid('Show sidebar')),
                map(
                    // eslint-disable-next-line no-restricted-syntax
                    () => true,
                ),
            ),
            this.result$.pipe(
                filter(isSaid('Hide sidebar')),

                map(
                    // eslint-disable-next-line no-restricted-syntax
                    () => false,
                ),
            ),
        );
    }

    protected get options(): SpeechSynthesisUtteranceOptions {
        return this.getOptions(this.voice);
    }

    @tuiPure
    private get result$(): Observable<SpeechRecognitionResult[]> {
        return this.recognition$.pipe(retry(), repeat(), share());
    }

    protected voiceByName(_: number, {name}: SpeechSynthesisVoice): string {
        return name;
    }

    protected onClick(): void {
        this.paused = !this.paused;
        // Re-trigger utterance pipe:
        this.text = this.paused ? `${this.text} ` : this.text;
    }

    protected onEnd(): void {
        console.info('Speech synthesis ended');
    }

    @tuiPure
    private getOptions(
        voice: SpeechSynthesisVoice | null,
    ): SpeechSynthesisUtteranceOptions {
        return {
            lang: 'en-US',
            voice,
        };
    }
}
