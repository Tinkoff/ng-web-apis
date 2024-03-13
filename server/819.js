"use strict";exports.id=819,exports.ids=[819],exports.modules={53819:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>geolocation_page_component});var common=__webpack_require__(4594),core=__webpack_require__(35548),platform_browser=__webpack_require__(23362),src=__webpack_require__(24204),taiga_ui_core_components_button=__webpack_require__(18815),taiga_ui_core_components_loader=__webpack_require__(24876),ngx_highlightjs=__webpack_require__(27670);function GeolocationPageComponent_button_40_Template(rf,ctx){if(1&rf){const _r3=core.EpF();core.TgZ(0,"button",3),core.NdJ("click",function(){core.CHM(_r3);const ctx_r2=core.oxw();return core.KtG(ctx_r2.watch=!0)}),core._uU(1," Get my position!\n"),core.qZA()}}function GeolocationPageComponent_ng_container_41_iframe_1_Template(rf,ctx){if(1&rf&&core._UZ(0,"iframe",6),2&rf){const position_r7=ctx.ngIf,ctx_r4=core.oxw(2);core.Q6J("src",ctx_r4.getUrl(position_r7),core.uOi)}}function GeolocationPageComponent_ng_container_41_ng_template_3_Template(rf,ctx){1&rf&&core._UZ(0,"tui-loader")}function GeolocationPageComponent_ng_container_41_Template(rf,ctx){if(1&rf&&(core.ynx(0),core.YNc(1,GeolocationPageComponent_ng_container_41_iframe_1_Template,1,1,"iframe",4),core.ALo(2,"async"),core.YNc(3,GeolocationPageComponent_ng_container_41_ng_template_3_Template,1,0,"ng-template",null,5,core.W1O),core.BQk()),2&rf){const _r5=core.MAs(4),ctx_r1=core.oxw();core.xp6(1),core.Q6J("ngIf",core.lcZ(2,2,ctx_r1.geolocation$))("ngIfElse",_r5)}}const geolocation_page_component=(()=>{var _GeolocationPageComponent;class GeolocationPageComponent2{constructor(){this.sanitizer=(0,core.f3M)(platform_browser.H7),this.watch=!1,this.sample="import {GeolocationService} from '@ng-web-apis/geolocation';\n\n// ...\n\nconstructor(private readonly geolocation$: GeolocationService) {}\n\ngetPosition() {\n  geolocation$.subscribe((position) => {\n     doSomethingWithPosition(position);\n  });\n}",this.sampleAsync='<app-component-using-position\n  [position]="geolocation$ | async"\n></app-component-using-position>',this.geolocation$=(0,core.f3M)(src._1)}getUrl({coords}){const{longitude,latitude}=coords;return this.sanitizer.bypassSecurityTrustResourceUrl(`//www.openstreetmap.org/export/embed.html?bbox=${longitude-.005},${latitude-.005},${longitude+.005},${latitude+.005}&marker=${latitude},${longitude}&layer=mapnik`)}}return(_GeolocationPageComponent=GeolocationPageComponent2).\u0275fac=function(t){return new(t||_GeolocationPageComponent)},_GeolocationPageComponent.\u0275cmp=core.Xpm({type:_GeolocationPageComponent,selectors:[["geolocation-page"]],standalone:!0,features:[core.jDz],decls:42,vars:4,consts:[[3,"highlight"],["appearance","secondary","tuiButton","",3,"click",4,"ngIf"],[4,"ngIf"],["appearance","secondary","tuiButton","",3,"click"],["alt","url","title","geolocation",3,"src",4,"ngIf","ngIfElse"],["loading",""],["alt","url","title","geolocation",3,"src"]],template:function(rf,ctx){1&rf&&(core.TgZ(0,"strong"),core._uU(1,"Angular"),core.qZA(),core._uU(2,"\ndoes not have any built-in instruments to use\n"),core.TgZ(3,"strong"),core._uU(4,"Geolocation API"),core.qZA(),core._uU(5,"\n. This is an\n"),core.TgZ(6,"code"),core._uU(7,"Observable"),core.qZA(),core._uU(8,"\nbased abstraction over\n"),core.TgZ(9,"strong"),core._uU(10,"Geolocation API"),core.qZA(),core._uU(11,"\nto use with\n"),core.TgZ(12,"strong"),core._uU(13,"Angular"),core.qZA(),core.TgZ(14,"h2"),core._uU(15,"How to use"),core.qZA(),core.TgZ(16,"p"),core._uU(17," Usage is pretty simple: just import service in your component and subscribe to it. Service extends "),core.TgZ(18,"code"),core._uU(19,"Observable"),core.qZA(),core._uU(20," and will emit the "),core.TgZ(21,"code"),core._uU(22,"Position"),core.qZA(),core._uU(23," object.\n"),core.qZA(),core.TgZ(24,"pre"),core._UZ(25,"code",0),core.qZA(),core.TgZ(26,"p"),core._uU(27,"You also can use async pipe"),core.qZA(),core.TgZ(28,"pre"),core._UZ(29,"code",0),core.qZA(),core.TgZ(30,"h2"),core._uU(31,"Single position"),core.qZA(),core.TgZ(32,"p"),core._uU(33," If you need to get position just once and stop observing user location, you can subscribe to "),core.TgZ(34,"code"),core._uU(35,"geolocation$"),core.qZA(),core._uU(36," and use "),core.TgZ(37,"code"),core._uU(38,"take(1)"),core.qZA(),core._uU(39," RxJS operator. Service is cold, meaning if there are no Subscribers, it doesn't track position\n"),core.qZA(),core.YNc(40,GeolocationPageComponent_button_40_Template,2,0,"button",1),core.YNc(41,GeolocationPageComponent_ng_container_41_Template,5,4,"ng-container",2)),2&rf&&(core.xp6(25),core.Q6J("highlight",ctx.sample),core.xp6(4),core.Q6J("highlight",ctx.sampleAsync),core.xp6(11),core.Q6J("ngIf",!ctx.watch),core.xp6(1),core.Q6J("ngIf",ctx.watch))},dependencies:[common.ez,common.O5,common.Ov,taiga_ui_core_components_button.fN,taiga_ui_core_components_button.v0,taiga_ui_core_components_loader.dS,taiga_ui_core_components_loader.kM,ngx_highlightjs._l,ngx_highlightjs.y$],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto;line-height:1.5;font-size:1.1em}button[_ngcontent-%COMP%]{margin:0 auto;display:block}iframe[_ngcontent-%COMP%]{width:100%;height:20rem}"],changeDetection:0}),GeolocationPageComponent2})()},86294:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ex:()=>tuiIsSafari,oK:()=>tuiIsFirefox,xz:()=>tuiIsEdgeOlderThan});const EDGE="edge/";function tuiIsEdgeOlderThan(version,userAgent){return parseInt(userAgent.slice(userAgent.toLowerCase().indexOf(EDGE)+EDGE.length),10)<version}function tuiIsFirefox(userAgent){return userAgent.toLowerCase().includes("firefox")}function tuiIsSafari({ownerDocument:doc}){var _a,_b,_c,_d,_e,_f,_g,_h;const win=null==doc?void 0:doc.defaultView,isMacOsSafari=typeof win.safari<"u"&&"[object SafariRemoteNotification]"===(null===(_b=null===(_a=win.safari)||void 0===_a?void 0:_a.pushNotification)||void 0===_b?void 0:_b.toString()),isIosSafari=!(null===(_d=null===(_c=win.navigator)||void 0===_c?void 0:_c.vendor)||void 0===_d||!_d.includes("Apple")||null!==(_f=null===(_e=win.navigator)||void 0===_e?void 0:_e.userAgent)&&void 0!==_f&&_f.includes("CriOS")||null!==(_h=null===(_g=win.navigator)||void 0===_g?void 0:_g.userAgent)&&void 0!==_h&&_h.includes("FxiOS"));return isMacOsSafari||isIosSafari}},18815:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{fN:()=>TuiButtonModule,v0:()=>TuiButtonComponent});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35548),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(12297),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(27743),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(73323),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(72417),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(69614),_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(28837),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(20511),rxjs_operators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(905),rxjs_operators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(51160),rxjs_operators__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(24815),_taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2041),_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(12136),_taiga_ui_core_components_loader__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(24876),_angular_common__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(4594),_taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(23383),_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(40970);const _c0=["tuiButton",""];function TuiButtonComponent_ng_container_0_Template(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.GkF(0)}function TuiButtonComponent_span_4_tui_svg_1_Template(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(0,"tui-svg",8),2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("src",ctx.polymorpheusOutlet)}function TuiButtonComponent_span_4_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"span",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(1,TuiButtonComponent_span_4_tui_svg_1_Template,1,1,"tui-svg",7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()),2&rf){const ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("polymorpheusOutlet",ctx_r1.icon)}}function TuiButtonComponent_span_6_tui_svg_1_Template(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(0,"tui-svg",8),2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("src",ctx.polymorpheusOutlet)}function TuiButtonComponent_span_6_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"span",9),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(1,TuiButtonComponent_span_6_tui_svg_1_Template,1,1,"tui-svg",7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()),2&rf){const ctx_r2=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("polymorpheusOutlet",ctx_r2.iconRight)}}function TuiButtonComponent_tui_loader_7_Template(rf,ctx){if(1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(0,"tui-loader",10),2&rf){const ctx_r3=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("inheritColor",!0)("size",ctx_r3.loaderSize)}}const _c1=["*"],TUI_BUTTON_OPTIONS=(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.JN)({size:"l",shape:null,appearance:_taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_1__.Nm.Primary});let TuiButtonComponent=(()=>{class TuiButtonComponent2 extends _taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.Xn{constructor(mode,el,options){var _a;super(),this.mode=mode,this.el=el,this.options=options,this.mode$=(null===(_a=this.mode)||void 0===_a?void 0:_a.change$)||rxjs__WEBPACK_IMPORTED_MODULE_4__.E,this.appearance=null,this.disabled=!1,this.shape=this.options.shape,this.showLoader=!1,this.size=this.options.size,this.appearance$=this.mode$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.O)(null),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(()=>this.computedAppearance),(0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.x)())}get nativeFocusableElement(){return this.nativeDisabled?null:this.el.nativeElement}get focused(){return!this.showLoader&&(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_8__.V8)(this.el.nativeElement)}get loaderSize(){return"l"===this.size||"xl"===this.size?"m":"s"}get computedAppearance(){var _a;return null!==(_a=this.appearance)&&void 0!==_a?_a:this.options.appearance||""}get nativeDisabled(){return this.computedDisabled||this.showLoader?"":null}get tabIndex(){return this.focusable?0:-1}onFocused(focused){this.updateFocused(focused)}}return TuiButtonComponent2.\u0275fac=function(t){return new(t||TuiButtonComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_taiga_ui_core_directives__WEBPACK_IMPORTED_MODULE_9__.w,8),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SBq),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(TUI_BUTTON_OPTIONS))},TuiButtonComponent2.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({type:TuiButtonComponent2,selectors:[["button","tuiButton",""],["button","tuiIconButton",""],["a","tuiButton",""],["a","tuiIconButton",""]],hostVars:7,hostBindings:function(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.NdJ("focusin",function(){return ctx.onFocused(!0)})("focusout",function(){return ctx.onFocused(!1)}),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Ikx("tabIndex",ctx.tabIndex),_angular_core__WEBPACK_IMPORTED_MODULE_0__.uIk("data-shape",ctx.shape)("data-size",ctx.size)("data-appearance",ctx.computedAppearance)("disabled",ctx.nativeDisabled),_angular_core__WEBPACK_IMPORTED_MODULE_0__.ekj("_loading",ctx.showLoader))},inputs:{appearance:"appearance",disabled:"disabled",icon:"icon",iconRight:"iconRight",shape:"shape",showLoader:"showLoader",size:"size"},features:[_angular_core__WEBPACK_IMPORTED_MODULE_0__._Bn([(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_10__.FT)(TuiButtonComponent2),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_11__.a3]),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qOj],attrs:_c0,ngContentSelectors:_c1,decls:8,vars:10,consts:[[4,"ngIf"],["tuiWrapper","",1,"t-wrapper",3,"active","appearance","disabled","hover"],[1,"t-content"],["class","t-left",4,"ngIf"],["class","t-right",4,"ngIf"],["class","t-loader",3,"inheritColor","size",4,"ngIf"],[1,"t-left"],["class","t-icon",3,"src",4,"polymorpheusOutlet"],[1,"t-icon",3,"src"],[1,"t-right"],[1,"t-loader",3,"inheritColor","size"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.F$t(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(0,TuiButtonComponent_ng_container_0_Template,1,0,"ng-container",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.ALo(1,"async"),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(2,"div",1)(3,"span",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(4,TuiButtonComponent_span_4_Template,2,1,"span",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hsn(5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(6,TuiButtonComponent_span_6_Template,2,1,"span",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(7,TuiButtonComponent_tui_loader_7_Template,1,2,"tui-loader",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",_angular_core__WEBPACK_IMPORTED_MODULE_0__.lcZ(1,8,ctx.appearance$)),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("active",ctx.pseudoActive)("appearance",ctx.computedAppearance)("disabled",ctx.computedDisabled)("hover",ctx.pseudoHover),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",ctx.icon),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",ctx.iconRight),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",ctx.showLoader))},dependencies:[_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_12__.PN,_taiga_ui_core_components_loader__WEBPACK_IMPORTED_MODULE_13__.kM,_angular_common__WEBPACK_IMPORTED_MODULE_14__.O5,_taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_15__.o,_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__.Li,_angular_common__WEBPACK_IMPORTED_MODULE_14__.Ov],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:inline-block;flex-shrink:0;vertical-align:top;border-radius:var(--tui-radius-m);-webkit-user-select:none;-moz-user-select:none;user-select:none;outline:none;color:inherit}[data-shape=rounded][_nghost-%COMP%]{border-radius:6.25rem}[data-size=xs][_nghost-%COMP%]{height:var(--tui-height-xs);font-weight:normal}[data-size=xs][data-shape=square][_nghost-%COMP%], [data-size=xs][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-xs)}[data-size=s][_nghost-%COMP%]{height:var(--tui-height-s);font-weight:normal}[data-size=s][data-shape=square][_nghost-%COMP%], [data-size=s][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-s)}[data-size=m][_nghost-%COMP%]{height:var(--tui-height-m);font:var(--tui-font-text-m);font-weight:bold}[data-size=m][data-shape=square][_nghost-%COMP%], [data-size=m][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-m)}[data-size=l][_nghost-%COMP%]{height:var(--tui-height-l);font:var(--tui-font-text-m);font-weight:bold}[data-size=l][data-shape=square][_nghost-%COMP%], [data-size=l][tuiIconButton][_nghost-%COMP%]{width:var(--tui-height-l)}[data-size=xl][_nghost-%COMP%]{height:3.75rem;font:var(--tui-font-text-m);font-weight:bold}[data-size=xl][data-shape=square][_nghost-%COMP%], [data-size=xl][tuiIconButton][_nghost-%COMP%]{width:3.75rem}[tuiIconButton][_nghost-%COMP%]{font-size:0!important}[tuiIconButton][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0!important}.t-loader[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:default}.t-left[_ngcontent-%COMP%]{margin-right:.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.375rem}[data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%]{margin-right:.25rem}.t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .25rem}[data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.25rem 0 .375rem}[data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{margin:0 -.125rem 0 .25rem}.t-icon[_ngcontent-%COMP%]{display:flex;max-width:100%;max-height:100%;align-items:center;justify-content:center}.t-left[_ngcontent-%COMP%], .t-right[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem}[data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [data-size=xs][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1rem;height:1rem}[tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][data-appearance=icon][data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%], [tuiIconButton][data-appearance=link][data-size=s][_nghost-%COMP%]   .t-left[_ngcontent-%COMP%], [tuiIconButton][data-appearance=link][data-size=s][_nghost-%COMP%]   .t-right[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.t-wrapper[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;isolation:isolate}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .375rem)}[data-size=xs][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-size=s][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, .75rem)}[data-size=m][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 1.5rem)}[data-size=l][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.25rem)}[data-size=xl][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0 var(--tui-padding, 2.5rem)}[data-shape=square][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], [tuiIconButton][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:0}.t-content[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center;text-align:center}._loading[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{opacity:0}"],changeDetection:0}),TuiButtonComponent2})(),TuiButtonModule=(()=>{class TuiButtonModule2{}return TuiButtonModule2.\u0275fac=function(t){return new(t||TuiButtonModule2)},TuiButtonModule2.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({type:TuiButtonModule2}),TuiButtonModule2.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_14__.ez,_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_16__.wq,_taiga_ui_core_directives_wrapper__WEBPACK_IMPORTED_MODULE_15__.W,_taiga_ui_core_components_svg__WEBPACK_IMPORTED_MODULE_12__.EI,_taiga_ui_core_components_loader__WEBPACK_IMPORTED_MODULE_13__.dS]]}),TuiButtonModule2})()},24876:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{dS:()=>TuiLoaderModule,kM:()=>TuiLoaderComponent});var _angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(4594),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35548),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(12297),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(86294),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(73323),_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(72417),_taiga_ui_core_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(60424),_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(40970);function TuiLoaderComponent_div_2_div_3_ng_container_1_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ynx(0),_angular_core__WEBPACK_IMPORTED_MODULE_0__._uU(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.BQk()),2&rf){const text_r3=ctx.polymorpheusOutlet;_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.hij(" ",text_r3," ")}}function TuiLoaderComponent_div_2_div_3_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.O4$(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.kcU(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"div",6),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(1,TuiLoaderComponent_div_2_div_3_ng_container_1_Template,2,1,"ng-container",7),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()),2&rf){const ctx_r1=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw(2);_angular_core__WEBPACK_IMPORTED_MODULE_0__.ekj("t-text_horizontal",ctx_r1.isHorizontal),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("polymorpheusOutlet",ctx_r1.textContent)}}function TuiLoaderComponent_div_2_Template(rf,ctx){if(1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"div",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.O4$(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(1,"svg",3),_angular_core__WEBPACK_IMPORTED_MODULE_0__._UZ(2,"circle",4),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(3,TuiLoaderComponent_div_2_div_3_Template,2,3,"div",5),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA()),2&rf){const ctx_r0=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oxw();_angular_core__WEBPACK_IMPORTED_MODULE_0__.ekj("t-loader_horizontal",ctx_r0.isHorizontal)("t-loader_inherit-color",ctx_r0.inheritColor),_angular_core__WEBPACK_IMPORTED_MODULE_0__.uIk("data-size",ctx_r0.size),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(3),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",ctx_r0.hasText)}}const _c0=["*"],TUI_LOADER_OPTIONS=(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_1__.JN)({size:"m",inheritColor:!1,overlay:!1});let TuiLoaderComponent=(()=>{class TuiLoaderComponent2{constructor(doc,el,isIos,options){this.doc=doc,this.el=el,this.isIos=isIos,this.options=options,this.size=this.options.size,this.inheritColor=this.options.inheritColor,this.overlay=this.options.overlay,this.loading=!0,this.isApple=(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_2__.Ex)(this.el.nativeElement)||this.isIos}set showLoader(value){value&&this.focused&&(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.hp)(this.doc),this.loading=value}get hasOverlay(){return this.overlay&&this.loading}get hasText(){return!!this.textContent}get isHorizontal(){return!(0,_taiga_ui_core_utils_miscellaneous__WEBPACK_IMPORTED_MODULE_4__.R9)(this.size)}get focused(){return(0,_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_3__.zb)(this.el.nativeElement)}}return TuiLoaderComponent2.\u0275fac=function(t){return new(t||TuiLoaderComponent2)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_angular_common__WEBPACK_IMPORTED_MODULE_5__.K0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SBq),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(_taiga_ui_cdk__WEBPACK_IMPORTED_MODULE_6__.FA),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Y36(TUI_LOADER_OPTIONS))},TuiLoaderComponent2.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__.Xpm({type:TuiLoaderComponent2,selectors:[["tui-loader"]],hostVars:2,hostBindings:function(rf,ctx){2&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_0__.ekj("_loading",ctx.loading)},inputs:{size:"size",inheritColor:"inheritColor",overlay:"overlay",textContent:"textContent",showLoader:"showLoader"},ngContentSelectors:_c0,decls:3,vars:7,consts:[[1,"t-content",3,"disabled"],["class","t-loader",3,"t-loader_horizontal","t-loader_inherit-color",4,"ngIf"],[1,"t-loader"],["automation-id","tui-loader__loader","focusable","false","viewBox","0 0 100 100","xmlns","http://www.w3.org/2000/svg",1,"t-icon"],["cx","50","cy","50","r","50","stroke-dasharray","314",1,"t-circle"],["automation-id","tui-loader__text","class","t-text",3,"t-text_horizontal",4,"ngIf"],["automation-id","tui-loader__text",1,"t-text"],[4,"polymorpheusOutlet"]],template:function(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.F$t(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.TgZ(0,"fieldset",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Hsn(1),_angular_core__WEBPACK_IMPORTED_MODULE_0__.qZA(),_angular_core__WEBPACK_IMPORTED_MODULE_0__.YNc(2,TuiLoaderComponent_div_2_Template,4,6,"div",1)),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ekj("t-content_has-overlay",ctx.hasOverlay)("t-content_loading",ctx.loading),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("disabled",ctx.loading&&!ctx.isApple),_angular_core__WEBPACK_IMPORTED_MODULE_0__.uIk("inert",ctx.loading||null),_angular_core__WEBPACK_IMPORTED_MODULE_0__.xp6(2),_angular_core__WEBPACK_IMPORTED_MODULE_0__.Q6J("ngIf",ctx.loading))},dependencies:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.O5,_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__.Li],styles:["@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:-66}50%{stroke-dashoffset:-314}to{stroke-dashoffset:-66}}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(0)}50%{transform:rotate(1turn)}to{transform:rotate(3turn)}}[_nghost-%COMP%]{position:relative;display:flex;min-width:1.5rem}._loading[_nghost-%COMP%]{overflow:hidden}.t-content[_ngcontent-%COMP%]{z-index:0;min-width:100%;height:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:100%;flex-shrink:0;align-self:center;color:var(--tui-text-01);stroke:var(--tui-primary);animation:tuiFadeIn var(--tui-duration)}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-loader[data-size=xs][_ngcontent-%COMP%]{font-size:.75rem;stroke-width:38}.t-loader[data-size=s][_ngcontent-%COMP%]{font-size:1rem;stroke-width:25}.t-loader[data-size=m][_ngcontent-%COMP%]{font-size:1.5rem;stroke-width:17}.t-loader[data-size=l][_ngcontent-%COMP%]{font-size:2.5rem;stroke-width:15}.t-loader[data-size=xl][_ngcontent-%COMP%]{font-size:3.5rem;stroke-width:14}.t-loader[data-size=xxl][_ngcontent-%COMP%]{font-size:5rem;stroke-width:10}.t-text[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1rem;color:inherit;max-width:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}.t-icon[_ngcontent-%COMP%]{display:block;min-width:1em;max-width:1em;min-height:1em;max-height:1em;margin:.25rem -.5em;border-radius:100%;overflow:hidden;transform:scaleY(-1);animation:_ngcontent-%COMP%_tuiLoaderRotate 3s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}.t-circle[_ngcontent-%COMP%]{fill:none;stroke:inherit;stroke-width:inherit;animation:_ngcontent-%COMP%_tuiLoaderDashOffset 3s linear infinite}"],changeDetection:0}),TuiLoaderComponent2})(),TuiLoaderModule=(()=>{class TuiLoaderModule2{}return TuiLoaderModule2.\u0275fac=function(t){return new(t||TuiLoaderModule2)},TuiLoaderModule2.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({type:TuiLoaderModule2}),TuiLoaderModule2.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({imports:[[_angular_common__WEBPACK_IMPORTED_MODULE_5__.ez,_tinkoff_ng_polymorpheus__WEBPACK_IMPORTED_MODULE_7__.wq]]}),TuiLoaderModule2})()},23383:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>TuiWrapperModule,o:()=>TuiWrapperDirective});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(35548),_taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2041),_taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(75318),_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(18521);let TuiWrapperDirective=(()=>{class TuiWrapperDirective2{constructor(mode$){this.mode$=mode$,this.disabled=!1,this.readOnly=!1,this.hover=null,this.active=null,this.focus=!1,this.invalid=!1,this.appearance=""}get computedInvalid(){return!this.disabled&&!this.readOnly&&this.invalid}get computedFocused(){return this.focus&&!this.disabled}get interactiveState(){return this.disabled?_taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__.z3.Disabled:this.readOnly?_taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__.z3.Readonly:this.active?_taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__.z3.Active:this.hover?_taiga_ui_core_enums__WEBPACK_IMPORTED_MODULE_0__.z3.Hover:null}get noHover(){return this.readOnly||!1===this.hover}get noActive(){return this.readOnly||!1===this.active}}return TuiWrapperDirective2.\u0275fac=function(t){return new(t||TuiWrapperDirective2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__.Y36(_taiga_ui_core_tokens__WEBPACK_IMPORTED_MODULE_2__.Au))},TuiWrapperDirective2.\u0275dir=_angular_core__WEBPACK_IMPORTED_MODULE_1__.lG2({type:TuiWrapperDirective2,selectors:[["","tuiWrapper",""]],hostVars:10,hostBindings:function(rf,ctx){1&rf&&_angular_core__WEBPACK_IMPORTED_MODULE_1__.NdJ("$.data-mode.attr",function(){return ctx.mode$}),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_1__.uIk("data-appearance",ctx.appearance)("data-state",ctx.interactiveState),_angular_core__WEBPACK_IMPORTED_MODULE_1__.ekj("_invalid",ctx.computedInvalid)("_focused",ctx.computedFocused)("_no-hover",ctx.noHover)("_no-active",ctx.noActive))},inputs:{disabled:"disabled",readOnly:"readOnly",hover:"hover",active:"active",focus:"focus",invalid:"invalid",appearance:"appearance"},features:[_angular_core__WEBPACK_IMPORTED_MODULE_1__._Bn([_taiga_ui_core_providers__WEBPACK_IMPORTED_MODULE_3__.CV])]}),TuiWrapperDirective2})(),TuiWrapperModule=(()=>{class TuiWrapperModule2{}return TuiWrapperModule2.\u0275fac=function(t){return new(t||TuiWrapperModule2)},TuiWrapperModule2.\u0275mod=_angular_core__WEBPACK_IMPORTED_MODULE_1__.oAB({type:TuiWrapperModule2}),TuiWrapperModule2.\u0275inj=_angular_core__WEBPACK_IMPORTED_MODULE_1__.cJS({}),TuiWrapperModule2})()}};