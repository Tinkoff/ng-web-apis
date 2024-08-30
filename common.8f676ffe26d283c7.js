"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[76],{6041:(C,l,e)=>{e.d(l,{i:()=>t});var n=e(5612);function t(r=""){return(o,i)=>{Object.defineProperty(o,i,{configurable:!0,set(a){a="string"==typeof a?Number.parseFloat(a):a;const s=this instanceof AudioWorkletNode?this.parameters.get(i):this[r];s instanceof AudioParam?(0,n.D)(s,a,this.context.currentTime):Object.defineProperty(o,i,{value:a,configurable:!0})}})}}},4882:(C,l,e)=>{e.d(l,{V:()=>m});var n=e(1423),t=e(2978),r=e(2928),c=e(3527),o=e(7236),i=e(3793),a=e(1753),s=e(8887),_=e(8503),v=e(1767),u=e(4814),E=e(4917),d=e(8088);let m=(()=>{var P;class A extends AnalyserNode{constructor(){const O=(0,t.WQX)(v.p),y=(0,t.WQX)(u.aN);if(!(0,t.WQX)(E.L)){const L=O.createAnalyser();return Object.setPrototypeOf(L,A.prototype),A.init(L,y),L}super(O),(0,n.A)(this,"quiet",void 0),A.init(this,y)}static init(O,y){(0,d.N)(y,O),O.fftSize=256,O.connect(O.context.destination),O.quiet=(0,r.Y)(100).pipe((0,c.T)(()=>new Float32Array(O.fftSize)),(0,o.M)(T=>O.getFloatTimeDomainData(T)),(0,c.T)(T=>O.isSilent(T)),(0,i.F)(),(0,a.j)(T=>T),(0,s.B)(5e3),(0,_.p)(T=>T))}ngOnDestroy(){this.disconnect()}isSilent(O){return Math.abs(O.reduce((y,T)=>y+T,0))<.001}}return P=A,(0,n.A)(A,"\u0275fac",function(O){return new(O||P)}),(0,n.A)(A,"\u0275dir",t.FsC({type:P,selectors:[["","waAudioDestinationNode",""]],outputs:{quiet:"quiet"},exportAs:["AudioNode"],standalone:!0,features:[t.Vt3]})),A})()},9134:(C,l,e)=>{e.d(l,{g:()=>a});var n=e(1423),t=e(2978),r=e(1767),c=e(4814),o=e(4917),i=e(8088);let a=(()=>{var s;class _ extends GainNode{constructor(){const v=(0,t.WQX)(r.p),u=(0,t.WQX)(c.aN);if(!(0,t.WQX)(o.L)){const d=v.createGain();return Object.setPrototypeOf(d,_.prototype),(0,i.N)(u,d),d}super(v),(0,i.N)(u,this)}static init(v,u){(0,i.N)(u,v)}set waOutput(v){this.disconnect(),(0,i.N)(this,v)}ngOnDestroy(){this.disconnect()}}return s=_,(0,n.A)(_,"\u0275fac",function(v){return new(v||s)}),(0,n.A)(_,"\u0275dir",t.FsC({type:s,selectors:[["","waOutput",""]],inputs:{waOutput:"waOutput"},standalone:!0,features:[t.Vt3]})),_})()},9092:(C,l,e)=>{e.d(l,{H:()=>v});var n=e(1423),t=e(2978),r=e(6104),c=e(2831),o=e(756),i=e(4087),a=e(1767),s=e(4814),_=e(4917),S=e(8088);let v=(()=>{var u;class E extends ConvolverNode{constructor(){const m=(0,t.WQX)(i.U),P=(0,t.WQX)(a.p),A=(0,t.WQX)(s.aN,{skipSelf:!0});if(!(0,t.WQX)(_.L)){const O=P.createConvolver();return Object.setPrototypeOf(O,E.prototype),E.init(O,A,m),O}super(P),(0,n.A)(this,"buffer$",void 0),E.init(this,A,m)}static init(m,P,A){(0,S.N)(P,m),m.buffer$=new r.B,m.buffer$.pipe((0,c.n)(f=>"string"==typeof f?A.fetch(f):(0,o.of)(f))).subscribe(f=>{m.buffer=f})}set bufferSetter(m){this.buffer$.next(m)}ngOnDestroy(){this.buffer$.complete(),this.disconnect()}}return u=E,(0,n.A)(E,"\u0275fac",function(m){return new(m||u)}),(0,n.A)(E,"\u0275dir",t.FsC({type:u,selectors:[["","waConvolverNode",""]],inputs:{normalize:"normalize",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",bufferSetter:["buffer","bufferSetter"]},exportAs:["AudioNode"],standalone:!0,features:[t.Jv_([(0,s.TD)(u)]),t.Vt3]})),E})()},7019:(C,l,e)=>{e.d(l,{U:()=>S});var n=e(1423),t=e(7270),r=e(2978),c=e(6041),o=e(1767),i=e(4814),a=e(4917),s=e(8088),_=e(7813);let S=(()=>{var v;class u extends GainNode{constructor(d){const m=(0,r.WQX)(o.p),P=(0,r.WQX)(i.aN,{skipSelf:!0}),A=(0,r.WQX)(a.L),f=(0,_.q)(d,1);if(!A){const O=m.createGain();return Object.setPrototypeOf(O,u.prototype),(0,s.N)(P,O),O.gain.value=f,O}super(m,{gain:f}),(0,n.A)(this,"gainParam",void 0),(0,s.N)(P,this)}ngOnDestroy(){this.disconnect()}}return v=u,(0,n.A)(u,"\u0275fac",function(d){return new(d||v)(r.kS0("gain"))}),(0,n.A)(u,"\u0275dir",r.FsC({type:v,selectors:[["","waGainNode",""]],inputs:{channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",gainParam:["gain","gainParam"]},exportAs:["AudioNode"],standalone:!0,features:[r.Jv_([(0,i.TD)(v)]),r.Vt3]})),(0,t.Cg)([(0,c.i)("gain")],u.prototype,"gainParam",void 0),u})()},4087:(C,l,e)=>{e.d(l,{U:()=>o});var n=e(3308),t=e(1423),r=e(2978),c=e(1767);let o=(()=>{var i;class a{constructor(){(0,t.A)(this,"context",(0,r.WQX)(c.p)),(0,t.A)(this,"cache",new Map)}fetch(_){var S=this;return(0,n.A)(function*(){return new Promise((v,u)=>{if(S.cache.has(_))return void v(S.cache.get(_));const E=new XMLHttpRequest;E.open("GET",_,!0),E.responseType="arraybuffer",E.onerror=u,E.onabort=u,E.onload=()=>{S.context.decodeAudioData(E.response,d=>{S.cache.set(_,d),v(d)},u)},E.send()})})()}}return i=a,(0,t.A)(a,"\u0275fac",function(_){return new(_||i)}),(0,t.A)(a,"\u0275prov",r.jDH({token:i,factory:i.\u0275fac,providedIn:"root"})),a})()},6823:(C,l,e)=>{e.d(l,{F:()=>S});var n=e(1423),t=e(7270),r=e(2978),c=e(6041),o=e(1767),i=e(4814),a=e(4917),s=e(8088),_=e(7813);let S=(()=>{var v;class u extends OscillatorNode{constructor(d,m,P){const A=(0,r.WQX)(o.p),f=(0,r.WQX)(a.L),O=(0,_.q)(m,0),y=(0,_.q)(P,440);if(!f){const T=A.createOscillator();return Object.setPrototypeOf(u.prototype,Object.getPrototypeOf(T)),Object.setPrototypeOf(T,u.prototype),T.detune.value=O,T.frequency.value=y,u.init(T,null,d),T}super(A,{detune:O,frequency:y}),(0,n.A)(this,"detuneParam",void 0),(0,n.A)(this,"frequencyParam",void 0),(0,n.A)(this,"ended",void 0),u.init(this,null,d)}static init(d,m,P){(0,s.N)(m,d),null!==P&&d.start();const A=new r.bkB;d.ended=A,d.onended=()=>A.emit()}set periodicWave(d){this.setPeriodicWave(d)}ngOnDestroy(){try{this.stop()}catch{}this.disconnect()}}return v=u,(0,n.A)(u,"\u0275fac",function(d){return new(d||v)(r.kS0("autoplay"),r.kS0("detune"),r.kS0("frequency"))}),(0,n.A)(u,"\u0275dir",r.FsC({type:v,selectors:[["","waOscillatorNode",""]],inputs:{type:"type",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",detuneParam:["detune","detuneParam"],frequencyParam:["frequency","frequencyParam"],periodicWave:"periodicWave"},outputs:{ended:"ended"},exportAs:["AudioNode"],standalone:!0,features:[r.Jv_([(0,i.TD)(v)]),r.Vt3]})),(0,t.Cg)([(0,c.i)("detune")],u.prototype,"detuneParam",void 0),(0,t.Cg)([(0,c.i)("frequency")],u.prototype,"frequencyParam",void 0),u})()},1767:(C,l,e)=>{e.d(l,{Y:()=>t,p:()=>r});const t=new(e(2978).nKC)("[WA_AUDIO_CONTEXT]",{providedIn:"root",factory:()=>new AudioContext}),r=t},4814:(C,l,e)=>{e.d(l,{TD:()=>r,aN:()=>c});const t=new(e(2978).nKC)("[WA_AUDIO_NODE]",{factory:()=>null});function r(o){return{provide:t,useExisting:o}}const c=t},4917:(C,l,e)=>{e.d(l,{L:()=>c});var n=e(2978),t=e(1767);const c=new n.nKC("[WA_CONSTRUCTOR_SUPPORT]",{providedIn:"root",factory:()=>{try{return!!new GainNode((0,n.WQX)(t.Y))}catch{return!1}}})},8088:(C,l,e)=>{function n(t,r){t&&r&&t.connect(r)}e.d(l,{N:()=>n})},7813:(C,l,e)=>{function n(t,r){const c=parseFloat(t||"");return Number.isNaN(c)?r:c}e.d(l,{q:()=>n})},5612:(C,l,e)=>{function n(o,i,a=0){o.cancelAndHoldAtTime?o.cancelAndHoldAtTime(a):(o.cancelScheduledValues(a),o.setValueAtTime(c(o.value),a)),"number"!=typeof i?i instanceof Array?function t(o,i,a){i.forEach(s=>{"mode"in s?r(o,s,a):o.setValueCurveAtTime(s.value,a,s.duration),a+=s.duration})}(o,i,a):"mode"in i?(o.setValueAtTime(c(o.value),a),r(o,i,a)):o.setValueCurveAtTime(i.value,a,i.duration):o.setValueAtTime(c(i),a)}function r(o,{value:i,mode:a="instant",duration:s},_){switch(a){case"instant":o.setValueAtTime(c(i),_),o.setValueAtTime(c(i),_+s);break;case"exponential":i<0||i*o.value<0?o.linearRampToValueAtTime(c(i),_+s):o.exponentialRampToValueAtTime(c(i),_+s),o.setValueAtTime(c(i),_+s);break;case"linear":o.linearRampToValueAtTime(c(i),_+s)}}function c(o){return o||1e-8}e.d(l,{D:()=>n})},1190:(C,l,e)=>{e.d(l,{nW:()=>w,Ay:()=>h,N7:()=>L,js:()=>f,mU:()=>j});var n=e(1423),t=e(2978),r=e(9406),c=e(7782);const o=typeof IntersectionObserver<"u"?IntersectionObserver:class{constructor(){(0,n.A)(this,"root",null),(0,n.A)(this,"rootMargin",""),(0,n.A)(this,"thresholds",[])}observe(){}unobserve(){}disconnect(){}takeRecords(){return[]}},a=new t.nKC("[WA_INTERSECTION_ROOT]"),_="0px 0px 0px 0px";function A(){var M;return(null==(M=(0,t.WQX)(t.aKT).nativeElement.getAttribute("waIntersectionThreshold"))?void 0:M.split(",").map(parseFloat))||0}new t.nKC("[WA_INTERSECTION_ROOT_MARGIN]",{providedIn:"root",factory:()=>_}),new t.nKC("[WA_INTERSECTION_THRESHOLD]",{providedIn:"root",factory:()=>0});let f=(()=>{var M;class W extends o{constructor(){const D=(0,t.WQX)(a,{optional:!0});super(Q=>{this.callbacks.forEach((G,V)=>{const J=Q.filter(({target:z})=>z===V);return J.length&&G(J,this)})},{root:null==D?void 0:D.nativeElement,rootMargin:(0,t.WQX)(t.aKT).nativeElement.getAttribute("waIntersectionRootMargin")||_,threshold:A()}),(0,n.A)(this,"callbacks",new Map),(0,n.A)(this,"margin",""),(0,n.A)(this,"threshold","")}observe(D,Q=(()=>{})){super.observe(D),this.callbacks.set(D,Q)}unobserve(D){super.unobserve(D),this.callbacks.delete(D)}ngOnDestroy(){this.disconnect()}}return M=W,(0,n.A)(W,"\u0275fac",function(D){return new(D||M)}),(0,n.A)(W,"\u0275dir",t.FsC({type:M,selectors:[["","waIntersectionObserver",""]],inputs:{waIntersectionRootMargin:["margin","waIntersectionRootMargin"],waIntersectionThreshold:["threshold","waIntersectionThreshold"]},exportAs:["IntersectionObserver"],standalone:!0,features:[t.Vt3]})),W})(),T=(()=>{var M;class W extends r.c{constructor(){const D=(0,t.WQX)(t.aKT).nativeElement,Q=(0,t.WQX)(f);return super(G=>(Q.observe(D,V=>{G.next(V)}),()=>{Q.unobserve(D)})),this.pipe((0,c.u)())}}return M=W,(0,n.A)(W,"\u0275fac",function(D){return new(D||M)}),(0,n.A)(W,"\u0275prov",t.jDH({token:M,factory:M.\u0275fac})),W})(),L=(()=>{var M;class W{constructor(){(0,n.A)(this,"waIntersectionObservee",(0,t.WQX)(T))}}return M=W,(0,n.A)(W,"\u0275fac",function(D){return new(D||M)}),(0,n.A)(W,"\u0275dir",t.FsC({type:M,selectors:[["","waIntersectionObservee",""]],outputs:{waIntersectionObservee:"waIntersectionObservee"},standalone:!0,features:[t.Jv_([T])]})),W})(),j=(()=>{var M;class W{}return M=W,(0,n.A)(W,"\u0275fac",function(D){return new(D||M)}),(0,n.A)(W,"\u0275dir",t.FsC({type:M,selectors:[["","waIntersectionRoot",""]],standalone:!0,features:[t.Jv_([{provide:a,useExisting:t.aKT}])]})),W})();var B=e(7675);const h=new t.nKC("[WA_INTERSECTION_OBSERVER_SUPPORT]: [INTERSECTION_OBSERVER_SUPPORT]",{providedIn:"root",factory:()=>!!(0,t.WQX)(B.jf).IntersectionObserver}),w=h},9048:(C,l,e)=>{e.d(l,{vd:()=>_,bl:()=>h,cF:()=>Q,Q2:()=>c,OY:()=>o});var n=e(8503),t=e(3527);function r(p,I,R){return p>=I&&p<=R}function c(){return p=>p.pipe((0,n.p)(({data:I})=>r(I[0]??0,128,159)),(0,t.T)(I=>(r(I.data[0]??0,128,143)&&(I.data[0]+=16,I.data[2]=0),I)))}function o(){return p=>p.pipe((0,t.T)(({data:I})=>I))}var i=e(1423),s=e(2978);let _=(()=>{var p;class I{transform(b,K){return function a(p,I=440){return 2**((p-69)/12)*I}(b,K)}}return p=I,(0,i.A)(I,"\u0275fac",function(b){return new(b||p)}),(0,i.A)(I,"\u0275pipe",s.EJ8({name:"frequency",type:p,pure:!0,standalone:!0})),I})();var S=e(3308),v=e(7675);const E=new s.nKC("[WA_SYSEX]",{providedIn:"root",factory:()=>!1}),m=new s.nKC("[WA_MIDI_ACCESS]",{providedIn:"root",factory:(p=(0,S.A)(function*(){const I=(0,s.WQX)(v.kW),R=(0,s.WQX)(E);return I.requestMIDIAccess?I.requestMIDIAccess({sysex:R}):Promise.reject(new Error("Web MIDI API is not supported"))}),function(){return p.apply(this,arguments)})});new s.nKC("[WA_MIDI_INPUT]");var p,f=e(8399),O=e(2831),y=e(8129),T=e(965),L=e(756),F=e(6661);function Y(p){return(0,f.H)((0,s.WQX)(m).catch(()=>null)).pipe((0,O.n)(I=>{const R=[];return null==I||I[p].forEach(b=>R.push(b)),I?(0,y.R)(I,"statechange").pipe((0,t.T)(()=>R),(0,T.Z)(R)):(0,L.of)([])}),(0,F.t)(1))}new s.nKC("[WA_MIDI_INPUTS]",{factory:()=>Y("inputs")});var $=e(8823),U=e(2489),N=e(7782);const h=new s.nKC("[WA_MIDI_MESSAGES]",{providedIn:"root",factory:()=>(0,f.H)((0,s.WQX)(m).catch(p=>p)).pipe((0,O.n)(p=>p instanceof Error?(0,$.$)(p):(0,y.R)(p,"statechange").pipe((0,T.Z)(null),(0,O.n)(()=>{const I=[];return p.inputs.forEach(R=>I.push(R)),(0,U.h)(...I.map(R=>(0,y.R)(R,"midimessage")))}))),(0,N.u)())}),Q=(new s.nKC("[WA_MIDI_OUTPUT]"),new s.nKC("[WA_MIDI_OUTPUTS]",{factory:()=>Y("outputs")}),new s.nKC("[WA_MIDI_SUPPORT]",{factory:()=>!!(0,s.WQX)(v.kW).requestMIDIAccess}));new s.nKC("[WA_MIDI_INPUT_QUERY]"),new s.nKC("[WA_MIDI_OUTPUT_QUERY]")},9877:(C,l,e)=>{e.d(l,{eT:()=>S,JE:()=>u});var n=e(1423),t=e(2978),r=e(8823),c=e(9406),o=e(8001),i=e(8129),a=e(6340),s=e(7675);const S=new t.nKC("[WA_NOTIFICATION_SUPPORT]",{factory:()=>"Notification"in(0,t.WQX)(s.jf)}),v=(0,r.$)(()=>new Error("Notification API is not supported in your browser"));let u=(()=>{var E;class d{constructor(){(0,n.A)(this,"support",(0,t.WQX)(S))}requestPermission(){return this.support?new c.c(P=>{var A;null==(A=Notification.requestPermission(f=>{P.next(f),P.complete()}))||A.catch(f=>P.error(f))}):v}open(P,A){return this.support?(0,o.v)(()=>{const f=new Notification(P,A),O=(0,i.R)(f,"close");return new c.c(y=>(y.next(f),()=>f.close())).pipe((0,a.Q)(O))}):v}}return E=d,(0,n.A)(d,"\u0275fac",function(P){return new(P||E)}),(0,n.A)(d,"\u0275prov",t.jDH({token:E,factory:E.\u0275fac,providedIn:"root"})),d})()},8041:(C,l,e)=>{e.d(l,{uq:()=>P,pD:()=>T,xI:()=>o,mR:()=>r,T9:()=>Y});var n=e(1423),t=e(2978);let r=(()=>{var U;class N{constructor(){(0,n.A)(this,"amount",void 0),(0,n.A)(this,"label",void 0),(0,n.A)(this,"pending",void 0)}}return U=N,(0,n.A)(N,"\u0275fac",function(h){return new(h||U)}),(0,n.A)(N,"\u0275dir",t.FsC({type:U,selectors:[["","waPaymentItem","","paymentAmount","","paymentLabel",""]],inputs:{amount:["paymentAmount","amount"],label:["paymentLabel","label"],pending:["paymentPending","pending"]},standalone:!0})),N})(),o=(()=>{var U;class N{constructor(){(0,n.A)(this,"total",void 0),(0,n.A)(this,"id",void 0),(0,n.A)(this,"modifiers",void 0),(0,n.A)(this,"shippingOptions",void 0),(0,n.A)(this,"displayItems",void 0)}set paymentItems(h){this.displayItems=h.toArray()}}return U=N,(0,n.A)(N,"\u0275fac",function(h){return new(h||U)}),(0,n.A)(N,"\u0275dir",t.FsC({type:U,selectors:[["","waPayment","","paymentTotal",""]],contentQueries:function(h,w,M){if(1&h&&t.wni(M,r,4),2&h){let W;t.mGM(W=t.lsd())&&(w.paymentItems=W)}},inputs:{total:["paymentTotal","total"],id:["paymentId","id"],modifiers:["paymentModifiers","modifiers"],shippingOptions:["paymentShippingOptions","shippingOptions"]},standalone:!0})),N})();var a=e(8129),s=e(2831),_=e(8399),S=e(4526),v=e(756),u=e(7782),E=e(8503),d=e(3308);const P=new t.nKC("[WA_PAYMENT_METHODS]",{factory:()=>[{supportedMethods:"basic-card"}]}),f=new t.nKC("[WA_PAYMENT_OPTIONS]",{factory:()=>({})});var O=e(7675);const T=new t.nKC("[WA_PAYMENT_REQUEST_SUPPORT]",{factory:()=>!!(0,t.WQX)(O.jf).PaymentRequest});let L=(()=>{var U;class N{constructor(){(0,n.A)(this,"supported",(0,t.WQX)(T)),(0,n.A)(this,"paymentMethods",(0,t.WQX)(P)),(0,n.A)(this,"paymentOptions",(0,t.WQX)(f))}request(h,w=this.paymentMethods,M=this.paymentOptions){var W=this;return(0,d.A)(function*(){if(!W.supported)return Promise.reject(new Error("Payment Request is not supported in your browser"));const g=new PaymentRequest(w,h,M);return g.canMakePayment().then(function(){var D=(0,d.A)(function*(Q){return Q?g.show(h):Promise.reject(new Error("Payment Request cannot make the payment"))});return function(Q){return D.apply(this,arguments)}}())})()}}return U=N,(0,n.A)(N,"\u0275fac",function(h){return new(h||U)}),(0,n.A)(N,"\u0275prov",t.jDH({token:U,factory:U.\u0275fac,providedIn:"root"})),N})();function F(U){return U instanceof Error||U instanceof DOMException}let Y=(()=>{var U;class N{constructor(){(0,n.A)(this,"paymentHost",(0,t.WQX)(o)),(0,n.A)(this,"paymentRequest",(0,t.WQX)(L)),(0,n.A)(this,"nativeElement",(0,t.WQX)(t.aKT).nativeElement),(0,n.A)(this,"methods",(0,t.WQX)(P)),(0,n.A)(this,"options",(0,t.WQX)(f)),(0,n.A)(this,"waPaymentSubmit",void 0),(0,n.A)(this,"waPaymentError",void 0);const h=(0,a.R)(this.nativeElement,"click").pipe((0,s.n)(()=>(0,_.H)(this.paymentRequest.request({...this.paymentHost},this.methods,this.options)).pipe((0,S.W)(w=>(0,v.of)(w)))),(0,u.u)());this.waPaymentSubmit=h.pipe((0,E.p)(w=>!F(w))),this.waPaymentError=h.pipe((0,E.p)(F))}}return U=N,(0,n.A)(N,"\u0275fac",function(h){return new(h||U)}),(0,n.A)(N,"\u0275dir",t.FsC({type:U,selectors:[["","waPaymentSubmit",""]],outputs:{waPaymentSubmit:"waPaymentSubmit",waPaymentError:"waPaymentError"},standalone:!0})),N})()},2018:(C,l,e)=>{e.d(l,{pJ:()=>m,Kn:()=>P,GZ:()=>f,kR:()=>A});var n=e(1423),t=e(2978),r=e(9406),c=e(2029),o=e(8399),i=e(2831),a=e(8129),s=e(965),_=e(3527),S=e(6661),v=e(7675);const u=new t.nKC("[WA_PERMISSIONS]",{factory:()=>(0,t.WQX)(v.kW).permissions}),E=u,d=new t.nKC("[WA_PERMISSIONS_SUPPORT]",{factory:()=>!!(0,t.WQX)(E)}),m=d;let P=(()=>{var y;class T{constructor(){(0,n.A)(this,"permissions",(0,t.WQX)(u)),(0,n.A)(this,"permissionsSupported",(0,t.WQX)(d))}state(F){const Y="string"==typeof F?{name:F}:F;return new r.c(j=>this.permissionsSupported?(0,o.H)(this.permissions.query(Y)).pipe((0,i.n)(H=>(0,a.R)(H,"change").pipe((0,s.Z)(null),(0,_.T)(()=>H.state)))).subscribe(j):(j.error("Permissions is not supported in your browser"),new c.yU)).pipe((0,S.t)({bufferSize:1,refCount:!0}))}}return y=T,(0,n.A)(T,"\u0275fac",function(F){return new(F||y)}),(0,n.A)(T,"\u0275prov",t.jDH({token:y,factory:y.\u0275fac,providedIn:"root"})),T})();function A(y){return"granted"===y}function f(y){return"denied"===y}},2928:(C,l,e)=>{e.d(l,{Y:()=>r});var n=e(4929),t=e(3229);function r(c=0,o=n.E){return c<0&&(c=0),(0,t.O)(c,c,o)}}}]);