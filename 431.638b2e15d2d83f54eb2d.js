"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[431],{66431:(P,c,s)=>{s.r(c),s.d(c,{GeolocationPageModule:()=>y});var u=s(65598),o=s(74788),l=s(96247),g=s(91211),a=s(12057),p=s(41751),m=s(54121);function Z(e,i){if(1&e&&(o.O4$(),o.kcU(),o.TgZ(0,"div",5),o.TgZ(1,"div"),o._uU(2),o.qZA(),o.TgZ(3,"div"),o._uU(4),o.qZA(),o.qZA()),2&e){const t=o.oxw();o.xp6(2),o.hij("long: ",t.currentCoords.longitude,""),o.xp6(2),o.hij("lat: ",t.currentCoords.latitude,"")}}let f=(()=>{class e{constructor(t){this.domSanitizer=t,this.currentCoords=null,this.initialCoords=null,this.markerTransform$=new m.X("translate(0px,0px)")}set coordinatesChange(t){this.coordsToStyle(t),this.currentCoords=t}coordsToStyle(t){if(!this.initialCoords)return void(this.initialCoords=t);const w=this.domSanitizer.bypassSecurityTrustStyle(`translate(${1e4*(this.initialCoords.longitude-t.longitude)}px,${1e4*(this.initialCoords.latitude-t.latitude)}px)`);this.markerTransform$.next(w)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(g.H7))},e.\u0275cmp=o.Xpm({type:e,selectors:[["map"]],inputs:{coordinatesChange:"coordinatesChange"},decls:7,vars:5,consts:[[1,"map"],[1,"marker"],["id","Layer_1","version","1.1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 365 560","enable-background","new 0 0 365 560",0,"xml","space","preserve"],["fill","#00AEEF","d","M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9\n\t\tC96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8\n\t\tc33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"],["class","coords",4,"ngIf"],[1,"coords"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.ALo(2,"async"),o.O4$(),o.TgZ(3,"svg",2),o.TgZ(4,"g"),o._UZ(5,"path",3),o.qZA(),o.qZA(),o.qZA(),o.YNc(6,Z,5,2,"div",4),o.qZA()),2&t&&(o.xp6(1),o.Udp("transform",o.lcZ(2,3,n.markerTransform$)),o.xp6(5),o.Q6J("ngIf",n.currentCoords))},directives:[a.O5],pipes:[a.Ov],styles:[".map[_ngcontent-%COMP%]{min-width:300px;height:300px;overflow:hidden;background-color:#eceaea70;border:1px solid #7c7c7c}.marker[_ngcontent-%COMP%]{position:relative;top:50%;left:50%;width:20px;height:20px}.coords[_ngcontent-%COMP%]{position:absolute;font-family:monospace;width:max-content}"],changeDetection:0}),e})();function v(e,i){if(1&e&&(o.TgZ(0,"div"),o._uU(1),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.hij(" Sorry, position is not available: ",t.error.message," ")}}function T(e,i){if(1&e&&o._UZ(0,"map",13),2&e){const t=o.oxw().ngIf;o.Q6J("coordinatesChange",t.coords)}}function A(e,i){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,T,1,1,"map",12),o.qZA()),2&e){const t=i.ngIf;o.xp6(1),o.Q6J("ngIf",t.coords)}}function x(e,i){if(1&e&&(o.TgZ(0,"div"),o.YNc(1,A,2,1,"div",1),o.ALo(2,"async"),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Q6J("ngIf",o.lcZ(2,1,t.geolocation$))}}function C(e,i){if(1&e&&o._UZ(0,"iframe",14),2&e){const t=o.oxw();o.Q6J("src",t.currentPositionUrl,o.uOi)}}let _=(()=>{class e{constructor(t,n,r){this.geolocation$=t,this.domSanitizer=n,this.changeDetectorRef=r,this.position=null,this.toggle=!1,this.currentPositionUrl=null,this.watchSubscription=null,this.error=null,this.sample="import {GeolocationService} from '@ng-web-apis/geolocation';\n\n// ...\n\nconstructor(private readonly geolocation$: GeolocationService) {}\n\ngetPosition() {\n  geolocation$.subscribe((position) => {\n     doSomethingWithPosition(position);\n  });\n}",this.sampleAsync='<app-component-using-position [position]="geolocation$ | async"></app-component-using-position>'}getCurrentPosition(){this.geolocation$.pipe((0,u.q)(1)).subscribe(t=>{this.currentPositionUrl=this.getUrl(t),this.changeDetectorRef.markForCheck()},t=>{this.error=t,this.changeDetectorRef.markForCheck()})}toggleWatch(){this.toggle=!this.toggle}getUrl(t){const n=t.coords.longitude,r=t.coords.latitude;return this.domSanitizer.bypassSecurityTrustResourceUrl(`//www.openstreetmap.org/export/embed.html?bbox=${n-.005},${r-.005},${n+.005},${r+.005}&marker=${t.coords.latitude},${t.coords.longitude}&layer=mapnik`)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l._1),o.Y36(g.H7),o.Y36(o.sBO))},e.\u0275cmp=o.Xpm({type:e,selectors:[["geolocation-page"]],decls:56,vars:7,consts:[[1,"wrapper"],[4,"ngIf"],[3,"highlight"],[1,"watch-position"],[1,"switch-container"],["for","switcher",1,"switch-container__text"],[1,"switch"],["id","switcher","type","checkbox",3,"click"],[1,"slider","round"],[1,"current-position"],[1,"primary-button",3,"click"],["width","425","height","350","frameborder","0","scrolling","no","marginheight","0","marginwidth","0",3,"src",4,"ngIf"],[3,"coordinatesChange",4,"ngIf"],[3,"coordinatesChange"],["width","425","height","350","frameborder","0","scrolling","no","marginheight","0","marginwidth","0",3,"src"]],template:function(t,n){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"section"),o.TgZ(2,"p"),o.TgZ(3,"strong"),o._uU(4,"Angular"),o.qZA(),o._uU(5," does not have any built-in instruments to use "),o.TgZ(6,"strong"),o._uU(7,"Geolocation API"),o.qZA(),o._uU(8," . This is an "),o.TgZ(9,"code"),o._uU(10,"Observable"),o.qZA(),o._uU(11," based abstraction over "),o.TgZ(12,"strong"),o._uU(13,"Geolocation API"),o.qZA(),o._uU(14," to use with "),o.TgZ(15,"strong"),o._uU(16,"Angular"),o.qZA(),o.qZA(),o.qZA(),o.YNc(17,v,2,1,"div",1),o.TgZ(18,"section"),o.TgZ(19,"h2"),o._uU(20,"How to use"),o.qZA(),o.TgZ(21,"p"),o._uU(22," Usage is pretty simple: just import service in your component and subscribe to it. Service extends "),o.TgZ(23,"code"),o._uU(24,"Observable"),o.qZA(),o._uU(25," and will emit the "),o.TgZ(26,"code"),o._uU(27,"Position"),o.qZA(),o._uU(28," object. "),o.qZA(),o.TgZ(29,"pre"),o.TgZ(30,"code",2),o._uU(31),o.qZA(),o.qZA(),o.TgZ(32,"p"),o._uU(33,"You also can use async pipe"),o.qZA(),o.TgZ(34,"pre"),o.TgZ(35,"code",2),o._uU(36),o.qZA(),o.qZA(),o.TgZ(37,"div",3),o.TgZ(38,"div",4),o.TgZ(39,"label",5),o._uU(40," Track my position "),o.qZA(),o.TgZ(41,"label",6),o.TgZ(42,"input",7),o.NdJ("click",function(){return n.toggleWatch()}),o.qZA(),o._UZ(43,"span",8),o.qZA(),o.qZA(),o.YNc(44,x,3,3,"div",1),o.qZA(),o.TgZ(45,"h2"),o._uU(46,"Single position"),o.qZA(),o.TgZ(47,"div",9),o.TgZ(48,"p"),o._uU(49," If you need to get position just once and stop observing user location, you can subscribe to geolocation$ and use "),o.TgZ(50,"code"),o._uU(51,"take(1)"),o.qZA(),o._uU(52," RxJs operator. Service is cold, meaning if there are no Subscribers, it doesn't track position "),o.qZA(),o.TgZ(53,"button",10),o.NdJ("click",function(){return n.getCurrentPosition()}),o._uU(54," Get my position! "),o.qZA(),o.YNc(55,C,1,1,"iframe",11),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(17),o.Q6J("ngIf",!!n.error),o.xp6(13),o.Q6J("highlight",n.sample),o.xp6(1),o.hij("\n            ",n.sample,"\n        "),o.xp6(4),o.Q6J("highlight",n.sampleAsync),o.xp6(1),o.hij("\n            ",n.sampleAsync,"\n        "),o.xp6(8),o.Q6J("ngIf",!!n.toggle),o.xp6(11),o.Q6J("ngIf",!!n.currentPositionUrl))},directives:[a.O5,p.y$,f],pipes:[a.Ov],encapsulation:2,changeDetection:0}),e})();var U=s(23327);let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[{provide:l.H,useValue:{enableHighAccuracy:!0,timeout:3e3,maximumAge:1e3}}],imports:[[a.ez,p._l,U.Bz.forChild([{path:"",component:_}])]]}),e})()}}]);