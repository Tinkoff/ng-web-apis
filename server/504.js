"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=504,exports.ids=[504],exports.modules={78504:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ResizeObserverPageModule:()=>ResizeObserverPageModule});var core=__webpack_require__(74788),src=__webpack_require__(37891),common=__webpack_require__(12057),resize_observer_directive=__webpack_require__(44953),fesm2015_forms=__webpack_require__(24751);class ResizeObserverPageComponent{constructor(support){this.support=support,this.ratio=0,this.widthPercent=50}onResize(entry){this.ratio=Math.round(entry[0].contentRect.width/110)}}__name(ResizeObserverPageComponent,"ResizeObserverPageComponent"),ResizeObserverPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ResizeObserverPageComponent,deps:[{token:src.vU}],target:core.\u0275\u0275FactoryTarget.Component}),ResizeObserverPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:ResizeObserverPageComponent,selector:"resize-observer-page",ngImport:core,template:'<section *ngIf="support; else not" class="wrapper">\n    <h1\n        waResizeBox="content-box"\n        class="element"\n        [attr.data-ratio]="ratio"\n        [style.width.%]="widthPercent"\n        (waResizeObserver)="onResize($event)"\n    >\n        Resizable box\n    </h1>\n    <label class="width-slider">\n        Adjust width:\n        <input\n            type="range"\n            value="50"\n            min="5"\n            max="100"\n            class="slider"\n            [(ngModel)]="widthPercent"\n        />\n    </label>\n</section>\n<ng-template #not>\n    Your browser does not support Resize Observer API\n</ng-template>\n',styles:[':host{perspective:150vw;user-select:none;flex-direction:column;align-items:center}.width-slider{display:flex;flex-direction:column;align-items:center}.slider{margin:10px}.wrapper{display:flex;flex-direction:column;align-items:center;position:relative;width:100%;overflow:hidden}.element{display:flex;align-items:center;justify-content:center;text-align:center;padding:10px;width:80%;min-width:124px;height:200px;transition:background .1s}.element[data-ratio="1"]{background:#e885eb}.element[data-ratio="2"]{background:#c685eb}.element[data-ratio="3"]{background:#ac85eb}.element[data-ratio="4"]{background:#9885eb}.element[data-ratio="5"]{background:#8591eb}.element[data-ratio="6"]{background:#85a0eb}.element[data-ratio="7"]{background:#84aeeb}.element[data-ratio="8"]{background:#83beeb}.element[data-ratio="9"]{background:#86d2eb}.element[data-ratio="10"]{background:#87ddeb}.element[data-ratio="11"]{background:#8ae5eb}.element[data-ratio="12"]{background:#8bebdf}.element[data-ratio="13"]{background:#83ebc8}.element[data-ratio="14"]{background:#6beb99}.element[data-ratio="15"]{background:#4ceb60}\n'],directives:[{type:common.O5,selector:"[ngIf]",inputs:["ngIf","ngIfThen","ngIfElse"]},{type:resize_observer_directive.P,selector:"[waResizeObserver]",outputs:["waResizeObserver"]},{type:fesm2015_forms.eT,selector:"input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]"},{type:fesm2015_forms.Fj,selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"},{type:fesm2015_forms.JJ,selector:"[formControlName],[ngModel],[formControl]"},{type:fesm2015_forms.On,selector:"[ngModel]:not([formControlName]):not([formControl])",inputs:["name","disabled","ngModel","ngModelOptions"],outputs:["ngModelChange"],exportAs:["ngModel"]}],changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ResizeObserverPageComponent,decorators:[{type:core.Component,args:[{selector:"resize-observer-page",templateUrl:"./resize-observer-page.component.html",styleUrls:["./resize-observer-page.component.less"],changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[{type:void 0,decorators:[{type:core.Inject,args:[src.vU]}]}]}});var router=__webpack_require__(3984);class ResizeObserverPageModule{}__name(ResizeObserverPageModule,"ResizeObserverPageModule"),ResizeObserverPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ResizeObserverPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),ResizeObserverPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ResizeObserverPageModule,declarations:[ResizeObserverPageComponent],imports:[common.ez,fesm2015_forms.u5,src.xi,router.Bz]}),ResizeObserverPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ResizeObserverPageModule,imports:[[common.ez,fesm2015_forms.u5,src.xi,router.Bz.forChild([{path:"",component:ResizeObserverPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:ResizeObserverPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,fesm2015_forms.u5,src.xi,router.Bz.forChild([{path:"",component:ResizeObserverPageComponent}])],declarations:[ResizeObserverPageComponent]}]}]})}};