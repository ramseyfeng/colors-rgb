!function(){function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}function o(n,o){for(var e=0;e<o.length;e++){var t=o[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{tmrb:function(e,t,r){"use strict";r.r(t),r.d(t,"Tab1PageModule",(function(){return p}));var l,i,a,c=r("TEn/"),b=r("ofXK"),u=r("3Pt+"),d=r("qtYk"),g=r("tyNb"),s=r("fXoL"),f=[{path:"",component:(l=function(){function e(){n(this,e),this.redVal=0,this.greenVal=0,this.blueVal=0}var t,r,l;return t=e,(r=[{key:"calculate",value:function(){return{"background-color":"rgb(".concat(this.redVal,", ").concat(this.greenVal,", ").concat(this.blueVal,")")}}},{key:"redColor",value:function(){return{"background-color":"rgb(".concat(this.redVal,", 0, 0)")}}},{key:"greenColor",value:function(){return{"background-color":"rgb(0, ".concat(this.greenVal,", 0)")}}},{key:"blueColor",value:function(){return{"background-color":"rgb(0, 0, ".concat(this.blueVal,")")}}}])&&o(t.prototype,r),l&&o(t,l),e}(),l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=s.Bb({type:l,selectors:[["app-tab1"]],decls:34,vars:12,consts:[[3,"translucent"],[1,"d-flex","flex--1",3,"fullscreen"],[1,"wrapper","flex--1","h--100"],[1,"d-flex","flex--1","ion-align-items-center","ion-justify-content-center"],[1,"color__plate",3,"ngStyle"],[1,"flex--1"],[1,"d-flex","ion-justify-content-around","ion-margin-vertical"],[1,"round"],["lines","none"],["min","0","max","200","color","red",3,"ngModel","ngModelChange"],["slot","start"],["slot","end"],["min","0","max","200","color","green",3,"ngModel","ngModelChange"],["min","0","max","200","color","blue",3,"ngModel","ngModelChange"]],template:function(n,o){1&n&&(s.Kb(0,"ion-header",0),s.Kb(1,"ion-toolbar"),s.Kb(2,"ion-title"),s.ac(3," Tab 1 "),s.Jb(),s.Jb(),s.Jb(),s.Kb(4,"ion-content",1),s.Kb(5,"div",2),s.Kb(6,"div",3),s.Ib(7,"div",4),s.Jb(),s.Kb(8,"div",5),s.Kb(9,"div",6),s.Ib(10,"div",7),s.Kb(11,"div",7),s.ac(12,"b"),s.Jb(),s.Kb(13,"div",7),s.ac(14,"c"),s.Jb(),s.Jb(),s.Kb(15,"ion-list"),s.Kb(16,"ion-item",8),s.Kb(17,"ion-range",9),s.Rb("ngModelChange",(function(n){return o.redVal=n})),s.Kb(18,"ion-label",10),s.ac(19,"0"),s.Jb(),s.Kb(20,"ion-label",11),s.ac(21,"255"),s.Jb(),s.Jb(),s.Jb(),s.Kb(22,"ion-item",8),s.Kb(23,"ion-range",12),s.Rb("ngModelChange",(function(n){return o.greenVal=n})),s.Kb(24,"ion-label",10),s.ac(25,"0"),s.Jb(),s.Kb(26,"ion-label",11),s.ac(27,"255"),s.Jb(),s.Jb(),s.Jb(),s.Kb(28,"ion-item",8),s.Kb(29,"ion-range",13),s.Rb("ngModelChange",(function(n){return o.blueVal=n})),s.Kb(30,"ion-label",10),s.ac(31,"0"),s.Jb(),s.Kb(32,"ion-label",11),s.ac(33,"255"),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb(),s.Jb()),2&n&&(s.Vb("translucent",!0),s.xb(4),s.Vb("fullscreen",!0),s.xb(3),s.Vb("ngStyle",o.calculate()),s.xb(3),s.Zb(o.redColor()),s.xb(1),s.Zb(o.greenColor()),s.xb(2),s.Zb(o.blueColor()),s.xb(4),s.Vb("ngModel",o.redVal),s.xb(6),s.Vb("ngModel",o.greenVal),s.xb(6),s.Vb("ngModel",o.blueVal))},directives:[c.c,c.n,c.m,c.b,b.h,c.g,c.e,c.h,c.r,u.d,u.e,c.f],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column}.cols[_ngcontent-%COMP%]{display:flex;flex-direction:row}.h--100[_ngcontent-%COMP%]{height:100%}.d-flex[_ngcontent-%COMP%]{display:flex}.color__plate[_ngcontent-%COMP%]{width:300px;height:300px;border-radius:50%}.round[_ngcontent-%COMP%]{height:100px;width:100px;border-radius:50%}.flex--1[_ngcontent-%COMP%]{flex:1 1 auto}.ion-color-red[_ngcontent-%COMP%]{--ion-color-base:red;--ion-color-base-rgb:255,00,0;--ion-color-contrast:#000;--ion-color-contrast-rgb:0,0,0;--ion-color-shade:#e00000;--ion-color-tint:#ff1a1a}.ion-color-green[_ngcontent-%COMP%]{--ion-color-base:#0f0;--ion-color-base-rgb:0,255,0;--ion-color-contrast:#000;--ion-color-contrast-rgb:0,0,0;--ion-color-shade:#00e000;--ion-color-tint:#1aff1a}.ion-color-blue[_ngcontent-%COMP%]{--ion-color-base:#00f;--ion-color-base-rgb:0,0,255;--ion-color-contrast:#000;--ion-color-contrast-rgb:0,0,0;--ion-color-shade:#0000e0;--ion-color-tint:#1a1aff}"]}),l)}],h=((a=function o(){n(this,o)}).\u0275mod=s.Fb({type:a}),a.\u0275inj=s.Eb({factory:function(n){return new(n||a)},imports:[[g.i.forChild(f)],g.i]}),a),p=((i=function o(){n(this,o)}).\u0275mod=s.Fb({type:i}),i.\u0275inj=s.Eb({factory:function(n){return new(n||i)},imports:[[c.o,b.b,u.a,d.a,h]]}),i)}}])}();