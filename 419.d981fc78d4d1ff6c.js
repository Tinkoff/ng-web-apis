"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[419],{8627:(R,E,l)=>{l.d(E,{ap:()=>P});var e=l(6610),t=l(2978),T=l(811);l(8403);var k=l(4822),w=l(5950),M=l(5173),z=l(4314);function S(p,f){if(1&p&&(t.qex(0),t.EFF(1),t.bVm()),2&p){const v=f.polymorpheusOutlet;t.R7$(1),t.SpI(" ",v," ")}}function D(p,f){if(1&p&&(t.qSk(),t.joV(),t.j41(0,"div",6),t.DNE(1,S,2,1,"ng-container",7),t.k0s()),2&p){const v=t.XpG(2);t.AVh("t-text_horizontal",v.isHorizontal),t.R7$(1),t.Y8G("polymorpheusOutlet",v.textContent)}}function W(p,f){if(1&p&&(t.j41(0,"div",2),t.qSk(),t.j41(1,"svg",3),t.nrm(2,"circle",4),t.k0s(),t.DNE(3,D,2,3,"div",5),t.k0s()),2&p){const v=t.XpG();t.AVh("t-loader_horizontal",v.isHorizontal)("t-loader_inherit-color",v.inheritColor),t.R7$(3),t.Y8G("ngIf",v.textContent)}}const L=["*"],N=(0,z.gc)({size:"m",inheritColor:!1,overlay:!1});let P=(()=>{var p;class f{constructor(){this.isIOS=(0,t.WQX)(T.mg),this.options=(0,t.WQX)(N),this.isApple=function O({ownerDocument:p}){var a,m,u,c,d,h,b,H;const f=null==p?void 0:p.defaultView,v=void 0!==f.safari&&"[object SafariRemoteNotification]"===(null==(m=null==(a=f.safari)?void 0:a.pushNotification)?void 0:m.toString()),x=!(null==(c=null==(u=f.navigator)?void 0:u.vendor)||!c.includes("Apple")||null!=(h=null==(d=f.navigator)?void 0:d.userAgent)&&h.includes("CriOS")||null!=(H=null==(b=f.navigator)?void 0:b.userAgent)&&H.includes("FxiOS"));return v||x}((0,k.qW)())||this.isIOS,this.size=this.options.size,this.inheritColor=this.options.inheritColor,this.overlay=this.options.overlay,this.loading=!0}get isHorizontal(){return!(0,w.Wu)(this.size)}}return(p=f).\u0275fac=function(x){return new(x||p)},p.\u0275cmp=t.VBU({type:p,selectors:[["tui-loader"]],hostVars:3,hostBindings:function(x,a){2&x&&(t.BMQ("data-size",a.size),t.AVh("_loading",a.loading))},inputs:{size:"size",inheritColor:"inheritColor",overlay:"overlay",textContent:"textContent",loading:["showLoader","loading"]},standalone:!0,features:[t.aNF],ngContentSelectors:L,decls:3,vars:7,consts:[[1,"t-content",3,"disabled"],["class","t-loader",3,"t-loader_horizontal","t-loader_inherit-color",4,"ngIf"],[1,"t-loader"],["automation-id","tui-loader__loader","focusable","false","height","100%","width","100%",1,"t-icon"],["cx","50%","cy","50%",1,"t-circle"],["automation-id","tui-loader__text","class","t-text",3,"t-text_horizontal",4,"ngIf"],["automation-id","tui-loader__text",1,"t-text"],[4,"polymorpheusOutlet"]],template:function(x,a){1&x&&(t.NAR(),t.j41(0,"fieldset",0),t.SdG(1),t.k0s(),t.DNE(2,W,4,5,"div",1)),2&x&&(t.AVh("t-content_has-overlay",a.overlay&&a.loading)("t-content_loading",a.loading),t.Y8G("disabled",a.loading&&!a.isApple),t.BMQ("inert",a.loading||null),t.R7$(2),t.Y8G("ngIf",a.loading))},dependencies:[e.bT,M.xr],styles:["[_nghost-%COMP%]{position:relative;display:flex;min-inline-size:1.5rem;--tui-thickness: calc(var(--t-diameter) / 12)}._loading[_nghost-%COMP%]{overflow:hidden}[data-size=xs][_nghost-%COMP%]{--t-diameter: .75em}[data-size=s][_nghost-%COMP%]{--t-diameter: 1em}[data-size=m][_nghost-%COMP%]{--t-diameter: 1.5em}[data-size=l][_nghost-%COMP%]{--t-diameter: 2.5em}[data-size=xl][_nghost-%COMP%]{--t-diameter: 3.5em}[data-size=xxl][_nghost-%COMP%]{--t-diameter: 5em}.t-content[_ngcontent-%COMP%]{z-index:0;min-inline-size:100%;block-size:100%;padding:0;margin:0;border:none}.t-content_has-overlay[_ngcontent-%COMP%]{opacity:.3}.t-content_loading[_ngcontent-%COMP%]{pointer-events:none}.t-loader[_ngcontent-%COMP%]{position:relative;left:-100%;display:flex;flex-direction:column;align-items:center;justify-content:center;min-inline-size:100%;min-block-size:var(--t-diameter);flex-shrink:0;align-self:center;color:var(--tui-text-primary);stroke:var(--tui-background-accent-1);animation:tuiFadeIn var(--tui-duration);font-size:1rem}.t-loader.t-loader_horizontal[_ngcontent-%COMP%]{flex-direction:row}.t-loader.t-loader_inherit-color[_ngcontent-%COMP%]{color:inherit;stroke:currentColor}.t-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font:var(--tui-font-text-s);margin-top:1rem;color:inherit;max-inline-size:100%;text-align:center;stroke-width:0}.t-text_horizontal[_ngcontent-%COMP%]{margin:0 0 0 1rem}@keyframes _ngcontent-%COMP%_tuiLoaderRotate{0%{transform:rotate(-90deg)}50%{transform:rotate(-90deg) rotate(1turn)}to{transform:rotate(-90deg) rotate(3turn)}}.t-icon[_ngcontent-%COMP%]{display:block;inline-size:var(--t-diameter);block-size:var(--t-diameter);margin:.25rem calc(var(--t-diameter) / -2);border-radius:100%;overflow:hidden;animation:_ngcontent-%COMP%_tuiLoaderRotate 4s linear infinite}@supports (-webkit-hyphens: none){.t-icon[_ngcontent-%COMP%]{overflow:visible}}@keyframes _ngcontent-%COMP%_tuiLoaderDashOffset{0%{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}50%{stroke-dashoffset:calc(.05 * calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness))))}to{stroke-dashoffset:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)))}}.t-circle[_ngcontent-%COMP%]{r:calc(var(--t-diameter) / 2 - var(--tui-thickness));stroke-dasharray:calc(2 * 3.14159265 * calc(var(--t-diameter) / 2 - var(--tui-thickness)));fill:none;stroke:inherit;stroke-width:max(var(--tui-thickness),1.5px);animation:_ngcontent-%COMP%_tuiLoaderDashOffset 4s linear infinite}"],changeDetection:0}),f})()},6230:(R,E,l)=>{l.d(E,{W5:()=>v,df:()=>f});var e=l(6610),t=l(2978),T=l(4822);let y=(()=>{var a;class m{constructor(){return this.nativeElement=(0,T.qW)(),new t.aKT(this.nativeElement)}}return(a=m).\u0275fac=function(c){return new(c||a)},a.\u0275dir=t.FsC({type:a,selectors:[["","tuiElement",""]],exportAs:["elementRef"],standalone:!0}),m})();var g=l(5180),G=l(8627),F=l(5173),A=l(9141),O=l(7434),k=l(4314),w=l(1028);function M(a,m){if(1&a&&(t.qex(0),t.EFF(1),t.bVm()),2&a){const u=m.polymorpheusOutlet;t.R7$(1),t.SpI(" ",u," ")}}function z(a,m){if(1&a){const u=t.RV6();t.j41(0,"button",4,5),t.bIt("click",function(){const h=t.eBV(u).$implicit,b=t.XpG(2);return t.Njj(b.itemClick.emit(h))}),t.j41(2,"span",6),t.DNE(3,M,2,1,"ng-container",7),t.k0s()()}if(2&a){const u=m.$implicit,c=t.sdS(1),d=t.XpG(2);t.Y8G("disabled",d.disabledItemHandler(u))("value",u),t.R7$(3),t.Y8G("polymorpheusOutlet",d.itemContent)("polymorpheusOutletContext",d.getContext(u,c))}}function S(a,m){if(1&a&&(t.j41(0,"tui-data-list",2),t.DNE(1,z,4,4,"button",3),t.k0s()),2&a){const u=t.XpG();t.Y8G("emptyContent",u.emptyContent)("size",u.size),t.R7$(1),t.Y8G("ngForOf",u.$cast(u.items))}}function D(a,m){1&a&&t.nrm(0,"tui-loader",8)}const W=["labels",""];function L(a,m){if(1&a&&(t.qex(0),t.EFF(1),t.bVm()),2&a){const u=m.polymorpheusOutlet;t.R7$(1),t.SpI(" ",u," ")}}function I(a,m){if(1&a){const u=t.RV6();t.j41(0,"button",6,7),t.bIt("click",function(){const h=t.eBV(u).$implicit,b=t.XpG(3);return t.Njj(b.itemClick.emit(h))}),t.DNE(2,L,2,1,"ng-container",8),t.k0s()}if(2&a){const u=m.$implicit,c=t.sdS(1),d=t.XpG(3);t.Y8G("disabled",d.disabledItemHandler(u))("value",u),t.R7$(2),t.Y8G("polymorpheusOutlet",d.itemContent)("polymorpheusOutletContext",d.getContext(u,c))}}function N(a,m){if(1&a&&(t.j41(0,"tui-opt-group",4),t.DNE(1,I,3,4,"button",5),t.k0s()),2&a){const u=m.$implicit,c=m.index,d=t.XpG(2);t.Y8G("label",d.labels[c]),t.R7$(1),t.Y8G("ngForOf",u)}}function V(a,m){if(1&a&&(t.j41(0,"tui-data-list",2),t.DNE(1,N,2,2,"tui-opt-group",3),t.k0s()),2&a){const u=t.XpG();t.Y8G("emptyContent",u.emptyContent)("size",u.size),t.R7$(1),t.Y8G("ngForOf",u.items)}}function P(a,m){1&a&&t.nrm(0,"tui-loader",9)}let f=(()=>{var a;class m{constructor(){this.itemsHandlers=(0,t.WQX)(w.E4),this.optionsQuery=A.xQ,this.items=[],this.disabledItemHandler=this.itemsHandlers.disabledItemHandler,this.size=(0,g.pQ)(),this.itemClick=new t.bkB,this.itemContent=({$implicit:c})=>this.itemsHandlers.stringify(c)}getContext(c,{nativeElement:d}){return{$implicit:c,active:(0,O.X)(d)}}getOptions(c=!1){return this.optionsQuery.filter(({disabled:d})=>c||!d).map(({value:d})=>d).filter(k.Aj)}$cast(c){return c}}return(a=m).\u0275fac=function(c){return new(c||a)},a.\u0275cmp=t.VBU({type:a,selectors:[["tui-data-list-wrapper",3,"labels",""]],viewQuery:function(c,d){if(1&c&&t.GBs(g.aO,5),2&c){let h;t.mGM(h=t.lsd())&&(d.optionsQuery=h)}},inputs:{items:"items",disabledItemHandler:"disabledItemHandler",emptyContent:"emptyContent",size:"size",itemContent:"itemContent"},outputs:{itemClick:"itemClick"},standalone:!0,features:[t.Jv_([(0,g.WD)(a)]),t.aNF],decls:3,vars:2,consts:[[3,"emptyContent","size",4,"ngIf","ngIfElse"],["loading",""],[3,"emptyContent","size"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","","type","button",3,"disabled","value","click",4,"ngFor","ngForOf"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","","type","button",3,"disabled","value","click"],["elementRef","elementRef"],[1,"t-content"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["automation-id","tui-data-list-wrapper__loader",1,"t-loader"]],template:function(c,d){if(1&c&&(t.DNE(0,S,2,3,"tui-data-list",0),t.DNE(1,D,1,0,"ng-template",null,1,t.C5r)),2&c){const h=t.sdS(2);t.Y8G("ngIf",d.items)("ngIfElse",h)}},dependencies:[e.Sq,e.bT,F.xr,g.uE,g.aO,y,G.ap],styles:["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],changeDetection:0}),m})(),v=(()=>{var a;class m extends f{constructor(){super(...arguments),this.labels=[]}}return(a=m).\u0275fac=function(){let u;return function(d){return(u||(u=t.xGo(a)))(d||a)}}(),a.\u0275cmp=t.VBU({type:a,selectors:[["tui-data-list-wrapper","labels",""]],inputs:{labels:"labels"},standalone:!0,features:[t.Jv_([(0,g.WD)(a)]),t.Vt3,t.aNF],attrs:W,decls:3,vars:2,consts:[[3,"emptyContent","size",4,"ngIf","ngIfElse"],["loading",""],[3,"emptyContent","size"],[3,"label",4,"ngFor","ngForOf"],[3,"label"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","","type","button",3,"disabled","value","click",4,"ngFor","ngForOf"],["automation-id","tui-data-list-wrapper__option","tuiElement","","tuiOption","","type","button",3,"disabled","value","click"],["elementRef","elementRef"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-loader"]],template:function(c,d){if(1&c&&(t.DNE(0,V,2,3,"tui-data-list",0),t.DNE(1,P,1,0,"ng-template",null,1,t.C5r)),2&c){const h=t.sdS(2);t.Y8G("ngIf",d.items)("ngIfElse",h)}},dependencies:[e.Sq,e.bT,F.xr,g.uE,g.aO,g.Ji,y,G.ap],styles:["[_nghost-%COMP%]{display:block}.t-content[_ngcontent-%COMP%]{flex:1;min-inline-size:0}.t-loader[_ngcontent-%COMP%]{margin:.75rem 0}"],changeDetection:0}),m})()},8419:(R,E,l)=>{l.d(E,{ET:()=>mt,ww:()=>_t,pg:()=>vt});var e=l(2978),t=l(4314),T=l(5180),y=l(9702),g=l(6610),G=l(6230),F=l(811),A=l(7434),O=l(3279),k=l(1028),w=l(7212),M=l(4712),z=l(5950),S=l(4225),D=l(5173),W=l(756);function L(n,r){1&n&&e.nrm(0,"tui-icon",1),2&n&&e.Y8G("icon",r.polymorpheusOutlet)}const N=(0,t.gc)({iconSmall:"@tui.chevron-down",iconLarge:"@tui.chevron-down"});let P=(()=>{var n;class r{constructor(){var i;this.control=(0,e.WQX)(y.Er,{optional:!0}),this.textfieldSize=(0,e.WQX)(S.tI),this.options=(0,e.WQX)(N),this.dropdownOpen=(0,w.ot)((null==(i=(0,e.WQX)(O.iE,{optional:!0}))?void 0:i.tuiDropdownOpenChange)||(0,W.of)(!1)),this.rotated=(0,e.EWP)(()=>{var s,_;return this.dropdownOpen()||(null==(_=(s=this.control).pseudoOpen)?void 0:_.call(s))})}get small(){return!(0,z.Wu)(this.textfieldSize.size)}get arrowIcon(){return this.small?this.options.iconSmall:this.options.iconLarge}}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["tui-arrow"]],hostVars:4,hostBindings:function(i,s){2&i&&e.AVh("_rotated",s.rotated())("_small",s.small)},standalone:!0,features:[e.aNF],decls:1,vars:1,consts:[[3,"icon",4,"polymorpheusOutlet"],[3,"icon"]],template:function(i,s){1&i&&e.DNE(0,L,1,1,"tui-icon",0),2&i&&e.Y8G("polymorpheusOutlet",s.arrowIcon)},dependencies:[D.xr,M.q],styles:["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}tui-icon[_ngcontent-%COMP%]{border-width:.25rem}"],changeDetection:0}),r})();const p=new D.lS(P),v=(0,t.gc)({interactive:p,disabled:p});var a=l(5014),m=l(8832),u=l(9141),c=l(5543),d=l(4822),h=l(656),b=l(6104),H=l(2489),B=l(8448),Y=l(965),U=l(3527),J=l(3793),Z=l(599);function K(n,r){if(1&n&&e.nrm(0,"tui-icon",3),2&n){const o=e.XpG();e.Y8G("icon",o.icons.check)("tuiScrollIntoView",!0)}}function q(n,r){1&n&&e.nrm(0,"span",4)}const et=new D.lS((()=>{var n;class r{constructor(){var i;this.host=(0,e.WQX)(T.KN),this.el=(0,d.qW)(),this.changeDetection$=new b.B,this.abstractControl=(0,e.WQX)(y.Er,{optional:!0}),this.control=(0,e.WQX)(m.vO),this.option=(0,e.WQX)(T.aO),this.dataList=(0,e.WQX)(T.uE,{optional:!0}),this.icons=(0,e.WQX)(h._Z),this.context=(0,D.Dm)(),this.selected$=(0,H.h)((null==(i=this.abstractControl)?void 0:i.update$)||B.w,this.changeDetection$,this.control.valueChanges||B.w,(0,c.xM)(this.el,"animationstart")).pipe((0,Y.Z)(null),(0,U.T)(()=>this.selected),(0,J.F)())}ngOnInit(){Promise.resolve().then(()=>{var i,s;(0,t.Aj)(this.option.value)&&!this.option.disabled&&(null==(s=(i=this.host).checkOption)||s.call(i,this.option.value))})}ngDoCheck(){this.changeDetection$.next()}get value(){var i;return(null==(i=this.abstractControl)?void 0:i.value)??this.control.value}get matcher(){return this.host.identityMatcher||u.BJ}get selected(){return(0,t.Aj)(this.option.value)&&(0,t.Aj)(this.value)&&this.matcher(this.value,this.option.value)}}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275cmp=e.VBU({type:n,selectors:[["tui-select-option"]],decls:5,vars:5,consts:[[3,"ngTemplateOutlet"],["automation-id","tui-select-option__checkmark","class","t-checkmark",3,"icon","tuiScrollIntoView",4,"ngIf","ngIfElse"],["dummy",""],["automation-id","tui-select-option__checkmark",1,"t-checkmark",3,"icon","tuiScrollIntoView"],[1,"t-dummy"]],template:function(i,s){if(1&i&&(e.eu8(0,0),e.DNE(1,K,1,2,"tui-icon",1),e.nI1(2,"async"),e.DNE(3,q,1,0,"ng-template",null,2,e.C5r)),2&i){const _=e.sdS(4);e.Y8G("ngTemplateOutlet",s.context.$implicit),e.R7$(1),e.Y8G("ngIf",e.bMT(2,3,s.selected$))("ngIfElse",_)}},dependencies:[g.bT,g.T3,Z.pF,M.q,g.Jj],styles:['@keyframes _ngcontent-%COMP%_retrigger{0%{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-inline-size:100%;animation:_ngcontent-%COMP%_retrigger 1s}.t-checkmark[_ngcontent-%COMP%]{margin-inline-start:auto;inline-size:1.75rem;border-width:.25rem;border-inline-start-width:.5rem}tui-data-list[data-size="s"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-size="s"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{margin-inline-end:-.375rem}tui-data-list[data-size="m"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-size="m"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{margin-inline-end:-.125rem}.t-dummy[_ngcontent-%COMP%]{inline-size:1.75rem}'],changeDetection:0}),r})());let nt=(()=>{var n;class r{}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[g.MD,M.q]}),r})();var $=l(4198),it=l(1386),j=l(1623);function at(n,r){1&n&&(e.qex(0,5),e.SdG(1,2),e.bVm())}function st(n,r){1&n&&e.nrm(0,"div",8),2&n&&e.Y8G("textContent",r.polymorpheusOutlet)}const lt=function(n,r){return{$implicit:n,active:r}};function rt(n,r){if(1&n&&(e.j41(0,"div",6),e.DNE(1,st,1,1,"div",7),e.k0s()),2&n){const o=e.XpG();e.R7$(1),e.Y8G("polymorpheusOutlet",o.computedContent)("polymorpheusOutletContext",e.l_i(2,lt,o.value,o.computedFocused))}}function ut(n,r){1&n&&e.eu8(0)}function ct(n,r){if(1&n&&(e.j41(0,"div",9),e.DNE(1,ut,1,0,"ng-container",10),e.k0s()),2&n){const o=e.XpG();e.R7$(1),e.Y8G("polymorpheusOutlet",o.arrow)}}const pt=["*",[["input"]],[["select"]]],dt=["*","input","select"],Q=(0,t.gc)({valueContent:""});let mt=(()=>{var n;class r extends y.jc{constructor(){super(...arguments),this.itemsHandlers=(0,e.WQX)(k.E4),this.textfieldCleaner=(0,e.WQX)(S.u1),this.textfieldSize=(0,e.WQX)(S.tI),this.arrowMode=(0,e.WQX)(v),this.options=(0,e.WQX)(Q),this.isMobile=(0,e.WQX)(F.Td),this.open=!1,this.stringify=this.itemsHandlers.stringify,this.identityMatcher=this.itemsHandlers.identityMatcher,this.valueContent=this.options.valueContent}get size(){return this.textfieldSize.size}get nativeFocusableElement(){var i;return(null==(i=this.textfield)?void 0:i.nativeFocusableElement)??null}get focused(){var i;return(0,A.X)(this.nativeFocusableElement)||!(null==(i=this.dropdown)||!i.tuiDropdownOpen)}get computedValue(){return null===this.value?"":this.stringify(this.value)||" "}onValueChange(i){this.value=i||null}handleOption(i){this.focusInput(),this.value=i,this.open=!1}get arrow(){return this.interactive?this.arrowMode.interactive:this.arrowMode.disabled}get nativeDropdownMode(){return!!this.nativeSelect&&this.isMobile}get computedContent(){return this.valueContent||this.computedValue}onActiveZone(i){this.updateFocused(i)}onKeyDownDelete(){this.textfieldCleaner.cleaner&&(this.value=null)}focusInput(i=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:i})}}return(n=r).\u0275fac=function(){let o;return function(s){return(o||(o=e.xGo(n)))(s||n)}}(),n.\u0275cmp=e.VBU({type:n,selectors:[["tui-select"]],contentQueries:function(i,s,_){if(1&i&&(e.wni(_,y.oB,7),e.wni(_,T.WX,5,e.C4Q)),2&i){let C;e.mGM(C=e.lsd())&&(s.nativeSelect=C.first),e.mGM(C=e.lsd())&&(s.datalist=C.first)}},viewQuery:function(i,s){if(1&i&&(e.GBs(a.eD,5),e.GBs(O.iE,5)),2&i){let _;e.mGM(_=e.lsd())&&(s.textfield=_.first),e.mGM(_=e.lsd())&&(s.dropdown=_.first)}},hostVars:1,hostBindings:function(i,s){2&i&&e.BMQ("data-size",s.size)},inputs:{stringify:"stringify",identityMatcher:"identityMatcher",valueContent:"valueContent"},features:[e.Jv_([(0,j.Jr)(n),(0,y.SN)(n),(0,T.PU)(n),(0,T.NW)(et)]),e.Vt3,e.nM4([O._H])],ngContentSelectors:dt,decls:8,vars:16,consts:[["tuiDropdownOpenMonitor","",1,"t-hosted",3,"tuiDropdown","tuiDropdownEnabled","tuiDropdownOpen","tuiDropdownOpenChange","tuiActiveZoneChange"],["automation-id","tui-select__textfield",1,"t-textfield",3,"disabled","editable","focusable","invalid","nativeId","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldIcon","value","keydown.backspace.prevent","keydown.delete.prevent","valueChange"],["ngProjectAs","select",5,["select"],4,"ngIf"],["automation-id","tui-select__value","ngProjectAs","tuiContent","class","t-value",5,["tuiContent"],4,"ngIf"],["icon",""],["ngProjectAs","select",5,["select"]],["automation-id","tui-select__value","ngProjectAs","tuiContent",5,["tuiContent"],1,"t-value"],["class","t-primitive-value",3,"textContent",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-primitive-value",3,"textContent"],["appearance","icon","tuiWrapper","",1,"t-icon"],[4,"polymorpheusOutlet"]],template:function(i,s){if(1&i&&(e.NAR(pt),e.j41(0,"div",0),e.bIt("tuiDropdownOpenChange",function(C){return s.open=C})("tuiActiveZoneChange",function(C){return s.onActiveZone(C)}),e.j41(1,"tui-primitive-textfield",1),e.bIt("keydown.backspace.prevent",function(){return s.onKeyDownDelete()})("keydown.delete.prevent",function(){return s.onKeyDownDelete()})("valueChange",function(C){return s.onValueChange(C)}),e.SdG(2),e.SdG(3,1,["ngProjectAs","input",5,["input"]]),e.DNE(4,at,2,0,"ng-container",2),e.DNE(5,rt,2,5,"div",3),e.k0s(),e.DNE(6,ct,2,1,"ng-template",null,4,e.C5r),e.k0s()),2&i){const _=e.sdS(7);e.Y8G("tuiDropdown",s.datalist||"")("tuiDropdownEnabled",s.interactive&&!s.nativeDropdownMode)("tuiDropdownOpen",s.open),e.R7$(1),e.Y8G("disabled",s.computedDisabled)("editable",!1)("focusable",s.computedFocusable)("invalid",s.computedInvalid)("nativeId",s.nativeId)("pseudoActive",s.pseudoActive)("pseudoFocus",s.computedFocused)("pseudoHover",s.pseudoHover)("readOnly",s.readOnly)("tuiTextfieldIcon",s.arrow?_:"")("value",s.computedValue),e.R7$(3),e.Y8G("ngIf",s.isMobile),e.R7$(1),e.Y8G("ngIf",null!==s.value)}},dependencies:[g.bT,D.xr,a.eD,a.gt,$.l,S.OC,it.g,O.pU,O.iE],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:start}[_nghost-%COMP%]:not(._readonly)     input:not(:disabled){cursor:pointer}._readonly[_nghost-%COMP%]     input{cursor:default}[_nghost-%COMP%]   *:disabled[_nghost-%COMP%], *:disabled   [_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-value[_ngcontent-%COMP%]{display:flex;inline-size:100%;align-items:center}.t-primitive-value[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}"],changeDetection:0}),r})(),_t=(()=>{var n;class r extends y.aX{get readOnly(){return!0}get value(){return this.host.computedValue}get stringify(){return this.host.stringify}onValueChange(i){this.host.onValueChange(i)}}return(n=r).\u0275fac=function(){let o;return function(s){return(o||(o=e.xGo(n)))(s||n)}}(),n.\u0275dir=e.FsC({type:n,selectors:[["tui-select"]],features:[e.Jv_([(0,j.Sc)(n)]),e.Vt3]}),r})(),vt=(()=>{var n;class r{}return(n=r).\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.$C({type:n}),n.\u0275inj=e.G2t({imports:[g.MD,a.Rp,nt,P,$.E,S.CN,O.Vh,T.uE,T.aO,G.df,G.W5]}),r})()}}]);