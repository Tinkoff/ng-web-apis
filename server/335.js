"use strict";var __defProp=Object.defineProperty,__name=(target,value)=>__defProp(target,"name",{value,configurable:!0});exports.id=335,exports.ids=[335],exports.modules={99335:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CanvasPageModule:()=>CanvasPageModule});var core=__webpack_require__(74788),taiga_ui_core_components_label=__webpack_require__(19506),taiga_ui_core_components_expand=__webpack_require__(12733),taiga_ui_core_directives_textfield_controller=__webpack_require__(441),taiga_ui_core_components_data_list=__webpack_require__(75111),taiga_ui_kit_components_slider=__webpack_require__(18106),taiga_ui_kit_components_select=__webpack_require__(99485),taiga_ui_kit_components_data_list_wrapper=__webpack_require__(4246),taiga_ui_kit_components_input_files=__webpack_require__(3977),taiga_ui_kit_components_input=__webpack_require__(21673),taiga_ui_addon_editor_components_input_color=__webpack_require__(44385),fesm2015_forms=__webpack_require__(24751),canvas_2d=__webpack_require__(26134),draw_image=__webpack_require__(69406),path=__webpack_require__(34825),fill_stroke_styles=__webpack_require__(80454),rect=__webpack_require__(5641),compositing=__webpack_require__(18818),transform=__webpack_require__(69806),shadow_styles=__webpack_require__(93204),arc=__webpack_require__(88193),line_to=__webpack_require__(18847),methods_text=__webpack_require__(85346),text_drawing_styles=__webpack_require__(83307),transform_pipe=__webpack_require__(47489),rad_pipe=__webpack_require__(20344);class CanvasPageComponent{constructor(){this.x1=20,this.y1=20,this.w1=100,this.h1=50,this.x2=50,this.y2=50,this.w2=100,this.h2=50,this.c2="#00ff00",this.dX=0,this.dY=0,this.dWidth=100,this.dHeight=100,this.globalCompositeOperation="source-over",this.mouth=30,this.blur=0,this.offset=0,this.font='bold 40px "Lucida Bright"',this.text="PAC-MAN",this.color="#ffa500",this.file=null,this.image=new Image,this.items=["source-over","multiply","screen"],this.image.onload=()=>{URL.revokeObjectURL(this.image.src)}}onFile(file){this.file=file,file&&(this.image.src=URL.createObjectURL(file))}}__name(CanvasPageComponent,"CanvasPageComponent"),CanvasPageComponent.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:CanvasPageComponent,deps:[],target:core.\u0275\u0275FactoryTarget.Component}),CanvasPageComponent.\u0275cmp=core.\u0275\u0275ngDeclareComponent({minVersion:"12.0.0",version:"12.2.15",type:CanvasPageComponent,selector:"audio-page",ngImport:core,template:'<h2>Basic example</h2>\n<section>\n    <fieldset>\n        <label tuiLabel="x" class="child">\n            <input tuiSlider type="range" min="0" max="300" [(ngModel)]="x1" />\n        </label>\n        <label tuiLabel="y" class="child">\n            <input tuiSlider type="range" min="0" max="150" [(ngModel)]="y1" />\n        </label>\n        <label tuiLabel="width" class="child">\n            <input tuiSlider type="range" min="0" max="300" [(ngModel)]="w1" />\n        </label>\n        <label tuiLabel="height" class="child">\n            <input tuiSlider type="range" min="0" max="150" [(ngModel)]="h1" />\n        </label>\n    </fieldset>\n\n    <fieldset>\n        <label tuiLabel="x" class="child">\n            <input tuiSlider type="range" min="0" max="300" [(ngModel)]="x2" />\n        </label>\n        <label tuiLabel="y" class="child">\n            <input tuiSlider type="range" min="0" max="150" [(ngModel)]="y2" />\n        </label>\n        <label tuiLabel="width" class="child">\n            <input tuiSlider type="range" min="0" max="300" [(ngModel)]="w2" />\n        </label>\n        <label tuiLabel="height" class="child">\n            <input tuiSlider type="range" min="0" max="150" [(ngModel)]="h2" />\n        </label>\n        <div class="row">\n            <tui-select\n                tuiTextfieldSize="m"\n                class="child"\n                [(ngModel)]="globalCompositeOperation"\n            >\n                Overlay\n                <tui-data-list-wrapper\n                    *tuiDataList\n                    [items]="items"\n                ></tui-data-list-wrapper>\n            </tui-select>\n            <tui-input-color\n                tuiTextfieldSize="m"\n                class="child"\n                [(ngModel)]="c2"\n            >\n                Color\n            </tui-input-color>\n        </div>\n    </fieldset>\n\n    <fieldset>\n        <tui-input-files\n            class="child"\n            [ngModel]="file"\n            (ngModelChange)="onFile($event)"\n        >\n            <input tuiInputFiles accept="image/*" />\n        </tui-input-files>\n\n        <tui-expand class="child" [expanded]="!!file">\n            <div class="controls">\n                <label tuiLabel="dX">\n                    <input\n                        tuiSlider\n                        type="range"\n                        min="0"\n                        max="300"\n                        [(ngModel)]="dX"\n                    />\n                </label>\n\n                <label tuiLabel="dY">\n                    <input\n                        tuiSlider\n                        type="range"\n                        min="0"\n                        max="150"\n                        [(ngModel)]="dY"\n                    />\n                </label>\n\n                <label tuiLabel="dWidth">\n                    <input\n                        tuiSlider\n                        type="range"\n                        min="0"\n                        max="300"\n                        [(ngModel)]="dWidth"\n                    />\n                </label>\n\n                <label tuiLabel="dHeight">\n                    <input\n                        tuiSlider\n                        type="range"\n                        min="0"\n                        max="150"\n                        [(ngModel)]="dHeight"\n                    />\n                </label>\n            </div>\n        </tui-expand>\n    </fieldset>\n</section>\n\n<canvas waCanvas2d>\n    <canvas-draw-image\n        [image]="image"\n        [dX]="dX"\n        [dY]="dY"\n        [dWidth]="dWidth"\n        [dHeight]="dHeight"\n    ></canvas-draw-image>\n    <canvas-path fillStyle="#f00">\n        <canvas-rect [x]="x1" [y]="y1" [width]="w1" [height]="h1"></canvas-rect>\n    </canvas-path>\n    <canvas-path\n        [fillStyle]="c2"\n        [globalCompositeOperation]="globalCompositeOperation"\n    >\n        <canvas-rect [x]="x2" [y]="y2" [width]="w2" [height]="h2"></canvas-rect>\n    </canvas-path>\n</canvas>\n<h2>Path example</h2>\n\n<section>\n    <fieldset>\n        <label tuiLabel="Pac-Man mouth" class="child">\n            <input\n                tuiSlider\n                type="range"\n                min="0.01"\n                max="45"\n                [(ngModel)]="mouth"\n            />\n        </label>\n        <label tuiLabel="Pac-Man shadow blur" class="child">\n            <input tuiSlider type="range" min="0" max="10" [(ngModel)]="blur" />\n        </label>\n        <label tuiLabel="Pac-Man shadow distance" class="child">\n            <input\n                tuiSlider\n                type="range"\n                min="0"\n                max="10"\n                [(ngModel)]="offset"\n            />\n        </label>\n    </fieldset>\n    <fieldset>\n        <tui-input tuiTextfieldSize="m" class="child" [(ngModel)]="text">\n            Text\n        </tui-input>\n        <tui-input tuiTextfieldSize="m" class="child" [(ngModel)]="font">\n            Font\n        </tui-input>\n        <tui-input-color tuiTextfieldSize="m" class="child" [(ngModel)]="color">\n            color\n        </tui-input-color>\n    </fieldset>\n</section>\n<canvas\n    waCanvas2d\n    [width]="600"\n    [height]="300"\n    [transform]="\'scale(2, 2)\' | transform"\n>\n    <canvas-path\n        fillStyle="gold"\n        shadowColor="grey"\n        [shadowBlur]="blur"\n        [shadowOffsetY]="offset"\n    >\n        <canvas-arc\n            [x]="50"\n            [y]="75"\n            [radius]="30"\n            [startAngle]="mouth | rad"\n            [endAngle]="-mouth | rad"\n        ></canvas-arc>\n        <canvas-line-to [x]="50" [y]="75"></canvas-line-to>\n    </canvas-path>\n    <canvas-text\n        [fillStyle]="color"\n        [maxWidth]="200"\n        [text]="text"\n        [font]="font"\n        [x]="90"\n        [y]="90"\n    ></canvas-text>\n</canvas>\n',styles:[":host{display:block;max-width:800px;margin:0 auto}.row{display:flex;min-width:100%;grid-gap:12px;gap:12px}.child{flex:1;min-width:100px}.controls{display:flex;flex-direction:column;grid-gap:12px;gap:12px}input{margin:0}fieldset{display:flex;flex-wrap:wrap;border:none;background:whitesmoke;padding:12px;margin:12px 0;grid-gap:12px;gap:12px;border-radius:1.25rem}canvas{display:block;width:300px;height:150px;margin:0 auto 40px;border-radius:6px;box-shadow:0 12px 36px #0003}\n"],components:[{type:taiga_ui_core_components_label.A,selector:"label[tuiLabel]",inputs:["tuiLabel","context"]},{type:taiga_ui_kit_components_slider.iN,selector:"input[type=range][tuiSlider]",inputs:["size","segments"]},{type:taiga_ui_kit_components_select.uJ,selector:"tui-select",inputs:["stringify","identityMatcher","valueContent"]},{type:taiga_ui_kit_components_data_list_wrapper.eC,selector:"tui-data-list-wrapper:not([labels])",inputs:["items"]},{type:taiga_ui_addon_editor_components_input_color.j,selector:"tui-input-color",inputs:["colors"]},{type:taiga_ui_kit_components_input_files.Nf,selector:"tui-input-files",inputs:["link","label","accept","multiple","size","maxFileSize"],outputs:["reject"]},{type:taiga_ui_core_components_expand.SV,selector:"tui-expand",inputs:["async","expanded"]},{type:taiga_ui_kit_components_input.K3,selector:"tui-input"}],directives:[{type:fesm2015_forms.eT,selector:"input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]"},{type:fesm2015_forms.Fj,selector:"input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]"},{type:fesm2015_forms.JJ,selector:"[formControlName],[ngModel],[formControl]"},{type:fesm2015_forms.On,selector:"[ngModel]:not([formControlName]):not([formControl])",inputs:["name","disabled","ngModel","ngModelOptions"],outputs:["ngModelChange"],exportAs:["ngModel"]},{type:taiga_ui_kit_components_select.OI,selector:"tui-select"},{type:taiga_ui_core_directives_textfield_controller.sz,selector:"[tuiTextfieldSize]",inputs:["tuiTextfieldSize"]},{type:taiga_ui_core_components_data_list.gX,selector:"ng-template[tuiDataList]"},{type:taiga_ui_kit_components_input_files.Kr,selector:"input[tuiInputFiles]"},{type:canvas_2d.C,selector:"canvas[waCanvas2d]"},{type:draw_image.L,selector:"canvas-draw-image",inputs:["image","dX","dY","dWidth","dHeight","sX","sY","sWidth","sHeight"]},{type:path.X,selector:"canvas-path:not([path])",inputs:["closed","fillRule"]},{type:fill_stroke_styles.l,selector:"canvas-path[fillStyle],canvas-path[strokeStyle],canvas-text[fillStyle],canvas-text[strokeStyle]",inputs:["fillStyle","strokeStyle"]},{type:rect.$,selector:"canvas-rect",inputs:["x","y","width","height"]},{type:compositing.f,selector:"canvas-draw-image[globalAlpha],canvas-draw-image[globalCompositeOperation],canvas-path[globalAlpha],canvas-path[globalCompositeOperation],canvas-text[globalAlpha],canvas-text[globalCompositeOperation]",inputs:["globalAlpha","globalCompositeOperation"]},{type:taiga_ui_kit_components_input.wU,selector:"tui-input"},{type:transform.g,selector:"canvas[transform],canvas-draw-image[transform],canvas-path[transform],canvas-text[transform]",inputs:["transform"]},{type:shadow_styles.T,selector:"canvas-draw-image[shadowBlur],canvas-draw-image[shadowColor],canvas-draw-image[shadowOffsetX],canvas-draw-image[shadowOffsetY],canvas-path[shadowBlur],canvas-path[shadowColor],canvas-path[shadowOffsetX],canvas-path[shadowOffsetY],canvas-text[shadowBlur],canvas-text[shadowColor],canvas-text[shadowOffsetX],canvas-text[shadowOffsetY]",inputs:["shadowBlur","shadowColor","shadowOffsetX","shadowOffsetY"]},{type:arc.l,selector:"canvas-arc",inputs:["x","y","radius","startAngle","endAngle","anticlockwise"]},{type:line_to.B,selector:"canvas-line-to",inputs:["x","y"]},{type:methods_text.f,selector:"canvas-text",inputs:["text","x","y","maxWidth"]},{type:text_drawing_styles.S,selector:"canvas-text[direction],canvas-text[font],canvas-text[textAlign],canvas-text[textBaseline]",inputs:["direction","font","textAlign","textBaseline"]}],pipes:{transform:transform_pipe.a,rad:rad_pipe.t},changeDetection:core.ChangeDetectionStrategy.OnPush}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:CanvasPageComponent,decorators:[{type:core.Component,args:[{selector:"audio-page",templateUrl:"./canvas-page.component.html",styleUrls:["./canvas-page.component.css"],changeDetection:core.ChangeDetectionStrategy.OnPush}]}],ctorParameters:function(){return[]}});var router=__webpack_require__(3984),common=__webpack_require__(12057),src=__webpack_require__(8871);class CanvasPageModule{}__name(CanvasPageModule,"CanvasPageModule"),CanvasPageModule.\u0275fac=core.\u0275\u0275ngDeclareFactory({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:CanvasPageModule,deps:[],target:core.\u0275\u0275FactoryTarget.NgModule}),CanvasPageModule.\u0275mod=core.\u0275\u0275ngDeclareNgModule({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:CanvasPageModule,declarations:[CanvasPageComponent],imports:[common.ez,fesm2015_forms.u5,src.tZ,taiga_ui_kit_components_input_files.G0,taiga_ui_core_components_label.U,taiga_ui_kit_components_slider.c2,taiga_ui_core_components_expand.ij,taiga_ui_kit_components_select.Jy,taiga_ui_kit_components_data_list_wrapper.zX,taiga_ui_core_directives_textfield_controller.cn,taiga_ui_addon_editor_components_input_color.S,taiga_ui_kit_components_input.Qf,router.Bz]}),CanvasPageModule.\u0275inj=core.\u0275\u0275ngDeclareInjector({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:CanvasPageModule,imports:[[common.ez,fesm2015_forms.u5,src.tZ,taiga_ui_kit_components_input_files.G0,taiga_ui_core_components_label.U,taiga_ui_kit_components_slider.c2,taiga_ui_core_components_expand.ij,taiga_ui_kit_components_select.Jy,taiga_ui_kit_components_data_list_wrapper.zX,taiga_ui_core_directives_textfield_controller.cn,taiga_ui_addon_editor_components_input_color.S,taiga_ui_kit_components_input.Qf,router.Bz.forChild([{path:"",component:CanvasPageComponent}])]]}),core.\u0275\u0275ngDeclareClassMetadata({minVersion:"12.0.0",version:"12.2.15",ngImport:core,type:CanvasPageModule,decorators:[{type:core.NgModule,args:[{imports:[common.ez,fesm2015_forms.u5,src.tZ,taiga_ui_kit_components_input_files.G0,taiga_ui_core_components_label.U,taiga_ui_kit_components_slider.c2,taiga_ui_core_components_expand.ij,taiga_ui_kit_components_select.Jy,taiga_ui_kit_components_data_list_wrapper.zX,taiga_ui_core_directives_textfield_controller.cn,taiga_ui_addon_editor_components_input_color.S,taiga_ui_kit_components_input.Qf,router.Bz.forChild([{path:"",component:CanvasPageComponent}])],declarations:[CanvasPageComponent]}]}]})}};