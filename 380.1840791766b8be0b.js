"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[380],{3380:(y,E,e)=>{e.r(E),e.d(E,{default:()=>h});var i=e(6889),n=e(6733),v=e(2133),g=e(9371),p=e(6268),T=e(5140),a=e(9289),s=e(4882),t=e(755);function r(c,m){1&c&&(t.TgZ(0,"div"),t._uU(1,"I am dynamically added DOM element"),t.qZA())}function l(c,m){1&c&&(t.TgZ(0,"div"),t._uU(1,"See console for logged mutations"),t.qZA())}const h=(()=>{var c;class m{constructor(){(0,i.Z)(this,"toggled",!1),(0,i.Z)(this,"disabled",null),(0,i.Z)(this,"title","title"),(0,i.Z)(this,"text","text"),(0,i.Z)(this,"ignored","Ignored aria-label attribute")}toggleDOM(){this.toggled=!this.toggled}toggleAttr(){this.disabled=!this.disabled||null}log(f){console.info(f)}}return c=m,(0,i.Z)(m,"\u0275fac",function(f){return new(f||c)}),(0,i.Z)(m,"\u0275cmp",t.Xpm({type:c,selectors:[["mutation-observer-page"]],standalone:!0,features:[t.jDz],decls:14,vars:10,consts:[["tuiGroup",""],["appearance","secondary","size","m","tuiButton","",3,"click"],["tuiGroup","","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside"],["aria-label","title",3,"ngModel","ngModelChange"],["aria-label","text",3,"ngModel","ngModelChange"],["aria-label","ignored",3,"ngModel","ngModelChange"],["attributeFilter","title, disabled","characterData","","childList","","subtree","",1,"observer",3,"title","waMutationObserver"],[4,"ngIf","ngIfElse"],["default",""]],template:function(f,_){if(1&f&&(t.TgZ(0,"p",0)(1,"button",1),t.NdJ("click",function(){return _.toggleDOM()}),t._uU(2," Toggle DOM change "),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return _.toggleAttr()}),t._uU(4," Toggle attribute "),t.qZA()(),t.TgZ(5,"p",2)(6,"tui-input",3),t.NdJ("ngModelChange",function(o){return _.title=o}),t.qZA(),t.TgZ(7,"tui-input",4),t.NdJ("ngModelChange",function(o){return _.text=o}),t.qZA(),t.TgZ(8,"tui-input",5),t.NdJ("ngModelChange",function(o){return _.ignored=o}),t.qZA()(),t.TgZ(9,"div",6),t.NdJ("waMutationObserver",function(o){return _.log(o)}),t._uU(10),t.YNc(11,r,2,0,"div",7),t.YNc(12,l,2,0,"ng-template",null,8,t.W1O),t.qZA()),2&f){const O=t.MAs(13);t.xp6(5),t.Q6J("tuiTextfieldLabelOutside",!0),t.xp6(1),t.Q6J("ngModel",_.title),t.xp6(1),t.Q6J("ngModel",_.text),t.xp6(1),t.Q6J("ngModel",_.ignored),t.xp6(1),t.Q6J("title",_.title),t.uIk("aria-label",_.ignored)("disabled",_.disabled),t.xp6(1),t.hij(' I am being observed for text changes, DOM changes and "title" and "disabled" attributes: ',_.text," "),t.xp6(1),t.Q6J("ngIf",_.toggled)("ngIfElse",O)}},dependencies:[n.ez,n.O5,v.u5,v.JJ,v.On,p.fN,p.v0,T.n6,T.gZ,s.Qf,s.K3,s.wU,g.Vi,a.cn,a.xT,a.sz],styles:["[_nghost-%COMP%]{display:block;max-width:600px;margin:0 auto}.observer[_ngcontent-%COMP%]{background:skyblue;border-radius:16px;padding:40px}"],changeDetection:0})),m})()},9371:(y,E,e)=>{e.d(E,{k2:()=>g,Vi:()=>a,IM:()=>t});var i=e(6889),n=e(755);const v=typeof MutationObserver<"u"?MutationObserver:class{observe(){}disconnect(){}takeRecords(){return[]}},g=new n.OlP("[MUTATION_OBSERVER_INIT]: MutationObserver config");function p(r,l){return null!==r.getAttribute(l)||void 0}function T({nativeElement:r}){const l=r.getAttribute("attributeFilter");return{attributeFilter:null==l?void 0:l.split(",").map(C=>C.trim()),attributeOldValue:p(r,"attributeOldValue"),attributes:p(r,"attributes"),characterData:p(r,"characterData"),characterDataOldValue:p(r,"characterDataOldValue"),childList:p(r,"childList"),subtree:p(r,"subtree")}}let a=(()=>{var r;class l extends v{constructor(h,c,m,P,f,_,O){super(o=>{this.waMutationObserver.emit(o)}),(0,i.Z)(this,"nativeElement",(0,n.f3M)(n.SBq).nativeElement),(0,i.Z)(this,"config",(0,n.f3M)(g)),(0,i.Z)(this,"waMutationObserver",new n.vpe),this.observe(this.nativeElement,this.config)}ngOnDestroy(){this.disconnect()}}return r=l,(0,i.Z)(l,"\u0275fac",function(h){return new(h||r)(n.$8M("attributeFilter"),n.$8M("attributeOldValue"),n.$8M("attributes"),n.$8M("characterData"),n.$8M("characterDataOldValue"),n.$8M("childList"),n.$8M("subtree"))}),(0,i.Z)(l,"\u0275dir",n.lG2({type:r,selectors:[["","waMutationObserver",""]],outputs:{waMutationObserver:"waMutationObserver"},exportAs:["MutationObserver"],standalone:!0,features:[n._Bn([{provide:g,deps:[n.SBq],useFactory:T}]),n.qOj]})),l})();var s=e(8132);let t=(()=>{var r;class l extends s.y{constructor(){const h=(0,n.f3M)(n.SBq).nativeElement,c=(0,n.f3M)(g);super(m=>{const P=new v(f=>{m.next(f)});return P.observe(h,c),()=>{P.disconnect()}})}}return r=l,(0,i.Z)(l,"\u0275fac",function(h){return new(h||r)}),(0,i.Z)(l,"\u0275prov",n.Yz7({token:r,factory:r.\u0275fac})),l})()},5140:(y,E,e)=>{e.d(E,{gZ:()=>p,n6:()=>T});var i=e(755),n=e(6720),v=e(6733);let g=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=i.Xpm({type:a,selectors:[["ng-component"]],hostAttrs:[1,"tui-group-styles"],decls:0,vars:0,template:function(t,r){},styles:[".tui-group{position:relative;display:flex;isolation:isolate}.tui-group>*{flex:1 1 0;min-width:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin-right:-1px}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-height:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-bottom-left-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:last-child{border-top-right-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:last-child{border-bottom-left-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-m)}}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_vertical{width:100%}.tui-group_adaptive.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical>*:not(:last-child){margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_horizontal{flex-direction:column;width:100%}.tui-group_adaptive.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal>*:not(:last-child){margin-right:0;margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}.tui-group__auto-width-item{min-width:auto;flex:0 0 auto}.tui-group .tui-group__inherit-item{border-radius:inherit}\n"],encapsulation:2,changeDetection:0}),a})(),p=(()=>{class a{constructor(t){this.orientation="horizontal",this.adaptive=!1,this.collapsed=!1,this.rounded=!0,this.size="m",t.addComponent(g)}get orientationHorizontal(){return"horizontal"===this.orientation}get orientationVertical(){return"vertical"===this.orientation}get sizeLarge(){return"l"===this.size}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(n.gH))},a.\u0275dir=i.lG2({type:a,selectors:[["","tuiGroup","",5,"ng-container"]],hostAttrs:["role","group",1,"tui-group"],hostVars:12,hostBindings:function(t,r){2&t&&i.ekj("tui-group_adaptive",r.adaptive)("tui-group_collapsed",r.collapsed)("tui-group_rounded",r.rounded)("tui-group_orientation_horizontal",r.orientationHorizontal)("tui-group_orientation_vertical",r.orientationVertical)("tui-group_radius_large",r.sizeLarge)},inputs:{orientation:"orientation",adaptive:"adaptive",collapsed:"collapsed",rounded:"rounded",size:"size"}}),a})(),T=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[v.ez]]}),a})()},4882:(y,E,e)=>{e.d(E,{K3:()=>f,Qf:()=>O,wU:()=>_});var i=e(755),n=e(2133),v=e(6851),g=e(4226),p=e(6470),T=e(2423),a=e(5243),s=e(9015),t=e(9289),r=e(8397),l=e(1479),C=e(8305),h=e(6174),c=e(6733);const m=["*",[["input"]]],P=["*","input"];let f=(()=>{class o extends g.M${constructor(u,d,M,D){super(u,d,D),this.textfieldSize=M,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,p.V8)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(u){this.value=u,this.open=!0}onActiveZone(u){this.updateFocused(u)}handleOption(u){this.setNativeValue(String(u)),this.focusInput(),this.value=String(u),this.open=!1}getFallbackValue(){return""}focusInput(u=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:u})}setNativeValue(u){this.nativeFocusableElement&&(this.nativeFocusableElement.value=u)}}return o.\u0275fac=function(u){return new(u||o)(i.Y36(n.a5,10),i.Y36(i.sBO),i.Y36(t.kI),i.Y36(g.FX,8))},o.\u0275cmp=i.Xpm({type:o,selectors:[["tui-input"]],contentQueries:function(u,d,M){if(1&u&&i.Suo(M,r.gX,5,i.Rgc),2&u){let D;i.iGM(D=i.CRH())&&(d.datalist=D.first)}},viewQuery:function(u,d){if(1&u&&(i.Gf(a.o1,5),i.Gf(s.yc,5)),2&u){let M;i.iGM(M=i.CRH())&&(d.hostedDropdown=M.first),i.iGM(M=i.CRH())&&(d.textfield=M.first)}},hostVars:1,hostBindings:function(u,d){2&u&&i.uIk("data-size",d.size)},features:[i._Bn([h.E2,(0,T.FT)(o),(0,l.oE)(o),(0,g.wB)(o)],[h.yn]),i.qOj],ngContentSelectors:P,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(u,d){1&u&&(i.F$t(m),i.TgZ(0,"tui-hosted-dropdown",0),i.NdJ("openChange",function(D){return d.open=D})("tuiActiveZoneChange",function(D){return d.onActiveZone(D)}),i.TgZ(1,"tui-primitive-textfield",1),i.NdJ("valueChange",function(D){return d.onValueChange(D)}),i.Hsn(2),i.Hsn(3,1,["ngProjectAs","input",5,["input"]]),i.qZA()()),2&u&&(i.Q6J("canOpen",d.canOpen)("content",d.datalist||"")("open",d.open),i.xp6(1),i.Q6J("disabled",d.computedDisabled)("focusable",d.computedFocusable)("invalid",d.computedInvalid)("nativeId",d.nativeId)("pseudoFocus",d.computedFocused)("pseudoHover",d.pseudoHover)("readOnly",d.readOnly)("value",d.value))},dependencies:[a.o1,s.yc,v.e,s.B1],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),o})(),_=(()=>{class o extends C.D1{onValueChange(u){this.host.onValueChange(u)}}return o.\u0275fac=function(){let b;return function(d){return(b||(b=i.n5z(o)))(d||o)}}(),o.\u0275dir=i.lG2({type:o,selectors:[["tui-input"]],features:[i._Bn([(0,l.cp)(o)]),i.qOj]}),o})(),O=(()=>{class o{}return o.\u0275fac=function(u){return new(u||o)},o.\u0275mod=i.oAB({type:o}),o.\u0275inj=i.cJS({imports:[[c.ez,v.A,s.KW,a.jh]]}),o})()}}]);