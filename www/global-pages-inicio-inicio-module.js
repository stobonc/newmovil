(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-pages-inicio-inicio-module"],{

/***/ "./src/app/global/pages/inicio/inicio.module.ts":
/*!******************************************************!*\
  !*** ./src/app/global/pages/inicio/inicio.module.ts ***!
  \******************************************************/
/*! exports provided: InicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPageModule", function() { return InicioPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inicio.page */ "./src/app/global/pages/inicio/inicio.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_5__["InicioPage"]
    }
];
var InicioPageModule = /** @class */ (function () {
    function InicioPageModule() {
    }
    InicioPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_5__["InicioPage"]]
        })
    ], InicioPageModule);
    return InicioPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/inicio/inicio.page.html":
/*!******************************************************!*\
  !*** ./src/app/global/pages/inicio/inicio.page.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Inicio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"card-background-page\">\n\n  <ion-grid>\n    <ion-row >   \n      <ion-card class=\"card-background\" (click)=\"servicios()\">\n      <ion-img width= \"100%\" max-width=\"100px\" heigth=\"auto\"src=\"https://img.atrisoluciones.com.co/img/CrearServicio.png\"></ion-img>\n    </ion-card>\n    </ion-row>\n  </ion-grid>\n  <ion-grid>\n    <ion-row >\n      <ion-card class=\"card-background\" [routerLink]=\"['/tabs-truck-services/truckservices']\">\n      <ion-img width= \"100%\" max-width=\"100px\" heigth=\"auto\" src=\"https://img.atrisoluciones.com.co/img/ServiciosDisponibles.png\"></ion-img>\n    </ion-card>\n      \n    </ion-row>\n  </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/global/pages/inicio/inicio.page.scss":
/*!******************************************************!*\
  !*** ./src/app/global/pages/inicio/inicio.page.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-background-page ion-card {\n  position: relative;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.card-background-page .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2.0em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff; }\n\n.card-background-page .card-subtitle {\n  font-size: 1.0em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff; }\n\n.card-background-page .card-background {\n  background: #afe0f371; }\n\n.centrado {\n  margin-left: auto;\n  margin-right: auto; }\n\n.responsive {\n  max-width: 100%;\n  height: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL3BhZ2VzL2luaWNpby9EOlxcUHJveWVjdG9zLUlvbmljXFxBcHBFbnRyZWdhcy9zcmNcXGFwcFxcZ2xvYmFsXFxwYWdlc1xcaW5pY2lvXFxpbmljaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR00sa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFQbEI7RUFZTSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTs7QUFqQmpCO0VBcUJNLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBekJqQjtFQTRCUSxxQkFBcUIsRUFBQTs7QUFJM0I7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9wYWdlcy9pbmljaW8vaW5pY2lvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJhY2tncm91bmQtcGFnZSB7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbm1hcmdpbi1sZWZ0OiBhdXRvO1xyXG5tYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAzNiU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4wZW07XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY2FyZC1zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4wZW07XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1MiU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5jYXJkLWJhY2tncm91bmR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2FmZTBmMzcxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgfVxyXG4gIC5jZW50cmFkb3tcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICBcclxuICB9XHJcbiAgLnJlc3BvbnNpdmUge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/global/pages/inicio/inicio.page.ts":
/*!****************************************************!*\
  !*** ./src/app/global/pages/inicio/inicio.page.ts ***!
  \****************************************************/
/*! exports provided: InicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioPage", function() { return InicioPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InicioPage = /** @class */ (function () {
    function InicioPage(route) {
        this.route = route;
    }
    InicioPage.prototype.ngOnInit = function () {
    };
    InicioPage.prototype.servicios = function () {
        this.route.navigate(['/maps-services']);
    };
    InicioPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.page.html */ "./src/app/global/pages/inicio/inicio.page.html"),
            styles: [__webpack_require__(/*! ./inicio.page.scss */ "./src/app/global/pages/inicio/inicio.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], InicioPage);
    return InicioPage;
}());



/***/ })

}]);
//# sourceMappingURL=global-pages-inicio-inicio-module.js.map