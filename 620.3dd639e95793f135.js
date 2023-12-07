"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[620],{97620:(b,v,i)=>{i.r(v),i.d(v,{default:()=>A});var o=i(86889),m=i(88692),t=i(64537),C=i(8239),_=i(87241),h=i(9018),M=i(21860),y=i(14581),O=i(38023),x=i(98168),P=i(13528),T=i(65598);class g extends _.y{constructor(e,s){let n,u;try{n=new Worker(e,s)}catch(p){u=p}super(p=>{let E=h.E;u?p.error(u):this.destroy$.isStopped?p.complete():n&&(E=(0,M.T)((0,y.R)(n,"message").pipe((0,x.b)(k=>p.next(k))),(0,y.R)(n,"error").pipe((0,x.b)(k=>p.error(k)))).pipe((0,P.R)(this.destroy$))),E.subscribe().add(p)}),(0,o.Z)(this,"worker",void 0),(0,o.Z)(this,"url",void 0),(0,o.Z)(this,"destroy$",void 0),this.worker=n,this.url=e,this.destroy$=new O.x}static fromFunction(e,s){return new g(g.createFnUrl(e),s)}static execute(e,s){return(0,C.Z)(function*(){const n=g.fromFunction(e),u=n.pipe((0,T.q)(1)).toPromise();return n.postMessage(s),u.then(p=>(n.terminate(),p))})()}static createFnUrl(e){const n=new Blob([`(\nfunction(fn){\n    function isFunction(type){\n        return type === 'function';\n    }\n\n    self.addEventListener('message', function(e) {\n        var result = fn.call(null, e.data);\n        if (result && [typeof result.then, typeof result.catch].every(isFunction)){\n            result\n                .then(postMessage)\n                .catch(function(error) {\n                    setTimeout(function(){throw error}, 0)\n                })\n        } else {\n            postMessage(result);\n        }\n    })\n}\n)(${e});`],{type:"text/javascript"});return URL.createObjectURL(n)}terminate(){this.destroy$.isStopped||(this.worker&&this.worker.terminate(),URL.revokeObjectURL(this.url),this.destroy$.next(),this.destroy$.complete())}postMessage(e){this.worker&&this.worker.postMessage(e)}}var r=i(27969);let a=(()=>{var c;class e{}return c=e,(0,o.Z)(e,"\u0275fac",function(n){return new(n||c)}),(0,o.Z)(e,"\u0275mod",t.oAB({type:c})),(0,o.Z)(e,"\u0275inj",t.cJS({})),e})();var l=i(12628),f=i(60885),U=i(1995);let D=(()=>{var c;class e{constructor(){(0,o.Z)(this,"date$",(0,U.H)(0,1e3).pipe((0,r.U)(()=>Date.now())))}}return c=e,(0,o.Z)(e,"\u0275fac",function(n){return new(n||c)}),(0,o.Z)(e,"\u0275cmp",t.Xpm({type:c,selectors:[["app-clock"]],standalone:!0,features:[t.jDz],decls:3,vars:6,template:function(n,u){1&n&&(t._uU(0),t.ALo(1,"date"),t.ALo(2,"async")),2&n&&t.hij(" ",t.xi3(1,1,t.lcZ(2,4,u.date$),"mediumTime")," ")},dependencies:[m.ez,m.Ov,m.uU],encapsulation:2,changeDetection:0})),e})();function N(c,e){if(1&c){const s=t.EpF();t.ynx(0),t._UZ(1,"app-clock"),t.TgZ(2,"div",1)(3,"button",2),t.NdJ("click",function(){t.CHM(s);const u=t.oxw();return t.KtG(u.workerThread.postMessage())}),t._uU(4," Run in worker process "),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.ALo(7,"async"),t.qZA(),t.TgZ(8,"tui-notification"),t._uU(9,"This would be calculated in several seconds in a background thread"),t.qZA()(),t.TgZ(10,"div",1)(11,"button",2),t.NdJ("click",function(){t.CHM(s);const u=t.oxw();return t.KtG(u.emitter.next())}),t._uU(12," Run in main process "),t.qZA(),t.TgZ(13,"p"),t._uU(14),t.ALo(15,"async"),t.qZA(),t.TgZ(16,"tui-notification"),t._uU(17,"This would freeze your main thread for several seconds"),t.qZA()(),t.BQk()}if(2&c){const s=t.oxw();t.xp6(6),t.hij("Execution time: ",t.lcZ(7,2,s.workerData$),""),t.xp6(8),t.hij("Execution time: ",t.lcZ(15,4,s.result$),"")}}function w(){const c=performance.now();return Array.from({length:16e3}).forEach((e,s)=>Array.from({length:s}).reduce(n=>n+1,0)),performance.now()-c}let A=(()=>{var c;class e{constructor(n){(0,o.Z)(this,"platformId",void 0),(0,o.Z)(this,"isBrowser",(0,m.NF)(this.platformId)),(0,o.Z)(this,"workerThread",g.fromFunction(w)),(0,o.Z)(this,"workerData$",this.workerThread.pipe(function d(){return(0,r.U)(({data:c})=>c)}())),(0,o.Z)(this,"emitter",new O.x),(0,o.Z)(this,"result$",this.emitter.pipe((0,r.U)(w))),this.platformId=n}}return c=e,(0,o.Z)(e,"\u0275fac",function(n){return new(n||c)(t.Y36(t.Lbi))}),(0,o.Z)(e,"\u0275cmp",t.Xpm({type:c,selectors:[["workers-page"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[[4,"ngIf"],[1,"example"],["appearance","secondary","tuiButton","",3,"click"]],template:function(n,u){1&n&&t.YNc(0,N,18,6,"ng-container",0),2&n&&t.Q6J("ngIf",u.isBrowser)},dependencies:[m.ez,m.O5,m.Ov,a,l.fN,l.v0,f.H,f.L,D],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.example[_ngcontent-%COMP%]{min-width:360px;border-top:1px solid gainsboro;margin-top:16px;padding-top:16px}"],changeDetection:0})),e})()},60885:(b,v,i)=>{i.d(v,{H:()=>g,L:()=>Z});var o=i(64537),m=i(2325),t=i(76060),C=i(54789),_=i(12628),h=i(88692),M=i(89570);function y(r,d){1&r&&o._UZ(0,"tui-svg",4),2&r&&o.Q6J("src",d.polymorpheusOutlet)}const O=function(r){return{$implicit:r}};function x(r,d){if(1&r&&(o.ynx(0),o.YNc(1,y,1,1,"tui-svg",3),o.BQk()),2&r){const a=o.oxw();o.xp6(1),o.Q6J("polymorpheusOutlet",a.icon)("polymorpheusOutletContext",o.VKq(2,O,a.status))}}function P(r,d){if(1&r){const a=o.EpF();o.TgZ(0,"button",5),o.NdJ("click",function(){o.CHM(a);const f=o.oxw();return o.KtG(f.close.emit())}),o.ALo(1,"async"),o.qZA()}if(2&r){const a=o.oxw();o.Q6J("icon",a.icons.close)("title",o.lcZ(1,2,a.closeWord$))}}const T=["*"];let Z=(()=>{class r{constructor(a,l,f){this.closeWord$=a,this.icons=l,this.options=f,this.hasIcon=this.options.hasIcon,this.icon=this.options.icon,this.status=this.options.status,this.size=this.options.size,this.hideClose=!1,this.close=new o.vpe}get hasClose(){return!this.hideClose&&(0,m.fw)(this.close)}}return r.\u0275fac=function(a){return new(a||r)(o.Y36(t.U0),o.Y36(t.Gs),o.Y36(t.Ln))},r.\u0275cmp=o.Xpm({type:r,selectors:[["tui-notification"]],hostVars:2,hostBindings:function(a,l){2&a&&o.uIk("data-status",l.status)("data-size",l.size)},inputs:{hasIcon:"hasIcon",icon:"icon",status:"status",size:"size",hideClose:"hideClose"},outputs:{close:"close"},ngContentSelectors:T,decls:4,vars:2,consts:[[4,"ngIf"],[1,"t-content"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button","class","t-close",3,"icon","title","click",4,"ngIf"],["automation-id","tui-notification__icon","class","t-icon",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-notification__icon",1,"t-icon",3,"src"],["appearance","icon","automation-id","tui-notification__close","size","xs","tuiIconButton","","type","button",1,"t-close",3,"icon","title","click"]],template:function(a,l){1&a&&(o.F$t(),o.YNc(0,x,2,4,"ng-container",0),o.TgZ(1,"div",1),o.Hsn(2),o.qZA(),o.YNc(3,P,2,4,"button",2)),2&a&&(o.Q6J("ngIf",l.icon&&l.hasIcon),o.xp6(3),o.Q6J("ngIf",l.hasClose))},dependencies:[C.PN,_.v0,h.O5,M.Li,h.Ov],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:flex;padding:.75rem 1rem;border-radius:var(--tui-radius-m);background:#fff;background:var(--tui-base-01);box-sizing:border-box;overflow:hidden}[data-size=s][_nghost-%COMP%]{padding:.375rem .625rem}[data-size=s][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1rem;height:1.25rem;margin:0 .375rem 0 -.125rem}[data-size=s][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.375rem -.125rem .75rem}[data-size=m][_nghost-%COMP%]{padding:.75rem}[data-size=m][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;margin-right:.5rem}[data-size=m][_nghost-%COMP%]   .t-close[_ngcontent-%COMP%]{margin:-.125rem -.125rem -.125rem 1rem}[data-size=l][_nghost-%COMP%]{padding:1rem;font:var(--tui-font-text-m);border-radius:var(--tui-radius-l)}[data-size=l][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;margin-right:.5rem}[data-status=info][_nghost-%COMP%]{color:var(--tui-info-fill);background:linear-gradient(var(--tui-info-bg),var(--tui-info-bg)),var(--tui-base-01)}[data-status=success][_nghost-%COMP%]{color:var(--tui-success-fill);background:linear-gradient(var(--tui-success-bg),var(--tui-success-bg)),var(--tui-base-01)}[data-status=error][_nghost-%COMP%]{color:var(--tui-error-fill);background:linear-gradient(var(--tui-error-bg),var(--tui-error-bg)),var(--tui-base-01)}[data-status=warning][_nghost-%COMP%]{color:var(--tui-warning-fill);background:linear-gradient(var(--tui-warning-bg),var(--tui-warning-bg)),var(--tui-base-01)}[data-status=neutral][_nghost-%COMP%]{color:var(--tui-neutral-fill);background:linear-gradient(var(--tui-neutral-bg),var(--tui-neutral-bg)),var(--tui-base-01)}.t-content[_ngcontent-%COMP%]{flex:1;word-wrap:break-word;overflow-wrap:anywhere;color:var(--tui-text-01)}"],changeDetection:0}),r})(),g=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[[h.ez,C.EI,_.fN,M.wq]]}),r})()}}]);