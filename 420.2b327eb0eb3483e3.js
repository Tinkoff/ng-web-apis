"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[420],{33420:n=>{n.exports='<ng-container [ngSwitch]="notificationPermissionState$ | async">\n    <tui-badge\n        *ngSwitchCase="\'granted\'"\n        status="success"\n        value="Permission is granted"\n    ></tui-badge>\n\n    <tui-badge\n        *ngSwitchCase="\'denied\'"\n        status="error"\n        value="Permission is denied"\n    ></tui-badge>\n\n    <button\n        *ngSwitchDefault\n        tuiButton\n        (click)="requestPermission()"\n    >\n        Request permission\n    </button>\n</ng-container>\n'}}]);