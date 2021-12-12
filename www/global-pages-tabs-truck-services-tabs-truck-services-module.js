(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-pages-tabs-truck-services-tabs-truck-services-module"],{

/***/ "./src/app/global/pages/tabs-truck-services/tabs-truck-services.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/global/pages/tabs-truck-services/tabs-truck-services.module.ts ***!
  \********************************************************************************/
/*! exports provided: TabsTruckServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsTruckServicesPageModule", function() { return TabsTruckServicesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_truck_services_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-truck-services.page */ "./src/app/global/pages/tabs-truck-services/tabs-truck-services.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _tabs_truck_services_page__WEBPACK_IMPORTED_MODULE_5__["TabsTruckServicesPage"],
        children: [
            {
                path: 'truckservices',
                loadChildren: '../truckservices/truckservices.module#TruckservicesPageModule',
            },
            {
                path: 'truckservruta',
                loadChildren: '../truckservruta/truckservruta.module#TruckservrutaPageModule',
            }
        ]
    }
];
var TabsTruckServicesPageModule = /** @class */ (function () {
    function TabsTruckServicesPageModule() {
    }
    TabsTruckServicesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_tabs_truck_services_page__WEBPACK_IMPORTED_MODULE_5__["TabsTruckServicesPage"]]
        })
    ], TabsTruckServicesPageModule);
    return TabsTruckServicesPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/tabs-truck-services/tabs-truck-services.page.html":
/*!********************************************************************************!*\
  !*** ./src/app/global/pages/tabs-truck-services/tabs-truck-services.page.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"primary\">\n    <ion-tab-button tab=\"truckservices\">\n      <ion-icon name=\"paper\"></ion-icon>\n      <ion-label> <font color=\"white\">Servicios Pendientes:</font></ion-label>\n      <ion-badge><font size=\"2px\">{{pendientes}}</font></ion-badge>\n    </ion-tab-button>\n\n    \n      <ion-tab-button tab=\"truckservruta\">\n        <ion-icon name=\"pin\"></ion-icon>\n        <ion-label> <font color=\"white\">Servicios en Ruta:</font></ion-label>\n        <ion-badge><font size=\"2px\">{{enRuta}}</font></ion-badge>\n      </ion-tab-button>\n\n    <ion-tab-button tab=\"speakers\">\n      <ion-icon name=\"analytics\"></ion-icon>\n      <ion-label><font color=\"white\">Historial:</font></ion-label>\n      <ion-badge>20</ion-badge>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/global/pages/tabs-truck-services/tabs-truck-services.page.scss":
/*!********************************************************************************!*\
  !*** ./src/app/global/pages/tabs-truck-services/tabs-truck-services.page.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9wYWdlcy90YWJzLXRydWNrLXNlcnZpY2VzL3RhYnMtdHJ1Y2stc2VydmljZXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global/pages/tabs-truck-services/tabs-truck-services.page.ts":
/*!******************************************************************************!*\
  !*** ./src/app/global/pages/tabs-truck-services/tabs-truck-services.page.ts ***!
  \******************************************************************************/
/*! exports provided: TabsTruckServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsTruckServicesPage", function() { return TabsTruckServicesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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




var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"].Geolocation;
var TabsTruckServicesPage = /** @class */ (function () {
    function TabsTruckServicesPage(HttpClient, loadingController) {
        this.HttpClient = HttpClient;
        this.loadingController = loadingController;
        this.dataServicios = [];
    }
    TabsTruckServicesPage.prototype.ngOnInit = function () {
        //  this.createLoader();
        this.onSubmit();
    };
    TabsTruckServicesPage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                Geolocation.getCurrentPosition().then(function (position) {
                    var current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    //this.map.panTo(current_location);
                    _this.obtenerServicios(position.coords.latitude, position.coords.longitude);
                }).catch(function (error) {
                    //  console.log('Error getting current location', error);
                }).finally(function () { return _this.dismissLoader(); });
                return [2 /*return*/];
            });
        });
    };
    TabsTruckServicesPage.prototype.dismissLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.loadingElement) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadingElement.dismiss()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TabsTruckServicesPage.prototype.obtenerServicios = function (latitud, longitud) {
        return __awaiter(this, void 0, void 0, function () {
            var url, params, data;
            var _this = this;
            return __generator(this, function (_a) {
                url = "https://atrisoluciones.com.co/api/truckservices";
                params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                    .set('enRuta', '1')
                    .set('Pendientes', '0')
                    .set('latitud', latitud)
                    .set('longitud', longitud);
                data = this.HttpClient.get(url, { params: params });
                data.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(dataPost);
                        this.dataServicios = (data);
                        console.log(this.dataServicios);
                        this.enRuta = this.dataServicios['enRuta'];
                        this.pendientes = this.dataServicios['pendientes'];
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
                return [2 /*return*/];
            });
        });
    };
    TabsTruckServicesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs-truck-services',
            template: __webpack_require__(/*! ./tabs-truck-services.page.html */ "./src/app/global/pages/tabs-truck-services/tabs-truck-services.page.html"),
            styles: [__webpack_require__(/*! ./tabs-truck-services.page.scss */ "./src/app/global/pages/tabs-truck-services/tabs-truck-services.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], TabsTruckServicesPage);
    return TabsTruckServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=global-pages-tabs-truck-services-tabs-truck-services-module.js.map