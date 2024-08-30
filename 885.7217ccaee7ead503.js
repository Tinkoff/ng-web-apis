"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[885],{2885:(J,h,n)=>{n.r(h),n.d(h,{default:()=>B});var s=n(1423),l=n(6610),t=n(2978),r=n(2018),f=n(753);let N=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=t.$C({type:i}),i.\u0275inj=t.G2t({imports:[f.ii,f.mH,f.nl,f.AC,f.Zs]}),i})();var v=n(3497),P=n(5513),x=n(2374),g=n(834),d=n(9877);function b(i,e){1&i&&t.nrm(0,"tui-badge",4)}function j(i,e){1&i&&t.nrm(0,"tui-badge",5)}function y(i,e){if(1&i){const a=t.RV6();t.j41(0,"button",6),t.bIt("click",function(){t.eBV(a);const c=t.XpG();return t.Njj(c.requestPermission())}),t.EFF(1," Request permission "),t.k0s()}}let A=(()=>{var i;class e{constructor(){(0,s.A)(this,"notifications",(0,t.WQX)(d.JE)),(0,s.A)(this,"notificationPermissionState$",(0,t.WQX)(r.Kn).state("notifications"))}requestPermission(){this.notifications.requestPermission().subscribe({next:o=>console.info("Permission status:",o),error:o=>console.error(o)})}}return i=e,(0,s.A)(e,"\u0275fac",function(o){return new(o||i)}),(0,s.A)(e,"\u0275cmp",t.VBU({type:i,selectors:[["notification-page-example-1"]],standalone:!0,features:[t.aNF],decls:5,vars:5,consts:[[3,"ngSwitch"],["status","success","value","Permission is granted",4,"ngSwitchCase"],["status","error","value","Permission is denied",4,"ngSwitchCase"],["tuiButton","",3,"click",4,"ngSwitchDefault"],["status","success","value","Permission is granted"],["status","error","value","Permission is denied"],["tuiButton","",3,"click"]],template:function(o,c){1&o&&(t.qex(0,0),t.nI1(1,"async"),t.DNE(2,b,1,0,"tui-badge",1),t.DNE(3,j,1,0,"tui-badge",2),t.DNE(4,y,2,0,"button",3),t.bVm()),2&o&&(t.Y8G("ngSwitch",t.bMT(1,3,c.notificationPermissionState$)),t.R7$(2),t.Y8G("ngSwitchCase","granted"),t.R7$(1),t.Y8G("ngSwitchCase","denied"))},dependencies:[l.MD,l.ux,l.e1,l.fG,l.Jj,g.g,g.v],encapsulation:2,changeDetection:0})),e})();var F=n(3527),E=n(8503),m=n(2831);let T=(()=>{var i;class e{constructor(){(0,s.A)(this,"notifications",(0,t.WQX)(d.JE)),(0,s.A)(this,"denied$",(0,t.WQX)(r.Kn).state("notifications").pipe((0,F.T)(r.GZ)))}sendNotification(){this.notifications.requestPermission().pipe((0,E.p)(r.kR),(0,m.n)(()=>this.notifications.open("Web APIs for Angular",{body:"High quality lightweight wrappers for native Web APIs for idiomatic use with Angular",icon:"assets/images/web-api.svg"}))).subscribe()}}return i=e,(0,s.A)(e,"\u0275fac",function(o){return new(o||i)}),(0,s.A)(e,"\u0275cmp",t.VBU({type:i,selectors:[["notification-page-example-2"]],standalone:!0,features:[t.aNF],decls:3,vars:3,consts:[["tuiButton","",3,"disabled","click"]],template:function(o,c){1&o&&(t.j41(0,"button",0),t.bIt("click",function(){return c.sendNotification()}),t.nI1(1,"async"),t.EFF(2," Send notification\n"),t.k0s()),2&o&&t.Y8G("disabled",t.bMT(1,1,c.denied$))},dependencies:[l.MD,l.Jj],encapsulation:2,changeDetection:0})),e})();var I=n(6340),D=n(3229);let k=(()=>{var i;class e{constructor(){(0,s.A)(this,"notifications",(0,t.WQX)(d.JE)),(0,s.A)(this,"denied$",(0,t.WQX)(r.Kn).state("notifications").pipe((0,F.T)(r.GZ)))}sendNotification(){this.notifications.requestPermission().pipe((0,E.p)(r.kR),(0,m.n)(()=>this.notifications.open("Close me, please!",{requireInteraction:!0})),(0,I.Q)((0,D.O)(5e3))).subscribe({complete:()=>console.info("Notification closed!")})}}return i=e,(0,s.A)(e,"\u0275fac",function(o){return new(o||i)}),(0,s.A)(e,"\u0275cmp",t.VBU({type:i,selectors:[["notification-page-example-3"]],standalone:!0,features:[t.aNF],decls:3,vars:3,consts:[["tuiButton","",3,"disabled","click"]],template:function(o,c){1&o&&(t.j41(0,"button",0),t.bIt("click",function(){return c.sendNotification()}),t.nI1(1,"async"),t.EFF(2," Send notification\n"),t.k0s()),2&o&&t.Y8G("disabled",t.bMT(1,1,c.denied$))},dependencies:[l.MD,l.Jj],encapsulation:2,changeDetection:0})),e})();var G=n(8129);let S=(()=>{var i;class e{constructor(){(0,s.A)(this,"notifications",(0,t.WQX)(d.JE)),(0,s.A)(this,"denied$",(0,t.WQX)(r.Kn).state("notifications").pipe((0,F.T)(r.GZ)))}sendNotification(){this.notifications.requestPermission().pipe((0,E.p)(r.kR),(0,m.n)(()=>this.notifications.open("Click me, please",{body:'Then open console and investigate property "target"',requireInteraction:!0,data:`Randomly generated number: ${Math.random().toFixed(2)}`})),(0,m.n)(o=>(0,G.R)(o,"click"))).subscribe(console.info)}}return i=e,(0,s.A)(e,"\u0275fac",function(o){return new(o||i)}),(0,s.A)(e,"\u0275cmp",t.VBU({type:i,selectors:[["notification-page-example-4"]],standalone:!0,features:[t.aNF],decls:3,vars:3,consts:[["tuiButton","",3,"disabled","click"]],template:function(o,c){1&o&&(t.j41(0,"button",0),t.bIt("click",function(){return c.sendNotification()}),t.nI1(1,"async"),t.EFF(2," Send notification\n"),t.k0s()),2&o&&t.Y8G("disabled",t.bMT(1,1,c.denied$))},dependencies:[l.MD,l.Jj],encapsulation:2,changeDetection:0})),e})();function $(i,e){1&i&&(t.EFF(0," Before an app can send a notification, the user must grant the application the right to do so. "),t.j41(1,"p"),t.EFF(2," Use "),t.j41(3,"code"),t.EFF(4,"requestPermission"),t.k0s(),t.EFF(5," method to request consent to display notifications. "),t.nrm(6,"br"),t.EFF(7," It returns Observable which emits value after user select option inside system prompt. "),t.k0s())}function M(i,e){1&i&&(t.EFF(0," Use "),t.j41(1,"code"),t.EFF(2,"open"),t.k0s(),t.EFF(3," method to create a notification. "),t.j41(4,"p"),t.EFF(5," The first argument is a "),t.j41(6,"strong"),t.EFF(7,"title"),t.k0s(),t.EFF(8," to display within the notification. "),t.k0s(),t.j41(9,"p"),t.EFF(10," The second argument contains many experimental "),t.j41(11,"strong"),t.EFF(12,"options"),t.k0s(),t.EFF(13," to enhance the notification behavior and appearance. "),t.nrm(14,"br"),t.EFF(15," See the full "),t.j41(16,"a",16),t.EFF(17," list of available options "),t.k0s(),t.EFF(18," . "),t.k0s())}function R(i,e){if(1&i&&(t.j41(0,"tui-notification",17),t.EFF(1),t.k0s()),2&i){const a=t.XpG(2);t.R7$(1),t.SpI(" ",a.deniedPermissionNotification," ")}}function C(i,e){1&i&&(t.j41(0,"p"),t.EFF(1," The observable (returned by "),t.j41(2,"code"),t.EFF(3,"open"),t.k0s(),t.EFF(4," method) automatically "),t.j41(5,"strong"),t.EFF(6,"completes"),t.k0s(),t.EFF(7," the stream when the notification is closed (e.g. user clicks the close button). "),t.k0s(),t.j41(8,"p"),t.EFF(9," You can also close the notification manually by closing the stream by "),t.j41(10,"code"),t.EFF(11,"takeUntil"),t.k0s(),t.EFF(12," operator. "),t.k0s())}function Y(i,e){if(1&i&&(t.j41(0,"tui-notification",17),t.EFF(1),t.k0s()),2&i){const a=t.XpG(2);t.R7$(1),t.SpI(" ",a.deniedPermissionNotification," ")}}function U(i,e){1&i&&(t.EFF(0," The observable (returned by "),t.j41(1,"code"),t.EFF(2,"open"),t.k0s(),t.EFF(3," method) emits "),t.j41(4,"code"),t.EFF(5,"Notification"),t.k0s(),t.EFF(6," instance after its successful creation. "),t.j41(7,"p"),t.EFF(8," Use rxjs function "),t.j41(9,"code"),t.EFF(10,"fromEvent"),t.k0s(),t.EFF(11," to listen events that can be triggered on the "),t.j41(12,"code"),t.EFF(13,"Notification"),t.k0s(),t.EFF(14," instance. "),t.nrm(15,"br"),t.EFF(16," See the full "),t.j41(17,"a",18),t.EFF(18," list of available events "),t.k0s(),t.EFF(19," . "),t.k0s())}function W(i,e){if(1&i&&(t.j41(0,"tui-notification",17),t.EFF(1),t.k0s()),2&i){const a=t.XpG(2);t.R7$(1),t.SpI(" ",a.deniedPermissionNotification," ")}}function X(i,e){if(1&i&&(t.j41(0,"section")(1,"tui-doc-example",6),t.DNE(2,$,8,0,"ng-template",null,7,t.C5r),t.j41(4,"tui-notification",8),t.EFF(5," Notification prompting can only be done from a user gesture (e.g. clicking a button)! "),t.nrm(6,"br"),t.EFF(7," Otherwise, some browsers will silently disallow notification permission requests. "),t.k0s(),t.nrm(8,"notification-page-example-1"),t.k0s(),t.j41(9,"tui-doc-example",9),t.DNE(10,M,19,0,"ng-template",null,10,t.C5r),t.DNE(12,R,2,1,"tui-notification",11),t.nrm(13,"notification-page-example-2"),t.k0s(),t.j41(14,"tui-doc-example",12),t.DNE(15,C,13,0,"ng-template",null,13,t.C5r),t.DNE(17,Y,2,1,"tui-notification",11),t.nrm(18,"notification-page-example-3"),t.k0s(),t.j41(19,"tui-doc-example",14),t.DNE(20,U,20,0,"ng-template",null,15,t.C5r),t.DNE(22,W,2,1,"tui-notification",11),t.nrm(23,"notification-page-example-4"),t.k0s()()),2&i){const a=e.ngIf,o=t.sdS(3),c=t.sdS(11),p=t.sdS(16),Q=t.sdS(21),u=t.XpG();t.R7$(1),t.Y8G("content",u.gettingPermissionExample)("description",o),t.R7$(8),t.Y8G("content",u.createNotificationExample)("description",c),t.R7$(3),t.Y8G("ngIf","denied"===a),t.R7$(2),t.Y8G("content",u.closeNotificationExample)("description",p),t.R7$(3),t.Y8G("ngIf","denied"===a),t.R7$(2),t.Y8G("content",u.listenNotificationEventsExample)("description",Q),t.R7$(3),t.Y8G("ngIf","denied"===a)}}const B=(()=>{var i;class e{constructor(){(0,s.A)(this,"notificationPermissionState$",(0,t.WQX)(r.Kn).state("notifications")),(0,s.A)(this,"deniedPermissionNotification","You have denied notification permission. Please, change it in browser settings."),(0,s.A)(this,"gettingPermissionExample",{"index.ts":n.e(992).then(n.t.bind(n,7992,17)),"index.html":n.e(504).then(n.t.bind(n,3504,17))}),(0,s.A)(this,"createNotificationExample",{"index.ts":n.e(19).then(n.t.bind(n,5400,17)),"index.html":n.e(267).then(n.t.bind(n,267,17))}),(0,s.A)(this,"closeNotificationExample",{"index.ts":n.e(254).then(n.t.bind(n,5254,17)),"index.html":n.e(698).then(n.t.bind(n,8698,17))}),(0,s.A)(this,"listenNotificationEventsExample",{"index.ts":n.e(656).then(n.t.bind(n,3656,17)),"index.html":n.e(96).then(n.t.bind(n,2096,17))})}}return i=e,(0,s.A)(e,"\u0275fac",function(o){return new(o||i)}),(0,s.A)(e,"\u0275cmp",t.VBU({type:i,selectors:[["notification-page"]],standalone:!0,features:[t.aNF],decls:18,vars:3,consts:[[1,"header"],["alt","Notification API logo","height","64","src","assets/logos/notification/logo.svg"],[1,"description"],["href","https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API","rel","noreferrer","target","_blank","tuiLink",""],["code","npm i @ng-web-apis/notification","filename","Installation"],[4,"ngIf"],["heading","Getting Permissions",3,"content","description"],["permissionDescription",""],["status","warning"],["heading","Create notification",3,"content","description"],["createNotificationDescription",""],["status","error",4,"ngIf"],["heading","Close notification",3,"content","description"],["closeNotificationDescription",""],["heading","Listen to notification events",3,"content","description"],["listenEventDescription",""],["href","https://developer.mozilla.org/en-US/docs/Web/API/Notification/Notification","rel","noreferrer","target","_blank","tuiLink",""],["status","error"],["href","https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API#notification_events","rel","noreferrer","target","_blank","tuiLink",""]],template:function(o,c){1&o&&(t.j41(0,"h2",0),t.nrm(1,"img",1),t.EFF(2," Notification API\n"),t.k0s(),t.j41(3,"p",2),t.EFF(4," A library for declarative use of "),t.j41(5,"a",3),t.EFF(6," Notification API "),t.k0s(),t.EFF(7," with Angular. "),t.nrm(8,"tui-doc-code",4),t.k0s(),t.j41(9,"p"),t.EFF(10," The main entity of the library is "),t.j41(11,"code"),t.EFF(12,"NotificationService"),t.k0s(),t.EFF(13," (provided in root). "),t.nrm(14,"br"),t.EFF(15," Inject it into your component and investigate all example above.\n"),t.k0s(),t.DNE(16,X,24,11,"section",5),t.nI1(17,"async")),2&o&&(t.R7$(16),t.Y8G("ngIf",t.bMT(17,1,c.notificationPermissionState$)))},dependencies:[l.MD,l.bT,l.Jj,A,T,k,S,N,f.tV,f.o3,g.g,v.Pv,P.l,P.E,x.O,x.v],styles:["[_nghost-%COMP%]{display:block;max-width:900px;margin:0 auto;font:var(--tui-font-text-m)}tui-notification[_ngcontent-%COMP%]{margin-bottom:1rem}.header[_ngcontent-%COMP%]{font:var(--tui-font-heading-4);display:flex;align-items:center;gap:1rem}.description[_ngcontent-%COMP%]{margin-bottom:2rem}"],changeDetection:0})),e})()}}]);