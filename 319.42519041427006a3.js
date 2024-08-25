"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[319],{2319:(I,p,n)=>{n.r(p),n.d(p,{default:()=>U});var i=n(6889),m=n(6733),c=n(2133),d=n(8977),v=n(5140),f=n(2092),u=n(4882),t=n(755),h=n(4133);let S=(()=>{var a;class o{constructor(){(0,i.Z)(this,"localStorage",(0,t.f3M)(h.H3)),(0,i.Z)(this,"windowRef",(0,t.f3M)(h.m9))}get length(){return this.localStorage.length}getItem(e){return this.localStorage.getItem(e)}setItem(e,s){const l=this.getItem(e);this.localStorage.setItem(e,s),this.notify(e,s,l)}removeItem(e){const s=this.getItem(e);this.localStorage.removeItem(e),this.notify(e,null,s)}clear(){this.localStorage.clear(),this.notify(null,null,null)}key(e){return this.localStorage.key(e)}notify(e,s,l){const g=new StorageEvent("storage",{key:e,newValue:s,oldValue:l,storageArea:this.localStorage,url:this.windowRef.location.href});this.windowRef.dispatchEvent(g)}}return a=o,(0,i.Z)(o,"\u0275fac",function(e){return new(e||a)}),(0,i.Z)(o,"\u0275prov",t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})),o})();var Z=n(409);const E=new t.OlP("[WA_STORAGE_EVENT]",{factory:()=>(0,Z.R)((0,t.f3M)(h.m9),"storage")});var T=n(5333),A=n(2425);let x=(()=>{var a;class o{constructor(){(0,i.Z)(this,"storageService",(0,t.f3M)(S)),(0,i.Z)(this,"storage",(0,t.f3M)(h.H3)),(0,i.Z)(this,"value$",(0,t.f3M)(E).pipe(function y(a){return(0,T.h)(({key:o})=>null===o||o===a)}("value"),function M(){return(0,A.U)(({newValue:a})=>a)}())),(0,i.Z)(this,"native",""),(0,i.Z)(this,"service",""),(0,i.Z)(this,"index",0)}withStorage(e){this.storage.setItem("value",e),this.native=e}withService(e){this.storageService.setItem("value",e),this.service=e}}return a=o,(0,i.Z)(o,"\u0275fac",function(e){return new(e||a)}),(0,i.Z)(o,"\u0275cmp",t.Xpm({type:a,selectors:[["example"]],standalone:!0,features:[t.jDz],decls:16,vars:5,consts:[["tuiGroup",""],[3,"ngModel","ngModelChange"]],template:function(e,s){1&e&&(t.TgZ(0,"h3"),t._uU(1," Value from "),t.TgZ(2,"code"),t._uU(3,"STORAGE_EVENT"),t.qZA(),t._uU(4),t.ALo(5,"async"),t.qZA(),t.TgZ(6,"p",0)(7,"tui-input",1),t.NdJ("ngModelChange",function(g){return s.withStorage(g)}),t._uU(8," Native update "),t.qZA(),t.TgZ(9,"tui-input",1),t.NdJ("ngModelChange",function(g){return s.withService(g)}),t._uU(10," With service "),t.qZA()(),t.TgZ(11,"tui-notification"),t._uU(12," Native event is only triggered with update happens in another tab. Try opening this page in another tab and type into the first input. Use "),t.TgZ(13,"code"),t._uU(14,"StorageService"),t.qZA(),t._uU(15," if you need to know about changes in the same tab too.\n"),t.qZA()),2&e&&(t.xp6(4),t.hij(" : ",t.lcZ(5,3,s.value$),"\n"),t.xp6(3),t.Q6J("ngModel",s.native),t.xp6(2),t.Q6J("ngModel",s.service))},dependencies:[m.ez,m.Ov,c.u5,c.JJ,c.On,u.Qf,u.K3,u.wU,f.H,f.L],encapsulation:2,changeDetection:0})),o})();const U=(()=>{var a;class o{constructor(){(0,i.Z)(this,"example",{TypeScript:n.e(633).then(n.t.bind(n,5633,17)),HTML:n.e(534).then(n.t.bind(n,5534,17))})}}return a=o,(0,i.Z)(o,"\u0275fac",function(e){return new(e||a)}),(0,i.Z)(o,"\u0275cmp",t.Xpm({type:a,selectors:[["common-page"]],standalone:!0,features:[t.jDz],decls:2,vars:1,consts:[[3,"content"]],template:function(e,s){1&e&&(t.TgZ(0,"tui-doc-example",0),t._UZ(1,"example"),t.qZA()),2&e&&t.Q6J("content",s.example)},dependencies:[m.ez,x,c.u5,d.u4,d.f2,d.qn,v.n6,u.Qf,f.H],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}tui-doc-example[_ngcontent-%COMP%]{padding:0}"],changeDetection:0})),o})()}}]);