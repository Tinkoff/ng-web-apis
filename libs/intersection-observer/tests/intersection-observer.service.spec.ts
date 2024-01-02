import {IntersectionObserverService} from '@ng-web-apis/intersection-observer';
import {take} from 'rxjs';

describe('IntersectionObserverService', () => {
    it('works', done => {
        let called = false;

        const nativeElement = document.createElement('div');
        const service = new IntersectionObserverService(
            {
                nativeElement,
            },
            '0px 0px 0px 0px',
            0,
            {
                nativeElement: document.body,
            },
        );

        service.pipe(take(1)).subscribe({
            next: () => {
                called = true;
            },
        });

        document.body.appendChild(nativeElement);

        setTimeout(() => {
            expect(called).toBe(true);
            done();
        });
    });
});