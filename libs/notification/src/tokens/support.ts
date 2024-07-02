import {inject, InjectionToken} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';

export const WA_NOTIFICATION_SUPPORT = new InjectionToken<boolean>(
    '[WA_NOTIFICATION_SUPPORT]: Is Notification API supported?',
    {
        factory: () => 'Notification' in inject(WINDOW),
    },
);

/**
 * @deprecated: drop in v5.0, use {@link WA_NOTIFICATION_SUPPORT}
 */
export const NOTIFICATION_SUPPORT = WA_NOTIFICATION_SUPPORT;
