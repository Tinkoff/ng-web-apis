"use strict";exports.id=826,exports.ids=[826],exports.modules={93826:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>payment_request_page_component});var common=__webpack_require__(16727),src=__webpack_require__(37869),ngx_highlightjs=__webpack_require__(44675),core=__webpack_require__(75407);function Shop_div_1_Template(rf,ctx){if(1&rf){const _r6=core.RV6();core.j41(0,"div",8),core.bIt("click",function(){const item_r4=core.eBV(_r6).$implicit,ctx_r5=core.XpG();return core.Njj(ctx_r5.addToShippingCard(item_r4))}),core.nrm(1,"img",9),core.j41(2,"label",10),core.EFF(3),core.k0s(),core.j41(4,"p",11),core.EFF(5),core.k0s()()}if(2&rf){const item_r4=ctx.$implicit;core.R7$(1),core.Y8G("src",item_r4.image,core.B4B),core.R7$(2),core.JRh(item_r4.label),core.R7$(2),core.SpI("",item_r4.price," \u20bd")}}function Shop_ng_container_6_div_1_Template(rf,ctx){if(1&rf&&(core.j41(0,"div",13),core.EFF(1),core.k0s()),2&rf){const cartItem_r8=ctx.$implicit;core.Y8G("paymentAmount",cartItem_r8.amount)("paymentLabel",cartItem_r8.label),core.R7$(1),core.E5c(" ",cartItem_r8.label," (",cartItem_r8.amount.value," ",cartItem_r8.amount.currency,") ")}}function Shop_ng_container_6_Template(rf,ctx){if(1&rf&&(core.qex(0),core.DNE(1,Shop_ng_container_6_div_1_Template,2,5,"div",12),core.bVm()),2&rf){const ctx_r1=core.XpG();core.R7$(1),core.Y8G("ngForOf",ctx_r1.shippingCart)}}function Shop_ng_template_7_Template(rf,ctx){1&rf&&core.EFF(0,"Nothing added")}class ShopItem{constructor(image,label,price){this.image=image,this.label=label,this.price=price}get amount(){return{currency:"RUB",value:String(this.price)}}}let Shop=(()=>{var _Shop;class Shop2{constructor(){this.items=[new ShopItem("https://image.flaticon.com/icons/svg/1868/1868178.svg","Matryoshka",50),new ShopItem("https://image.flaticon.com/icons/svg/820/820158.svg","Balalaika",100),new ShopItem("https://image.flaticon.com/icons/svg/1868/1868169.svg","Ushanka",70),new ShopItem("https://image.flaticon.com/icons/svg/1868/1868226.svg","Kokoshnik",70),new ShopItem("https://image.flaticon.com/icons/svg/1868/1868276.svg","Borscht",10),new ShopItem("https://image.flaticon.com/icons/svg/1868/1868380.svg","Sputnik",1e3)],this.shippingCart=[]}get totalSum(){return this.shippingCart.reduce((sum,item)=>sum+item.price,0)}get total(){return{label:"Total",amount:{currency:"RUB",value:String(this.totalSum)}}}addToShippingCard(item){this.shippingCart=[...this.shippingCart,item]}onPayment(response){console.info("payment response:",response),this.clearShippingCart(),response.complete()}onPaymentError(error){console.info("payment error:",error),this.clearShippingCart()}clearShippingCart(){this.shippingCart=[]}}return(_Shop=Shop2).\u0275fac=function(t){return new(t||_Shop)},_Shop.\u0275cmp=core.VBU({type:_Shop,selectors:[["app-shop"]],standalone:!0,features:[core.aNF],decls:15,vars:6,consts:[[1,"items"],["class","item",3,"click",4,"ngFor","ngForOf"],["waPayment","",1,"shopping-cart",3,"paymentTotal"],[1,"sticky"],[4,"ngIf","ngIfElse"],["noItems",""],[1,"total"],["type","button",1,"buy-button",3,"disabled","waPaymentError","waPaymentSubmit"],[1,"item",3,"click"],["alt","item","width","64",1,"item-image",3,"src"],[1,"item-label"],[1,"item-price"],["waPaymentItem","","class","shopping-card-item",3,"paymentAmount","paymentLabel",4,"ngFor","ngForOf"],["waPaymentItem","",1,"shopping-card-item",3,"paymentAmount","paymentLabel"]],template:function(rf,ctx){if(1&rf&&(core.j41(0,"div",0),core.DNE(1,Shop_div_1_Template,6,3,"div",1),core.k0s(),core.j41(2,"div",2)(3,"div",3)(4,"h4"),core.EFF(5,"Shopping Cart"),core.k0s(),core.DNE(6,Shop_ng_container_6_Template,2,1,"ng-container",4),core.DNE(7,Shop_ng_template_7_Template,1,0,"ng-template",null,5,core.C5r),core.j41(9,"div",6)(10,"b"),core.EFF(11,"Total:"),core.k0s(),core.EFF(12),core.k0s(),core.j41(13,"button",7),core.bIt("waPaymentError",function($event){return ctx.onPaymentError($event)})("waPaymentSubmit",function($event){return ctx.onPayment($event)}),core.EFF(14," Buy "),core.k0s()()()),2&rf){const _r2=core.sdS(8);core.R7$(1),core.Y8G("ngForOf",ctx.items),core.R7$(1),core.Y8G("paymentTotal",ctx.total),core.R7$(4),core.Y8G("ngIf",ctx.shippingCart.length>0)("ngIfElse",_r2),core.R7$(6),core.SpI(" ",ctx.totalSum," \u20bd "),core.R7$(1),core.Y8G("disabled",0===ctx.shippingCart.length)}},dependencies:[common.Sq,common.bT,src.xI,src.mR,src.T9],styles:["[_nghost-%COMP%]{display:flex}.items[_ngcontent-%COMP%]{display:flex;flex:2;flex-wrap:wrap}@media (max-width: 800px){.items[_ngcontent-%COMP%]{max-inline-size:50%;justify-content:flex-end}}.item[_ngcontent-%COMP%]{display:flex;inline-size:9.375rem;margin:.75rem;padding:16px 16px 0;flex-direction:column;align-items:center;border:1px solid #dcdcdc;border-radius:.5rem;cursor:pointer;transition:box-shadow .3s}.item[_ngcontent-%COMP%]:hover{box-shadow:0 .75rem 2.25rem #0003}.item-label[_ngcontent-%COMP%]{cursor:inherit}.item-price[_ngcontent-%COMP%]{font-size:smaller}.item-image[_ngcontent-%COMP%]{margin-bottom:.75rem}.sticky[_ngcontent-%COMP%]{position:sticky;top:16px}.total[_ngcontent-%COMP%]{margin-top:16px}.shopping-card-item[_ngcontent-%COMP%]{margin-top:4px;margin-bottom:4px}.shopping-cart[_ngcontent-%COMP%]{flex:1;max-inline-size:10.5rem;background-color:#f0f0f0;padding:0 16px;border-radius:.5rem}.buy-button[_ngcontent-%COMP%]{inline-size:100%;margin-top:1.25rem;margin-bottom:.5rem;background-color:#fff;border:1px solid #ccc;border-radius:4px;padding:4px;cursor:pointer}.buy-button[_ngcontent-%COMP%]:disabled{cursor:default;opacity:56%}"],changeDetection:0}),Shop2})();const payment_request_page_component=(()=>{var _PaymentRequestPage;class PaymentRequestPage2{constructor(){this.samples={service:"import {PaymentRequestService} from '@ng-web-apis/payment-request';\n\n// ...\n\nconstructor(private readonly paymentRequest: PaymentRequestService) {}\n\npay(details: PaymentDetailsInit) {\n    this.paymentRequest.request(details).then(\n        response => {\n            response.complete();\n        },\n        error => {},\n    );\n}",directives:'<div\n  waPayment\n  [paymentTotal]="total"\n>\n  <div\n    waPaymentItem\n    [paymentLabel]="label"\n    [paymentAmount]="amount"\n  >\n    {{label}} ({{amount}})\n  </div>\n  <button\n    (waPaymentSubmit)="onPayment($event)"\n    (waPaymentError)="onError($event)"\n  >\n    Buy\n  </button>\n</div>'}}}return(_PaymentRequestPage=PaymentRequestPage2).\u0275fac=function(t){return new(t||_PaymentRequestPage)},_PaymentRequestPage.\u0275cmp=core.VBU({type:_PaymentRequestPage,selectors:[["payment-request-page"]],standalone:!0,features:[core.Jv_([{provide:src.uq,useValue:[{supportedMethods:"https://apple.com/apple-pay",data:{version:3,merchantIdentifier:"merchant.com.example",merchantCapabilities:["supports3DS","supportsCredit","supportsDebit"],supportedNetworks:["amex","discover","masterCard","visa"],countryCode:"US"}},{supportedMethods:"basic-card"}]}]),core.aNF],decls:45,vars:3,consts:[[1,"wrapper"],["href","https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API","rel","noreferrer","target","_blank"],[3,"highlight"],[1,"how-it-works"],[1,"how-it-works-text"],[1,"how-it-works-point"],["href","https://github.com/taiga-family/ng-web-apis/tree/main/libs/payment-request#wapayment","rel","noreferrer","target","_blank"],["href","https://www.w3.org/TR/payment-request/#paymentitem-dictionary","rel","noreferrer","target","_blank"],["href","https://github.com/taiga-family/ng-web-apis/tree/main/libs/payment-request#waPaymentItem","rel","noreferrer","target","_blank"],["href","https://developer.mozilla.org/en-US/docs/Web/API/PaymentResponse","rel","noreferrer","target","_blank"],["href","https://github.com/taiga-family/ng-web-apis/tree/main/libs/payment-request#waPaymentSubmit","rel","noreferrer","target","_blank"],[1,"directive-sample"]],template:function(rf,ctx){1&rf&&(core.j41(0,"div",0)(1,"p"),core.EFF(2," Angular does not have any abstractions over "),core.j41(3,"a",1),core.EFF(4," PaymentRequest API "),core.k0s(),core.EFF(5," . This library provides you two ways to use this API with Angular of 6+ version. "),core.k0s(),core.j41(6,"h3"),core.EFF(7,"As an Angular service:"),core.k0s(),core.j41(8,"pre")(9,"code",2),core.EFF(10),core.k0s()(),core.j41(11,"h3"),core.EFF(12,"As a set of directives:"),core.k0s(),core.j41(13,"p"),core.EFF(14,"Click to add some items to a shopping cart:"),core.k0s(),core.nrm(15,"app-shop"),core.j41(16,"h4"),core.EFF(17,"How it works:"),core.k0s(),core.j41(18,"div",3)(19,"div",4)(20,"p",5)(21,"a",6),core.EFF(22," waPayment "),core.k0s(),core.EFF(23," directive defines a scope for a\xa0new payment and needs "),core.j41(24,"a",7),core.EFF(25," PaymentItem "),core.k0s(),core.EFF(26," object with information about a label and a\xa0total sum of the payment "),core.k0s(),core.j41(27,"p",5),core.EFF(28," Each item of the shipping cart is a\xa0 "),core.j41(29,"a",8),core.EFF(30," waPaymentItem "),core.k0s(),core.EFF(31," directive. It\xa0is\xa0a\xa0declarative "),core.j41(32,"a",7),core.EFF(33," PaymentItem "),core.k0s(),core.EFF(34," for your Payment "),core.k0s(),core.j41(35,"p",5),core.EFF(36," Click on the button starts a\xa0PaymentRequest modal in your browser that returns "),core.j41(37,"a",9),core.EFF(38," PaymentResponse "),core.k0s(),core.EFF(39," or an error. It works due a\xa0 "),core.j41(40,"a",10),core.EFF(41," waPaymentSubmit "),core.k0s(),core.EFF(42," directive. "),core.k0s()(),core.j41(43,"pre",11),core.nrm(44,"code",2),core.k0s()()()),2&rf&&(core.R7$(9),core.Y8G("highlight",ctx.samples.service),core.R7$(1),core.SpI("\n    ",ctx.samples.service,"\n"),core.R7$(34),core.Y8G("highlight",ctx.samples.directives))},dependencies:[common.MD,ngx_highlightjs.fw,ngx_highlightjs.f4,Shop],styles:["[_nghost-%COMP%]{display:block;max-inline-size:37.5rem;margin:0 auto}.wrapper[_ngcontent-%COMP%]{padding:0 .625rem}.how-it-works[_ngcontent-%COMP%]{position:relative;display:flex;flex-wrap:wrap}.how-it-works-point[_ngcontent-%COMP%]{margin-top:1.625rem;margin-bottom:1.625rem}.how-it-works-text[_ngcontent-%COMP%]{flex:1;min-inline-size:18.75rem;margin:.5rem}.directive-sample[_ngcontent-%COMP%]{display:block;flex:1;margin:.5rem;inline-size:20.625rem}.directive-sample-arrow[_ngcontent-%COMP%]{position:absolute;right:5.9375rem;top:-2.625rem}"],changeDetection:0}),PaymentRequestPage2})()},37869:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uq:()=>PAYMENT_METHODS,pD:()=>PAYMENT_REQUEST_SUPPORT,xI:()=>WaPayment,mR:()=>WaPaymentItem,T9:()=>WaPaymentSubmit});var core=__webpack_require__(75407);let WaPaymentItem=(()=>{var _WaPaymentItem;class WaPaymentItem2{}return(_WaPaymentItem=WaPaymentItem2).\u0275fac=function(t){return new(t||_WaPaymentItem)},_WaPaymentItem.\u0275dir=core.FsC({type:_WaPaymentItem,selectors:[["","waPaymentItem","","paymentAmount","","paymentLabel",""]],inputs:{amount:["paymentAmount","amount"],label:["paymentLabel","label"],pending:["paymentPending","pending"]},standalone:!0}),WaPaymentItem2})(),WaPayment=(()=>{var _WaPayment;class WaPayment2{set paymentItems(items){this.displayItems=items.toArray()}}return(_WaPayment=WaPayment2).\u0275fac=function(t){return new(t||_WaPayment)},_WaPayment.\u0275dir=core.FsC({type:_WaPayment,selectors:[["","waPayment","","paymentTotal",""]],contentQueries:function(rf,ctx,dirIndex){if(1&rf&&core.wni(dirIndex,WaPaymentItem,4),2&rf){let _t;core.mGM(_t=core.lsd())&&(ctx.paymentItems=_t)}},inputs:{total:["paymentTotal","total"],id:["paymentId","id"],modifiers:["paymentModifiers","modifiers"],shippingOptions:["paymentShippingOptions","shippingOptions"]},standalone:!0}),WaPayment2})();var fromEvent=__webpack_require__(55014),switchMap=__webpack_require__(25358),from=__webpack_require__(77949),catchError=__webpack_require__(40933),of=__webpack_require__(76145),share=__webpack_require__(14759),filter=__webpack_require__(70948),asyncToGenerator=__webpack_require__(73308);const PAYMENT_METHODS=new core.nKC("[WA_PAYMENT_METHODS]",{factory:()=>[{supportedMethods:"basic-card"}]}),PAYMENT_OPTIONS=new core.nKC("[WA_PAYMENT_OPTIONS]",{factory:()=>({})});var src=__webpack_require__(13270);const PAYMENT_REQUEST_SUPPORT=new core.nKC("[WA_PAYMENT_REQUEST_SUPPORT]",{factory:()=>!!(0,core.WQX)(src.Qc).PaymentRequest});let PaymentRequestService=(()=>{var _PaymentRequestService;class PaymentRequestService2{constructor(){this.supported=(0,core.WQX)(PAYMENT_REQUEST_SUPPORT),this.paymentMethods=(0,core.WQX)(PAYMENT_METHODS),this.paymentOptions=(0,core.WQX)(PAYMENT_OPTIONS)}request(details,methods=this.paymentMethods,options=this.paymentOptions){var _this=this;return(0,asyncToGenerator.A)(function*(){if(!_this.supported)return Promise.reject(new Error("Payment Request is not supported in your browser"));const gateway=new PaymentRequest(methods,details,options);return gateway.canMakePayment().then(function(){var _ref=(0,asyncToGenerator.A)(function*(canPay){return canPay?gateway.show(details):Promise.reject(new Error("Payment Request cannot make the payment"))});return function(_x){return _ref.apply(this,arguments)}}())})()}}return(_PaymentRequestService=PaymentRequestService2).\u0275fac=function(t){return new(t||_PaymentRequestService)},_PaymentRequestService.\u0275prov=core.jDH({token:_PaymentRequestService,factory:_PaymentRequestService.\u0275fac,providedIn:"root"}),PaymentRequestService2})();function isError(item){return item instanceof Error||item instanceof DOMException}let WaPaymentSubmit=(()=>{var _WaPaymentSubmit;class WaPaymentSubmit2{constructor(){this.paymentHost=(0,core.WQX)(WaPayment),this.paymentRequest=(0,core.WQX)(PaymentRequestService),this.nativeElement=(0,core.WQX)(core.aKT).nativeElement,this.methods=(0,core.WQX)(PAYMENT_METHODS),this.options=(0,core.WQX)(PAYMENT_OPTIONS);const requests$=(0,fromEvent.R)(this.nativeElement,"click").pipe((0,switchMap.n)(()=>(0,from.H)(this.paymentRequest.request({...this.paymentHost},this.methods,this.options)).pipe((0,catchError.W)(error=>(0,of.of)(error)))),(0,share.u)());this.waPaymentSubmit=requests$.pipe((0,filter.p)(response=>!isError(response))),this.waPaymentError=requests$.pipe((0,filter.p)(isError))}}return(_WaPaymentSubmit=WaPaymentSubmit2).\u0275fac=function(t){return new(t||_WaPaymentSubmit)},_WaPaymentSubmit.\u0275dir=core.FsC({type:_WaPaymentSubmit,selectors:[["","waPaymentSubmit",""]],outputs:{waPaymentSubmit:"waPaymentSubmit",waPaymentError:"waPaymentError"},standalone:!0}),WaPaymentSubmit2})()}};