"use strict";exports.id=502,exports.ids=[502],exports.modules={28502:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>home_page_component});var core=__webpack_require__(35548),router=__webpack_require__(39050),constants=__webpack_require__(41961);const WEB_AUDIO_SUPPORT=new core.OlP("[WEB_AUDIO_SUPPORT]: Web Audio API support",{providedIn:"root",factory:()=>!!AudioContext});var src=__webpack_require__(24204),intersection_observer_src=__webpack_require__(26675),midi_src=__webpack_require__(72484),notification_src=__webpack_require__(65085),payment_request_src=__webpack_require__(67424),permissions_src=__webpack_require__(28523),resize_observer_src=__webpack_require__(89393);const _c0=function(a1){return["/",a1]},home_page_component=(()=>{var _HomePageComponent;class HomePageComponent2{constructor(){this.link=constants.x,this.paymentRequestSupport=(0,core.f3M)(payment_request_src.aB),this.geolocationSupport=(0,core.f3M)(src.RN),this.intersectionSupport=(0,core.f3M)(intersection_observer_src.tc),this.resizeSupport=(0,core.f3M)(resize_observer_src.vU),this.midiSupport=(0,core.f3M)(midi_src.wF),this.audioSupport=(0,core.f3M)(WEB_AUDIO_SUPPORT),this.permissionsSupport=(0,core.f3M)(permissions_src.Yc),this.notificationSupport=(0,core.f3M)(notification_src._)}}return(_HomePageComponent=HomePageComponent2).\u0275fac=function(t){return new(t||_HomePageComponent)},_HomePageComponent.\u0275cmp=core.Xpm({type:_HomePageComponent,selectors:[["home-page"]],standalone:!0,features:[core.jDz],decls:152,vars:67,consts:[[1,"link",3,"routerLink"],["alt","Common utils logo","height","64","src","assets/logos/common/logo.svg","width","64",1,"icon"],["alt","Universal logo","height","64","src","assets/logos/universal/logo.svg","width","64",1,"icon"],["alt","Web Audio API logo","height","64","src","assets/logos/audio/logo.svg","width","64",1,"icon"],["alt","Canvas API logo","height","64","src","assets/logos/canvas/logo.svg","width","64",1,"icon"],["alt","Geolocation API logo","height","64","src","assets/logos/geolocation/logo.svg","width","64",1,"icon"],["alt","Intersection Observer API logo","height","64","src","assets/logos/intersection-observer/logo.svg","width","64",1,"icon"],["alt","Web MIDI API logo","height","64","src","assets/logos/midi/logo.svg","width","64",1,"icon"],["alt","Mutation Observer API logo","height","64","src","assets/logos/mutation-observer/logo.svg","width","64",1,"icon"],["alt","Payment Request API logo","height","64","src","assets/logos/payment-request/logo.svg","width","64",1,"icon"],["alt","Permissions API logo","height","64","src","assets/logos/permissions/logo.svg","width","64",1,"icon"],["alt","Resize Observer API logo","height","64","src","assets/logos/resize-observer/logo.svg","width","64",1,"icon"],["alt","Web Speech API logo","height","64","src","assets/logos/speech/logo.svg","width","64",1,"icon"],["alt","Web Storage API logo","height","64","src","assets/logos/storage/logo.svg","width","64",1,"icon"],["alt","Worker API logo","height","64","src","assets/logos/workers/logo.svg","width","64",1,"icon"],["alt","View transition API logo","height","64","src","assets/logos/view-transition/logo.svg","width","64",1,"icon"],["alt","Notification API logo","height","64","src","assets/logos/notification/logo.svg","width","64",1,"icon"],["alt","Screen Orientation API logo","height","64","src","assets/logos/screen-orientation/logo.svg","width","64",1,"icon"]],template:function(rf,ctx){1&rf&&(core.TgZ(0,"a",0)(1,"div")(2,"h2"),core._uU(3,"Common"),core.qZA(),core._uU(4," A set of common utils for consuming "),core.TgZ(5,"strong"),core._uU(6,"Web APIs"),core.qZA(),core._uU(7," with Angular "),core.qZA(),core._UZ(8,"img",1),core.qZA(),core.TgZ(9,"a",0)(10,"div")(11,"h2"),core._uU(12,"Universal"),core.qZA(),core._uU(13," A set of fallbacks to seamlessly use "),core.TgZ(14,"strong"),core._uU(15,"Web APIs"),core.qZA(),core._uU(16," with Angular Universal "),core.qZA(),core._UZ(17,"img",2),core.qZA(),core.TgZ(18,"a",0)(19,"div")(20,"h2"),core._uU(21,"Audio"),core.qZA(),core._uU(22," A library for declarative use of "),core.TgZ(23,"strong"),core._uU(24,"Web Audio API"),core.qZA(),core._uU(25," with Angular "),core.qZA(),core._UZ(26,"img",3),core.qZA(),core.TgZ(27,"a",0)(28,"div")(29,"h2"),core._uU(30,"Canvas"),core.qZA(),core._uU(31," A library for declarative use of "),core.TgZ(32,"strong"),core._uU(33,"Canvas API"),core.qZA(),core._uU(34," with Angular "),core.qZA(),core._UZ(35,"img",4),core.qZA(),core.TgZ(36,"a",0)(37,"div")(38,"h2"),core._uU(39,"Geolocation"),core.qZA(),core._uU(40," An Observable based abstraction to use "),core.TgZ(41,"strong"),core._uU(42,"Geolocation API"),core.qZA(),core._uU(43," with Angular "),core.qZA(),core._UZ(44,"img",5),core.qZA(),core.TgZ(45,"a",0)(46,"div")(47,"h2"),core._uU(48,"Intersection Observer"),core.qZA(),core._uU(49," A library for declarative use of "),core.TgZ(50,"strong"),core._uU(51,"Intersection Observer API"),core.qZA(),core._uU(52," with Angular "),core.qZA(),core._UZ(53,"img",6),core.qZA(),core.TgZ(54,"a",0)(55,"div")(56,"h2"),core._uU(57,"MIDI"),core.qZA(),core._uU(58," An Observable based library for the use of "),core.TgZ(59,"strong"),core._uU(60,"Web MIDI API"),core.qZA(),core._uU(61," with Angular "),core.qZA(),core._UZ(62,"img",7),core.qZA(),core.TgZ(63,"a",0)(64,"div")(65,"h2"),core._uU(66,"Mutation Observer"),core.qZA(),core._uU(67," A library for declarative use of "),core.TgZ(68,"strong"),core._uU(69,"Mutation Observer API"),core.qZA(),core._uU(70," with Angular "),core.qZA(),core._UZ(71,"img",8),core.qZA(),core.TgZ(72,"a",0)(73,"div")(74,"h2"),core._uU(75,"Payment Request"),core.qZA(),core._uU(76," A library for declarative use of "),core.TgZ(77,"strong"),core._uU(78,"Payment Request API"),core.qZA(),core._uU(79," with Angular "),core.qZA(),core._UZ(80,"img",9),core.qZA(),core.TgZ(81,"a",0)(82,"div")(83,"h2"),core._uU(84,"Permissions"),core.qZA(),core._uU(85," A library for Observable-based use of "),core.TgZ(86,"strong"),core._uU(87,"Permissions API"),core.qZA()(),core._UZ(88,"img",10),core.qZA(),core.TgZ(89,"a",0)(90,"div")(91,"h2"),core._uU(92,"Resize Observer"),core.qZA(),core._uU(93," A library for declarative use of "),core.TgZ(94,"strong"),core._uU(95,"Resize Observer API"),core.qZA(),core._uU(96," with Angular "),core.qZA(),core._UZ(97,"img",11),core.qZA(),core.TgZ(98,"a",0)(99,"div")(100,"h2"),core._uU(101,"Speech"),core.qZA(),core._uU(102," A library for comfortable use of "),core.TgZ(103,"strong"),core._uU(104,"Web Speech API"),core.qZA(),core._uU(105," with Angular "),core.qZA(),core._UZ(106,"img",12),core.qZA(),core.TgZ(107,"a",0)(108,"div")(109,"h2"),core._uU(110,"Storage"),core.qZA(),core._uU(111," A library for comfortable use of "),core.TgZ(112,"strong"),core._uU(113,"Web Storage API"),core.qZA(),core._uU(114," with Angular "),core.qZA(),core._UZ(115,"img",13),core.qZA(),core.TgZ(116,"a",0)(117,"div")(118,"h2"),core._uU(119,"Workers"),core.qZA(),core._uU(120," A library for use of "),core.TgZ(121,"strong"),core._uU(122,"Web Workers"),core.qZA(),core._uU(123," as RxJS Observables with Angular "),core.qZA(),core._UZ(124,"img",14),core.qZA(),core.TgZ(125,"a",0)(126,"div")(127,"h2"),core._uU(128,"View Transition"),core.qZA(),core._uU(129," A library for declarative use of "),core.TgZ(130,"strong"),core._uU(131,"View Transition API"),core.qZA(),core._uU(132," with Angular "),core.qZA(),core._UZ(133,"img",15),core.qZA(),core.TgZ(134,"a",0)(135,"div")(136,"h2"),core._uU(137,"Notification"),core.qZA(),core._uU(138," A library for declarative use of "),core.TgZ(139,"strong"),core._uU(140,"Notification API"),core.qZA(),core._uU(141," with Angular "),core.qZA(),core._UZ(142,"img",16),core.qZA(),core.TgZ(143,"a",0)(144,"div")(145,"h2"),core._uU(146,"Screen Orientation"),core.qZA(),core._uU(147," A library for declarative use of "),core.TgZ(148,"strong"),core._uU(149,"Screen Orientation API"),core.qZA(),core._uU(150," with Angular "),core.qZA(),core._UZ(151,"img",17),core.qZA()),2&rf&&(core.Q6J("routerLink",core.VKq(33,_c0,ctx.link.CommonPage)),core.xp6(9),core.Q6J("routerLink",core.VKq(35,_c0,ctx.link.UniversalPage)),core.xp6(9),core.ekj("not_supported",!ctx.audioSupport),core.Q6J("routerLink",core.VKq(37,_c0,ctx.link.AudioPage)),core.xp6(9),core.Q6J("routerLink",core.VKq(39,_c0,ctx.link.CanvasPage)),core.xp6(9),core.ekj("not-supported",!ctx.geolocationSupport),core.Q6J("routerLink",core.VKq(41,_c0,ctx.link.GeolocationPage)),core.xp6(9),core.ekj("not-supported",!ctx.intersectionSupport),core.Q6J("routerLink",core.VKq(43,_c0,ctx.link.IntersectionObserverPage)),core.xp6(9),core.ekj("not-supported",!ctx.midiSupport),core.Q6J("routerLink",core.VKq(45,_c0,ctx.link.MidiPage)),core.xp6(9),core.Q6J("routerLink",core.VKq(47,_c0,ctx.link.MutationObserverPage)),core.xp6(9),core.ekj("not-supported",!ctx.paymentRequestSupport),core.Q6J("routerLink",core.VKq(49,_c0,ctx.link.PaymentRequestPage)),core.xp6(9),core.ekj("not-supported",!ctx.permissionsSupport),core.Q6J("routerLink",core.VKq(51,_c0,ctx.link.PermissionsPage)),core.xp6(8),core.ekj("not-supported",!ctx.resizeSupport),core.Q6J("routerLink",core.VKq(53,_c0,ctx.link.ResizeObserverPage)),core.xp6(9),core.Q6J("routerLink",core.VKq(55,_c0,ctx.link.SpeechPage)),core.xp6(9),core.Q6J("routerLink",core.VKq(57,_c0,ctx.link.StoragePage)),core.xp6(9),core.Q6J("routerLink",core.VKq(59,_c0,ctx.link.WorkersPage)),core.xp6(9),core.Q6J("routerLink",core.VKq(61,_c0,ctx.link.ViewTransitionPage)),core.xp6(9),core.ekj("not-supported",!ctx.notificationSupport),core.Q6J("routerLink",core.VKq(63,_c0,ctx.link.Notification)),core.xp6(9),core.Q6J("routerLink",core.VKq(65,_c0,ctx.link.ScreenOrientation)))},dependencies:[router.rH],styles:['[_nghost-%COMP%]{display:flex;flex-wrap:wrap;align-content:flex-start;justify-content:center}.link[_ngcontent-%COMP%]{display:flex;max-width:380px;color:#444;border-radius:4px;border:1px solid gainsboro;font-size:14px;padding:0 16px 16px;margin:10px;box-sizing:border-box;transition:box-shadow .3s}.link[_ngcontent-%COMP%]:hover{box-shadow:0 12px 36px #0003}.not-supported[_ngcontent-%COMP%]{opacity:.5}.not-supported[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:after{content:"Not supported by your browser";display:block;font-size:.6em;color:var(--tui-error-fill)}.icon[_ngcontent-%COMP%]{flex-shrink:0;margin:24px 6px 0 20px}'],changeDetection:0}),HomePageComponent2})()},70645:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SafeObserver2});const SafeObserver2=typeof IntersectionObserver<"u"?IntersectionObserver:class{constructor(){this.root=null,this.rootMargin="",this.thresholds=[]}observe(){}unobserve(){}disconnect(){}takeRecords(){return[]}}},65804:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IntersectionObserveeDirective});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35548),_services_intersection_observee_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(80295);let IntersectionObserveeDirective=(()=>{var _IntersectionObserveeDirective;class IntersectionObserveeDirective2{constructor(){this.waIntersectionObservee=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.f3M)(_services_intersection_observee_service__WEBPACK_IMPORTED_MODULE_0__.v)}}return(_IntersectionObserveeDirective=IntersectionObserveeDirective2).\u0275fac=function(t){return new(t||_IntersectionObserveeDirective)},_IntersectionObserveeDirective.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_1__.lG2({type:_IntersectionObserveeDirective,selectors:[["","waIntersectionObservee",""]],outputs:{waIntersectionObservee:"waIntersectionObservee"},standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__._Bn([_services_intersection_observee_service__WEBPACK_IMPORTED_MODULE_0__.v])]}),IntersectionObserveeDirective2})()},94478:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IntersectionObserverDirective});var core=__webpack_require__(35548),safe_observer=__webpack_require__(70645),intersection_root=__webpack_require__(20056),intersection_root_margin=__webpack_require__(42480);function rootMarginFactory(rootMargin){return rootMargin||intersection_root_margin.O}var intersection_threshold=__webpack_require__(63022);function thresholdFactory(threshold){return(null==threshold?void 0:threshold.split(",").map(parseFloat))||intersection_threshold.O}let IntersectionObserverDirective=(()=>{var _IntersectionObserverDirective;class IntersectionObserverDirective2 extends safe_observer.Z{constructor(rootMargin,threshold){const root=(0,core.f3M)(intersection_root.p,{optional:!0});super(entries=>{this.callbacks.forEach((callback,element)=>{const filtered=entries.filter(({target})=>target===element);return filtered.length&&callback(filtered,this)})},{root:null==root?void 0:root.nativeElement,rootMargin:rootMarginFactory(rootMargin),threshold:thresholdFactory(threshold)}),this.callbacks=new Map}observe(target,callback=(()=>{})){super.observe(target),this.callbacks.set(target,callback)}unobserve(target){super.unobserve(target),this.callbacks.delete(target)}ngOnDestroy(){this.disconnect()}}return(_IntersectionObserverDirective=IntersectionObserverDirective2).\u0275fac=function(t){return new(t||_IntersectionObserverDirective)(core.$8M("waIntersectionRootMargin"),core.$8M("waIntersectionThreshold"))},_IntersectionObserverDirective.\u0275dir=core.lG2({type:_IntersectionObserverDirective,selectors:[["","waIntersectionObserver",""]],exportAs:["IntersectionObserver"],standalone:!0,features:[core.qOj]}),IntersectionObserverDirective2})()},37085:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>IntersectionRootDirective});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35548),_tokens_intersection_root__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(20056);let IntersectionRootDirective=(()=>{var _IntersectionRootDirective;class IntersectionRootDirective2{}return(_IntersectionRootDirective=IntersectionRootDirective2).\u0275fac=function(t){return new(t||_IntersectionRootDirective)},_IntersectionRootDirective.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_1__.lG2({type:_IntersectionRootDirective,selectors:[["","waIntersectionRoot",""]],standalone:!0,features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__._Bn([{provide:_tokens_intersection_root__WEBPACK_IMPORTED_MODULE_0__.p,useExisting:_angular_core__WEBPACK_IMPORTED_MODULE_1__.SBq}])]}),IntersectionRootDirective2})()},26675:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tc:()=>INTERSECTION_OBSERVER_SUPPORT,$v:()=>IntersectionObserverModule}),__webpack_require__(65804),__webpack_require__(94478),__webpack_require__(37085);var core=__webpack_require__(35548);let IntersectionObserverModule=(()=>{var _IntersectionObserverModule;class IntersectionObserverModule2{}return(_IntersectionObserverModule=IntersectionObserverModule2).\u0275fac=function(t){return new(t||_IntersectionObserverModule)},_IntersectionObserverModule.\u0275mod=core.oAB({type:_IntersectionObserverModule}),_IntersectionObserverModule.\u0275inj=core.cJS({}),IntersectionObserverModule2})();__webpack_require__(80295),__webpack_require__(70645),__webpack_require__(20056),__webpack_require__(42480),__webpack_require__(63022);var src=__webpack_require__(88108);const INTERSECTION_OBSERVER_SUPPORT=new core.OlP("[INTERSECTION_OBSERVER_SUPPORT]: Intersection Observer API support",{providedIn:"root",factory:()=>!!(0,core.f3M)(src.m9).IntersectionObserver})},80295:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>IntersectionObserveeService});var _angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(35548),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(25948),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(89407),_directives_intersection_observer_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(94478);let IntersectionObserveeService=(()=>{var _IntersectionObserveeService;class IntersectionObserveeService2 extends rxjs__WEBPACK_IMPORTED_MODULE_1__.y{constructor(){const nativeElement=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.f3M)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.SBq).nativeElement,observer=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.f3M)(_directives_intersection_observer_directive__WEBPACK_IMPORTED_MODULE_0__.Z);return super(subscriber=>(observer.observe(nativeElement,entries=>{subscriber.next(entries)}),()=>{observer.unobserve(nativeElement)})),this.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.B)())}}return(_IntersectionObserveeService=IntersectionObserveeService2).\u0275fac=function(t){return new(t||_IntersectionObserveeService)},_IntersectionObserveeService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_2__.Yz7({token:_IntersectionObserveeService,factory:_IntersectionObserveeService.\u0275fac}),IntersectionObserveeService2})()},42480:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>INTERSECTION_ROOT_MARGIN_DEFAULT});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35548);const INTERSECTION_ROOT_MARGIN_DEFAULT="0px 0px 0px 0px";new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("[INTERSECTION_ROOT_MARGIN]: rootMargin for IntersectionObserver",{providedIn:"root",factory:()=>INTERSECTION_ROOT_MARGIN_DEFAULT})},20056:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>INTERSECTION_ROOT2});const INTERSECTION_ROOT2=new(__webpack_require__(35548).OlP)("[INTERSECTION_ROOT]: Root element for IntersectionObserver")},63022:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>INTERSECTION_THRESHOLD_DEFAULT});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35548);const INTERSECTION_THRESHOLD_DEFAULT=0;new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP("[INTERSECTION_THRESHOLD]: threshold for IntersectionObserver",{providedIn:"root",factory:()=>INTERSECTION_THRESHOLD_DEFAULT})},72484:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Zh:()=>FrequencyPipe,vK:()=>MIDI_MESSAGES,wF:()=>MIDI_SUPPORT,$c:()=>notes,AN:()=>toData});var filter=__webpack_require__(13591),map=__webpack_require__(51160);function between(value,min,max){return value>=min&&value<=max}function notes(){return source=>source.pipe((0,filter.h)(({data})=>between(data[0],128,159)),(0,map.U)(event=>(between(event.data[0],128,143)&&(event.data[0]+=16,event.data[2]=0),event)))}function toData(){return source=>source.pipe((0,map.U)(({data})=>data))}var core=__webpack_require__(35548);let FrequencyPipe=(()=>{var _FrequencyPipe;class FrequencyPipe2{transform(note,tuning){return function toFrequency(note,tuning=440){return 2**((note-69)/12)*tuning}(note,tuning)}}return(_FrequencyPipe=FrequencyPipe2).\u0275fac=function(t){return new(t||_FrequencyPipe)},_FrequencyPipe.\u0275pipe=core.Yjl({name:"frequency",type:_FrequencyPipe,pure:!0,standalone:!0}),FrequencyPipe2})();var asyncToGenerator=__webpack_require__(8239),src=__webpack_require__(88108);const SYSEX=new core.OlP("[SYSEX]: Require sysex MIDI access",{providedIn:"root",factory:()=>!1}),midi_access_MIDI_ACCESS=new core.OlP("[MIDI_ACCESS]: Promise for MIDIAccess object",{providedIn:"root",factory:(_ref=(0,asyncToGenerator.Z)(function*(){const navigatorRef=(0,core.f3M)(src.s5),sysex=(0,core.f3M)(SYSEX);return navigatorRef.requestMIDIAccess?navigatorRef.requestMIDIAccess({sysex}):Promise.reject(new Error("Web MIDI API is not supported"))}),function(){return _ref.apply(this,arguments)})});new core.OlP("[MIDI_INPUT]: MIDIInput object");var _ref,from=__webpack_require__(37384),switchMap=__webpack_require__(275),fromEvent=__webpack_require__(59359),startWith=__webpack_require__(905),of=__webpack_require__(97318),shareReplay=__webpack_require__(59582);function getPortsStream(ports){return(0,from.D)((0,core.f3M)(midi_access_MIDI_ACCESS).catch(()=>null)).pipe((0,switchMap.w)(access=>access?(0,fromEvent.R)(access,"statechange").pipe((0,map.U)(()=>[...access[ports].values()]),(0,startWith.O)([...access[ports].values()])):(0,of.of)([])),(0,shareReplay.d)(1))}new core.OlP("[MIDI_INPUTS]: Array of MIDI inputs",{factory:()=>getPortsStream("inputs")});var throwError=__webpack_require__(32225),merge=__webpack_require__(19403),share=__webpack_require__(89407);const MIDI_MESSAGES=new core.OlP("[MIDI_MESSAGES]: All incoming MIDI messages stream",{providedIn:"root",factory:()=>(0,from.D)((0,core.f3M)(midi_access_MIDI_ACCESS).catch(e=>e)).pipe((0,switchMap.w)(access=>access instanceof Error?(0,throwError._)(access):(0,fromEvent.R)(access,"statechange").pipe((0,startWith.O)(null),(0,switchMap.w)(()=>(0,merge.T)(...Array.from(access.inputs).map(([_,input])=>(0,fromEvent.R)(input,"midimessage")))))),(0,share.B)())}),MIDI_SUPPORT=(new core.OlP("[MIDI_OUTPUT]: MIDIOutput object"),new core.OlP("[MIDI_OUTPUTS]: Array of MIDI inputs",{factory:()=>getPortsStream("outputs")}),new core.OlP("[MIDI_SUPPORT]: Web MIDI API support",{factory:()=>!!(0,core.f3M)(src.s5).requestMIDIAccess}));new core.OlP("[MIDI_INPUT_QUERY]: MIDIInput object id or name"),new core.OlP("[MIDI_OUTPUT_QUERY]: MIDIOutput object id or name")},65085:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>NOTIFICATION_SUPPORT,g:()=>NotificationService});var core=__webpack_require__(35548),throwError=__webpack_require__(32225),Observable2=__webpack_require__(25948),defer=__webpack_require__(49730),fromEvent=__webpack_require__(59359),takeUntil=__webpack_require__(14279),src=__webpack_require__(88108);const NOTIFICATION_SUPPORT=new core.OlP("[NOTIFICATION_SUPPORT]: Is Notification API supported?",{factory:()=>"Notification"in(0,core.f3M)(src.m9)}),NOT_SUPPORTED_ERROR$=(0,throwError._)(()=>new Error("Notification API is not supported in your browser"));let NotificationService=(()=>{var _NotificationService;class NotificationService2{constructor(){this.support=(0,core.f3M)(NOTIFICATION_SUPPORT)}requestPermission(){return this.support?new Observable2.y(subscriber=>{var _a;null==(_a=Notification.requestPermission(permission=>{subscriber.next(permission),subscriber.complete()}))||_a.catch(err=>subscriber.error(err))}):NOT_SUPPORTED_ERROR$}open(title,options){return this.support?(0,defer.P)(()=>{const notification=new Notification(title,options),close$=(0,fromEvent.R)(notification,"close");return new Observable2.y(subscriber=>(subscriber.next(notification),()=>notification.close())).pipe((0,takeUntil.R)(close$))}):NOT_SUPPORTED_ERROR$}}return(_NotificationService=NotificationService2).\u0275fac=function(t){return new(t||_NotificationService)},_NotificationService.\u0275prov=core.Yz7({token:_NotificationService,factory:_NotificationService.\u0275fac,providedIn:"root"}),NotificationService2})()},2199:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>PaymentItemDirective});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35548);let PaymentItemDirective=(()=>{var _PaymentItemDirective;class PaymentItemDirective2{}return(_PaymentItemDirective=PaymentItemDirective2).\u0275fac=function(t){return new(t||_PaymentItemDirective)},_PaymentItemDirective.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_0__.lG2({type:_PaymentItemDirective,selectors:[["","waPaymentItem","","paymentAmount","","paymentLabel",""]],inputs:{amount:["paymentAmount","amount"],label:["paymentLabel","label"],pending:["paymentPending","pending"]},standalone:!0}),PaymentItemDirective2})()},59909:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>PaymentSubmitDirective});var core=__webpack_require__(35548),fromEvent=__webpack_require__(59359),switchMap=__webpack_require__(275),from=__webpack_require__(37384),catchError=__webpack_require__(11751),of=__webpack_require__(97318),share=__webpack_require__(89407),filter=__webpack_require__(13591),payment_request_service=__webpack_require__(92271),payment_methods=__webpack_require__(83038),payment_options=__webpack_require__(88533);function isError(item){return item instanceof Error||item instanceof DOMException}var payment_directive=__webpack_require__(98468);let PaymentSubmitDirective=(()=>{var _PaymentSubmitDirective;class PaymentSubmitDirective2{constructor(){this.paymentHost=(0,core.f3M)(payment_directive.u),this.paymentRequest=(0,core.f3M)(payment_request_service.g),this.nativeElement=(0,core.f3M)(core.SBq).nativeElement,this.methods=(0,core.f3M)(payment_methods.L),this.options=(0,core.f3M)(payment_options.d);const requests$=(0,fromEvent.R)(this.nativeElement,"click").pipe((0,switchMap.w)(()=>(0,from.D)(this.paymentRequest.request({...this.paymentHost},this.methods,this.options)).pipe((0,catchError.K)(error=>(0,of.of)(error)))),(0,share.B)());this.waPaymentSubmit=requests$.pipe((0,filter.h)(response=>!isError(response))),this.waPaymentError=requests$.pipe((0,filter.h)(isError))}}return(_PaymentSubmitDirective=PaymentSubmitDirective2).\u0275fac=function(t){return new(t||_PaymentSubmitDirective)},_PaymentSubmitDirective.\u0275dir=core.lG2({type:_PaymentSubmitDirective,selectors:[["","waPaymentSubmit",""]],outputs:{waPaymentSubmit:"waPaymentSubmit",waPaymentError:"waPaymentError"},standalone:!0}),PaymentSubmitDirective2})()},98468:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>PaymentDirective});var _payment_item_payment_item_directive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2199),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35548);let PaymentDirective=(()=>{var _PaymentDirective;class PaymentDirective2{set paymentItems(items){this.displayItems=items.toArray()}}return(_PaymentDirective=PaymentDirective2).\u0275fac=function(t){return new(t||_PaymentDirective)},_PaymentDirective.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_0__.lG2({type:_PaymentDirective,selectors:[["","waPayment","","paymentTotal",""]],contentQueries:function(rf,ctx,dirIndex){if(1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.Suo(dirIndex,_payment_item_payment_item_directive__WEBPACK_IMPORTED_MODULE_1__.j,4),2&rf){let _t;_angular_core__WEBPACK_IMPORTED_MODULE_0__.iGM(_t=_angular_core__WEBPACK_IMPORTED_MODULE_0__.CRH())&&(ctx.paymentItems=_t)}},inputs:{total:["paymentTotal","total"],id:["paymentId","id"],modifiers:["paymentModifiers","modifiers"],shippingOptions:["paymentShippingOptions","shippingOptions"]},standalone:!0}),PaymentDirective2})()},67424:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LM:()=>payment_methods.L,aB:()=>payment_request_support.a,th:()=>PaymentRequestModule}),__webpack_require__(59909);var core=__webpack_require__(35548);let PaymentRequestModule=(()=>{var _PaymentRequestModule;class PaymentRequestModule2{}return(_PaymentRequestModule=PaymentRequestModule2).\u0275fac=function(t){return new(t||_PaymentRequestModule)},_PaymentRequestModule.\u0275mod=core.oAB({type:_PaymentRequestModule}),_PaymentRequestModule.\u0275inj=core.cJS({}),PaymentRequestModule2})();__webpack_require__(92271);var payment_methods=__webpack_require__(83038),payment_request_support=(__webpack_require__(88533),__webpack_require__(37265))},92271:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>PaymentRequestService});var _home_runner_work_ng_web_apis_ng_web_apis_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8239),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(35548),_tokens_payment_methods__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(83038),_tokens_payment_options__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(88533),_tokens_payment_request_support__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(37265);let PaymentRequestService=(()=>{var _PaymentRequestService;class PaymentRequestService2{constructor(){this.supported=(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.f3M)(_tokens_payment_request_support__WEBPACK_IMPORTED_MODULE_2__.a),this.paymentMethods=(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.f3M)(_tokens_payment_methods__WEBPACK_IMPORTED_MODULE_0__.L),this.paymentOptions=(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.f3M)(_tokens_payment_options__WEBPACK_IMPORTED_MODULE_1__.d)}request(details,methods=this.paymentMethods,options=this.paymentOptions){var _this=this;return(0,_home_runner_work_ng_web_apis_ng_web_apis_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)(function*(){if(!_this.supported)return Promise.reject(new Error("Payment Request is not supported in your browser"));const gateway=new PaymentRequest(methods,details,options);return gateway.canMakePayment().then(function(){var _ref=(0,_home_runner_work_ng_web_apis_ng_web_apis_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_4__.Z)(function*(canPay){return canPay?gateway.show(details):Promise.reject(new Error("Payment Request cannot make the payment"))});return function(_x){return _ref.apply(this,arguments)}}())})()}}return(_PaymentRequestService=PaymentRequestService2).\u0275fac=function(t){return new(t||_PaymentRequestService)},_PaymentRequestService.\u0275prov=_angular_core__WEBPACK_IMPORTED_MODULE_3__.Yz7({token:_PaymentRequestService,factory:_PaymentRequestService.\u0275fac,providedIn:"root"}),PaymentRequestService2})()},83038:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>PAYMENT_METHODS});const PAYMENT_METHODS=new(__webpack_require__(35548).OlP)("[PAYMENT_METHODS]: The methods used by Request Payment API",{factory:()=>[{supportedMethods:"basic-card"}]})},88533:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>PAYMENT_OPTIONS});const PAYMENT_OPTIONS=new(__webpack_require__(35548).OlP)("[PAYMENT_OPTIONS]: Additional data requests from payer",{factory:()=>({})})},37265:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>PAYMENT_REQUEST_SUPPORT});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35548),_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(88108);const PAYMENT_REQUEST_SUPPORT=new _angular_core__WEBPACK_IMPORTED_MODULE_1__.OlP("[PAYMENT_REQUEST_SUPPORT]: Is Payment Request Api supported?",{factory:()=>!!(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.f3M)(_ng_web_apis_common__WEBPACK_IMPORTED_MODULE_0__.m9).PaymentRequest})},28523:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Yc:()=>PERMISSIONS_SUPPORT,qQ:()=>PermissionsService,ki:()=>isDenied,_j:()=>isGranted});var core=__webpack_require__(35548),Observable2=__webpack_require__(25948),from=__webpack_require__(37384),switchMap=__webpack_require__(275),fromEvent=__webpack_require__(59359),startWith=__webpack_require__(905),map=__webpack_require__(51160),shareReplay=__webpack_require__(59582),src=__webpack_require__(88108);const PERMISSIONS=new core.OlP("[PERMISSIONS]: An abstraction over window.navigator.permissions object",{factory:()=>(0,core.f3M)(src.s5).permissions}),PERMISSIONS_SUPPORT=new core.OlP("[PERMISSIONS_SUPPORT]: Is Permissions API supported?",{factory:()=>!!(0,core.f3M)(PERMISSIONS)});let PermissionsService=(()=>{var _PermissionsService;class PermissionsService2{constructor(){this.permissions=(0,core.f3M)(PERMISSIONS),this.permissionsSupported=(0,core.f3M)(PERMISSIONS_SUPPORT)}state(nameOrDescriptor){const descriptor="string"==typeof nameOrDescriptor?{name:nameOrDescriptor}:nameOrDescriptor;return new Observable2.y(subscriber=>{if(this.permissionsSupported)return(0,from.D)(this.permissions.query(descriptor)).pipe((0,switchMap.w)(status=>(0,fromEvent.R)(status,"change").pipe((0,startWith.O)(null),(0,map.U)(()=>status.state)))).subscribe(subscriber);subscriber.error("Permissions is not supported in your browser")}).pipe((0,shareReplay.d)({bufferSize:1,refCount:!0}))}}return(_PermissionsService=PermissionsService2).\u0275fac=function(t){return new(t||_PermissionsService)},_PermissionsService.\u0275prov=core.Yz7({token:_PermissionsService,factory:_PermissionsService.\u0275fac,providedIn:"root"}),PermissionsService2})();function isGranted(state){return"granted"===state}function isDenied(state){return"denied"===state}}};