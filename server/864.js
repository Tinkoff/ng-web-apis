"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=864,exports.ids=[864],exports.modules={75864:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>IntersectionObserverPageComponent});var _angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(93663),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(24761),_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(75215),_libs_intersection_observer_src_directives_intersection_observer_directive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(21047),_libs_intersection_observer_src_directives_intersection_observee_directive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(65611),_libs_intersection_observer_src_directives_intersection_root_directive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(66112);class IntersectionObserverPageComponent{constructor(support){Object.defineProperty(this,"support",{enumerable:!0,configurable:!0,writable:!0,value:support}),Object.defineProperty(this,"ratio",{enumerable:!0,configurable:!0,writable:!0,value:0})}onIntersection(intersections){this.ratio=Math.round(10*intersections[0].intersectionRatio)}}__name(IntersectionObserverPageComponent,"IntersectionObserverPageComponent"),Object.defineProperty(IntersectionObserverPageComponent,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_4__.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_4__,type:IntersectionObserverPageComponent,deps:[{token:_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__.tc}],target:_angular_core__WEBPACK_IMPORTED_MODULE_4__.\u0275\u0275FactoryTarget.Component})}),Object.defineProperty(IntersectionObserverPageComponent,"\u0275cmp",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_4__.\u0275\u0275ngDeclareComponent({minVersion:"14.0.0",version:"15.2.10",type:IntersectionObserverPageComponent,isStandalone:!0,selector:"intersection-observer-page",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_4__,template:'<section\n    *ngIf="support; else not"\n    waIntersectionObserver\n    waIntersectionRoot\n    waIntersectionThreshold="0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9"\n    class="wrapper"\n>\n    <h1\n        class="element"\n        [attr.data-ratio]="ratio"\n        (waIntersectionObservee)="onIntersection($event)"\n    >\n        I\'m being observed\n    </h1>\n</section>\n<ng-template #not>Your browser does not support Intersection Observer API</ng-template>\n',styles:[':host{perspective:150vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:column;align-items:center}.wrapper{position:relative;height:200px;max-width:600px;margin:0 auto;overflow:auto;box-shadow:0 12px 36px #0003}.wrapper:before{content:"";display:block;height:900px}.element{position:absolute;display:flex;align-items:center;justify-content:center;margin:0;top:300px;left:0;width:100%;height:200px;transition:background .1s}.element[data-ratio="0"]{background:#8591eb}.element[data-ratio="1"]{background:#85a0eb}.element[data-ratio="2"]{background:#84aeeb}.element[data-ratio="3"]{background:#83beeb}.element[data-ratio="4"]{background:#86d2eb}.element[data-ratio="5"]{background:#87ddeb}.element[data-ratio="6"]{background:#8ae5eb}.element[data-ratio="7"]{background:#8bebdf}.element[data-ratio="8"]{background:#83ebc8}.element[data-ratio="9"]{background:#6beb99}.element[data-ratio="10"]{background:#4ceb60}\n'],dependencies:[{kind:"ngmodule",type:_angular_common__WEBPACK_IMPORTED_MODULE_5__.ez},{kind:"directive",type:_angular_common__WEBPACK_IMPORTED_MODULE_5__.O5,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]},{kind:"ngmodule",type:_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__.$v},{kind:"directive",type:_libs_intersection_observer_src_directives_intersection_observer_directive__WEBPACK_IMPORTED_MODULE_1__.Z,selector:"[waIntersectionObserver]",exportAs:["IntersectionObserver"]},{kind:"directive",type:_libs_intersection_observer_src_directives_intersection_observee_directive__WEBPACK_IMPORTED_MODULE_2__.A,selector:"[waIntersectionObservee]",outputs:["waIntersectionObservee"]},{kind:"directive",type:_libs_intersection_observer_src_directives_intersection_root_directive__WEBPACK_IMPORTED_MODULE_3__.Q,selector:"[waIntersectionRoot]"}],changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush})}),_angular_core__WEBPACK_IMPORTED_MODULE_4__.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_4__,type:IntersectionObserverPageComponent,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component,args:[{standalone:!0,selector:"intersection-observer-page",imports:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.ez,_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__.$v],changeDetection:_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,template:'<section\n    *ngIf="support; else not"\n    waIntersectionObserver\n    waIntersectionRoot\n    waIntersectionThreshold="0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9"\n    class="wrapper"\n>\n    <h1\n        class="element"\n        [attr.data-ratio]="ratio"\n        (waIntersectionObservee)="onIntersection($event)"\n    >\n        I\'m being observed\n    </h1>\n</section>\n<ng-template #not>Your browser does not support Intersection Observer API</ng-template>\n',styles:[':host{perspective:150vw;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-direction:column;align-items:center}.wrapper{position:relative;height:200px;max-width:600px;margin:0 auto;overflow:auto;box-shadow:0 12px 36px #0003}.wrapper:before{content:"";display:block;height:900px}.element{position:absolute;display:flex;align-items:center;justify-content:center;margin:0;top:300px;left:0;width:100%;height:200px;transition:background .1s}.element[data-ratio="0"]{background:#8591eb}.element[data-ratio="1"]{background:#85a0eb}.element[data-ratio="2"]{background:#84aeeb}.element[data-ratio="3"]{background:#83beeb}.element[data-ratio="4"]{background:#86d2eb}.element[data-ratio="5"]{background:#87ddeb}.element[data-ratio="6"]{background:#8ae5eb}.element[data-ratio="7"]{background:#8bebdf}.element[data-ratio="8"]{background:#83ebc8}.element[data-ratio="9"]{background:#6beb99}.element[data-ratio="10"]{background:#4ceb60}\n']}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,args:[_ng_web_apis_intersection_observer__WEBPACK_IMPORTED_MODULE_0__.tc]}]}]}})},54875:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SafeObserver});const SafeObserver=typeof IntersectionObserver<"u"?IntersectionObserver:class{constructor(){Object.defineProperty(this,"root",{enumerable:!0,configurable:!0,writable:!0,value:null}),Object.defineProperty(this,"rootMargin",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(this,"thresholds",{enumerable:!0,configurable:!0,writable:!0,value:[]})}observe(){}unobserve(){}disconnect(){}takeRecords(){return[]}}},65611:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>IntersectionObserveeDirective});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24761),_services_intersection_observee_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(78250),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(91453);class IntersectionObserveeDirective{constructor(waIntersectionObservee){Object.defineProperty(this,"waIntersectionObservee",{enumerable:!0,configurable:!0,writable:!0,value:waIntersectionObservee})}}__name(IntersectionObserveeDirective,"IntersectionObserveeDirective"),Object.defineProperty(IntersectionObserveeDirective,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_1__,type:IntersectionObserveeDirective,deps:[{token:_services_intersection_observee_service__WEBPACK_IMPORTED_MODULE_0__.v}],target:_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275FactoryTarget.Directive})}),Object.defineProperty(IntersectionObserveeDirective,"\u0275dir",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275ngDeclareDirective({minVersion:"14.0.0",version:"15.2.10",type:IntersectionObserveeDirective,isStandalone:!0,selector:"[waIntersectionObservee]",outputs:{waIntersectionObservee:"waIntersectionObservee"},providers:[_services_intersection_observee_service__WEBPACK_IMPORTED_MODULE_0__.v],ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_1__})}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_1__,type:IntersectionObserveeDirective,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,args:[{standalone:!0,selector:"[waIntersectionObservee]",outputs:["waIntersectionObservee"],providers:[_services_intersection_observee_service__WEBPACK_IMPORTED_MODULE_0__.v]}]}],ctorParameters:function(){return[{type:rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,args:[_services_intersection_observee_service__WEBPACK_IMPORTED_MODULE_0__.v]}]}]}})},21047:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>IntersectionObserverDirective});var core=__webpack_require__(24761),safe_observer=__webpack_require__(54875),intersection_root=__webpack_require__(52870),intersection_root_margin=__webpack_require__(1089);function rootMarginFactory(rootMargin){return rootMargin||intersection_root_margin.O}__name(rootMarginFactory,"rootMarginFactory");var intersection_threshold=__webpack_require__(54439);function thresholdFactory(threshold){return(null==threshold?void 0:threshold.split(",").map(parseFloat))||intersection_threshold.O}__name(thresholdFactory,"thresholdFactory");class IntersectionObserverDirective extends safe_observer.Z{constructor(root,rootMargin,threshold){super(entries=>{this.callbacks.forEach((callback,element)=>{const filtered=entries.filter(({target})=>target===element);return filtered.length&&callback(filtered,this)})},{root:null==root?void 0:root.nativeElement,rootMargin:rootMarginFactory(rootMargin),threshold:thresholdFactory(threshold)}),Object.defineProperty(this,"callbacks",{enumerable:!0,configurable:!0,writable:!0,value:new Map})}observe(target,callback=(()=>{})){super.observe(target),this.callbacks.set(target,callback)}unobserve(target){super.unobserve(target),this.callbacks.delete(target)}ngOnDestroy(){this.disconnect()}}__name(IntersectionObserverDirective,"IntersectionObserverDirective"),Object.defineProperty(IntersectionObserverDirective,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:core,type:IntersectionObserverDirective,deps:[{token:intersection_root.p,optional:!0},{token:"waIntersectionRootMargin",attribute:!0},{token:"waIntersectionThreshold",attribute:!0}],target:core.\u0275\u0275FactoryTarget.Directive})}),Object.defineProperty(IntersectionObserverDirective,"\u0275dir",{enumerable:!0,configurable:!0,writable:!0,value:core.\u0275\u0275ngDeclareDirective({minVersion:"14.0.0",version:"15.2.10",type:IntersectionObserverDirective,isStandalone:!0,selector:"[waIntersectionObserver]",exportAs:["IntersectionObserver"],usesInheritance:!0,ngImport:core})}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:core,type:IntersectionObserverDirective,decorators:[{type:core.Directive,args:[{standalone:!0,selector:"[waIntersectionObserver]",exportAs:"IntersectionObserver"}]}],ctorParameters:function(){return[{type:core.ElementRef,decorators:[{type:core.Optional},{type:core.Inject,args:[intersection_root.p]}]},{type:void 0,decorators:[{type:core.Attribute,args:["waIntersectionRootMargin"]}]},{type:void 0,decorators:[{type:core.Attribute,args:["waIntersectionThreshold"]}]}]}})},66112:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>IntersectionRootDirective});var _angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(24761),_tokens_intersection_root__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(52870);class IntersectionRootDirective{}__name(IntersectionRootDirective,"IntersectionRootDirective"),Object.defineProperty(IntersectionRootDirective,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_1__,type:IntersectionRootDirective,deps:[],target:_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275FactoryTarget.Directive})}),Object.defineProperty(IntersectionRootDirective,"\u0275dir",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275ngDeclareDirective({minVersion:"14.0.0",version:"15.2.10",type:IntersectionRootDirective,isStandalone:!0,selector:"[waIntersectionRoot]",providers:[{provide:_tokens_intersection_root__WEBPACK_IMPORTED_MODULE_0__.p,useExisting:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef}],ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_1__})}),_angular_core__WEBPACK_IMPORTED_MODULE_1__.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_1__,type:IntersectionRootDirective,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,args:[{standalone:!0,selector:"[waIntersectionRoot]",providers:[{provide:_tokens_intersection_root__WEBPACK_IMPORTED_MODULE_0__.p,useExisting:_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef}]}]}]})},75215:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tc:()=>INTERSECTION_OBSERVER_SUPPORT,$v:()=>IntersectionObserverModule});var intersection_observee_directive=__webpack_require__(65611),intersection_observer_directive=__webpack_require__(21047),intersection_root_directive=__webpack_require__(66112),core=__webpack_require__(24761);class IntersectionObserverModule{}__name(IntersectionObserverModule,"IntersectionObserverModule"),Object.defineProperty(IntersectionObserverModule,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:core,type:IntersectionObserverModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule})}),Object.defineProperty(IntersectionObserverModule,"\u0275mod",{enumerable:!0,configurable:!0,writable:!0,value:core.\u0275\u0275ngDeclareNgModule({minVersion:"14.0.0",version:"15.2.10",ngImport:core,type:IntersectionObserverModule,imports:[intersection_observer_directive.Z,intersection_observee_directive.A,intersection_root_directive.Q],exports:[intersection_observer_directive.Z,intersection_observee_directive.A,intersection_root_directive.Q]})}),Object.defineProperty(IntersectionObserverModule,"\u0275inj",{enumerable:!0,configurable:!0,writable:!0,value:core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"15.2.10",ngImport:core,type:IntersectionObserverModule})}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:core,type:IntersectionObserverModule,decorators:[{type:core.NgModule,args:[{imports:[intersection_observer_directive.Z,intersection_observee_directive.A,intersection_root_directive.Q],exports:[intersection_observer_directive.Z,intersection_observee_directive.A,intersection_root_directive.Q]}]}]});__webpack_require__(78250);var cjs=__webpack_require__(91453),safe_observer=__webpack_require__(54875),intersection_root=__webpack_require__(52870),intersection_root_margin=__webpack_require__(1089),intersection_threshold=__webpack_require__(54439);class IntersectionObserverService extends cjs.Observable{constructor({nativeElement},rootMargin,threshold,root){super(subscriber=>{const observer=new safe_observer.Z(entries=>{subscriber.next(entries)},{root:null==root?void 0:root.nativeElement,rootMargin,threshold});return observer.observe(nativeElement),()=>{observer.disconnect()}})}}__name(IntersectionObserverService,"IntersectionObserverService"),Object.defineProperty(IntersectionObserverService,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:core,type:IntersectionObserverService,deps:[{token:core.ElementRef},{token:intersection_root_margin.R},{token:intersection_threshold.o},{token:intersection_root.p,optional:!0}],target:core.\u0275\u0275FactoryTarget.Injectable})}),Object.defineProperty(IntersectionObserverService,"\u0275prov",{enumerable:!0,configurable:!0,writable:!0,value:core.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"15.2.10",ngImport:core,type:IntersectionObserverService})}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:core,type:IntersectionObserverService,decorators:[{type:core.Injectable}],ctorParameters:function(){return[{type:core.ElementRef,decorators:[{type:core.Inject,args:[core.ElementRef]}]},{type:void 0,decorators:[{type:core.Inject,args:[intersection_root_margin.R]}]},{type:void 0,decorators:[{type:core.Inject,args:[intersection_threshold.o]}]},{type:core.ElementRef,decorators:[{type:core.Optional},{type:core.Inject,args:[intersection_root.p]}]}]}});var src=__webpack_require__(45982);const INTERSECTION_OBSERVER_SUPPORT=new core.InjectionToken("[INTERSECTION_OBSERVER_SUPPORT]: Intersection Observer API support",{providedIn:"root",factory:()=>!!(0,core.inject)(src.m9).IntersectionObserver})},78250:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>IntersectionObserveeService});var _angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(24761),rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(91453),rxjs_operators__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40375),_directives_intersection_observer_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(21047);class IntersectionObserveeService extends rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable{constructor({nativeElement},observer){return super(subscriber=>(observer.observe(nativeElement,entries=>{subscriber.next(entries)}),()=>{observer.unobserve(nativeElement)})),this.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.BN)())}}__name(IntersectionObserveeService,"IntersectionObserveeService"),Object.defineProperty(IntersectionObserveeService,"\u0275fac",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_3__.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_3__,type:IntersectionObserveeService,deps:[{token:_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef},{token:_directives_intersection_observer_directive__WEBPACK_IMPORTED_MODULE_0__.Z}],target:_angular_core__WEBPACK_IMPORTED_MODULE_3__.\u0275\u0275FactoryTarget.Injectable})}),Object.defineProperty(IntersectionObserveeService,"\u0275prov",{enumerable:!0,configurable:!0,writable:!0,value:_angular_core__WEBPACK_IMPORTED_MODULE_3__.\u0275\u0275ngDeclareInjectable({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_3__,type:IntersectionObserveeService})}),_angular_core__WEBPACK_IMPORTED_MODULE_3__.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"15.2.10",ngImport:_angular_core__WEBPACK_IMPORTED_MODULE_3__,type:IntersectionObserveeService,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable}],ctorParameters:function(){return[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,args:[_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef]}]},{type:_directives_intersection_observer_directive__WEBPACK_IMPORTED_MODULE_0__.Z,decorators:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,args:[_directives_intersection_observer_directive__WEBPACK_IMPORTED_MODULE_0__.Z]}]}]}})},1089:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>INTERSECTION_ROOT_MARGIN_DEFAULT,R:()=>INTERSECTION_ROOT_MARGIN});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24761);const INTERSECTION_ROOT_MARGIN_DEFAULT="0px 0px 0px 0px",INTERSECTION_ROOT_MARGIN=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("[INTERSECTION_ROOT_MARGIN]: rootMargin for IntersectionObserver",{providedIn:"root",factory:()=>INTERSECTION_ROOT_MARGIN_DEFAULT})},52870:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>INTERSECTION_ROOT});const INTERSECTION_ROOT=new(__webpack_require__(24761).InjectionToken)("[INTERSECTION_ROOT]: Root element for IntersectionObserver")},54439:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>INTERSECTION_THRESHOLD_DEFAULT,o:()=>INTERSECTION_THRESHOLD});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(24761);const INTERSECTION_THRESHOLD_DEFAULT=0,INTERSECTION_THRESHOLD=new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("[INTERSECTION_THRESHOLD]: threshold for IntersectionObserver",{providedIn:"root",factory:()=>INTERSECTION_THRESHOLD_DEFAULT})}};