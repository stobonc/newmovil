(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-pages-viewservices-viewservices-module"],{

/***/ "./src/app/global/pages/viewservices/viewservices.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/global/pages/viewservices/viewservices.module.ts ***!
  \******************************************************************/
/*! exports provided: ViewservicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewservicesPageModule", function() { return ViewservicesPageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _viewservices_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewservices.page */ "./src/app/global/pages/viewservices/viewservices.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ViewservicesPageModule = /** @class */ (function () {
    function ViewservicesPageModule() {
    }
    ViewservicesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _viewservices_page__WEBPACK_IMPORTED_MODULE_5__["ViewservicesPage"] }])
            ],
            declarations: [_viewservices_page__WEBPACK_IMPORTED_MODULE_5__["ViewservicesPage"]]
        })
    ], ViewservicesPageModule);
    return ViewservicesPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/viewservices/viewservices.page.html":
/*!******************************************************************!*\
  !*** ./src/app/global/pages/viewservices/viewservices.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button  defaultHref=\"/truckservices\" (click)=\"ngOnDestroy\"></ion-back-button><font size=\"1px\">Atras</font>\n    </ion-buttons>\n    <ion-title><font size=\"4px\">Detalle servicio</font></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <google-map [mapOptions]=\"mapOptions\"></google-map>\n  <ion-fab vertical=\"center\" horizontal=\"start\" slot=\"fixed\">\n    <ion-fab-button (click)=\"geolocateMe()\" color=\"secondary\">\n      <ion-icon name=\"locate\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-content>\n    <ion-card>\n    <ion-item>\n      \n      <ion-label class=\"ion-text-wrap\">    \n        <p><strong><font size=\"2px\" color=\"Black\">Origen:</font></strong><font size=\"2px\">{{data.origenServ}}</font></p>\n       \n        <p><strong><font size=\"2px\" color=\"Black\">Destino:</font></strong><font size=\"2px\">{{data.destinoServ}}</font></p>  \n        <ion-label><font size=\"2px\" color=\"Black\">Serv A: {{data.distancia}} km</font></ion-label>\n      </ion-label> \n   \n  </ion-item>\n</ion-card>\n        <ion-item>\n        <ion-row>\n          <ion-col  size=\"auto\">\n            <font color=\"#dfdfdf\" size=\"1px\"></font><font size=\"1px\">{{data.medidas}}</font>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n  <ion-item><font size=\"2px\" color=\"secondary\">Observ:</font><font size=\"2px\" color=\"#9f9f9f\">{{data.descripcionServ}}</font></ion-item>\n  \n \n  <ion-col class=\"colorRow\"><ion-button  color=\"secondary\" size=\"small\"  (click)=\"aceptarSolicitud()\">Aceptar</ion-button></ion-col>\n         <!-- <ion-col class=\"colorRow\"><ion-button color=\"secondary\" size=\"small\" [routerLink]=\"['/inicio']\">Regresar</ion-button></ion-col>-->\n\n  </ion-content>\n"

/***/ }),

/***/ "./src/app/global/pages/viewservices/viewservices.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/global/pages/viewservices/viewservices.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "google-map {\n  display: block;\n  width: 100%;\n  height: 45%; }\n\n.h6 {\n  color: black;\n  font-size: 11px; }\n\n.h5 {\n  color: #202020;\n  font-size: 11px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL3BhZ2VzL3ZpZXdzZXJ2aWNlcy9EOlxcUHJveWVjdG9zLUlvbmljXFxBcHBFbnRyZWdhcy9zcmNcXGFwcFxcZ2xvYmFsXFxwYWdlc1xcdmlld3NlcnZpY2VzXFx2aWV3c2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBSWY7RUFDRSxZQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVqQjtFQUNFLGNBQWE7RUFDYixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwvcGFnZXMvdmlld3NlcnZpY2VzL3ZpZXdzZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJnb29nbGUtbWFwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1JTtcclxuICB9XHJcblxyXG4gIFxyXG4uaDYge1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4uaDUge1xyXG4gIGNvbG9yOiMyMDIwMjA7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/global/pages/viewservices/viewservices.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/global/pages/viewservices/viewservices.page.ts ***!
  \****************************************************************/
/*! exports provided: ViewservicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewservicesPage", function() { return ViewservicesPage; });
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



var ViewservicesPage = /** @class */ (function () {
    /******************************************************************************************* */
    function ViewservicesPage(loadingController, activatedRoute, navCtrl, httpClient, alertController, router) {
        var _this = this;
        this.loadingController = loadingController;
        this.activatedRoute = activatedRoute;
        this.navCtrl = navCtrl;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.router = router;
        this.submitted = false;
        this.googleAutoComplete = new google.maps.places.AutocompleteService();
        this.searchResult = new Array();
        this.myLatLong = { lat: 6.260128, lng: -75.574430 };
        this.mapOptions = {
            zoom: 13,
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
            // uncomment the following line if you want to remove the default Map controls
            disableDefaultUI: true
        };
        this.created_at = "";
        this.descripcionServ = "";
        this.destinoLatitud = "";
        this.destinoLongitud = "";
        this.destinoServ = "";
        this.distancia = "";
        this.distanciaServicio = "";
        this.origenLatitud = "";
        this.origenLongitud = "";
        this.origenServ = "";
        this.distServ = "";
        this.activatedRoute.queryParams.subscribe(function (params) {
            //  console.log(params);
            if (params && params.data) {
                _this.data = JSON.parse(params.data);
                console.log(_this.estatus = params.data.estatus);
            }
        });
        //this.origenServ=this.activatedRoute.snapshot.paramMap.get('origenServ');
    }
    ViewservicesPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._GoogleMap.$mapReady.subscribe(function (map) {
                    _this.map = map;
                    _this.startNavigating();
                });
                this.createLoader();
                return [2 /*return*/];
            });
        });
    };
    ViewservicesPage.prototype.createLoader = function () {
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
                        this.startNavigating();
                        return [2 /*return*/];
                }
            });
        });
    };
    ViewservicesPage.prototype.presentLoader = function () {
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
    ViewservicesPage.prototype.dismissLoader = function () {
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
    /*******************  CREAR RUTA DE VEHICULO ****************************************/
    ViewservicesPage.prototype.startNavigating = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //this.presentLoader();
                Geolocation.getCurrentPosition({
                    timeout: 8000,
                    maximumAge: 0,
                }).then(function (position) {
                    var directionsService = new google.maps.DirectionsService;
                    var directionsDisplay = new google.maps.DirectionsRenderer;
                    directionsDisplay.setMap(_this.map);
                    directionsService.route({
                        origin: { lat: Number(_this.data.origenLatitud), lng: Number(_this.data.origenLongitud) },
                        destination: { lat: Number(_this.data.destinoLatitud), lng: Number(_this.data.destinoLongitud) },
                        travelMode: google.maps.TravelMode['DRIVING']
                    }, function (res, status) {
                        if (status == google.maps.DirectionsStatus.OK) {
                            directionsDisplay.setDirections(res);
                            //console.log((res.routes[0].legs[0].distance.value)/1000);
                            _this.distServ = res.routes[0].legs[0].distance.text;
                        }
                        else {
                            console.warn(status);
                        }
                    });
                }).catch(function (error) {
                }).finally(function () { return _this.dismissLoader(); });
                return [2 /*return*/];
            });
        });
    };
    //************************************************************************************ */
    ViewservicesPage.prototype.geolocateMe = function () {
        var _this = this;
        this.presentLoader();
        Geolocation.getCurrentPosition().then(function (position) {
            var current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.map.panTo(current_location);
            // add a marker
            var marker = new google.maps.Marker({
                position: current_location,
                title: 'You are here!',
            });
            // To add the marker to the map, call setMap();
            marker.setMap(_this.map);
        }).catch(function (error) {
            console.log('Error getting current location', error);
        }).finally(function () { return _this.dismissLoader(); });
    };
    ViewservicesPage.prototype.doRefresh = function (event) {
        console.log('Begin async operation');
        setTimeout(function () {
            console.log('Async operation has ended');
            event.target.complete();
        }, 280);
    };
    /*********************************************************************** */
    ViewservicesPage.prototype.aceptarSolicitud = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, dataPost, data;
            var _this = this;
            return __generator(this, function (_a) {
                url = "https://atrisoluciones.com.co/api/truckservices/update";
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                headers.append('Access-Control-Allow-Origin', '*');
                headers.append('Access-Control-Allow-Methods', 'POST,PUT,GET,DELETE,OPTIONS');
                headers.append('Access-Control-Allow-Headers', 'x-id');
                dataPost = {
                    'id': Number(this.data.id),
                    'estatus': '1',
                    'finEntrega': 'N',
                    'userEntrega': localStorage.getItem('UserCod'),
                };
                this.valu = dataPost;
                data = this.httpClient.put(url, dataPost, { headers: headers, responseType: 'text' });
                data.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var info, alert_1, alert_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                info = JSON.parse(data);
                                console.log(info);
                                if (!(info['code'] == 200)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.alertController.create({
                                        header: 'Solicitud',
                                        message: "Solicitud aceptada Correctamente",
                                        buttons: ['Ok']
                                    })];
                            case 1:
                                alert_1 = _a.sent();
                                return [4 /*yield*/, alert_1.present()];
                            case 2:
                                _a.sent();
                                this.router.navigateByUrl('/inicio');
                                return [3 /*break*/, 6];
                            case 3: return [4 /*yield*/, this.alertController.create({
                                    header: 'Solicitud',
                                    message: 'La solicitud no se acepto, ha ocurrido un error',
                                    buttons: ['Ok']
                                })];
                            case 4:
                                alert_2 = _a.sent();
                                return [4 /*yield*/, alert_2.present()];
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
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__["GoogleMapComponent"]),
        __metadata("design:type", _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__["GoogleMapComponent"])
    ], ViewservicesPage.prototype, "_GoogleMap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('directionsPanel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ViewservicesPage.prototype, "directionsPanel", void 0);
    ViewservicesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewservices',
            template: __webpack_require__(/*! ./viewservices.page.html */ "./src/app/global/pages/viewservices/viewservices.page.html"),
            styles: [__webpack_require__(/*! ./viewservices.page.scss */ "./src/app/global/pages/viewservices/viewservices.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewservicesPage);
    return ViewservicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=global-pages-viewservices-viewservices-module.js.map