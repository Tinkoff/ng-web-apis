"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=330,exports.ids=[330],exports.modules={59330:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UniversalPageModule:()=>UniversalPageModule});var core=__webpack_require__(74788);class UniversalPageComponent{}__name(UniversalPageComponent,"UniversalPageComponent"),UniversalPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:UniversalPageComponent,deps:[],target:core.\u0275\u0275FactoryTarget.Component}),UniversalPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.15",type:UniversalPageComponent,selector:"universal-page",ngImport:core,template:'<h2 id="how-to-use">How to use</h2>\n<p>\n    Add constants imported from this package to providers of your\n    <code>ServerAppModule</code>\n    . Typically, you can also use these mocks for tests. Idea of this package is\n    \u2014 you shouldn&#39;t have to mock DOM on the server side or test\n    <code>isPlatformBrowser</code>\n    all the time. Instead, you leverage Angular DI system to abstract from\n    implementation. When possible, this package will provide the same\n    functionality on the server side as you have in browser. In other cases you\n    will get type-safe mocks and you can at least be sure you will not have\n    <code>cannot read property of null</code>\n    or\n    <code>undefined is not a function</code>\n    errors in SSR.\n</p>\n<blockquote>\n    <p>\n        <strong>IMPORTANT:</strong>\n        This library relies on\n        <strong>\n            <em>Node.js</em>\n            v10\n        </strong>\n        and above on your server side\n    </p>\n</blockquote>\n<h2 id="mocks">Mocks</h2>\n<p>\n    Add following line to your\n    <code>server.ts</code>\n    to mock native classes used in other @ng-web-apis packages:\n</p>\n<pre><code class="language-js">import &#39;@ng-web-apis/universal/mocks&#39;;\n</code></pre>\n<blockquote>\n    <p>\n        It is recommended to keep the import statement at the top of your\n        <code>server.ts</code>\n        file\n    </p>\n</blockquote>\n<h2 id="tokens">Tokens</h2>\n<p>\n    You can provide tokens from this package into your\n    <code>app.server.module.ts</code>\n    to have type safe mocks for global objects on server side with\n    <code>UniversalModule</code>\n    :\n</p>\n<pre><code class="language-ts">@NgModule({{ \'{\' }}\n    imports: [\n      AppBrowserModule,\n      ServerModule,\n      UniversalModule, // &lt;-- add this\n  ],\n  bootstrap: [AppComponent],\n})\nexport class AppServerModule {{ \'{\' }}}\n</code></pre>\n<p>\n    Alternatively, if you have a standalone app that is initialized using the\n    bootstrapApplication function, you can import\n    <code>UniversalModule</code>\n    in the following manner:\n</p>\n<pre><code class="language-ts">const serverConfig: ApplicationConfig = {{ \'{\' }}\n    providers: [\n      provideServerRendering(),\n      importProvidersFrom(UniversalModule), // &lt;-- add this\n  ],\n};\n\nconst config = mergeApplicationConfig(appConfig, serverConfig);\nconst bootstrap = () =&gt; bootstrapApplication(AppComponent, config);\n</code></pre>\n<h2 id="special-cases">Special cases</h2>\n<p>\n    When you use plain SSR without prerender you can retrieve some of the\n    information from requests. Use the following helpers to harvest that info:\n</p>\n<p><strong>server.ts:</strong></p>\n<pre><code class="language-typescript">import {{ \'{\' }}{{ \'{\' }}provideLocation, provideUserAgent}}\n    from\n    &#39;@ng-web-apis/universal&#39;;\n// ...\napp.get(&#39;/**/*&#39;, (req: Request, res: Response) =&gt; {{ \'{\' }}\n  res.render(&#39;../dist/index&#39;, {{ \'{\' }}\n    req,\n        res,\n        providers: [provideLocation(req), provideUserAgent(req)],\n    });\n    });\n</code></pre>\n',changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:UniversalPageComponent,decorators:[{type:core.Component,args:[{selector:"universal-page",templateUrl:"./universal-page.component.html",changeDetection:core.ChangeDetectionStrategy.OnPush}]}]});var router=__webpack_require__(3984),common=__webpack_require__(12057);class UniversalPageModule{}__name(UniversalPageModule,"UniversalPageModule"),UniversalPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:UniversalPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),UniversalPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:UniversalPageModule,declarations:[UniversalPageComponent],imports:[common.ez,router.Bz]}),UniversalPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:UniversalPageModule,imports:[[common.ez,router.Bz.forChild([{path:"",component:UniversalPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:UniversalPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,router.Bz.forChild([{path:"",component:UniversalPageComponent}])],declarations:[UniversalPageComponent]}]}]})}};