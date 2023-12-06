import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {NotificationService} from '@ng-web-apis/notification';
import {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';
import {fromEvent} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/operators';

@Component({
    selector: 'notification-page-example-4',
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationPageExample4 {
    readonly denied$ = this.permissions.state('notifications').pipe(map(isDenied));

    constructor(
        @Inject(NotificationService) private readonly notifications: NotificationService,
        @Inject(PermissionsService) private readonly permissions: PermissionsService,
    ) {}

    sendNotification(): void {
        this.notifications
            .requestPermission()
            .pipe(
                filter(isGranted),
                switchMap(() =>
                    this.notifications.open('Click me, please', {
                        body: 'Then open console and investigate property "target"',
                        requireInteraction: true,
                        data: `Randomly generated number: ${Math.random().toFixed(2)}`,
                    }),
                ),
                switchMap(notification => fromEvent(notification, 'click')),
            )
            .subscribe(console.info);
    }
}
