(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{"3DEt":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiRequiredSetterModule",(function(){return I}));var o=n("2kYt"),a=n("nIj0"),r=n("sEIs"),i=n("SVIu"),l=n("Qq0t"),c=n("dvRg"),u=n("EM62"),d=n("OZlg"),s=n("e0eB"),m=n("D57K"),p=n("l4xa");function f(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"span"),u["\u0275\u0275text"](1,"\u2665"),u["\u0275\u0275elementEnd"]())}let b=(()=>{class e{constructor(){this.items=[]}set quantity(e){this.items=new Array(e).fill(Math.floor(Math.random()*Math.floor(100)))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-required-setter-demo"]],inputs:{quantity:"quantity"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&u["\u0275\u0275template"](0,f,2,0,"span",0),2&e&&u["\u0275\u0275property"]("ngForOf",t.items)},directives:[o.s],encapsulation:2,changeDetection:0}),Object(m.a)([Object(p.tuiRequiredSetter)(e=>Number.isInteger(e)&&e>=5,"Should be integer number more than min value")],e.prototype,"quantity",null),e})();var S=n("okGw"),T=n("zV1d"),E=n("yHor"),y=n("zGJC"),C=n("u8jZ");const A=["header","RequiredSetter"];var _,g,h,O,$,q,D;function w(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,_),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,g),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"div"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,h),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"example-tui-required-setter-demo",2),u["\u0275\u0275elementStart"](10,"tui-input-count",3),u["\u0275\u0275listener"]("ngModelChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().quantity=t})),u["\u0275\u0275text"](11," quantity "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"button",4),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().setUndefined()})),u["\u0275\u0275text"](13," Set undefined "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](9),u["\u0275\u0275property"]("quantity",e.quantity),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngModel",e.quantity)}}function G(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,$),u["\u0275\u0275elementStart"](1,"p"),u["\u0275\u0275element"](2,"strong"),u["\u0275\u0275element"](3,"code"),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275element"](5,"code"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275i18nEnd"]())}function R(e,t){1&e&&u["\u0275\u0275i18n"](0,q)}function v(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,O),u["\u0275\u0275element"](2,"code"),u["\u0275\u0275element"](3,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"tui-doc-documentation"),u["\u0275\u0275template"](5,G,6,0,"ng-template",5),u["\u0275\u0275template"](6,R,1,0,"ng-template",6),u["\u0275\u0275elementEnd"]())}function M(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",7),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,D),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleDecorator)}}_="Decorator setter @Input",g=" Decorator stops " + "[\ufffd#4\ufffd|\ufffd#5\ufffd]" + "undefined" + "[\ufffd/#4\ufffd|\ufffd/#5\ufffd]" + " values if they were passed into setter input. If it gets " + "[\ufffd#4\ufffd|\ufffd#5\ufffd]" + "undefined" + "[\ufffd/#4\ufffd|\ufffd/#5\ufffd]" + ", setter will not be called and it will show an error message about the problem in console in dev mode. ",g=u["\u0275\u0275i18nPostprocess"](g),h="See console. Min value is 5",O=" You can also pass contract function of type " + "[\ufffd#2\ufffd|\ufffd#3\ufffd]" + "TuiBooleanHandler<T>" + "[\ufffd/#2\ufffd|\ufffd/#3\ufffd]" + " with the component instance as " + "[\ufffd#2\ufffd|\ufffd#3\ufffd]" + "this" + "[\ufffd/#2\ufffd|\ufffd/#3\ufffd]" + ". If check is unsuccessful, it shows an error message about the problem in console in dev mode. ",O=u["\u0275\u0275i18nPostprocess"](O),$=" Optional argument, contract function " + "\ufffd#1\ufffd" + "" + "\ufffd#2\ufffd" + "Warning:" + "\ufffd/#2\ufffd" + " Angular Compiler does not allow arrow functions in decorators with " + "[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]" + "strictMetadataEmit" + "[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]" + " (by default). Add " + "[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]" + "// @dynamic" + "[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]" + " comment right above your " + "[\ufffd#3\ufffd|\ufffd#4\ufffd|\ufffd#5\ufffd]" + "@Component" + "[\ufffd/#3\ufffd|\ufffd/#4\ufffd|\ufffd/#5\ufffd]" + " decorator to use them " + "\ufffd/#1\ufffd" + "",$=u["\u0275\u0275i18nPostprocess"]($),q=" Arguments for console.error if check is unsuccessful ",D=" Add " + "\ufffd#4\ufffd" + "@tuiRequiredSetter" + "\ufffd/#4\ufffd" + " to setter input of your component ";let x=(()=>{class e{constructor(){this.exampleDecorator="@Input()\n@tuiRequiredSetter(\n    quantity => Number.isInteger(quantity) && quantity >= 10,\n    'Should be integer number more than min value',\n)\nset quantity(quantity: number) {\n    this.items = new Array(quantity).fill(Math.floor(Math.random() * Math.floor(100)));\n}\n\nitems: Array<number>;\n"}setUndefined(){this.quantity=void 0}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-required-setter"]],decls:5,vars:0,consts:[["package","CDK",6,"header"],["pageTab",""],[3,"quantity"],[1,"tui-space_top-4",3,"ngModel","ngModelChange"],["tuiButton","","type","button",1,"tui-space_top-4","tui-space_bottom-8",3,"click"],["documentationPropertyName","assertion","documentationPropertyType","TuiBooleanHandler<T>"],["documentationPropertyName","args","documentationPropertyType","any"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,A),u["\u0275\u0275template"](2,w,14,2,"ng-template",1),u["\u0275\u0275template"](3,v,7,0,"ng-template",1),u["\u0275\u0275template"](4,M,6,1,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[d.a,s.a,b,S.a,a.NgControlStatus,a.NgModel,T.a,E.a,y.a,C.a],encapsulation:2,changeDetection:0}),e})(),I=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,a.FormsModule,c.TuiInputCountModule,l.TuiButtonModule,...i.e,r.f.forChild(Object(i.n)(x))]]}),e})()}}]);