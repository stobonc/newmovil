(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-pages-truckentregas-truckentregas-module"],{

/***/ "./src/app/global/pages/truckentregas/truckentregas.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/truckentregas/truckentregas.module.ts ***!
  \********************************************************************/
/*! exports provided: TruckentregasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckentregasPageModule", function() { return TruckentregasPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _truckentregas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./truckentregas.page */ "./src/app/global/pages/truckentregas/truckentregas.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _truckentregas_page__WEBPACK_IMPORTED_MODULE_6__["TruckentregasPage"]
    }
];
var TruckentregasPageModule = /** @class */ (function () {
    function TruckentregasPageModule() {
    }
    TruckentregasPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_truckentregas_page__WEBPACK_IMPORTED_MODULE_6__["TruckentregasPage"]]
        })
    ], TruckentregasPageModule);
    return TruckentregasPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/truckentregas/truckentregas.page.html":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/truckentregas/truckentregas.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button  defaultHref=\"/tabs-truck-services/truckservices\" (click)=\"ngOnDestroy\"></ion-back-button><font size=\"1px\">Atras</font>\n    </ion-buttons>\n    <ion-title><font size=\"4px\">Entregar servicio</font></ion-title>\n  </ion-toolbar>\n</ion-header>\n \n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"geolocateMe()\" color=\"secondary\">\n      <ion-icon name=\"locate\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <google-map [mapOptions]=\"mapOptions\"></google-map>\n  \n  <ion-content>\n  <ion-item>\n    <ion-label class=\"ion-text-wrap\">    \n      <p><strong><font size=\"2px\" color=\"Black\">Descripción:</font></strong><font size=\"2px\">{{data.descripcionServ}}</font></p> \n      <p><strong><font size=\"2px\" color=\"Black\">Cantidad:</font></strong><font size=\"2px\">{{data.cantidadUnd}} - Unidades.</font></p>     \n    </ion-label> \n  </ion-item>\n\n<ion-item>\n  <p class=\"clasificacion\">\n    <input id=\"radio1\" type=\"radio\" name=\"estrellas\" value=\"5\" (change)=\"onChangeHandler($event)\">\n    <label for=\"radio1\">★</label>\n    <input id=\"radio2\" type=\"radio\" name=\"estrellas\" value=\"4\"  (change)=\"onChangeHandler($event)\">\n    <label for=\"radio2\">★</label>\n    <input id=\"radio3\" type=\"radio\" name=\"estrellas\" value=\"3\"  (change)=\"onChangeHandler($event)\">\n    <label for=\"radio3\">★</label>\n    <input id=\"radio4\" type=\"radio\" name=\"estrellas\" value=\"2\"  (change)=\"onChangeHandler($event)\">\n    <label for=\"radio4\">★</label>\n    <input id=\"radio5\" type=\"radio\" name=\"estrellas\" value=\"1\" (change)=\"onChangeHandler($event)\">\n    <label for=\"radio5\">★</label>\n    <font size=\"3px\" color=\"#d9d9d9\">Calificación Servicio:</font>\n  </p>\n</ion-item>\n<ion-button shape=\"round\" color=\"primary\" size=\"long\" type=\"submit\" (click)='finalizarEntrega()' expand=\"block\" >Finalizar Entrega</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/global/pages/truckentregas/truckentregas.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/truckentregas/truckentregas.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "google-map {\n  display: block;\n  width: 100%;\n  height: 42%; }\n\n.h6 {\n  color: black;\n  font-size: 10px; }\n\n.h5 {\n  color: #202020;\n  font-size: 10px; }\n\np.clasificacion {\n  position: relative;\n  overflow: hidden;\n  display: inline-block; }\n\np.clasificacion input {\n  position: absolute;\n  top: -100px; }\n\np.clasificacion label {\n  float: right;\n  color: rgba(159, 159, 247, 0.788);\n  font-size: 35px; }\n\np.clasificacion label:hover,\np.clasificacion label:hover ~ label,\np.clasificacion input:checked ~ label {\n  color: blue; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL3BhZ2VzL3RydWNrZW50cmVnYXMvRDpcXFByb3llY3Rvcy1Jb25pY1xcQXBwRW50cmVnYXMvc3JjXFxhcHBcXGdsb2JhbFxccGFnZXNcXHRydWNrZW50cmVnYXNcXHRydWNrZW50cmVnYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBSWY7RUFDRSxZQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGNBQWE7RUFDYixlQUFlLEVBQUE7O0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLGlDQUFnQztFQUNoQyxlQUFlLEVBQUE7O0FBR2pCOzs7RUFHRSxXQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwvcGFnZXMvdHJ1Y2tlbnRyZWdhcy90cnVja2VudHJlZ2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImdvb2dsZS1tYXAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDIlO1xyXG4gIH1cclxuXHJcbiAgXHJcbi5oNiB7XHJcbiAgY29sb3I6YmxhY2s7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5oNSB7XHJcbiAgY29sb3I6IzIwMjAyMDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxucC5jbGFzaWZpY2FjaW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnAuY2xhc2lmaWNhY2lvbiBpbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLTEwMHB4O1xyXG59XHJcblxyXG5wLmNsYXNpZmljYWNpb24gbGFiZWwge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjpyZ2JhKDE1OSwgMTU5LCAyNDcsIDAuNzg4KTtcclxuICBmb250LXNpemU6IDM1cHg7IFxyXG59XHJcblxyXG5wLmNsYXNpZmljYWNpb24gbGFiZWw6aG92ZXIsXHJcbnAuY2xhc2lmaWNhY2lvbiBsYWJlbDpob3ZlciB+IGxhYmVsLFxyXG5wLmNsYXNpZmljYWNpb24gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICBjb2xvcjpibHVlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/global/pages/truckentregas/truckentregas.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/global/pages/truckentregas/truckentregas.page.ts ***!
  \******************************************************************/
/*! exports provided: TruckentregasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckentregasPage", function() { return TruckentregasPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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


//import { FormBuilder, FormGroup } from '@angular/forms';

var TruckentregasPage = /** @class */ (function () {
    function TruckentregasPage(loadingController, activatedRoute, httpClient, alertController, router) {
        var _this = this;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.router = router;
        this.myLatLong = { lat: 6.260128, lng: -75.574430 };
        this.mapOptions = {
            zoom: 16,
            center: this.myLatLong,
            zoomControl: true,
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_BOTTOM
            },
            gestureHandling: 'cooperative',
            disableDefaultUI: true
        };
        this.ranking = 0;
        this.activatedRoute.queryParams.subscribe(function (params) {
            //  console.log(params);
            if (params && params.data) {
                _this.data = JSON.parse(params.data);
                console.log(params.data);
            }
        });
    }
    TruckentregasPage.prototype.ngOnInit = function () {
        var _this = this;
        this._GoogleMap.$mapReady.subscribe(function (map) {
            _this.map = map;
            //this.geolocateMe();
        });
        this.createLoader();
    };
    TruckentregasPage.prototype.createLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Trying to get your current location...'
                            })];
                    case 1:
                        _a.loadingElement = _b.sent();
                        this.geolocateMe();
                        return [2 /*return*/];
                }
            });
        });
    };
    TruckentregasPage.prototype.presentLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingElement.present()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TruckentregasPage.prototype.dismissLoader = function () {
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
    TruckentregasPage.prototype.geolocateMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var infoWindow;
            var _this = this;
            return __generator(this, function (_a) {
                this.presentLoader();
                Geolocation.getCurrentPosition().then(function (position) {
                    var current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    _this.map.panTo(current_location);
                    _this.latitudEntrega = position.coords.latitude;
                    _this.longitudEntrega = position.coords.longitude;
                    // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
                    var contenidoStrig = "Usted esta AQUI!";
                    var infoWindow = new google.maps.InfoWindow({
                        content: contenidoStrig
                    });
                    var marker = new google.maps.Marker({
                        position: current_location,
                        title: 'Usted esta AQUI!',
                        // icon:image,
                        animation: google.maps.Animation.DROP
                    });
                    var map;
                    marker.addListener('click', function () {
                        infoWindow.open(map, marker);
                    });
                    marker.setMap(_this.map);
                    _this.map.panTo(current_location);
                }).catch(function (error) {
                    console.log('Error getting current location', error);
                }).finally(function () { return _this.dismissLoader(); });
                return [2 /*return*/];
            });
        });
    };
    TruckentregasPage.prototype.onChangeHandler = function ($event) {
        this.ranking = $event.target.value;
        console.log($event.target.value);
    };
    TruckentregasPage.prototype.finalizarEntrega = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert_1, url, headers, dataPost, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.latitudEntrega == null || this.longitudEntrega == null) {
                            this.geolocateMe();
                        }
                        if (!(this.ranking == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Entregar solicitud',
                                message: "Por favor que su cliente califique la entrega",
                                buttons: ['Ok']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        url = "https://atrisoluciones.com.co/api/truckservices/update";
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                        headers.append("Accept", 'application/json');
                        headers.append('Content-Type', 'application/json');
                        headers.append('Access-Control-Allow-Origin', '*');
                        headers.append('Access-Control-Allow-Methods', 'POST,PUT,GET,DELETE,OPTIONS');
                        headers.append('Access-Control-Allow-Headers', 'x-id');
                        dataPost = {
                            'id': Number(this.data.id),
                            'estatus': '2',
                            'ranking': this.ranking,
                            'longitudEntrega': this.longitudEntrega,
                            'latitudEntrega': this.latitudEntrega,
                            'userEntrega': localStorage.getItem("UserCod"),
                            'finEntrega': 'S'
                        };
                        data = this.httpClient.put(url, dataPost, { headers: headers, responseType: 'text' });
                        data.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var info, alert_2, alert_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        info = JSON.parse(data);
                                        console.log(info);
                                        if (!(info['code'] == '200')) return [3 /*break*/, 3];
                                        return [4 /*yield*/, this.alertController.create({
                                                header: 'Solicitud',
                                                message: "Se ha finalizado la entrega",
                                                buttons: ['Ok']
                                            })];
                                    case 1:
                                        alert_2 = _a.sent();
                                        return [4 /*yield*/, alert_2.present()];
                                    case 2:
                                        _a.sent();
                                        this.router.navigateByUrl('/inicio');
                                        return [3 /*break*/, 6];
                                    case 3: return [4 /*yield*/, this.alertController.create({
                                            header: 'Solicitud',
                                            message: 'ha ocurrido un error en la entrega',
                                            buttons: ['Ok']
                                        })];
                                    case 4:
                                        alert_3 = _a.sent();
                                        return [4 /*yield*/, alert_3.present()];
                                    case 5:
                                        _a.sent();
                                        this.router.navigateByUrl('/inicio');
                                        _a.label = 6;
                                    case 6: return [2 /*return*/];
                                }
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
                        this.ngOnDestroy();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TruckentregasPage.prototype.ngOnDestroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('Destroy entregas');
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__["GoogleMapComponent"]),
        __metadata("design:type", _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__["GoogleMapComponent"])
    ], TruckentregasPage.prototype, "_GoogleMap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('directionsPanel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TruckentregasPage.prototype, "directionsPanel", void 0);
    TruckentregasPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truckentregas',
            template: __webpack_require__(/*! ./truckentregas.page.html */ "./src/app/global/pages/truckentregas/truckentregas.page.html"),
            styles: [__webpack_require__(/*! ./truckentregas.page.scss */ "./src/app/global/pages/truckentregas/truckentregas.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], TruckentregasPage);
    return TruckentregasPage;
}());



/***/ })

}]);
//# sourceMappingURL=global-pages-truckentregas-truckentregas-module.js.map