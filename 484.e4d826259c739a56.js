"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[484],{2088:(D,u,t)=>{t.d(u,{M:()=>n});var e=t(8974),a=t(6528),o=t(5460),d=t(9924);let n=(()=>{var r;class l{constructor(p,b,m,h){p.strokeStyle="transparent",b.call=y=>{y.clearRect(0,0,y.canvas.width,y.canvas.height)}}}return r=l,(0,e.c)(l,"\u0275fac",function(p){return new(p||r)(a.GI1(d.K),a.GI1(o.c),a.gJ8("opaque"),a.gJ8("desynchronized"))}),(0,e.c)(l,"\u0275dir",a.Sc5({type:r,selectors:[["canvas","waCanvas2d",""]],standalone:!0,features:[a.M5G([{provide:d.K,deps:[a.GMv],useFactory:({nativeElement:i},p=i.getAttribute("waOpaque"),b=i.getAttribute("waDesynchronized"))=>{const m=i.getContext("2d",{alpha:null===p,desynchronized:null!==b});if(!m)throw new Error("Context of different type was already requested");return m}},o.c])]})),l})()},8350:(D,u,t)=>{t.d(u,{wX:()=>m}),t(2088);var a=t(8974),o=t(6528),d=t(4363);const n=["*"];let r=(()=>{var M;class C{constructor(){(0,a.c)(this,"pathSteps",new o.VhX)}}return M=C,(0,a.c)(C,"\u0275fac",function(v){return new(v||M)}),(0,a.c)(C,"\u0275cmp",o.In1({type:M,selectors:[["canvas-clip-path"]],contentQueries:function(v,S,B){if(1&v&&o.szK(B,d.m,4),2&v){let I;o.wto(I=o.Gqi())&&(S.pathSteps=I)}},standalone:!0,features:[o.UHJ],ngContentSelectors:n,decls:1,vars:0,template:function(v,S){1&v&&(o.kPM(),o._Xx(0))},encapsulation:2})),C})();t(2496),t(7084),t(3836),t(7288);let m=(()=>{var M;class C{}return M=C,(0,a.c)(C,"\u0275fac",function(v){return new(v||M)}),(0,a.c)(C,"\u0275mod",o.a4G({type:M})),(0,a.c)(C,"\u0275inj",o.s3X({imports:[r]})),C})();t(4688),t(3776),t(7512),t(9924),t(9112),t(2407),t(776),t(6052),t(8860),t(5124),t(1852),t(5460)},2496:(D,u,t)=>{t.d(u,{G:()=>d});var e=t(8974),a=t(5460),o=t(6528);let d=(()=>{var n;class r{constructor(i){(0,e.c)(this,"image",void 0),(0,e.c)(this,"dX",0),(0,e.c)(this,"dY",0),(0,e.c)(this,"dWidth",void 0),(0,e.c)(this,"dHeight",void 0),(0,e.c)(this,"sX",void 0),(0,e.c)(this,"sY",void 0),(0,e.c)(this,"sWidth",void 0),(0,e.c)(this,"sHeight",void 0),i.call=p=>{this.image&&(void 0!==this.sWidth&&void 0!==this.sHeight&&void 0!==this.sX&&void 0!==this.sY&&void 0!==this.dWidth&&void 0!==this.dHeight?p.drawImage(this.image,this.sX,this.sY,this.sWidth,this.sHeight,this.dX,this.dY,this.dWidth,this.dHeight):void 0!==this.dWidth&&void 0!==this.dHeight?p.drawImage(this.image,this.dX,this.dY,this.dWidth,this.dHeight):p.drawImage(this.image,this.dX,this.dY))}}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)(o.GI1(a.c))}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-draw-image"]],inputs:{image:"image",dX:"dX",dY:"dY",dWidth:"dWidth",dHeight:"dHeight",sX:"sX",sY:"sY",sWidth:"sWidth",sHeight:"sHeight"},standalone:!0,features:[o.M5G([a.c])]})),r})()},3836:(D,u,t)=>{t.d(u,{S:()=>d});var e=t(8974),a=t(5460),o=t(6528);let d=(()=>{var n;class r{constructor(i){(0,e.c)(this,"path",new Path2D),(0,e.c)(this,"fillRule",void 0),i.call=p=>{p.fill(this.path,this.fillRule),p.stroke(this.path)}}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)(o.GI1(a.c))}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-path","path",""]],inputs:{path:"path",fillRule:"fillRule"},standalone:!0,features:[o.M5G([a.c])]})),r})()},7084:(D,u,t)=>{t.d(u,{S:()=>n});var e=t(8974),a=t(6528),o=t(5460),d=t(4363);let n=(()=>{var r;class l{constructor(p){(0,e.c)(this,"pathSteps",new a.VhX),(0,e.c)(this,"closed",!1),(0,e.c)(this,"fillRule",void 0),p.call=b=>{b.beginPath(),this.pathSteps.forEach(m=>{m.call(b)}),this.closed&&b.closePath(),b.stroke(),b.fill(this.fillRule)}}}return r=l,(0,e.c)(l,"\u0275fac",function(p){return new(p||r)(a.GI1(o.c))}),(0,e.c)(l,"\u0275dir",a.Sc5({type:r,selectors:[["canvas-path",3,"path",""]],contentQueries:function(p,b,m){if(1&p&&a.szK(m,d.m,4),2&p){let h;a.wto(h=a.Gqi())&&(b.pathSteps=h)}},inputs:{closed:"closed",fillRule:"fillRule"},standalone:!0,features:[a.M5G([o.c])]})),l})()},7288:(D,u,t)=>{t.d(u,{M:()=>d});var e=t(8974),a=t(5460),o=t(6528);let d=(()=>{var n;class r{constructor(i){(0,e.c)(this,"text",""),(0,e.c)(this,"x",0),(0,e.c)(this,"y",0),(0,e.c)(this,"maxWidth",void 0),i.call=p=>{p.fillText(this.text,this.x,this.y,this.maxWidth),p.strokeText(this.text,this.x,this.y,this.maxWidth)}}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)(o.GI1(a.c))}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-text"]],inputs:{text:"text",x:"x",y:"y",maxWidth:"maxWidth"},standalone:!0,features:[o.M5G([a.c])]})),r})()},4688:(D,u,t)=>{t.d(u,{M:()=>d});var e=t(8974),a=t(4363),o=t(6528);let d=(()=>{var n;class r{constructor(){(0,e.c)(this,"x",0),(0,e.c)(this,"y",0),(0,e.c)(this,"radius",0),(0,e.c)(this,"startAngle",0),(0,e.c)(this,"endAngle",0),(0,e.c)(this,"anticlockwise",!1)}call(i){i.arc(this.x,this.y,this.radius,this.startAngle,this.endAngle,this.anticlockwise)}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-arc"]],inputs:{x:"x",y:"y",radius:"radius",startAngle:"startAngle",endAngle:"endAngle",anticlockwise:"anticlockwise"},standalone:!0,features:[o.M5G([(0,a.y)(n)])]})),r})()},3776:(D,u,t)=>{t.d(u,{u:()=>d});var e=t(8974),a=t(4363),o=t(6528);let d=(()=>{var n;class r{constructor(){(0,e.c)(this,"x",0),(0,e.c)(this,"y",0)}call(i){i.lineTo(this.x,this.y)}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-line-to"]],inputs:{x:"x",y:"y"},standalone:!0,features:[o.M5G([(0,a.y)(n)])]})),r})()},7512:(D,u,t)=>{t.d(u,{U:()=>d});var e=t(8974),a=t(4363),o=t(6528);let d=(()=>{var n;class r{constructor(){(0,e.c)(this,"x",0),(0,e.c)(this,"y",0),(0,e.c)(this,"width",0),(0,e.c)(this,"height",0)}call(i){i.rect(this.x,this.y,this.width,this.height)}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-rect"]],inputs:{x:"x",y:"y",width:"width",height:"height"},standalone:!0,features:[o.M5G([(0,a.y)(n)])]})),r})()},9172:(D,u,t)=>{t.d(u,{_:()=>o});var e=t(8974),a=t(6528);let o=(()=>{var d;class n{transform(l){return new DOMMatrix(l)}}return d=n,(0,e.c)(n,"\u0275fac",function(l){return new(l||d)}),(0,e.c)(n,"\u0275pipe",a.UTH({name:"transform",type:d,pure:!0,standalone:!0})),n})()},2407:(D,u,t)=>{t.d(u,{e:()=>d});var e=t(8974),a=t(9112),o=t(6528);let d=(()=>{var n;class r{constructor(){(0,e.c)(this,"globalAlpha",1),(0,e.c)(this,"globalCompositeOperation","source-over")}call(i){i.globalAlpha=this.globalAlpha,i.globalCompositeOperation=this.globalCompositeOperation}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-draw-image","globalAlpha",""],["canvas-draw-image","globalCompositeOperation",""],["canvas-path","globalAlpha",""],["canvas-path","globalCompositeOperation",""],["canvas-text","globalAlpha",""],["canvas-text","globalCompositeOperation",""]],inputs:{globalAlpha:"globalAlpha",globalCompositeOperation:"globalCompositeOperation"},standalone:!0,features:[o.M5G([(0,a.Q)(n)])]})),r})()},776:(D,u,t)=>{t.d(u,{_:()=>d});var e=t(8974),a=t(9112),o=t(6528);let d=(()=>{var n;class r{constructor(){(0,e.c)(this,"fillStyle","black"),(0,e.c)(this,"strokeStyle","transparent")}call(i){i.fillStyle=this.fillStyle,i.strokeStyle=this.strokeStyle}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-path","fillStyle",""],["canvas-path","strokeStyle",""],["canvas-text","fillStyle",""],["canvas-text","strokeStyle",""]],inputs:{fillStyle:"fillStyle",strokeStyle:"strokeStyle"},standalone:!0,features:[o.M5G([(0,a.Q)(n)])]})),r})()},6052:(D,u,t)=>{t.d(u,{_:()=>d});var e=t(8974),a=t(9112),o=t(6528);let d=(()=>{var n;class r{constructor(){(0,e.c)(this,"lineCap","butt"),(0,e.c)(this,"lineDashOffset",0),(0,e.c)(this,"lineJoin","miter"),(0,e.c)(this,"lineWidth",1),(0,e.c)(this,"lineDash",[]),(0,e.c)(this,"miterLimit",10)}call(i){i.lineCap=this.lineCap,i.lineDashOffset=this.lineDashOffset,i.lineJoin=this.lineJoin,i.lineWidth=this.lineWidth,i.miterLimit=this.miterLimit,i.setLineDash(this.lineDash)}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-path","lineCap",""],["canvas-path","lineDashOffset",""],["canvas-path","lineJoin",""],["canvas-path","lineWidth",""],["canvas-path","lineDash",""],["canvas-path","miterLimit",""],["canvas-text","lineCap",""],["canvas-text","lineDashOffset",""],["canvas-text","lineJoin",""],["canvas-text","lineWidth",""],["canvas-text","lineDash",""],["canvas-text","miterLimit",""]],inputs:{lineCap:"lineCap",lineDashOffset:"lineDashOffset",lineJoin:"lineJoin",lineWidth:"lineWidth",lineDash:"lineDash",miterLimit:"miterLimit"},standalone:!0,features:[o.M5G([(0,a.Q)(n)])]})),r})()},8860:(D,u,t)=>{t.d(u,{k:()=>d});var e=t(8974),a=t(9112),o=t(6528);let d=(()=>{var n;class r{constructor(){(0,e.c)(this,"shadowBlur",0),(0,e.c)(this,"shadowColor","transparent"),(0,e.c)(this,"shadowOffsetX",0),(0,e.c)(this,"shadowOffsetY",0)}call(i){i.shadowBlur=this.shadowBlur,i.shadowColor=this.shadowColor,i.shadowOffsetX=this.shadowOffsetX,i.shadowOffsetY=this.shadowOffsetY}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-draw-image","shadowBlur",""],["canvas-draw-image","shadowColor",""],["canvas-draw-image","shadowOffsetX",""],["canvas-draw-image","shadowOffsetY",""],["canvas-path","shadowBlur",""],["canvas-path","shadowColor",""],["canvas-path","shadowOffsetX",""],["canvas-path","shadowOffsetY",""],["canvas-text","shadowBlur",""],["canvas-text","shadowColor",""],["canvas-text","shadowOffsetX",""],["canvas-text","shadowOffsetY",""]],inputs:{shadowBlur:"shadowBlur",shadowColor:"shadowColor",shadowOffsetX:"shadowOffsetX",shadowOffsetY:"shadowOffsetY"},standalone:!0,features:[o.M5G([(0,a.Q)(n)])]})),r})()},5124:(D,u,t)=>{t.d(u,{U:()=>d});var e=t(8974),a=t(9112),o=t(6528);let d=(()=>{var n;class r{constructor(){(0,e.c)(this,"direction","inherit"),(0,e.c)(this,"font","10px sans-serif"),(0,e.c)(this,"textAlign","start"),(0,e.c)(this,"fontKerning","auto"),(0,e.c)(this,"textBaseline","alphabetic")}call(i){i.direction=this.direction,i.font=this.font,i.textAlign=this.textAlign,i.textBaseline=this.textBaseline}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas-text","direction",""],["canvas-text","font",""],["canvas-text","textAlign",""],["canvas-text","textBaseline",""]],inputs:{direction:"direction",font:"font",textAlign:"textAlign",fontKerning:"fontKerning",textBaseline:"textBaseline"},standalone:!0,features:[o.M5G([(0,a.Q)(n)])]})),r})()},1852:(D,u,t)=>{t.d(u,{k:()=>d});var e=t(8974),a=t(9112),o=t(6528);let d=(()=>{var n;class r{constructor(i){(0,e.c)(this,"parent",void 0),(0,e.c)(this,"transform",new DOMMatrix),this.parent=i}call(i){var p;i.setTransform((null===(p=this.parent)||void 0===p?void 0:p.transform.multiply(this.transform))||this.transform)}}return n=r,(0,e.c)(r,"\u0275fac",function(i){return new(i||n)(o.GI1(n,12))}),(0,e.c)(r,"\u0275dir",o.Sc5({type:n,selectors:[["canvas","transform",""],["canvas-draw-image","transform",""],["canvas-path","transform",""],["canvas-text","transform",""]],inputs:{transform:"transform"},standalone:!0,features:[o.M5G([(0,a.Q)(n)])]})),r})()},5460:(D,u,t)=>{t.d(u,{c:()=>r});var e=t(8974),a=t(6528),o=t(5532),d=t(9924),n=t(9112);let r=(()=>{var l;class i{constructor(b,m,h,y,O){(0,e.c)(this,"subscription",void 0),(0,e.c)(this,"call",()=>{}),this.subscription=O.runOutsideAngular(()=>y.subscribe(()=>{h.save(),b.forEach(w=>w.call(h)),m.forEach(w=>w.call(h)),this.call(h),h.restore()}))}ngOnDestroy(){this.subscription.unsubscribe()}}return l=i,(0,e.c)(i,"\u0275fac",function(b){return new(b||l)(a.CoB(n.W,4),a.CoB(n.W),a.CoB(d.K),a.CoB(o.i),a.CoB(a.WW2))}),(0,e.c)(i,"\u0275prov",a.wxM({token:l,factory:l.\u0275fac})),i})()},9924:(D,u,t)=>{t.d(u,{K:()=>a});const a=new(t(6528).UbH)("[CANVAS_2D_CONTEXT]: Canvas 2D rendering context")},4363:(D,u,t)=>{t.d(u,{m:()=>a,y:()=>o});const a=new(t(6528).UbH)("[CANVAS_METHOD]: A directive that draws on canvas");function o(d){return{provide:a,useExisting:d}}},9112:(D,u,t)=>{t.d(u,{Q:()=>o,W:()=>a});const a=new(t(6528).UbH)("[CANVAS_PROPERTIES]: A directive performing processing before and after drawing to canvas",{factory:()=>[]});function o(d){return{provide:a,multi:!0,useExisting:d}}},5792:(D,u,t)=>{t.d(u,{O:()=>b,Y:()=>p});var e=t(6528),a=t(5856),o=t(7768),d=t(7708),n=t(8200);const r=["tuiLabel",""];function l(m,h){1&m&&e.wR5(0,"span",3),2&m&&e.E7m("textContent",h.polymorpheusOutlet)}const i=["*"];let p=(()=>{class m{constructor(y){this.mode$=y,this.context={$implicit:null}}}return m.\u0275fac=function(y){return new(y||m)(e.GI1(d.Yx))},m.\u0275cmp=e.In1({type:m,selectors:[["label","tuiLabel",""]],contentQueries:function(y,O,w){if(1&y&&e.szK(w,a.eq,5),2&y){let R;e.wto(R=e.Gqi())&&(O.control=R.first)}},hostVars:2,hostBindings:function(y,O){1&y&&e.qCj("$.data-mode.attr",function(){return O.mode$}),2&y&&e.eAK("_control",O.control)},inputs:{tuiLabel:"tuiLabel",context:"context"},features:[e.M5G([o.Ir])],attrs:r,ngContentSelectors:i,decls:4,vars:2,consts:[[1,"t-label"],["class","t-text",3,"textContent",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-content"],[1,"t-text",3,"textContent"]],template:function(y,O){1&y&&(e.kPM(),e.I0R(0,"span",0),e.yuY(1,l,1,1,"span",1),e.C$Y(),e.I0R(2,"span",2),e._Xx(3),e.C$Y()),2&y&&(e.yG2(1),e.E7m("polymorpheusOutlet",O.tuiLabel)("polymorpheusOutletContext",O.context))},dependencies:[n.Af],styles:['[_nghost-%COMP%]{display:flex;min-height:2.75rem;justify-content:space-between;flex-direction:column;pointer-events:none}.t-label[_ngcontent-%COMP%]{font:var(--tui-font-text-s);max-width:100%;align-self:inherit;overflow:inherit;pointer-events:auto}._control[_nghost-%COMP%]   .t-label[_ngcontent-%COMP%]{margin-bottom:.25rem}.t-text[_ngcontent-%COMP%]{display:block;overflow:inherit;text-overflow:ellipsis}[_nghost-%COMP%]:not(._control)   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02)}[data-mode="onDark"][_nghost-%COMP%]   .t-text[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}.t-content[_ngcontent-%COMP%]{line-height:1.5rem;overflow:inherit;text-overflow:ellipsis;pointer-events:auto}'],changeDetection:0}),m})(),b=(()=>{class m{}return m.\u0275fac=function(y){return new(y||m)},m.\u0275mod=e.a4G({type:m}),m.\u0275inj=e.s3X({imports:[[n.Ux]]}),m})()},5413:(D,u,t)=>{t.d(u,{M1:()=>I,s9:()=>Y});var e=t(6528),a=t(5856),o=t(1916),d=t(2320),n=t(2168),r=t(2384),l=t(9668),i=t(4747),p=t(8664),b=t(9360);t(2220),t(7208);function L(c,g){const s=c.findIndex((E,T)=>T&&g(E));return[c[s-1]||c[0],c[s]||c[c.length-1]]}var W=t(6639),U=t(5532),G=t(3652),H=t(6568);const N=["type","range","tuiSlider",""],S=(0,o.AL)({size:"m",trackColor:"var(--tui-base-03)"});let I=(()=>{class c{constructor(s,_,P,E,T,A){var x;this.control=s,this.options=P,this.el=E,this.userAgent=T,this.injector=A,this.size=this.options.size,this.segments=1,s instanceof a._G&&(null===(x=s.valueChanges)||void 0===x||x.pipe((0,d.iQ)(_),(0,G.U)(1)).subscribe())}get min(){return Number(this.el.nativeElement.min)}get max(){return Number(this.el.nativeElement.max||100)}get step(){return Number(this.el.nativeElement.step)||1}get value(){const{el:s,control:_,hasKeySteps:P}=this;return!P&&_ instanceof a._G?_.viewModel:Number(s.nativeElement.value)||0}set value(s){this.el.nativeElement.value=`${s}`}get valueRatio(){return(this.value-this.min)/(this.max-this.min)||0}get valuePercentage(){return 100*this.valueRatio}get segmentWidth(){return 100/Math.max(1,this.segments)}get isOldEdge(){return(0,n.E$)(r.Mx,this.userAgent)}get hasKeySteps(){return Boolean(this.injector.get(X,null))}}return c.\u0275fac=function(s){return new(s||c)(e.GI1(a.eq,10),e.GI1(e.kD9),e.GI1(S),e.GI1(e.GMv),e.GI1(U.oJ),e.GI1(e.zZn))},c.\u0275cmp=e.In1({type:c,selectors:[["input","type","range","tuiSlider",""]],hostVars:11,hostBindings:function(s,_){1&s&&e.qCj("input",function(){return 0}),2&s&&(e.e48("data-size",_.size),e.m4B("--tui-slider-track-color",_.options.trackColor)("--tui-slider-fill-ratio",_.valueRatio)("--tui-slider-fill-percentage",_.valuePercentage,"%")("--tui-slider-segment-width",_.segmentWidth,"%"),e.eAK("_old-edge",_.isOldEdge))},inputs:{size:"size",segments:"segments"},attrs:N,decls:0,vars:0,template:function(s,_){},styles:['[_nghost-%COMP%]{position:relative;display:block;width:100%;color:var(--tui-primary);cursor:pointer}[_nghost-%COMP%]:active{cursor:ew-resize}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:auto}[data-size=s][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.25rem;left:calc(var(--tui-slider-fill-percentage) - var(--tui-slider-fill-ratio) * .5rem);width:.5rem;height:.5rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=s][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[data-size=m][_nghost-%COMP%]:not(:disabled):before{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;top:.125rem;left:calc(var(--tui-slider-fill-percentage) - var(--tui-slider-fill-ratio) * .75rem);width:.75rem;height:.75rem;border-radius:50%;transform:var(--tui-slider-thumb-transform, scale(1));content:"";cursor:ew-resize;background:currentColor;opacity:0}[data-size=m][_nghost-%COMP%]:active:before{opacity:.2;transform:var(--tui-slider-thumb-transform, scale(1)) scale(2.33)}[_nghost-%COMP%]:not(._old-edge){-webkit-appearance:none;-moz-appearance:none;appearance:none;height:.125rem;padding:.4375rem 0;background-color:transparent;background-clip:content-box;outline:none;border-radius:var(--tui-radius-m)}[_nghost-%COMP%]:not(._old-edge)::-webkit-slider-container{border-radius:inherit}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-runnable-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor var(--tui-slider-fill-percentage),transparent var(--tui-slider-fill-percentage));background-position-x:0,.25rem,0;background-size:calc(100% - .75rem),calc(100% - .75rem),auto}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-runnable-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width)),linear-gradient(to right,currentColor var(--tui-slider-fill-percentage),transparent var(--tui-slider-fill-percentage));background-position-x:0,.125rem,0;background-size:calc(100% - .5rem),calc(100% - .5rem),auto}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .5rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.25rem;background-size:calc(100% - .75rem)}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-track{height:.125rem;border-radius:inherit;background-repeat:no-repeat;background-color:var(--tui-slider-track-color);background-image:linear-gradient(to right,currentColor 0px .375rem,transparent .25rem),repeating-linear-gradient(to right,var(--tui-base-06) 0 .25rem,transparent 0 var(--tui-slider-segment-width));background-position-x:0,.125rem;background-size:calc(100% - .5rem)}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;height:.75rem;width:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-left:0;border-right:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb:hover{background-color:var(--tui-primary-hover)}:active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{background-color:var(--tui-primary-active)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{-webkit-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-webkit-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;height:.5rem;width:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-left:0;border-right:0;transform:var(--tui-slider-thumb-transform, scale(1));margin-top:-.4375rem}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb:hover{background-color:var(--tui-primary-hover)}:active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{background-color:var(--tui-primary-active)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-webkit-slider-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-moz-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;height:.75rem;width:.75rem;box-sizing:content-box;background-clip:content-box;border:.125rem solid transparent;border-left:0;border-right:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb:hover{background-color:var(--tui-primary-hover)}:active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{background-color:var(--tui-primary-active)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.333)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=m]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{-moz-transition-property:transform;transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;isolation:isolate;-moz-appearance:none;appearance:none;background-color:currentColor;box-shadow:none;border-radius:50%;height:.5rem;width:.5rem;box-sizing:content-box;background-clip:content-box;border:.25rem solid transparent;border-left:0;border-right:0;transform:var(--tui-slider-thumb-transform, scale(1))}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{cursor:ew-resize}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb:hover{background-color:var(--tui-primary-hover)}:active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{background-color:var(--tui-primary-active)}:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb:hover, :active:not(:disabled)[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{transform:var(--tui-slider-thumb-transform, scale(1)) scale(1.5)}:focus-visible[_nghost-%COMP%]:not(._old-edge)[data-size=s]::-moz-range-thumb{box-shadow:0 0 0 2px inset var(--tui-focus)}[_nghost-%COMP%]:not(._old-edge)::-moz-range-progress{border-radius:inherit}[_nghost-%COMP%]:not(._old-edge)::-moz-range-progress{height:.125rem;background:currentColor;border-top-right-radius:0;border-bottom-right-radius:0}._old-edge[_nghost-%COMP%]::-ms-thumb{background:currentColor;border-radius:50%}._old-edge[_nghost-%COMP%]::-ms-fill-lower{background:currentColor}._old-edge[_nghost-%COMP%]::-ms-track{background:var(--tui-slider-track-color);border:none}'],changeDetection:0}),(0,W.UN)([l.w7],c.prototype,"hasKeySteps",null),c})(),X=(()=>{class c extends i._y{constructor(s,_,P,E){super(s,_),this.el=P,this.slider=E}get nativeFocusableElement(){return this.computedDisabled?null:this.el.nativeElement}get focused(){return(0,p.ER)(this.nativeFocusableElement)}get min(){return this.keySteps[0][1]}get max(){return this.keySteps[this.keySteps.length-1][1]}updateControlValue(){this.value=function K(c,g){const[[s,_],[P,E]]=L(g,([x,z])=>c<=x);return(0,b.Q3)((c-s)/(P-s)*(E-_)+_,7)}(this.slider.valuePercentage,this.keySteps)}writeValue(s){if(null===s)return;const _=(0,b.K6)(s,this.min,this.max);this.slider.value=this.transformToNativeValue(_)}getFallbackValue(){return 0}transformToNativeValue(s){const{min:_,max:P}=this.slider;return function F(c,g){const[[s,_],[P,E]]=L(g,([A,x])=>c<=x);return(P-s)*((c-_)/(E-_)||0)+s}(s,this.keySteps)*(P-_)/100+_}}return c.\u0275fac=function(s){return new(s||c)(e.GI1(a.eq,10),e.GI1(e.kD9),e.GI1(e.GMv),e.GI1((0,e.wd)(()=>I)))},c.\u0275dir=e.Sc5({type:c,selectors:[["input","tuiSlider","","keySteps",""]],hostVars:4,hostBindings:function(s,_){1&s&&e.qCj("input",function(){return _.updateControlValue()})("change",function(){return _.updateControlValue()}),2&s&&(e.SoX("disabled",_.computedDisabled),e.e48("aria-valuenow",_.safeCurrentValue)("aria-valuemin",_.min)("aria-valuemax",_.max))},inputs:{keySteps:"keySteps"},features:[e.eg9]}),c})(),Y=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=e.a4G({type:c}),c.\u0275inj=e.s3X({imports:[[H.MD]]}),c})()}}]);