"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=364,exports.ids=[364],exports.modules={81322:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NotificationPageModule:()=>NotificationPageModule});var common=__webpack_require__(12057),core=__webpack_require__(74788),router=__webpack_require__(3984),taiga_ui_addon_doc_components=__webpack_require__(93147);class TuiAddonDocModule{}__name(TuiAddonDocModule,"TuiAddonDocModule"),TuiAddonDocModule.\u0275fac=__name(function(t){return new(t||TuiAddonDocModule)},"TuiAddonDocModule_Factory"),TuiAddonDocModule.\u0275mod=core.\u0275\u0275defineNgModule({type:TuiAddonDocModule}),TuiAddonDocModule.\u0275inj=core.\u0275\u0275defineInjector({imports:[taiga_ui_addon_doc_components.JF,taiga_ui_addon_doc_components.mG,taiga_ui_addon_doc_components.Lx,taiga_ui_addon_doc_components.Lq,taiga_ui_addon_doc_components.u4]}),__name(function(type){return[TuiAddonDocModule,RouterModule.forChild(tuiGenerateRoutes(type))]},"tuiGetDocModules");var taiga_ui_core_components_button=__webpack_require__(12628),taiga_ui_core_components_notification=__webpack_require__(60885),taiga_ui_kit_components_badge=__webpack_require__(88070),src=__webpack_require__(89678),permissions_src=__webpack_require__(84787);class NotificationPageExample1{constructor(notifications,permissions){this.notifications=notifications,this.permissions=permissions,this.notificationPermissionState$=this.permissions.state("notifications")}requestPermission(){this.notifications.requestPermission().subscribe({next:permission=>console.info("Permission status:",permission),error:err=>console.error(err)})}}__name(NotificationPageExample1,"NotificationPageExample1"),NotificationPageExample1.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageExample1,deps:[{token:src.g},{token:permissions_src.qQ}],target:core.\u0275\u0275FactoryTarget.Component}),NotificationPageExample1.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:NotificationPageExample1,selector:"notification-page-example-1",ngImport:core,template:'<ng-container [ngSwitch]="notificationPermissionState$ | async">\n    <tui-badge\n        *ngSwitchCase="\'granted\'"\n        status="success"\n        value="Permission is granted"\n    ></tui-badge>\n\n    <tui-badge\n        *ngSwitchCase="\'denied\'"\n        status="error"\n        value="Permission is denied"\n    ></tui-badge>\n\n    <button\n        *ngSwitchDefault\n        tuiButton\n        (click)="requestPermission()"\n    >\n        Request permission\n    </button>\n</ng-container>\n',components:[{type:taiga_ui_kit_components_badge.g,selector:"tui-badge",inputs:["value","size","status","hoverable"]},{type:taiga_ui_core_components_button.v0,selector:"button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]",inputs:["appearance","disabled","icon","iconRight","shape","showLoader","size"]}],directives:[{type:common.RF,selector:"[ngSwitch]",inputs:["ngSwitch"]},{type:common.n9,selector:"[ngSwitchCase]",inputs:["ngSwitchCase"]},{type:common.ED,selector:"[ngSwitchDefault]"}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageExample1,decorators:[{type:core.Component,args:[{selector:"notification-page-example-1",templateUrl:"./index.html",changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:src.g},{type:permissions_src.qQ}]}});var operators=__webpack_require__(57192);class NotificationPageExample2{constructor(notifications,permissions){this.notifications=notifications,this.permissions=permissions,this.denied$=this.permissions.state("notifications").pipe((0,operators.UI)(permissions_src.ki))}sendNotification(){this.notifications.requestPermission().pipe((0,operators.hX)(permissions_src._j),(0,operators.wt)(()=>this.notifications.open("Web APIs for Angular",{body:"High quality lightweight wrappers for native Web APIs for idiomatic use with Angular",icon:"assets/images/web-api.svg"}))).subscribe()}}__name(NotificationPageExample2,"NotificationPageExample2"),NotificationPageExample2.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageExample2,deps:[{token:src.g},{token:permissions_src.qQ}],target:core.\u0275\u0275FactoryTarget.Component}),NotificationPageExample2.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:NotificationPageExample2,selector:"notification-page-example-2",ngImport:core,template:'<button\n    tuiButton\n    [disabled]="(denied$ | async)!"\n    (click)="sendNotification()"\n>\n    Send notification\n</button>\n',components:[{type:taiga_ui_core_components_button.v0,selector:"button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]",inputs:["appearance","disabled","icon","iconRight","shape","showLoader","size"]}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageExample2,decorators:[{type:core.Component,args:[{selector:"notification-page-example-2",templateUrl:"./index.html",changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:src.g},{type:permissions_src.qQ}]}});var cjs=__webpack_require__(72921);class NotificationPageExample3{constructor(notifications,permissions){this.notifications=notifications,this.permissions=permissions,this.denied$=this.permissions.state("notifications").pipe((0,operators.UI)(permissions_src.ki))}sendNotification(){this.notifications.requestPermission().pipe((0,operators.hX)(permissions_src._j),(0,operators.wt)(()=>this.notifications.open("Close me, please!",{requireInteraction:!0})),(0,operators.Rs)((0,cjs.timer)(5e3))).subscribe({complete:()=>console.info("Notification closed!")})}}__name(NotificationPageExample3,"NotificationPageExample3"),NotificationPageExample3.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageExample3,deps:[{token:src.g},{token:permissions_src.qQ}],target:core.\u0275\u0275FactoryTarget.Component}),NotificationPageExample3.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:NotificationPageExample3,selector:"notification-page-example-3",ngImport:core,template:'<button\n    tuiButton\n    [disabled]="(denied$ | async)!"\n    (click)="sendNotification()"\n>\n    Send notification\n</button>\n',components:[{type:taiga_ui_core_components_button.v0,selector:"button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]",inputs:["appearance","disabled","icon","iconRight","shape","showLoader","size"]}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageExample3,decorators:[{type:core.Component,args:[{selector:"notification-page-example-3",templateUrl:"./index.html",changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:src.g},{type:permissions_src.qQ}]}});class NotificationPageExample4{constructor(notifications,permissions){this.notifications=notifications,this.permissions=permissions,this.denied$=this.permissions.state("notifications").pipe((0,operators.UI)(permissions_src.ki))}sendNotification(){this.notifications.requestPermission().pipe((0,operators.hX)(permissions_src._j),(0,operators.wt)(()=>this.notifications.open("Click me, please",{body:'Then open console and investigate property "target"',requireInteraction:!0,data:`Randomly generated number: ${Math.random().toFixed(2)}`})),(0,operators.wt)(notification=>(0,cjs.fromEvent)(notification,"click"))).subscribe(console.info)}}__name(NotificationPageExample4,"NotificationPageExample4"),NotificationPageExample4.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageExample4,deps:[{token:src.g},{token:permissions_src.qQ}],target:core.\u0275\u0275FactoryTarget.Component}),NotificationPageExample4.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:NotificationPageExample4,selector:"notification-page-example-4",ngImport:core,template:'<button\n    tuiButton\n    [disabled]="(denied$ | async)!"\n    (click)="sendNotification()"\n>\n    Send notification\n</button>\n',components:[{type:taiga_ui_core_components_button.v0,selector:"button[tuiButton], button[tuiIconButton], a[tuiButton], a[tuiIconButton]",inputs:["appearance","disabled","icon","iconRight","shape","showLoader","size"]}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageExample4,decorators:[{type:core.Component,args:[{selector:"notification-page-example-4",templateUrl:"./index.html",changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:src.g},{type:permissions_src.qQ}]}});class NotificationPageComponent{constructor(permissions){this.permissions=permissions,this.notificationPermissionState$=this.permissions.state("notifications"),this.deniedPermissionNotification="You have denied notification permission. Please, change it in browser settings.",this.gettingPermissionExample={"index.ts":__webpack_require__.e(146).then(__webpack_require__.t.bind(__webpack_require__,93146,17)),"index.html":__webpack_require__.e(420).then(__webpack_require__.t.bind(__webpack_require__,33420,17))},this.createNotificationExample={"index.ts":__webpack_require__.e(954).then(__webpack_require__.t.bind(__webpack_require__,14954,17)),"index.html":__webpack_require__.e(821).then(__webpack_require__.t.bind(__webpack_require__,87821,17))},this.closeNotificationExample={"index.ts":__webpack_require__.e(380).then(__webpack_require__.t.bind(__webpack_require__,87179,17)),"index.html":__webpack_require__.e(728).then(__webpack_require__.t.bind(__webpack_require__,98728,17))},this.listenNotificationEventsExample={"index.ts":__webpack_require__.e(742).then(__webpack_require__.t.bind(__webpack_require__,4742,17)),"index.html":__webpack_require__.e(739).then(__webpack_require__.t.bind(__webpack_require__,93739,17))}}}__name(NotificationPageComponent,"NotificationPageComponent"),NotificationPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageComponent,deps:[{token:permissions_src.qQ}],target:core.\u0275\u0275FactoryTarget.Component}),NotificationPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:NotificationPageComponent,selector:"notification-page",ngImport:core,template:'<h2 class="header">\n    <img\n        alt="Notification API logo"\n        height="64"\n        src="assets/logos/notification/logo.svg"\n    />\n    Notification API\n</h2>\n\n<p class="description">\n    A library for declarative use of\n    <a\n        href="https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API"\n        target="_blank"\n        tuiLink\n    >\n        Notification API\n    </a>\n    with Angular.\n\n    <tui-doc-code\n        code="npm i &#64;ng-web-apis/notification"\n        filename="Installation"\n    ></tui-doc-code>\n</p>\n\n<p>\n    The main entity of the library is\n    <code>NotificationService</code>\n    (provided in root).\n    <br />\n    Inject it into your component and investigate all example above.\n</p>\n\n<section *ngIf="notificationPermissionState$ | async as notificationPermission">\n    <tui-doc-example\n        heading="Getting Permissions"\n        [content]="gettingPermissionExample"\n        [description]="permissionDescription"\n    >\n        <ng-template #permissionDescription>\n            Before an app can send a notification, the user must grant the application the right to do so.\n\n            <p>\n                Use\n                <code>requestPermission</code>\n                method to request consent to display notifications.\n                <br />\n                It returns Observable which emits value after user select option inside system prompt.\n            </p>\n        </ng-template>\n\n        <tui-notification status="warning">\n            Notification prompting can only be done from a user gesture (e.g. clicking a button)!\n            <br />\n            Otherwise, some browsers will silently disallow notification permission requests.\n        </tui-notification>\n\n        <notification-page-example-1></notification-page-example-1>\n    </tui-doc-example>\n\n    <tui-doc-example\n        heading="Create notification"\n        [content]="createNotificationExample"\n        [description]="createNotificationDescription"\n    >\n        <ng-template #createNotificationDescription>\n            Use\n            <code>open</code>\n            method to create a notification.\n            <p>\n                The first argument is a\n                <strong>title</strong>\n                to display within the notification.\n            </p>\n            <p>\n                The second argument contains many experimental\n                <strong>options</strong>\n                to enhance the notification behavior and appearance.\n                <br />\n                See the full\n                <a\n                    href="https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification"\n                    target="_blank"\n                    tuiLink\n                >\n                    list of available options\n                </a>\n                .\n            </p>\n        </ng-template>\n\n        <tui-notification\n            *ngIf="notificationPermission === \'denied\'"\n            status="error"\n        >\n            {{ deniedPermissionNotification }}\n        </tui-notification>\n\n        <notification-page-example-2></notification-page-example-2>\n    </tui-doc-example>\n\n    <tui-doc-example\n        heading="Close notification"\n        [content]="closeNotificationExample"\n        [description]="closeNotificationDescription"\n    >\n        <ng-template #closeNotificationDescription>\n            <p>\n                The observable (returned by\n                <code>open</code>\n                method) automatically\n                <strong>completes</strong>\n                the stream when the notification is closed (e.g. user clicks the close button).\n            </p>\n\n            <p>\n                You can also close the notification manually by closing the stream by\n                <code>takeUntil</code>\n                operator.\n            </p>\n        </ng-template>\n\n        <tui-notification\n            *ngIf="notificationPermission === \'denied\'"\n            status="error"\n        >\n            {{ deniedPermissionNotification }}\n        </tui-notification>\n\n        <notification-page-example-3></notification-page-example-3>\n    </tui-doc-example>\n\n    <tui-doc-example\n        heading="Listen to notification events"\n        [content]="listenNotificationEventsExample"\n        [description]="listenEventDescription"\n    >\n        <ng-template #listenEventDescription>\n            The observable (returned by\n            <code>open</code>\n            method) emits\n            <code>Notification</code>\n            instance after its successful creation.\n\n            <p>\n                Use rxjs function\n                <code>fromEvent</code>\n                to listen events that can be triggered on the\n                <code>Notification</code>\n                instance.\n                <br />\n                See the full\n                <a\n                    href="https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API#notification_events"\n                    target="_blank"\n                    tuiLink\n                >\n                    list of available events\n                </a>\n                .\n            </p>\n        </ng-template>\n\n        <tui-notification\n            *ngIf="notificationPermission === \'denied\'"\n            status="error"\n        >\n            {{ deniedPermissionNotification }}\n        </tui-notification>\n\n        <notification-page-example-4></notification-page-example-4>\n    </tui-doc-example>\n</section>\n',styles:[":host{display:block;max-width:900px;margin:0 auto;font:var(--tui-font-text-m)}tui-notification{margin-bottom:1rem}.header{font:var(--tui-font-heading-4);display:flex;align-items:center;grid-gap:1rem;gap:1rem}.description{margin-bottom:2rem}\n"],components:[{type:taiga_ui_addon_doc_components.c0,selector:"tui-doc-code",inputs:["filename","code"]},{type:taiga_ui_addon_doc_components.f2,selector:"tui-doc-example",inputs:["id","heading","description","content","fullsize","componentName"]},{type:taiga_ui_core_components_notification.L,selector:"tui-notification",inputs:["hasIcon","icon","status","size","hideClose"],outputs:["close"]},{type:NotificationPageExample1,selector:"notification-page-example-1"},{type:NotificationPageExample2,selector:"notification-page-example-2"},{type:NotificationPageExample3,selector:"notification-page-example-3"},{type:NotificationPageExample4,selector:"notification-page-example-4"}],directives:[{type:common.O5,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageComponent,decorators:[{type:core.Component,args:[{selector:"notification-page",templateUrl:"./notification-page.template.html",styleUrls:["./notification-page.style.less"],changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:permissions_src.qQ}]}});class NotificationPageModule{}__name(NotificationPageModule,"NotificationPageModule"),NotificationPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),NotificationPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageModule,declarations:[NotificationPageComponent,NotificationPageExample1,NotificationPageExample2,NotificationPageExample3,NotificationPageExample4],imports:[common.ez,TuiAddonDocModule,taiga_ui_kit_components_badge.f,taiga_ui_core_components_button.fN,taiga_ui_core_components_notification.H,router.Bz]}),NotificationPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageModule,imports:[[common.ez,TuiAddonDocModule,taiga_ui_kit_components_badge.f,taiga_ui_core_components_button.fN,taiga_ui_core_components_notification.H,router.Bz.forChild([{path:"",component:NotificationPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,TuiAddonDocModule,taiga_ui_kit_components_badge.f,taiga_ui_core_components_button.fN,taiga_ui_core_components_notification.H,router.Bz.forChild([{path:"",component:NotificationPageComponent}])],declarations:[NotificationPageComponent,NotificationPageExample1,NotificationPageExample2,NotificationPageExample3,NotificationPageExample4]}]}]})},76091:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>MutationObserverDirective});var core=__webpack_require__(74788),mutation_observer_init=__webpack_require__(6348);function booleanAttribute(element,attribute){return null!==element.getAttribute(attribute)||void 0}function mutationObserverInitFactory({nativeElement}){const attributeFilter=nativeElement.getAttribute("attributeFilter");return{attributeFilter:null==attributeFilter?void 0:attributeFilter.split(",").map(attr=>attr.trim()),attributeOldValue:booleanAttribute(nativeElement,"attributeOldValue"),attributes:booleanAttribute(nativeElement,"attributes"),characterData:booleanAttribute(nativeElement,"characterData"),characterDataOldValue:booleanAttribute(nativeElement,"characterDataOldValue"),childList:booleanAttribute(nativeElement,"childList"),subtree:booleanAttribute(nativeElement,"subtree")}}__name(booleanAttribute,"booleanAttribute"),__name(mutationObserverInitFactory,"mutationObserverInitFactory");class MutationObserverDirective extends MutationObserver{constructor({nativeElement},config,_1,_2,_3,_4,_5,_6,_7){super(records=>{this.waMutationObserver.emit(records)}),this.waMutationObserver=new core.EventEmitter,this.observe(nativeElement,config)}ngOnDestroy(){this.disconnect()}}__name(MutationObserverDirective,"MutationObserverDirective"),MutationObserverDirective.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverDirective,deps:[{token:core.ElementRef},{token:mutation_observer_init.k},{token:"attributeFilter",attribute:!0},{token:"attributeOldValue",attribute:!0},{token:"attributes",attribute:!0},{token:"characterData",attribute:!0},{token:"characterDataOldValue",attribute:!0},{token:"childList",attribute:!0},{token:"subtree",attribute:!0}],target:core.\u0275\u0275FactoryTarget.Directive}),MutationObserverDirective.\u0275dir=core.\u0275\u0275ngDeclareDirective({minVersion:"12.0.0",version:"12.2.17",type:MutationObserverDirective,selector:"[waMutationObserver]",outputs:{waMutationObserver:"waMutationObserver"},providers:[{provide:mutation_observer_init.k,deps:[core.ElementRef],useFactory:mutationObserverInitFactory}],exportAs:["MutationObserver"],usesInheritance:!0,ngImport:core}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverDirective,decorators:[{type:core.Directive,args:[{selector:"[waMutationObserver]",exportAs:"MutationObserver",providers:[{provide:mutation_observer_init.k,deps:[core.ElementRef],useFactory:mutationObserverInitFactory}]}]}],ctorParameters:function(){return[{type:core.ElementRef,decorators:[{type:core.Inject,args:[core.ElementRef]}]},{type:void 0,decorators:[{type:core.Inject,args:[mutation_observer_init.k]}]},{type:void 0,decorators:[{type:core.Attribute,args:["attributeFilter"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["attributeOldValue"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["attributes"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["characterData"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["characterDataOldValue"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["childList"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["subtree"]}]}]},propDecorators:{waMutationObserver:[{type:core.Output}]}})},1367:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k2:()=>mutation_observer_init.k,NI:()=>MutationObserverModule,IM:()=>MutationObserverService});var mutation_observer_directive=__webpack_require__(76091),core=__webpack_require__(74788),cjs=__webpack_require__(72921),mutation_observer_init=__webpack_require__(6348);class MutationObserverService extends cjs.Observable{constructor({nativeElement},config){super(subscriber=>{const observer=new MutationObserver(records=>{subscriber.next(records)});return observer.observe(nativeElement,config),()=>{observer.disconnect()}})}}__name(MutationObserverService,"MutationObserverService"),MutationObserverService.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverService,deps:[{token:core.ElementRef},{token:mutation_observer_init.k}],target:core.\u0275\u0275FactoryTarget.Injectable}),MutationObserverService.\u0275prov=core.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverService}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverService,decorators:[{type:core.Injectable}],ctorParameters:function(){return[{type:core.ElementRef,decorators:[{type:core.Inject,args:[core.ElementRef]}]},{type:void 0,decorators:[{type:core.Inject,args:[mutation_observer_init.k]}]}]}});class MutationObserverModule{}__name(MutationObserverModule,"MutationObserverModule"),MutationObserverModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),MutationObserverModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverModule,declarations:[mutation_observer_directive.V],exports:[mutation_observer_directive.V]}),MutationObserverModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverModule}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:MutationObserverModule,decorators:[{type:core.NgModule,args:[{declarations:[mutation_observer_directive.V],exports:[mutation_observer_directive.V]}]}]})},6348:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>MUTATION_OBSERVER_INIT});const MUTATION_OBSERVER_INIT=new(__webpack_require__(74788).InjectionToken)("MutationObserver config")},89678:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>NOTIFICATION_SUPPORT,g:()=>NotificationService});var core=__webpack_require__(74788),src=__webpack_require__(92176);const NOTIFICATION_SUPPORT=new core.InjectionToken("Is Notification API supported?",{factory:()=>"Notification"in(0,core.inject)(src.m9)});var cjs=__webpack_require__(72921),operators=__webpack_require__(57192);const NOT_SUPPORTED_ERROR$=(0,cjs.throwError)(()=>new Error("Notification API is not supported in your browser"));class NotificationService{constructor(support){this.support=support}requestPermission(){return this.support?new cjs.Observable(subscriber=>{var _a;null===(_a=Notification.requestPermission(permission=>{subscriber.next(permission),subscriber.complete()}))||void 0===_a||_a.catch(err=>subscriber.error(err))}):NOT_SUPPORTED_ERROR$}open(title,options){return this.support?(0,cjs.defer)(()=>{const notification=new Notification(title,options),close$=(0,cjs.fromEvent)(notification,"close");return new cjs.Observable(subscriber=>(subscriber.next(notification),()=>notification.close())).pipe((0,operators.Rs)(close$))}):NOT_SUPPORTED_ERROR$}}__name(NotificationService,"NotificationService"),NotificationService.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationService,deps:[{token:NOTIFICATION_SUPPORT}],target:core.\u0275\u0275FactoryTarget.Injectable}),NotificationService.\u0275prov=core.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationService,providedIn:"root"}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:NotificationService,decorators:[{type:core.Injectable,args:[{providedIn:"root"}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:core.Inject,args:[NOTIFICATION_SUPPORT]}]}]}})},84787:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yc:()=>PERMISSIONS_SUPPORT,qQ:()=>PermissionsService,ki:()=>isDenied,_j:()=>isGranted});var core=__webpack_require__(74788),cjs=__webpack_require__(72921),operators=__webpack_require__(57192),src=__webpack_require__(92176);const PERMISSIONS=new core.InjectionToken("An abstraction over window.navigator.permissions object",{factory:()=>(0,core.inject)(src.s5).permissions}),PERMISSIONS_SUPPORT=new core.InjectionToken("Is Permissions API supported?",{factory:()=>!!(0,core.inject)(PERMISSIONS)});class PermissionsService{constructor(permissions,permissionsSupported){this.permissions=permissions,this.permissionsSupported=permissionsSupported}state(nameOrDescriptor){const descriptor="string"==typeof nameOrDescriptor?{name:nameOrDescriptor}:nameOrDescriptor;return new cjs.Observable(subscriber=>{if(this.permissionsSupported)return(0,cjs.from)(this.permissions.query(descriptor)).pipe((0,operators.wt)(status=>(0,cjs.fromEvent)(status,"change").pipe((0,operators.O4)(null),(0,operators.UI)(()=>status.state)))).subscribe(subscriber);subscriber.error("Permissions is not supported in your browser")}).pipe((0,operators.d)({bufferSize:1,refCount:!0}))}}function isGranted(state){return"granted"===state}function isDenied(state){return"denied"===state}__name(PermissionsService,"PermissionsService"),PermissionsService.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:PermissionsService,deps:[{token:PERMISSIONS},{token:PERMISSIONS_SUPPORT}],target:core.\u0275\u0275FactoryTarget.Injectable}),PermissionsService.\u0275prov=core.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:PermissionsService,providedIn:"root"}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:PermissionsService,decorators:[{type:core.Injectable,args:[{providedIn:"root"}]}],ctorParameters:function(){return[{type:Permissions,decorators:[{type:core.Inject,args:[PERMISSIONS]}]},{type:void 0,decorators:[{type:core.Inject,args:[PERMISSIONS_SUPPORT]}]}]}}),__name(isGranted,"isGranted"),__name(isDenied,"isDenied"),__name(function(state){return"prompt"===state||"default"===state},"isPrompt")}};