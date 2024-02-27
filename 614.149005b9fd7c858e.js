"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[614],{9614:(D,v,o)=>{o.r(v),o.d(v,{default:()=>N});var e=o(1423),p=o(6556),t=o(9508),C=o(3308),_=o(4722),h=o(8804),P=o(3253),M=o(685),k=o(8840),y=o(5760),O=o(3454),b=o(8986);class f extends _.c{constructor(r,s){let n,u;try{n=new Worker(r,s)}catch(d){u=d}super(d=>{let W=h.w;u?d.error(u):this.destroy$.isStopped?d.complete():n&&(W=(0,P.h)((0,M.R)(n,"message").pipe((0,k.M)(E=>d.next(E))),(0,M.R)(n,"error").pipe((0,k.M)(E=>d.error(E)))).pipe((0,y.Q)(this.destroy$))),W.subscribe().add(d)}),(0,e.A)(this,"worker",void 0),(0,e.A)(this,"url",void 0),(0,e.A)(this,"destroy$",void 0),this.worker=n,this.url=r,this.destroy$=new O.B}static fromFunction(r,s){return new f(f.createFnUrl(r),s)}static execute(r,s){return(0,C.A)(function*(){const n=f.fromFunction(r),u=n.pipe((0,b.s)(1)).toPromise();return n.postMessage(s),u.then(d=>(n.terminate(),d))})()}static createFnUrl(r){const n=new Blob([`(\nfunction(fn){\n    function isFunction(type){\n        return type === 'function';\n    }\n\n    self.addEventListener('message', function(e) {\n        var result = fn.call(null, e.data);\n        if (result && [typeof result.then, typeof result.catch].every(isFunction)){\n            result\n                .then(postMessage)\n                .catch(function(error) {\n                    setTimeout(function(){throw error}, 0)\n                })\n        } else {\n            postMessage(result);\n        }\n    })\n}\n)(${r});`],{type:"text/javascript"});return URL.createObjectURL(n)}terminate(){this.destroy$.isStopped||(this.worker&&this.worker.terminate(),URL.revokeObjectURL(this.url),this.destroy$.next(),this.destroy$.complete())}postMessage(r){this.worker&&this.worker.postMessage(r)}}var i=o(6779),l=o(5245),g=o(9450),I=o(5544);let w=(()=>{var c;class r{constructor(){(0,e.A)(this,"date$",(0,I.O)(0,1e3).pipe((0,i.T)(()=>Date.now())))}}return c=r,(0,e.A)(r,"\u0275fac",function(n){return new(n||c)}),(0,e.A)(r,"\u0275cmp",t.VBU({type:c,selectors:[["app-clock"]],standalone:!0,features:[t.aNF],decls:3,vars:6,template:function(n,u){1&n&&(t.EFF(0),t.nI1(1,"date"),t.nI1(2,"async")),2&n&&t.SpI(" ",t.i5U(1,1,t.bMT(2,4,u.date$),"mediumTime")," ")},dependencies:[p.MD,p.Jj,p.vh],encapsulation:2,changeDetection:0})),r})();function F(c,r){if(1&c){const s=t.RV6();t.qex(0),t.nrm(1,"app-clock"),t.j41(2,"div",1)(3,"button",2),t.bIt("click",function(){t.eBV(s);const u=t.XpG();return t.Njj(u.workerThread.postMessage())}),t.EFF(4," Run in worker process "),t.k0s(),t.j41(5,"p"),t.EFF(6),t.nI1(7,"async"),t.k0s(),t.j41(8,"tui-notification"),t.EFF(9,"This would be calculated in several seconds in a background thread"),t.k0s()(),t.j41(10,"div",1)(11,"button",2),t.bIt("click",function(){t.eBV(s);const u=t.XpG();return t.Njj(u.emitter.next())}),t.EFF(12," Run in main process "),t.k0s(),t.j41(13,"p"),t.EFF(14),t.nI1(15,"async"),t.k0s(),t.j41(16,"tui-notification"),t.EFF(17,"This would freeze your main thread for several seconds"),t.k0s()(),t.bVm()}if(2&c){const s=t.XpG();t.R7$(6),t.SpI("Execution time: ",t.bMT(7,2,s.workerData$),""),t.R7$(8),t.SpI("Execution time: ",t.bMT(15,4,s.result$),"")}}function x(){const c=performance.now();return Array.from({length:16e3}).forEach((r,s)=>Array.from({length:s}).reduce(n=>n+1,0)),performance.now()-c}let N=(()=>{var c;class r{constructor(){(0,e.A)(this,"platformId",(0,t.WQX)(t.Agw)),(0,e.A)(this,"isBrowser",(0,p.UE)(this.platformId)),(0,e.A)(this,"workerThread",f.fromFunction(x)),(0,e.A)(this,"workerData$",this.workerThread.pipe(function m(){return(0,i.T)(({data:c})=>c)}())),(0,e.A)(this,"emitter",new O.B),(0,e.A)(this,"result$",this.emitter.pipe((0,i.T)(x)))}}return c=r,(0,e.A)(r,"\u0275fac",function(n){return new(n||c)}),(0,e.A)(r,"\u0275cmp",t.VBU({type:c,selectors:[["workers-page"]],standalone:!0,features:[t.aNF],decls:1,vars:1,consts:[[4,"ngIf"],[1,"example"],["appearance","secondary","tuiButton","",3,"click"]],template:function(n,u){1&n&&t.DNE(0,F,18,6,"ng-container",0),2&n&&t.Y8G("ngIf",u.isBrowser)},dependencies:[p.MD,p.bT,p.Jj,l.Pv,l.SM,g.O,g.v,w],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.example[_ngcontent-%COMP%]{min-width:360px;border-top:1px solid gainsboro;margin-top:16px;padding-top:16px}"],changeDetection:0})),r})()},9450:(D,v,o)=>{o.d(v,{O:()=>f,v:()=>T});var e=o(9508),p=o(392),t=o(4646),C=o(3575),_=o(5245),h=o(6556),P=o(5735);function M(i,m){1&i&&e.nrm(0,"tui-svg",5),2&i&&e.Y8G("src",m.polymorpheusOutlet)}const k=function(i){return{$implicit:i}};function y(i,m){if(1&i&&(e.qex(0),e.DNE(1,M,1,1,"tui-svg",4),e.bVm()),2&i){const a=e.XpG();e.R7$(1),e.Y8G("polymorpheusOutlet",a.icon)("polymorpheusOutletContext",e.eq3(2,k,a.status))}}function O(i,m){if(1&i){const a=e.RV6();e.j41(0,"button",6),e.bIt("click",function(){e.eBV(a);const g=e.XpG();return e.Njj(g.close.emit())}),e.nI1(1,"async"),e.k0s()}if(2&i){const a=e.XpG();e.Y8G("icon",a.icons.close)("title",e.bMT(1,2,a.closeWord$))}}const b=["*"];let T=(()=>{class i{constructor(a,l,g){this.closeWord$=a,this.icons=l,this.options=g,this.hasIcon=this.options.hasIcon,this.icon=this.options.icon,this.status=this.options.status,this.size=this.options.size,this.hideClose=!1,this.close=new e.bkB}get hasClose(){return!this.hideClose&&(0,p.Pj)(this.close)}}return i.\u0275fac=function(a){return new(a||i)(e.rXU(t.R3),e.rXU(t._Z),e.rXU(t.Ub))},i.\u0275cmp=e.VBU({type:i,selectors:[["tui-notification"],["a","tuiNotification",""],["button","tuiNotification",""]],hostVars:2,hostBindings:function(a,l){2&a&&e.BMQ("data-status",l.status)("data-size",l.size)},inputs:{hasIcon:"hasIcon",icon:"icon",status:"status",size:"size",hideClose:"hideClose"},outputs:{close:"close"},ngContentSelectors:b,decls:5,vars:3,consts:[[4,"ngIf"],[1,"t-content"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button","class","t-close",3,"icon","title","click",4,"ngIf"],["automation-id","tui-notification__more",1,"t-more",3,"src"],["automation-id","tui-notification__icon","class","t-icon",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-notification__icon",1,"t-icon",3,"src"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button",1,"t-close",3,"icon","title","click"]],template:function(a,l){1&a&&(e.NAR(),e.DNE(0,y,2,4,"ng-container",0),e.j41(1,"div",1),e.SdG(2),e.k0s(),e.DNE(3,O,2,4,"button",2),e.nrm(4,"tui-svg",3)),2&a&&(e.Y8G("ngIf",l.icon&&l.hasIcon),e.R7$(3),e.Y8G("ngIf",l.hasClose),e.R7$(1),e.Y8G("src",l.icons.more))},dependencies:[C._Y,_.SM,h.bT,P.OA,h.Jj],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:flex;padding:.75rem 1rem;border-radius:var(--tui-radius-m);background:#fff;background:var(--tui-base-01);box-sizing:border-box;overflow:hidden}[_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{display:none}button[_nghost-%COMP%], a[_nghost-%COMP%]{border:none;cursor:pointer}button[_nghost-%COMP%]   .t-more[_ngcontent-%COMP%], a[_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{display:inline-flex;color:var(--tui-text-01);opacity:.5}[data-size=s][_nghost-%COMP%]{padding:.375rem .625rem}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1.25rem;margin:0 .375rem 0 -.125rem}[data-size=s][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem .75rem}[data-size=s][_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem 0}[data-size=m][_nghost-%COMP%]{padding:.75rem}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;margin-right:.5rem}[data-size=m][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.125rem -.125rem 1rem}[data-size=m][_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem 0}[data-size=l][_nghost-%COMP%]{padding:1rem;font:var(--tui-font-text-m);border-radius:var(--tui-radius-l)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:.5rem}[data-size=l][_nghost-%COMP%]   .t-more[_ngcontent-%COMP%]{margin-right:-.5rem}[data-status=info][_nghost-%COMP%]{color:var(--tui-info-fill);background:linear-gradient(var(--tui-info-bg),var(--tui-info-bg)),var(--tui-base-01)}[data-status=success][_nghost-%COMP%]{color:var(--tui-success-fill);background:linear-gradient(var(--tui-success-bg),var(--tui-success-bg)),var(--tui-base-01)}[data-status=error][_nghost-%COMP%]{color:var(--tui-error-fill);background:linear-gradient(var(--tui-error-bg),var(--tui-error-bg)),var(--tui-base-01)}[data-status=warning][_nghost-%COMP%]{color:var(--tui-warning-fill);background:linear-gradient(var(--tui-warning-bg),var(--tui-warning-bg)),var(--tui-base-01)}[data-status=neutral][_nghost-%COMP%]{color:var(--tui-neutral-fill);background:linear-gradient(var(--tui-neutral-bg),var(--tui-neutral-bg)),var(--tui-base-01)}.t-content[_ngcontent-%COMP%]{flex:1;word-break:break-word;color:var(--tui-text-01);text-align:left;align-self:center}"],changeDetection:0}),i})(),f=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[[h.MD,C.vl,_.Pv,P.yJ]]}),i})()}}]);