"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[299],{91299:(W,Z,n)=>{n.r(Z),n.d(Z,{NotificationPageModule:()=>j});var l=n(88692),v=n(22864),t=n(64537),r=n(35673);let x=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[r.JF,r.mG,r.Lx,r.Lq,r.u4]}),i})();var f=n(12628),U=n(60885),N=n(88070),c=n(13237),u=n(89404);function P(i,a){1&i&&t._UZ(0,"tui-badge",4)}function A(i,a){1&i&&t._UZ(0,"tui-badge",5)}function T(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.requestPermission())}),t._uU(1," Request permission "),t.qZA()}}let b=(()=>{class i{constructor(e,o){this.notifications=e,this.permissions=o,this.notificationPermissionState$=this.permissions.state("notifications")}requestPermission(){this.notifications.requestPermission().subscribe({next:e=>console.info("Permission status:",e),error:e=>console.error(e)})}static{this.\u0275fac=function(o){return new(o||i)(t.Y36(u.g),t.Y36(c.qQ))}}static{this.\u0275cmp=t.Xpm({type:i,selectors:[["notification-page-example-1"]],decls:5,vars:5,consts:[[3,"ngSwitch"],["status","success","value","Permission is granted",4,"ngSwitchCase"],["status","error","value","Permission is denied",4,"ngSwitchCase"],["tuiButton","",3,"click",4,"ngSwitchDefault"],["status","success","value","Permission is granted"],["status","error","value","Permission is denied"],["tuiButton","",3,"click"]],template:function(o,s){1&o&&(t.ynx(0,0),t.ALo(1,"async"),t.YNc(2,P,1,0,"tui-badge",1),t.YNc(3,A,1,0,"tui-badge",2),t.YNc(4,T,2,0,"button",3),t.BQk()),2&o&&(t.Q6J("ngSwitch",t.lcZ(1,3,s.notificationPermissionState$)),t.xp6(2),t.Q6J("ngSwitchCase","granted"),t.xp6(1),t.Q6J("ngSwitchCase","denied"))},dependencies:[l.RF,l.n9,l.ED,N.g,f.v0,l.Ov],encapsulation:2,changeDetection:0})}}return i})();var g=n(27969),h=n(74970),d=n(61528);let y=(()=>{class i{constructor(e,o){this.notifications=e,this.permissions=o,this.denied$=this.permissions.state("notifications").pipe((0,g.U)(c.ki))}sendNotification(){this.notifications.requestPermission().pipe((0,h.h)(c._j),(0,d.w)(()=>this.notifications.open("Web APIs for Angular",{body:"High quality lightweight wrappers for native Web APIs for idiomatic use with Angular",icon:"assets/images/web-api.svg"}))).subscribe()}static{this.\u0275fac=function(o){return new(o||i)(t.Y36(u.g),t.Y36(c.qQ))}}static{this.\u0275cmp=t.Xpm({type:i,selectors:[["notification-page-example-2"]],decls:3,vars:3,consts:[["tuiButton","",3,"disabled","click"]],template:function(o,s){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.sendNotification()}),t.ALo(1,"async"),t._uU(2," Send notification\n"),t.qZA()),2&o&&t.Q6J("disabled",t.lcZ(1,1,s.denied$))},dependencies:[f.v0,l.Ov],encapsulation:2,changeDetection:0})}}return i})();var E=n(1995),C=n(13528);let I=(()=>{class i{constructor(e,o){this.notifications=e,this.permissions=o,this.denied$=this.permissions.state("notifications").pipe((0,g.U)(c.ki))}sendNotification(){this.notifications.requestPermission().pipe((0,h.h)(c._j),(0,d.w)(()=>this.notifications.open("Close me, please!",{requireInteraction:!0})),(0,C.R)((0,E.H)(5e3))).subscribe({complete:()=>console.info("Notification closed!")})}static{this.\u0275fac=function(o){return new(o||i)(t.Y36(u.g),t.Y36(c.qQ))}}static{this.\u0275cmp=t.Xpm({type:i,selectors:[["notification-page-example-3"]],decls:3,vars:3,consts:[["tuiButton","",3,"disabled","click"]],template:function(o,s){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.sendNotification()}),t.ALo(1,"async"),t._uU(2," Send notification\n"),t.qZA()),2&o&&t.Q6J("disabled",t.lcZ(1,1,s.denied$))},dependencies:[f.v0,l.Ov],encapsulation:2,changeDetection:0})}}return i})();var S=n(14581);let Y=(()=>{class i{constructor(e,o){this.notifications=e,this.permissions=o,this.denied$=this.permissions.state("notifications").pipe((0,g.U)(c.ki))}sendNotification(){this.notifications.requestPermission().pipe((0,h.h)(c._j),(0,d.w)(()=>this.notifications.open("Click me, please",{body:'Then open console and investigate property "target"',requireInteraction:!0,data:`Randomly generated number: ${Math.random().toFixed(2)}`})),(0,d.w)(e=>(0,S.R)(e,"click"))).subscribe(console.info)}static{this.\u0275fac=function(o){return new(o||i)(t.Y36(u.g),t.Y36(c.qQ))}}static{this.\u0275cmp=t.Xpm({type:i,selectors:[["notification-page-example-4"]],decls:3,vars:3,consts:[["tuiButton","",3,"disabled","click"]],template:function(o,s){1&o&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.sendNotification()}),t.ALo(1,"async"),t._uU(2," Send notification\n"),t.qZA()),2&o&&t.Q6J("disabled",t.lcZ(1,1,s.denied$))},dependencies:[f.v0,l.Ov],encapsulation:2,changeDetection:0})}}return i})();function J(i,a){1&i&&(t._uU(0," Before an app can send a notification, the user must grant the application the right to do so. "),t.TgZ(1,"p"),t._uU(2," Use "),t.TgZ(3,"code"),t._uU(4,"requestPermission"),t.qZA(),t._uU(5," method to request consent to display notifications. "),t._UZ(6,"br"),t._uU(7," It returns Observable which emits value after user select option inside system prompt. "),t.qZA())}function M(i,a){1&i&&(t._uU(0," Use "),t.TgZ(1,"code"),t._uU(2,"open"),t.qZA(),t._uU(3," method to create a notification. "),t.TgZ(4,"p"),t._uU(5," The first argument is a "),t.TgZ(6,"strong"),t._uU(7,"title"),t.qZA(),t._uU(8," to display within the notification. "),t.qZA(),t.TgZ(9,"p"),t._uU(10," The second argument contains many experimental "),t.TgZ(11,"strong"),t._uU(12,"options"),t.qZA(),t._uU(13," to enhance the notification behavior and appearance. "),t._UZ(14,"br"),t._uU(15," See the full "),t.TgZ(16,"a",16),t._uU(17," list of available options "),t.qZA(),t._uU(18," . "),t.qZA())}function Q(i,a){if(1&i&&(t.TgZ(0,"tui-notification",17),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.deniedPermissionNotification," ")}}function D(i,a){1&i&&(t.TgZ(0,"p"),t._uU(1," The observable (returned by "),t.TgZ(2,"code"),t._uU(3,"open"),t.qZA(),t._uU(4," method) automatically "),t.TgZ(5,"strong"),t._uU(6,"completes"),t.qZA(),t._uU(7," the stream when the notification is closed (e.g. user clicks the close button). "),t.qZA(),t.TgZ(8,"p"),t._uU(9," You can also close the notification manually by closing the stream by "),t.TgZ(10,"code"),t._uU(11,"takeUntil"),t.qZA(),t._uU(12," operator. "),t.qZA())}function O(i,a){if(1&i&&(t.TgZ(0,"tui-notification",17),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.deniedPermissionNotification," ")}}function q(i,a){1&i&&(t._uU(0," The observable (returned by "),t.TgZ(1,"code"),t._uU(2,"open"),t.qZA(),t._uU(3," method) emits "),t.TgZ(4,"code"),t._uU(5,"Notification"),t.qZA(),t._uU(6," instance after its successful creation. "),t.TgZ(7,"p"),t._uU(8," Use rxjs function "),t.TgZ(9,"code"),t._uU(10,"fromEvent"),t.qZA(),t._uU(11," to listen events that can be triggered on the "),t.TgZ(12,"code"),t._uU(13,"Notification"),t.qZA(),t._uU(14," instance. "),t._UZ(15,"br"),t._uU(16," See the full "),t.TgZ(17,"a",18),t._uU(18," list of available events "),t.qZA(),t._uU(19," . "),t.qZA())}function L(i,a){if(1&i&&(t.TgZ(0,"tui-notification",17),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.deniedPermissionNotification," ")}}function F(i,a){if(1&i&&(t.TgZ(0,"section")(1,"tui-doc-example",6),t.YNc(2,J,8,0,"ng-template",null,7,t.W1O),t.TgZ(4,"tui-notification",8),t._uU(5," Notification prompting can only be done from a user gesture (e.g. clicking a button)! "),t._UZ(6,"br"),t._uU(7," Otherwise, some browsers will silently disallow notification permission requests. "),t.qZA(),t._UZ(8,"notification-page-example-1"),t.qZA(),t.TgZ(9,"tui-doc-example",9),t.YNc(10,M,19,0,"ng-template",null,10,t.W1O),t.YNc(12,Q,2,1,"tui-notification",11),t._UZ(13,"notification-page-example-2"),t.qZA(),t.TgZ(14,"tui-doc-example",12),t.YNc(15,D,13,0,"ng-template",null,13,t.W1O),t.YNc(17,O,2,1,"tui-notification",11),t._UZ(18,"notification-page-example-3"),t.qZA(),t.TgZ(19,"tui-doc-example",14),t.YNc(20,q,20,0,"ng-template",null,15,t.W1O),t.YNc(22,L,2,1,"tui-notification",11),t._UZ(23,"notification-page-example-4"),t.qZA()()),2&i){const e=a.ngIf,o=t.MAs(3),s=t.MAs(11),m=t.MAs(16),B=t.MAs(21),p=t.oxw();t.xp6(1),t.Q6J("content",p.gettingPermissionExample)("description",o),t.xp6(8),t.Q6J("content",p.createNotificationExample)("description",s),t.xp6(3),t.Q6J("ngIf","denied"===e),t.xp6(2),t.Q6J("content",p.closeNotificationExample)("description",m),t.xp6(3),t.Q6J("ngIf","denied"===e),t.xp6(2),t.Q6J("content",p.listenNotificationEventsExample)("description",B),t.xp6(3),t.Q6J("ngIf","denied"===e)}}let $=(()=>{class i{constructor(e){this.permissions=e,this.notificationPermissionState$=this.permissions.state("notifications"),this.deniedPermissionNotification="You have denied notification permission. Please, change it in browser settings.",this.gettingPermissionExample={"index.ts":n.e(146).then(n.t.bind(n,93146,17)),"index.html":n.e(420).then(n.t.bind(n,33420,17))},this.createNotificationExample={"index.ts":n.e(954).then(n.t.bind(n,14954,17)),"index.html":n.e(821).then(n.t.bind(n,87821,17))},this.closeNotificationExample={"index.ts":n.e(380).then(n.t.bind(n,87179,17)),"index.html":n.e(728).then(n.t.bind(n,98728,17))},this.listenNotificationEventsExample={"index.ts":n.e(742).then(n.t.bind(n,4742,17)),"index.html":n.e(739).then(n.t.bind(n,93739,17))}}static{this.\u0275fac=function(o){return new(o||i)(t.Y36(c.qQ))}}static{this.\u0275cmp=t.Xpm({type:i,selectors:[["notification-page"]],decls:18,vars:3,consts:[[1,"header"],["alt","Notification API logo","height","64","src","assets/logos/notification/logo.svg"],[1,"description"],["href","https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API","target","_blank","tuiLink",""],["code","npm i @ng-web-apis/notification","filename","Installation"],[4,"ngIf"],["heading","Getting Permissions",3,"content","description"],["permissionDescription",""],["status","warning"],["heading","Create notification",3,"content","description"],["createNotificationDescription",""],["status","error",4,"ngIf"],["heading","Close notification",3,"content","description"],["closeNotificationDescription",""],["heading","Listen to notification events",3,"content","description"],["listenEventDescription",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification","target","_blank","tuiLink",""],["status","error"],["href","https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API#notification_events","target","_blank","tuiLink",""]],template:function(o,s){1&o&&(t.TgZ(0,"h2",0),t._UZ(1,"img",1),t._uU(2," Notification API\n"),t.qZA(),t.TgZ(3,"p",2),t._uU(4," A library for declarative use of "),t.TgZ(5,"a",3),t._uU(6," Notification API "),t.qZA(),t._uU(7," with Angular. "),t._UZ(8,"tui-doc-code",4),t.qZA(),t.TgZ(9,"p"),t._uU(10," The main entity of the library is "),t.TgZ(11,"code"),t._uU(12,"NotificationService"),t.qZA(),t._uU(13," (provided in root). "),t._UZ(14,"br"),t._uU(15," Inject it into your component and investigate all example above.\n"),t.qZA(),t.YNc(16,F,24,11,"section",5),t.ALo(17,"async")),2&o&&(t.xp6(16),t.Q6J("ngIf",t.lcZ(17,1,s.notificationPermissionState$)))},dependencies:[l.O5,r.c0,r.f2,U.L,b,y,I,Y,l.Ov],styles:["[_nghost-%COMP%]{display:block;max-width:900px;margin:0 auto;font:var(--tui-font-text-m)}tui-notification[_ngcontent-%COMP%]{margin-bottom:1rem}.header[_ngcontent-%COMP%]{font:var(--tui-font-heading-4);display:flex;align-items:center;gap:1rem}.description[_ngcontent-%COMP%]{margin-bottom:2rem}"],changeDetection:0})}}return i})(),j=(()=>{class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=t.oAB({type:i})}static{this.\u0275inj=t.cJS({imports:[l.ez,x,N.f,f.fN,U.H,v.Bz.forChild([{path:"",component:$}])]})}}return i})()}}]);