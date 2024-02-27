import {inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE, WINDOW} from '@ng-web-apis/common';

@Injectable({
    providedIn: 'root',
})
export class StorageService implements Storage {
    private readonly localStorage = inject(LOCAL_STORAGE);
    private readonly windowRef = inject(WINDOW);

    get length(): number {
        return this.localStorage.length;
    }

    getItem(key: string): string | null {
        return this.localStorage.getItem(key);
    }

    setItem(key: string, value: string): void {
        const oldValue = this.getItem(key);

        this.localStorage.setItem(key, value);
        this.notify(key, value, oldValue);
    }

    removeItem(key: string): void {
        const oldValue = this.getItem(key);

        this.localStorage.removeItem(key);
        this.notify(key, null, oldValue);
    }

    clear(): void {
        this.localStorage.clear();
        this.notify(null, null, null);
    }

    key(index: number): string | null {
        return this.localStorage.key(index);
    }

    private notify(
        key: string | null,
        newValue: string | null,
        oldValue: string | null,
    ): void {
        const event = new StorageEvent('storage', {
            key,
            newValue,
            oldValue,
            storageArea: this.localStorage,
            url: this.windowRef.location.href,
        });

        this.windowRef.dispatchEvent(event);
    }
}
