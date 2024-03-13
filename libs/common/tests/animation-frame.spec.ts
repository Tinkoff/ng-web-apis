import {TestBed} from '@angular/core/testing';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import type {Observable} from 'rxjs';
import {first} from 'rxjs';

describe('ANIMATION_FRAME', () => {
    it('passes DOMHighResTimeStamp to the subscriber', done => {
        TestBed.configureTestingModule({});

        const animationFrame$: Observable<DOMHighResTimeStamp> =
            TestBed.inject(ANIMATION_FRAME);

        animationFrame$.pipe(first()).subscribe(timestamp => {
            expect(typeof timestamp).toBe('number');
            done();
        });
    });
});
