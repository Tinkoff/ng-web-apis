"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53],{6659:(R,T,d)=>{d.r(T),d.d(T,{default:()=>Ne});var n=d(6889),h=d(6733),e=d(755),l=d(2133),s=d(3722),p=d(6268),v=d(6044),w=d(6479),O=d(5760),B=d(4419),y=d(4226),Q=d(7007),D=d(2423),z=d(160),I=d(5974),j=d(1479),X=d(9098),G=d(5226);const L=["*"];let U=(()=>{class o extends y.F9{constructor(i,t,a,u){super(i,t),this.mode$=a,this.options=u,this.size=this.options.size,this.identityMatcher=Q.bg,this.pseudoDisabled=!1}get nativeFocusableElement(){var i,t;return null!==(t=null===(i=this.radio)||void 0===i?void 0:i.nativeFocusableElement)&&void 0!==t?t:null}get focused(){return!!this.radio&&this.radio.focused}get computedDisabled(){return this.disabled||this.pseudoDisabled}onFocused(i){this.updateFocused(i)}onModelChange(i){this.value=i}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(l.a5,10),e.Y36(e.sBO),e.Y36(j.Au),e.Y36(G.nh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["tui-radio-labeled"]],viewQuery:function(i,t){if(1&i&&e.Gf(G._M,5),2&i){let a;e.iGM(a=e.CRH())&&(t.radio=a.first)}},hostVars:1,hostBindings:function(i,t){1&i&&e.NdJ("$.data-mode.attr",function(){return t.mode$}),2&i&&e.uIk("data-size",t.size)},inputs:{item:"item",size:"size",identityMatcher:"identityMatcher",pseudoDisabled:"pseudoDisabled"},features:[e._Bn([(0,D.FT)(o),(0,y.wB)(o),X.CV]),e.qOj],ngContentSelectors:L,decls:4,vars:15,consts:[[1,"t-wrapper"],[3,"focusable","identityMatcher","item","name","nativeId","pseudoActive","pseudoDisabled","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","size","ngModel","ngModelChange","focusedChange"],[1,"t-content"]],template:function(i,t){1&i&&(e.F$t(),e.TgZ(0,"label",0)(1,"tui-radio",1),e.NdJ("ngModelChange",function(u){return t.value=u})("focusedChange",function(u){return t.onFocused(u)}),e.qZA(),e.TgZ(2,"div",2),e.Hsn(3),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("focusable",t.focusable)("identityMatcher",t.identityMatcher)("item",t.item)("name",t.computedName||"")("nativeId",t.nativeId)("pseudoActive",t.pseudoActive)("pseudoDisabled",t.computedDisabled)("pseudoFocus",t.pseudoFocus)("pseudoHover",t.pseudoHover)("pseudoInvalid",t.computedInvalid)("readOnly",t.readOnly)("size",t.size)("ngModel",t.value),e.xp6(1),e.ekj("t-content_disabled",t.computedDisabled))},dependencies:[G._M,l.JJ,l.On],styles:["[_nghost-%COMP%]{position:relative;display:block;font:var(--tui-font-text-s);line-height:1rem}._readonly[_nghost-%COMP%]{pointer-events:none}[data-size=l][_nghost-%COMP%]{line-height:1.5rem}.t-wrapper[_ngcontent-%COMP%]{display:inline-flex;max-width:100%;cursor:pointer;vertical-align:top;align-items:inherit}._disabled[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{cursor:default}[data-mode=onDark][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.t-content[_ngcontent-%COMP%]{word-wrap:break-word;min-width:0;line-height:inherit}.t-content_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{margin-left:.5rem}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);margin-left:.75rem;line-height:inherit}"],changeDetection:0}),o})(),te=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[h.ez,l.u5,z.u,I.F,G.FE]]}),o})();var q=d(5909),ee=d(7691),g=d(9127),C=d(4911),f=d(8748),m=d(4787),k=d(1209),A=d(6675),ie=d(7145),Z=d(3068),E=d(6978),P=d(1698);let ae=(()=>{var o;class r extends AudioBufferSourceNode{constructor(t,a,u){const c=(0,e.f3M)(ie.L),_=(0,e.f3M)(s.N),M=(0,e.f3M)(E.j),S=(0,P.Q)(a,0),b=(0,P.Q)(u,1);if(!M){const N=_.createBufferSource();return Object.setPrototypeOf(r.prototype,Object.getPrototypeOf(N)),Object.setPrototypeOf(N,r.prototype),N.playbackRate.value=b,r.init(N,null,t,c),N}super(_,{detune:S,playbackRate:b}),(0,n.Z)(this,"buffer$",void 0),(0,n.Z)(this,"detuneParam",void 0),(0,n.Z)(this,"playbackRateParam",void 0),(0,n.Z)(this,"ended",void 0),r.init(this,null,t,c)}static init(t,a,u,c){null!==u&&t.start();const _=new e.vpe;t.ended=_,t.onended=()=>_.emit(),t.buffer$=new f.x,t.buffer$.pipe((0,m.w)(M=>"string"==typeof M?c.fetch(M):(0,k.of)(M))).subscribe(M=>{t.buffer=M})}set bufferSetter(t){this.buffer$.next(t)}ngOnDestroy(){this.buffer$.complete();try{this.stop()}catch{}this.disconnect()}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)(e.$8M("autoplay"),e.$8M("detune"),e.$8M("playbackRate"))}),(0,n.Z)(r,"\u0275dir",e.lG2({type:o,selectors:[["","waAudioBufferSourceNode",""]],inputs:{loop:"loop",loopStart:"loopStart",loopEnd:"loopEnd",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",detuneParam:["detune","detuneParam"],playbackRateParam:["playbackRate","playbackRateParam"],bufferSetter:["buffer","bufferSetter"]},outputs:{ended:"ended"},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,Z.j)(o)]),e.qOj]})),(0,C.gn)([(0,A.v)("detune")],r.prototype,"detuneParam",void 0),(0,C.gn)([(0,A.v)("playbackRate")],r.prototype,"playbackRateParam",void 0),r})(),re=(()=>{var o;class r extends MediaElementAudioSourceNode{constructor(){const t=(0,e.f3M)(s.N),a=(0,e.f3M)(E.j),u=(0,e.f3M)(e.SBq).nativeElement;if(!a){const c=t.createMediaElementSource(u);return Object.setPrototypeOf(c,r.prototype),c}super(t,{mediaElement:u})}ngOnDestroy(){this.disconnect()}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)}),(0,n.Z)(r,"\u0275dir",e.lG2({type:o,selectors:[["audio","waMediaElementAudioSourceNode",""],["video","waMediaElementAudioSourceNode",""]],exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,Z.j)(o)]),e.qOj]})),r})();var ue=d(6861),K=d(6188),H=d(7925),V=d(2425),Y=d(8557),F=d(5812);let de=(()=>{var o;class r extends AnalyserNode{constructor(t,a,u,c){const _=(0,e.f3M)(s.N),M=(0,e.f3M)(Z.K,{skipSelf:!0}),S=(0,e.f3M)(E.j),b=(0,P.Q)(t,2048),N=(0,P.Q)(a,-30),W=(0,P.Q)(u,-100),$=(0,P.Q)(c,.8);if(!S){const x=_.createAnalyser();return Object.setPrototypeOf(x,r.prototype),r.init(x,M),x.fftSize=b,x.maxDecibels=N,x.minDecibels=W,x.smoothingTimeConstant=$,x}super(_,{fftSize:b,maxDecibels:N,minDecibels:W,smoothingTimeConstant:$}),(0,n.Z)(this,"frequencyByte$",void 0),(0,n.Z)(this,"frequencyFloat$",void 0),(0,n.Z)(this,"timeByte$",void 0),(0,n.Z)(this,"timeFloat$",void 0),r.init(this,M)}static init(t,a){(0,F.$)(a,t);let u=new Uint8Array(t.frequencyBinCount),c=new Float32Array(t.frequencyBinCount),_=new Uint8Array(t.fftSize),M=new Float32Array(t.fftSize);t.frequencyByte$=(0,K.F)(0,H.Z).pipe((0,V.U)(()=>(u.length!==t.frequencyBinCount&&(u=new Uint8Array(t.frequencyBinCount)),t.getByteFrequencyData(u),u)),(0,Y.B)()),t.frequencyFloat$=(0,K.F)(0,H.Z).pipe((0,V.U)(()=>(c.length!==t.frequencyBinCount&&(c=new Float32Array(t.frequencyBinCount)),t.getFloatFrequencyData(c),c)),(0,Y.B)()),t.timeByte$=(0,K.F)(0,H.Z).pipe((0,V.U)(()=>(_.length!==t.fftSize&&(_=new Uint8Array(t.frequencyBinCount)),t.getByteTimeDomainData(_),_)),(0,Y.B)()),t.timeFloat$=(0,K.F)(0,H.Z).pipe((0,V.U)(()=>(M.length!==t.fftSize&&(M=new Float32Array(t.frequencyBinCount)),t.getFloatTimeDomainData(M),M)),(0,Y.B)())}ngOnDestroy(){this.disconnect()}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)(e.$8M("fftSize"),e.$8M("maxDecibels"),e.$8M("minDecibels"),e.$8M("smoothingTimeConstant"))}),(0,n.Z)(r,"\u0275dir",e.lG2({type:o,selectors:[["","waAnalyserNode",""]],inputs:{fftSize:"fftSize",minDecibels:"minDecibels",maxDecibels:"maxDecibels",smoothingTimeConstant:"smoothingTimeConstant",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation"},outputs:{frequencyByte$:"frequencyByte$",frequencyFloat$:"frequencyFloat$",timeByte$:"timeByte$",timeFloat$:"timeFloat$"},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,Z.j)(o)]),e.qOj]})),r})(),se=(()=>{var o;class r extends BiquadFilterNode{constructor(t,a,u,c){const _=(0,e.f3M)(s.N),M=(0,e.f3M)(E.j),S=(0,e.f3M)(Z.K,{skipSelf:!0}),b=(0,P.Q)(t,0),N=(0,P.Q)(a,350),W=(0,P.Q)(u,0),$=(0,P.Q)(c,1);if(!M){const x=_.createBiquadFilter();return Object.setPrototypeOf(x,r.prototype),x.detune.value=b,x.frequency.value=N,x.gain.value=W,x.Q.value=$,(0,F.$)(S,x),x}super(_,{detune:b,frequency:N,gain:W,Q:$}),(0,n.Z)(this,"detuneParam",void 0),(0,n.Z)(this,"frequencyParam",void 0),(0,n.Z)(this,"gainParam",void 0),(0,n.Z)(this,"qParam",void 0),(0,F.$)(S,this)}static init(t,a){(0,F.$)(a,t)}ngOnDestroy(){this.disconnect()}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)(e.$8M("detune"),e.$8M("frequency"),e.$8M("gain"),e.$8M("Q"))}),(0,n.Z)(r,"\u0275dir",e.lG2({type:o,selectors:[["","waBiquadFilterNode",""]],inputs:{type:"type",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",detuneParam:["detune","detuneParam"],frequencyParam:["frequency","frequencyParam"],gainParam:["gain","gainParam"],qParam:["Q","qParam"]},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,Z.j)(o)]),e.qOj]})),(0,C.gn)([(0,A.v)("detune")],r.prototype,"detuneParam",void 0),(0,C.gn)([(0,A.v)("frequency")],r.prototype,"frequencyParam",void 0),(0,C.gn)([(0,A.v)("gain")],r.prototype,"gainParam",void 0),(0,C.gn)([(0,A.v)("Q")],r.prototype,"qParam",void 0),r})();var ce=d(1156);let le=(()=>{var o;class r extends DelayNode{constructor(t,a){const u=(0,e.f3M)(s.N),c=(0,e.f3M)(Z.K,{skipSelf:!0}),_=(0,e.f3M)(E.j),M=(0,P.Q)(t,0),S=(0,P.Q)(a,1);if(!_){const b=u.createDelay(S);return Object.setPrototypeOf(b,r.prototype),(0,F.$)(c,b),b.delayTime.value=M,b}super(u,{delayTime:M,maxDelayTime:S}),(0,n.Z)(this,"delayTimeParam",void 0),(0,F.$)(c,this)}static init(t,a){(0,F.$)(a,t)}ngOnDestroy(){this.disconnect()}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)(e.$8M("delayTime"),e.$8M("maxDelayTime"))}),(0,n.Z)(r,"\u0275dir",e.lG2({type:o,selectors:[["","waDelayNode",""]],inputs:{channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",delayTimeParam:["delayTime","delayTimeParam"]},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,Z.j)(o)]),e.qOj]})),(0,C.gn)([(0,A.v)("delayTime")],r.prototype,"delayTimeParam",void 0),r})();var ge=d(4048);function ne(o){if(!o)return 0;if("number"==typeof o)return o;if(o instanceof Array){const r=o[o.length-1].value;return"number"==typeof r?r:r[r.length-1]}return o.value instanceof Array?o.value[o.value.length-1]:o.value}var pe=d(3980);let fe=(()=>{var o;class r extends StereoPannerNode{constructor(t){const a=(0,e.f3M)(s.N),u=(0,e.f3M)(Z.K,{skipSelf:!0}),c=(0,P.Q)(t,0);try{new StereoPannerNode(a)}catch{const _=a.createPanner();return Object.setPrototypeOf(_,r.prototype),_.fallbackToPannerNode(ne(c)),(0,F.$)(u,_),_}super(a,{pan:c}),(0,F.$)(u,this)}set panParam(t){"setPosition"in this?this.fallbackToPannerNode(ne(t)):(0,pe.Z)(this.pan,t,this.context.currentTime)}ngOnDestroy(){this.disconnect()}fallbackToPannerNode(t){const a=100*t,u=a>0?270-a:a+90,c=Math.sin(a*(Math.PI/180)),_=Math.sin(u*(Math.PI/180));this.setPosition(c,0,_)}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)(e.$8M("pan"))}),(0,n.Z)(r,"\u0275dir",e.lG2({type:o,selectors:[["","waStereoPannerNode",""]],inputs:{channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation",panParam:["pan","panParam"]},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,Z.j)(o)]),e.qOj]})),r})(),me=(()=>{var o;class r extends WaveShaperNode{constructor(){const t=(0,e.f3M)(s.N),a=(0,e.f3M)(Z.K,{skipSelf:!0});if(!(0,e.f3M)(E.j)){const c=t.createWaveShaper();return Object.setPrototypeOf(c,r.prototype),(0,F.$)(a,c),c}super(t),(0,F.$)(a,this)}ngOnDestroy(){this.disconnect()}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)}),(0,n.Z)(r,"\u0275dir",e.lG2({type:o,selectors:[["","waWaveShaperNode",""]],inputs:{oversample:"oversample",curve:"curve",channelCount:"channelCount",channelCountMode:"channelCountMode",channelInterpretation:"channelInterpretation"},exportAs:["AudioNode"],standalone:!0,features:[e._Bn([(0,Z.j)(o)]),e.qOj]})),r})(),_e=(()=>{var o;class r{transform(t,a,u="exponential"){return t instanceof Array?{value:t,duration:a}:{value:t,duration:a,mode:u}}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)}),(0,n.Z)(r,"\u0275pipe",e.Yjl({name:"waAudioParam",type:o,pure:!0,standalone:!0})),r})(),he=(()=>{var o;class r{constructor(){(0,n.Z)(this,"context",(0,e.f3M)(s.N))}transform(t,a,u){return this.context.createPeriodicWave(new Float32Array(t),a?new Float32Array(a):new Float32Array(t.length),{disableNormalization:!!u})}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)}),(0,n.Z)(r,"\u0275pipe",e.Yjl({name:"waPeriodicWave",type:o,pure:!0,standalone:!0})),r})();var J=d(1693),Me=d(8397);const ve=["chain"];function Ce(o,r){if(1&o){const i=e.EpF();e.TgZ(0,"button",2),e.NdJ("click",function(){e.CHM(i);const a=e.oxw();return e.KtG(a.start())}),e._uU(1," Start AudioContext\n"),e.qZA()}}function ye(o,r){if(1&o){const i=e.EpF();e.TgZ(0,"button",17,18),e.NdJ("click",function(a){e.CHM(i);const u=e.MAs(1),c=e.oxw(3);return e.KtG(c.onClick(u,a.target))}),e._uU(2," Play "),e.ynx(3,19),e.NdJ("timeByte$",function(a){e.CHM(i);const u=e.oxw(3);return e.KtG(u.onTimeDomain(a))}),e.GkF(4,20),e.BQk(),e.qZA()}if(2&o){e.oxw(2);const i=e.MAs(27),t=e.oxw();e.Q6J("loop",!0),e.xp6(3),e.Q6J("fftSize",t.fftSize),e.xp6(1),e.Q6J("waOutput",t.chain||i)}}function Ae(o,r){if(1&o&&(e.ynx(0),e.YNc(1,ye,5,3,"button",16),e.BQk()),2&o){const i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.buffers)}}function xe(o,r){if(1&o){const i=e.EpF();e.TgZ(0,"audio",21),e.ynx(1,19),e.NdJ("timeByte$",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.onTimeDomain(a))}),e.GkF(2,20),e.BQk(),e.qZA()}if(2&o){e.oxw();const i=e.MAs(27),t=e.oxw();e.xp6(1),e.Q6J("fftSize",t.fftSize),e.xp6(1),e.Q6J("waOutput",t.chain||i)}}function Pe(o,r){if(1&o){const i=e.EpF();e.TgZ(0,"button",23,18),e.NdJ("click",function(a){e.CHM(i);const u=e.MAs(1),c=e.oxw(3);return e.KtG(c.onClick(u,a.target))}),e.ALo(2,"waPeriodicWave"),e._uU(3," Play "),e.ynx(4,19),e.NdJ("timeByte$",function(a){e.CHM(i);const u=e.oxw(3);return e.KtG(u.onTimeDomain(a))}),e.GkF(5,20),e.BQk(),e.qZA()}if(2&o){e.oxw(2);const i=e.MAs(27),t=e.oxw();e.Q6J("frequency",100)("periodicWave",e.lcZ(2,4,t.real)),e.xp6(4),e.Q6J("fftSize",t.fftSize),e.xp6(1),e.Q6J("waOutput",t.chain||i)}}function be(o,r){if(1&o&&(e.ynx(0),e.YNc(1,Pe,6,6,"button",22),e.BQk()),2&o){const i=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",i.buffers)}}function Te(o,r){if(1&o){const i=e.EpF();e.ynx(0),e.TgZ(1,"fieldset",24,25),e.ALo(3,"waAudioParam"),e.TgZ(4,"legend"),e._uU(5,"GainNode"),e.qZA(),e.TgZ(6,"input",26),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.gain=a)}),e.qZA(),e.TgZ(7,"fieldset",27),e.ALo(8,"waAudioParam"),e.TgZ(9,"legend"),e._uU(10,"StereoPannerNode"),e.qZA(),e.TgZ(11,"input",28),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.pan=a)}),e.qZA(),e.TgZ(12,"fieldset",29)(13,"legend"),e._uU(14,"AudioDestinationNode"),e.qZA()()()(),e.BQk()}if(2&o){const i=e.oxw(2);e.xp6(1),e.Q6J("gain",e.xi3(3,4,i.gain,.1)),e.xp6(5),e.Q6J("ngModel",i.gain),e.xp6(1),e.Q6J("pan",e.xi3(8,7,i.pan,.1)),e.xp6(4),e.Q6J("ngModel",i.pan)}}function Ze(o,r){if(1&o){const i=e.EpF();e.ynx(0),e.TgZ(1,"fieldset",24,25),e.ALo(3,"waAudioParam"),e.TgZ(4,"legend"),e._uU(5,"GainNode"),e.qZA(),e.TgZ(6,"em"),e._uU(7,"For feedback loop purposes only"),e.qZA(),e.TgZ(8,"fieldset",30),e.ALo(9,"waAudioParam"),e.TgZ(10,"legend"),e._uU(11,"DelayNode"),e.qZA(),e.TgZ(12,"input",26),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.delayTime=a)}),e.qZA(),e.TgZ(13,"fieldset",24)(14,"legend"),e._uU(15,"GainNode"),e.qZA(),e.TgZ(16,"input",26),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.delayGain=a)}),e.qZA(),e.TgZ(17,"fieldset",20)(18,"legend"),e._uU(19,"Output"),e.qZA(),e.TgZ(20,"em"),e._uU(21,"Connected back to the beginning of the chain"),e.qZA()()()(),e.TgZ(22,"fieldset",29)(23,"legend"),e._uU(24,"AudioDestinationNode"),e.qZA()()(),e.BQk()}if(2&o){const i=e.MAs(2),t=e.oxw(2);e.xp6(1),e.Q6J("gain",e.xi3(3,6,t.gain,.1)),e.xp6(7),e.Q6J("delayTime",e.xi3(9,9,t.delayTime,.1)),e.xp6(4),e.Q6J("ngModel",t.delayTime),e.xp6(1),e.Q6J("gain",t.delayGain),e.xp6(3),e.Q6J("ngModel",t.delayGain),e.xp6(1),e.Q6J("waOutput",i)}}function Oe(o,r){if(1&o&&e._UZ(0,"tui-data-list-wrapper",44),2&o){const i=e.oxw(3);e.Q6J("items",i.items)}}function De(o,r){if(1&o){const i=e.EpF();e.ynx(0),e.TgZ(1,"fieldset",31,25),e.ALo(3,"waAudioParam"),e.ALo(4,"waAudioParam"),e.ALo(5,"waAudioParam"),e.ALo(6,"waAudioParam"),e.TgZ(7,"legend"),e._uU(8,"BiquadFilterNode"),e.qZA(),e.TgZ(9,"tui-select",32),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.type=a)}),e._uU(10," Type "),e.YNc(11,Oe,1,1,"tui-data-list-wrapper",33),e.qZA(),e.TgZ(12,"label",34)(13,"input",26),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.filterGain=a)}),e.qZA()(),e.TgZ(14,"label",35)(15,"input",36),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.frequency=a)}),e.qZA()(),e.TgZ(16,"label",37)(17,"input",38),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.Q=a)}),e.qZA()(),e.TgZ(18,"label",39)(19,"input",40),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.detune=a)}),e.qZA()(),e.TgZ(20,"fieldset",41)(21,"legend"),e._uU(22,"WaveShaperNode"),e.qZA(),e.TgZ(23,"input",42),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw(2);return e.KtG(u.onCurveChange(a))}),e.qZA(),e.ynx(24,24),e.ALo(25,"waAudioParam"),e.TgZ(26,"fieldset",43)(27,"legend"),e._uU(28,"ConvolverNode"),e.qZA(),e.TgZ(29,"fieldset",29)(30,"legend"),e._uU(31,"AudioDestinationNode"),e.qZA()()(),e.BQk(),e.qZA()(),e.BQk()}if(2&o){const i=e.oxw(2);e.xp6(1),e.Q6J("detune",e.xi3(3,13,i.detune,.1))("frequency",e.xi3(4,16,i.frequency,.1))("gain",e.xi3(5,19,i.filterGain,.1))("Q",e.xi3(6,22,i.Q,.1))("type",i.type),e.xp6(8),e.Q6J("ngModel",i.type),e.xp6(4),e.Q6J("ngModel",i.filterGain),e.xp6(2),e.Q6J("ngModel",i.frequency),e.xp6(2),e.Q6J("ngModel",i.Q),e.xp6(2),e.Q6J("ngModel",i.detune),e.xp6(1),e.Q6J("curve",i.curve),e.xp6(3),e.Q6J("ngModel",i.distortion),e.xp6(1),e.Q6J("gain",e.xi3(25,25,i.distortionCompensation,.1))}}function Fe(o,r){if(1&o){const i=e.EpF();e.TgZ(0,"section")(1,"h2"),e._uU(2,"Description"),e.qZA(),e.TgZ(3,"p"),e._uU(4," This is a demo for "),e.TgZ(5,"strong"),e._uU(6,"@ng-web-apis/audio"),e.qZA(),e._uU(7," \u2014 a Web Audio API declarative library for Angular. Here you can select different audio source options and see AudioNode graph for selected configuration. Demo page uses HTML elements as directives hosts, in real life scenario you can use "),e.TgZ(8,"code"),e._uU(9,"ng-container"),e.qZA(),e._uU(10," so you will not have redundant DOM tags. "),e.qZA()(),e.TgZ(11,"section")(12,"h2"),e._uU(13,"Source"),e.qZA(),e.TgZ(14,"tui-radio-labeled",3),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw();return e.KtG(u.selectedSource=a)}),e._uU(15," AudioBufferSourceNode "),e.qZA(),e.TgZ(16,"tui-radio-labeled",4),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw();return e.KtG(u.selectedSource=a)}),e._uU(17," MediaElementAudioSourceNode "),e.qZA(),e.TgZ(18,"tui-radio-labeled",5),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw();return e.KtG(u.selectedSource=a)}),e._uU(19," OscillatorNode "),e.qZA(),e.ynx(20,6),e.YNc(21,Ae,2,1,"ng-container",7),e.YNc(22,xe,3,2,"audio",8),e.YNc(23,be,2,1,"ng-container",7),e.BQk(),e.TgZ(24,"p")(25,"canvas",9,10),e._UZ(28,"canvas-path",11),e.ALo(29,"path"),e.ALo(30,"transform"),e.qZA()()(),e.TgZ(31,"section")(32,"h2"),e._uU(33,"Chain"),e.qZA(),e.TgZ(34,"tui-radio-labeled",12),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw();return e.KtG(u.selectedChain=a)}),e._uU(35," Dry "),e.qZA(),e.TgZ(36,"tui-radio-labeled",13),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw();return e.KtG(u.selectedChain=a)}),e._uU(37," Balance "),e.qZA(),e.TgZ(38,"tui-radio-labeled",14),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw();return e.KtG(u.selectedChain=a)}),e._uU(39," Delay "),e.qZA(),e.TgZ(40,"tui-radio-labeled",15),e.NdJ("ngModelChange",function(a){e.CHM(i);const u=e.oxw();return e.KtG(u.selectedChain=a)}),e._uU(41," Complex "),e.qZA(),e.ynx(42,6),e.YNc(43,Te,15,10,"ng-container",7),e.YNc(44,Ze,25,12,"ng-container",7),e.YNc(45,De,32,28,"ng-container",7),e.BQk(),e.qZA()}if(2&o){const i=e.MAs(26),t=e.oxw();e.xp6(14),e.Q6J("ngModel",t.selectedSource),e.xp6(2),e.Q6J("ngModel",t.selectedSource),e.xp6(2),e.Q6J("ngModel",t.selectedSource),e.xp6(2),e.Q6J("ngSwitch",t.selectedSource),e.xp6(1),e.Q6J("ngSwitchCase","buffer"),e.xp6(1),e.Q6J("ngSwitchCase","media"),e.xp6(1),e.Q6J("ngSwitchCase","oscillator"),e.xp6(5),e.Q6J("lineWidth",4/i.height)("path",e.lcZ(29,18,t.path))("transform",e.lcZ(30,20,t.getTransform(i))),e.xp6(6),e.Q6J("ngModel",t.selectedChain),e.xp6(2),e.Q6J("ngModel",t.selectedChain),e.xp6(2),e.Q6J("ngModel",t.selectedChain),e.xp6(2),e.Q6J("ngModel",t.selectedChain),e.xp6(2),e.Q6J("ngSwitch",t.selectedChain),e.xp6(1),e.Q6J("ngSwitchCase","balance"),e.xp6(1),e.Q6J("ngSwitchCase","delay"),e.xp6(1),e.Q6J("ngSwitchCase","complex")}}const Ne=(()=>{var o;class r{constructor(){(0,n.Z)(this,"context",(0,e.f3M)(s.N)),(0,n.Z)(this,"chain",void 0),(0,n.Z)(this,"buffers",[Date.now()]),(0,n.Z)(this,"selectedChain","dry"),(0,n.Z)(this,"selectedSource","buffer"),(0,n.Z)(this,"gain",1),(0,n.Z)(this,"pan",0),(0,n.Z)(this,"delayTime",1),(0,n.Z)(this,"delayGain",.5),(0,n.Z)(this,"distortion",20),(0,n.Z)(this,"frequency",350),(0,n.Z)(this,"detune",0),(0,n.Z)(this,"filterGain",0),(0,n.Z)(this,"Q",1),(0,n.Z)(this,"type","lowpass"),(0,n.Z)(this,"curve",oe(this.distortion)),(0,n.Z)(this,"started",!1),(0,n.Z)(this,"fftSize",2048),(0,n.Z)(this,"path",""),(0,n.Z)(this,"items",["lowpass","highpass","bandpass","lowshelf","highshelf","peaking","notch","allpass"]),(0,n.Z)(this,"real",[0,0,1,0,1])}get distortionCompensation(){return 1.2-this.distortion/20}start(){this.started=!0,this.context.resume()}getTransform({width:t,height:a}){return`scale(${t/this.fftSize}, ${a/2})`}onCurveChange(t){this.distortion=t,this.curve=oe(t)}onClick(t,a){"Play"===a.textContent.trim()?(a.textContent="Stop",t.start()):this.buffers[0]=Date.now()}onTimeDomain(t){this.path=t.reduce((a,u,c)=>`${a} L ${c} ${u/128}`,"M 0 0")}}return o=r,(0,n.Z)(r,"\u0275fac",function(t){return new(t||o)}),(0,n.Z)(r,"\u0275cmp",e.Xpm({type:o,selectors:[["audio-page"]],viewQuery:function(t,a){if(1&t&&e.Gf(ve,5),2&t){let u;e.iGM(u=e.CRH())&&(a.chain=u.first)}},standalone:!0,features:[e.jDz],decls:3,vars:2,consts:[["appearance","secondary","tuiButton","",3,"click",4,"ngIf","ngIfElse"],["graph",""],["appearance","secondary","tuiButton","",3,"click"],["item","buffer","name","source",3,"ngModel","ngModelChange"],["item","media","name","source",3,"ngModel","ngModelChange"],["item","oscillator","name","source",3,"ngModel","ngModelChange"],[3,"ngSwitch"],[4,"ngSwitchCase"],["controls","","loop","","src","assets/demo.mp3","waMediaElementAudioSourceNode","",4,"ngSwitchCase"],["waAudioDestinationNode","","waCanvas2d","",1,"canvas"],["canvas","","fallback","AudioNode"],["fillStyle","transparent","strokeStyle","black",3,"lineWidth","path","transform"],["item","dry","name","chain",3,"ngModel","ngModelChange"],["item","balance","name","chain",3,"ngModel","ngModelChange"],["item","delay","name","chain",3,"ngModel","ngModelChange"],["item","complex","name","chain",3,"ngModel","ngModelChange"],["buffer","assets/demo.mp3","size","s","tuiButton","","waAudioBufferSourceNode","",3,"loop","click",4,"ngFor","ngForOf"],["buffer","assets/demo.mp3","size","s","tuiButton","","waAudioBufferSourceNode","",3,"loop","click"],["source","AudioNode"],["waAnalyserNode","",3,"fftSize","timeByte$"],[3,"waOutput"],["controls","","loop","","src","assets/demo.mp3","waMediaElementAudioSourceNode",""],["size","s","tuiButton","","waOscillatorNode","",3,"frequency","periodicWave","click",4,"ngFor","ngForOf"],["size","s","tuiButton","","waOscillatorNode","",3,"frequency","periodicWave","click"],["waGainNode","",3,"gain"],["chain","AudioNode"],["max","1","min","0","step","0.01","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["waStereoPannerNode","",3,"pan"],["max","1","min","-1","step","0.01","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["waAudioDestinationNode",""],["waDelayNode","",3,"delayTime"],["waBiquadFilterNode","",3,"detune","frequency","gain","Q","type"],["tuiTextfieldSize","m",3,"ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["tuiLabel","gain"],["tuiLabel","frequence"],["max","5000","min","20","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["tuiLabel","Q"],["max","100","min","1","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["tuiLabel","detune"],["max","100","min","0","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["oversample","4x","waWaveShaperNode","",3,"curve"],["max","20","min","0","step","0.1","tuiSlider","","type","range",3,"ngModel","ngModelChange"],["buffer","assets/response.m4a","waConvolverNode",""],[3,"items"]],template:function(t,a){if(1&t&&(e.YNc(0,Ce,2,0,"button",0),e.YNc(1,Fe,46,22,"ng-template",null,1,e.W1O)),2&t){const u=e.MAs(2);e.Q6J("ngIf",!a.started)("ngIfElse",u)}},dependencies:[h.ez,h.sg,h.O5,h.RF,h.n9,l.u5,l.Fj,l.eT,l.JJ,l.On,ee.i,g.g,ae,re,ue.P,de,se,ce.g,le,ge.z,fe,me,_e,he,J.gG,J.FR,J.Kk,J.xN,J.rv,J.lq,J.sV,p.fN,p.v0,O.c2,O.iN,v.U,v.A,B.Jy,B.uJ,B.OI,te,U,w.cn,w.sz,q.zX,q.eC,Me.gX],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;gap:12px}@media (max-width: 1100px){[_nghost-%COMP%]{flex-direction:column;width:320px;margin:0 auto}}tui-radio-labeled[_ngcontent-%COMP%]{margin:1rem 0}section[_ngcontent-%COMP%]{flex:1;max-width:320px;padding:1px 10px 10px;box-sizing:border-box;background:whitesmoke;border-radius:8px}audio[_ngcontent-%COMP%]{margin-top:1em}label[_ngcontent-%COMP%]{margin-top:.5rem}input[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin-top:1em;border:none;border-radius:4px}legend[_ngcontent-%COMP%]{background:white;box-shadow:0 0 2px;padding:5px 10px;border-radius:2px}*[ng-reflect--waoutput][_ngcontent-%COMP%]{background:thistle}*[waGainNode][_ngcontent-%COMP%]{background:pink}*[waDelayNode][_ngcontent-%COMP%]{background:lightgreen}*[waStereoPannerNode][_ngcontent-%COMP%]{background:skyblue}*[waAudioDestinationNode][_ngcontent-%COMP%]{background:khaki}*[waWaveShaperNode][_ngcontent-%COMP%]{background:salmon}*[waBiquadFilterNode][_ngcontent-%COMP%]{background:gold}*[waConvolverNode][_ngcontent-%COMP%]{background:aquamarine}"],changeDetection:0})),r})();function oe(o){const i=new Float32Array(44100),t=Math.PI/180;for(let a=0;a<44100;++a){const u=2*a/44100-1;i[a]=(3+o)*u*20*t/(Math.PI+o*Math.abs(u))}return i}},5690:(R,T,d)=>{d.d(T,{S:()=>e,t:()=>h});var n=d(755);let h=(()=>{class l{constructor(){this.indeterminate=!1,this.checked=!1,this.tuiCheckedChange=new n.vpe}get isChecked(){return this.checked}get isIndeterminate(){return this.indeterminate}set tuiChecked(p){this.checked=p||!1,this.indeterminate=null===p}onChange({checked:p}){this.checked=p,this.indeterminate=!1,this.tuiCheckedChange.emit(p)}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275dir=n.lG2({type:l,selectors:[["input","tuiChecked",""],["input","tuiCheckedChange",""]],hostVars:2,hostBindings:function(p,v){1&p&&n.NdJ("change",function(O){return v.onChange(O.target)}),2&p&&n.Ikx("checked",v.isChecked)("indeterminate",v.isIndeterminate)},inputs:{tuiChecked:"tuiChecked"},outputs:{tuiCheckedChange:"tuiCheckedChange"}}),l})(),e=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=n.oAB({type:l}),l.\u0275inj=n.cJS({}),l})()},713:(R,T,d)=>{d.d(T,{c:()=>l,q:()=>e});var n=d(755),h=d(6720);let e=(()=>{class s{constructor(v){this.tuiFocusVisibleChange=v}}return s.\u0275fac=function(v){return new(v||s)(n.Y36(h.ku))},s.\u0275dir=n.lG2({type:s,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[n._Bn([h.a3,h.ku])]}),s})(),l=(()=>{class s{}return s.\u0275fac=function(v){return new(v||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({}),s})()},5974:(R,T,d)=>{d.d(T,{F:()=>B,U:()=>O});var n=d(755),h=d(4521),e=d(6470),l=d(5047),s=d(2425),p=d(3843),v=d(8004),w=d(4776);let O=(()=>{class y{constructor({nativeElement:D},z){this.tuiFocusedChange=(0,l.T)((0,h.mL)(D,"focusin"),(0,h.mL)(D,"focusout")).pipe((0,s.U)(()=>(0,e.V8)(D)),(0,p.O)(!1),(0,v.x)(),(0,w.T)(1),(0,h.Yr)(z))}}return y.\u0275fac=function(D){return new(D||y)(n.Y36(n.SBq),n.Y36(n.R0b))},y.\u0275dir=n.lG2({type:y,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),y})(),B=(()=>{class y{}return y.\u0275fac=function(D){return new(D||y)},y.\u0275mod=n.oAB({type:y}),y.\u0275inj=n.cJS({}),y})()},5226:(R,T,d)=>{d.d(T,{nh:()=>U,_M:()=>q,FE:()=>ee});var n=d(755),h=d(2133),e=d(5690),l=d(160),s=d(5974),p=d(713),v=d(8715),w=d(4226),O=d(7007),B=d(6470),y=d(2423);const Q=["*"];let D=(()=>{class g{constructor(){this.name="tui-radio-group-"+g.index++}}return g.index=0,g.\u0275fac=function(f){return new(f||g)},g.\u0275cmp=n.Xpm({type:g,selectors:[["tui-radio-group"]],inputs:{name:"name"},ngContentSelectors:Q,decls:1,vars:0,template:function(f,m){1&f&&(n.F$t(),n.Hsn(0))},encapsulation:2,changeDetection:0}),g})();var I=d(4050),j=d(4311),X=d(6733);const G=["focusableElement"],U=(0,v.JN)({size:"m",appearances:{unchecked:j.Nm.Outline,checked:j.Nm.Primary}});let q=(()=>{class g extends w.F9{constructor(f,m,k,A){super(f,m),this.options=k,this.radioGroup=A,this.identityMatcher=O.bg,this.name=null,this.size=this.options.size,this.pseudoDisabled=!1}get appearance(){return this.checked?this.options.appearances.checked:this.options.appearances.unchecked}get computedDisabled(){return this.disabled||this.pseudoDisabled}get nativeFocusableElement(){return!this.focusableElement||this.computedDisabled?null:this.focusableElement.nativeElement}get focused(){return(0,B.V8)(this.nativeFocusableElement)}get checked(){return null===this.value?null===this.item:null!=this.item&&this.identityMatcher(this.value,this.item)}get computedName(){return this.name||this.radioGroupName||this.controlName||""}get isFocusable(){return!this.readOnly&&this.computedFocusable}onChecked(f){f&&(this.value=void 0!==this.item?this.item:this.fallbackValue)}onFocused(f){this.updateFocused(f)}onFocusVisible(f){this.updateFocusVisible(f)}get radioGroupName(){return null===this.radioGroup?null:this.radioGroup.name}}return g.\u0275fac=function(f){return new(f||g)(n.Y36(h.a5,10),n.Y36(n.sBO),n.Y36(U),n.Y36(D,8))},g.\u0275cmp=n.Xpm({type:g,selectors:[["tui-radio"]],viewQuery:function(f,m){if(1&f&&n.Gf(G,5),2&f){let k;n.iGM(k=n.CRH())&&(m.focusableElement=k.first)}},hostVars:3,hostBindings:function(f,m){2&f&&(n.uIk("data-size",m.size),n.ekj("_disabled",m.computedDisabled))},inputs:{item:"item",identityMatcher:"identityMatcher",name:"name",size:"size",pseudoDisabled:"pseudoDisabled"},features:[n._Bn([(0,y.FT)(g),(0,w.wB)(g)]),n.qOj],decls:4,vars:13,consts:[["tuiWrapper","",3,"active","appearance","disabled","focus","hover","invalid"],[1,"t-mark"],["type","radio",1,"t-native",3,"disabled","id","tuiChecked","tuiFocusable","tuiCheckedChange","tuiFocusedChange","tuiFocusVisibleChange"],["focusableElement",""]],template:function(f,m){1&f&&(n.TgZ(0,"div",0),n._UZ(1,"div",1),n.TgZ(2,"input",2,3),n.NdJ("tuiCheckedChange",function(A){return m.onChecked(A)})("tuiFocusedChange",function(A){return m.onFocused(A)})("tuiFocusVisibleChange",function(A){return m.onFocusVisible(A)}),n.qZA()()),2&f&&(n.Q6J("active",m.pseudoActive)("appearance",m.appearance)("disabled",m.computedDisabled)("focus",m.computedFocusVisible)("hover",m.pseudoHover)("invalid",m.computedInvalid),n.xp6(1),n.ekj("t-mark_visible",m.checked),n.xp6(1),n.Q6J("disabled",m.computedDisabled)("id",m.id)("tuiChecked",m.checked)("tuiFocusable",m.isFocusable),n.uIk("name",m.computedName))},dependencies:[I.o,e.t,l.t,s.U,p.q],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:block;flex-shrink:0;border-radius:100%}[data-size=m][_nghost-%COMP%]{width:1rem;height:1rem}[data-size=l][_nghost-%COMP%]{width:1.5rem;height:1.5rem}._readonly[_nghost-%COMP%]{pointer-events:none}.t-mark[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:absolute;background-color:currentColor;border-radius:100%;transform:scale(0)}.t-mark_visible[_ngcontent-%COMP%]{transform:scale(1)}[data-size=m][_nghost-%COMP%]   .t-mark[_ngcontent-%COMP%]{margin:.25rem;width:.5rem;height:.5rem}[data-size=l][_nghost-%COMP%]   .t-mark[_ngcontent-%COMP%]{margin:.4375rem;width:.625rem;height:.625rem}.t-native[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.t-native[_ngcontent-%COMP%]:-webkit-autofill, .t-native[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-native[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}@supports (-webkit-touch-callout: none){.t-native[_ngcontent-%COMP%]:active{font-size:1rem}}._disabled[_nghost-%COMP%]   .t-native[_ngcontent-%COMP%]{cursor:default}"],changeDetection:0}),g})(),ee=(()=>{class g{}return g.\u0275fac=function(f){return new(f||g)},g.\u0275mod=n.oAB({type:g}),g.\u0275inj=n.cJS({imports:[[X.ez,e.S,l.u,s.F,p.c,I.W]]}),g})()},5209:(R,T,d)=>{d.d(T,{n:()=>e});var n=d(6142),h=d(134);function e(l){return(0,n.e)((s,p)=>{let v=!1,w=0;s.subscribe((0,h.x)(p,O=>(v||(v=!l(O,w++)))&&p.next(O)))})}}}]);