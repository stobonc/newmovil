(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["truckservruta-truckservruta-module"],{

/***/ "./src/app/global/pages/truckservruta/truckservruta.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/truckservruta/truckservruta.module.ts ***!
  \********************************************************************/
/*! exports provided: TruckservrutaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckservrutaPageModule", function() { return TruckservrutaPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _truckservruta_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./truckservruta.page */ "./src/app/global/pages/truckservruta/truckservruta.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _truckservruta_page__WEBPACK_IMPORTED_MODULE_5__["TruckservrutaPage"]
    }
];
var TruckservrutaPageModule = /** @class */ (function () {
    function TruckservrutaPageModule() {
    }
    TruckservrutaPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_truckservruta_page__WEBPACK_IMPORTED_MODULE_5__["TruckservrutaPage"]]
        })
    ], TruckservrutaPageModule);
    return TruckservrutaPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/truckservruta/truckservruta.page.html":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/truckservruta/truckservruta.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button  defaultHref=\"/inicio\" (click)=\"ngOnDestroy\"></ion-back-button><font size=\"1px\">Atras</font>\n    </ion-buttons>\n    <ion-title><font size=\"4px\">Solicitudes en ruta</font></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <ion-list> \n     <div *ngFor=\"let data of dataServicios;  let i =index\">        \n      <div *ngIf=\"data.estatus==1\">\n        <ion-card>\n          <ion-badge>{{i+1}}</ion-badge>\n          <ion-item>\n              <ion-label class=\"ion-text-wrap\">    \n                <p><strong><font size=\"2px\" color=\"Black\">Origen:</font></strong><font size=\"2px\">{{data.origenServ}}</font></p>\n                <hr align=\"center\" color=\"primary\" size=\"3\" width=\"80%\" />\n                <p><strong><font size=\"2px\" color=\"Black\">Destino:</font></strong><font size=\"2px\">{{data.destinoServ}}</font></p>     \n              </ion-label> \n              <ion-chip>\n                <ion-avatar>\n                  <img src=\"https://img.atrisoluciones.com.co/img/CellPoint.jpg\">\n                </ion-avatar>\n                <ion-label color=\"primary\" (click)=\"entregarRuta(data)\"><font size=\"px\">Entregar</font></ion-label>\n              </ion-chip>\n        </ion-item>\n      </ion-card> \n      </div>\n     </div>\n    </ion-list>\n  </ion-content>"

/***/ }),

/***/ "./src/app/global/pages/truckservruta/truckservruta.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/truckservruta/truckservruta.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9wYWdlcy90cnVja3NlcnZydXRhL3RydWNrc2VydnJ1dGEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global/pages/truckservruta/truckservruta.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/global/pages/truckservruta/truckservruta.page.ts ***!
  \******************************************************************/
/*! exports provided: TruckservrutaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckservrutaPage", function() { return TruckservrutaPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var TruckservrutaPage = /** @class */ (function () {
    function TruckservrutaPage(HttpClient, router) {
        this.HttpClient = HttpClient;
        this.router = router;
        this.dataServicios = [];
    }
    TruckservrutaPage.prototype.ngOnInit = function () {
        this.onSubmit();
    };
    TruckservrutaPage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, params, data;
            var _this = this;
            return __generator(this, function (_a) {
                url = "https://atrisoluciones.com.co/api/truckservices/show";
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('estatus', '1');
                data = this.HttpClient.get(url, { params: params });
                data.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.dataServicios = (data);
                        console.log(this.dataServicios);
                        return [2 /*return*/];
                    });
                }); }, function (err) {
                    if (err.error instanceof Error) {
                        //we never seem to get here
                        console.log('An error occurred:', err.error.message);
                    }
                    else {
                        //no network connection, HTTP404, HTTP500, HTTP200 & invalid JSON
                        console.log("Backend returned code " + err.status + ", body was: " + err.error);
                    }
                });
                //   this.dataServicios= this.data.subscribe(data =>{this.dataServicios=data;});
                this.ngOnDestroy;
                return [2 /*return*/];
            });
        });
    };
    TruckservrutaPage.prototype.entregarRuta = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var extras;
            return __generator(this, function (_a) {
                console.log(event);
                extras = {
                    queryParams: {
                        data: JSON.stringify(event),
                    }
                };
                this.router.navigate(['/truckentregas'], extras);
                this.ngOnDestroy();
                return [2 /*return*/];
            });
        });
    };
    TruckservrutaPage.prototype.ngOnDestroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    TruckservrutaPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truckservruta',
            template: __webpack_require__(/*! ./truckservruta.page.html */ "./src/app/global/pages/truckservruta/truckservruta.page.html"),
            styles: [__webpack_require__(/*! ./truckservruta.page.scss */ "./src/app/global/pages/truckservruta/truckservruta.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TruckservrutaPage);
    return TruckservrutaPage;
}());



/***/ })

}]);
//# sourceMappingURL=truckservruta-truckservruta-module.js.map