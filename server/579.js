"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=579,exports.ids=[579],exports.modules={28579:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UniversalPageModule:()=>UniversalPageModule});var core=__webpack_require__(74788),ngx_markdown=__webpack_require__(76715),common=__webpack_require__(12057);class UniversalPageComponent{constructor(){this.readme=__webpack_require__.e(224).then(__webpack_require__.t.bind(__webpack_require__,88224,17)).then(a=>a.default.replace("![logo](logo.svg) ",""))}}__name(UniversalPageComponent,"UniversalPageComponent"),UniversalPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:UniversalPageComponent,deps:[],target:core.\u0275\u0275FactoryTarget.Component}),UniversalPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.17",type:UniversalPageComponent,selector:"universal-page",ngImport:core,template:"<markdown [data]=\"(readme | async) || ''\"></markdown>\n",components:[{type:ngx_markdown.lF,selector:"markdown, [markdown]",inputs:["emoji","katex","lineHighlight","lineNumbers","data","src","katexOptions","line","lineOffset","start"],outputs:["error","load","ready"]}],pipes:{async:common.Ov},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:UniversalPageComponent,decorators:[{type:core.Component,args:[{selector:"universal-page",templateUrl:"./universal-page.component.html",changeDetection:core.ChangeDetectionStrategy.OnPush}]}]});var router=__webpack_require__(3984);class UniversalPageModule{}__name(UniversalPageModule,"UniversalPageModule"),UniversalPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:UniversalPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),UniversalPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:UniversalPageModule,declarations:[UniversalPageComponent],imports:[common.ez,ngx_markdown.JP,router.Bz]}),UniversalPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:UniversalPageModule,imports:[[common.ez,ngx_markdown.JP,router.Bz.forChild([{path:"",component:UniversalPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.17",ngImport:core,type:UniversalPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,ngx_markdown.JP,router.Bz.forChild([{path:"",component:UniversalPageComponent}])],declarations:[UniversalPageComponent]}]}]})}};