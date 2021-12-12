(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-pages-maps-maps-module"],{

/***/ "./src/app/global/pages/maps/maps.module.ts":
/*!**************************************************!*\
  !*** ./src/app/global/pages/maps/maps.module.ts ***!
  \**************************************************/
/*! exports provided: MapsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPageModule", function() { return MapsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maps.page */ "./src/app/global/pages/maps/maps.page.ts");
/* harmony import */ var _modal_search_ori_modal_search_ori_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-search-ori/modal-search-ori.page */ "./src/app/global/pages/modal-search-ori/modal-search-ori.page.ts");
/* harmony import */ var _modal_search_ori_modal_search_ori_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-search-ori/modal-search-ori.module */ "./src/app/global/pages/modal-search-ori/modal-search-ori.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _maps_page__WEBPACK_IMPORTED_MODULE_6__["MapsPage"]
    }
];
var MapsPageModule = /** @class */ (function () {
    function MapsPageModule() {
    }
    MapsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [
                _modal_search_ori_modal_search_ori_page__WEBPACK_IMPORTED_MODULE_7__["ModalSearchOriPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modal_search_ori_modal_search_ori_module__WEBPACK_IMPORTED_MODULE_8__["ModalSearchOriPageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_6__["MapsPage"]]
        })
    ], MapsPageModule);
    return MapsPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/maps/maps.page.html":
/*!**************************************************!*\
  !*** ./src/app/global/pages/maps/maps.page.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button  defaultHref=\"/inicio\" (click)=\"ngOnDestroy\"></ion-back-button><font size=\"1px\">Atras</font>\r\n    </ion-buttons>\r\n    <ion-title><font size=\"4px\">Crear Servicios</font></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  \r\n  <ion-content>  \r\n     <ion-searchbar cancel-button-icon='md-arrow-back' [(ngModel)]=\"searchOrigen\" (click)=\"searchDirOrigen()\"Placeholder=\"Dirección Origen\" value={{origenServ}}></ion-searchbar>\r\n    <ion-searchbar cancel-button-icon='md-arrow-back' [(ngModel)]=\"searchDestino\" (click)=\"searchDirDestino()\"Placeholder=\"Dirección Destino\" ></ion-searchbar>\r\n \r\n  \r\n    <ion-button shape=\"round\" color=\"secondary\" size=\"small\" type=\"submit\" (click)='irA_Solicitud()' expand=\"block\" >Ingresar Solicitud</ion-button>\r\n \r\n  </ion-content>\r\n \r\n  <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"geolocateMe()\" color=\"secondary\">\r\n    <ion-icon name=\"locate\"></ion-icon>\r\n   </ion-fab-button>\r\n   </ion-fab>\r\n    <google-map [mapOptions]=\"mapOptions\"></google-map>\r\n \r\n"

/***/ }),

/***/ "./src/app/global/pages/maps/maps.page.scss":
/*!**************************************************!*\
  !*** ./src/app/global/pages/maps/maps.page.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "google-map {\n  display: block;\n  width: 100%;\n  height: 68%; }\n\nion-list {\n  background-color: #ffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL3BhZ2VzL21hcHMvRDpcXFByb3llY3Rvcy1Jb25pY1xcQXBwRW50cmVnYXMvc3JjXFxhcHBcXGdsb2JhbFxccGFnZXNcXG1hcHNcXG1hcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRWI7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9wYWdlcy9tYXBzL21hcHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZ29vZ2xlLW1hcCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2OCU7XHJcbiAgfVxyXG4gIGlvbi1saXN0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/global/pages/maps/maps.page.ts":
/*!************************************************!*\
  !*** ./src/app/global/pages/maps/maps.page.ts ***!
  \************************************************/
/*! exports provided: MapsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPage", function() { return MapsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _modal_search_ori_modal_search_ori_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal-search-ori/modal-search-ori.page */ "./src/app/global/pages/modal-search-ori/modal-search-ori.page.ts");
/* harmony import */ var _animationenter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../animationenter */ "./src/app/global/pages/animationenter.ts");
/* harmony import */ var _animationleave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../animationleave */ "./src/app/global/pages/animationleave.ts");
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





var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"].Geolocation;




/************************************************************************************ */
var MapsPage = /** @class */ (function () {
    /************************************************************************************ */
    function MapsPage(loadingController, navCtrl, activatedRoute, formBuilder, modalCtrl, router, alertController) {
        this.loadingController = loadingController;
        this.navCtrl = navCtrl;
        this.activatedRoute = activatedRoute;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.alertController = alertController;
        this.searchOrigen = '';
        this.searchDestino = '';
        this.googleAutoComplete = new google.maps.places.AutocompleteService();
        this.searchResult = new Array();
        this.myLatLong = { lat: 6.260128, lng: -75.574430 };
        this.mapOptions = {
            zoom: 12,
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
        this.distServ = "";
        this.oringenlatitud = "";
        this.origenlongitud = "";
        this.destinolatitud = "";
        this.destinolongitud = "";
    }
    /************************************************************************************ */
    MapsPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this._GoogleMap.$mapReady.subscribe(function (map) {
                    _this.map = map;
                });
                this.searchOrigen = "";
                this.searchDestino = "";
                this.createLoader();
                return [2 /*return*/];
            });
        });
    };
    /************************************************************************************ */
    MapsPage.prototype.createLoader = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: 'Obteniendo su location...'
                            })];
                    case 1:
                        _a.loadingElement = _b.sent();
                        this.geolocateMe();
                        return [2 /*return*/];
                }
            });
        });
    };
    /************************************************************************************ */
    MapsPage.prototype.presentLoader = function () {
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
    /************************************************************************************ */
    MapsPage.prototype.dismissLoader = function () {
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
    /************************************************************************************ */
    MapsPage.prototype.geolocateMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var infoWindow, trafficLayer;
            var _this = this;
            return __generator(this, function (_a) {
                this.presentLoader();
                Geolocation.getCurrentPosition().then(function (position) {
                    var current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    _this.map.panTo(current_location);
                    /******************************************* */
                    var latlng = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        move: "S"
                    };
                    _this.ubicacionActual(latlng);
                    // this.agregarMarcador(latlng)
                    /**************************************** */
                    // add a marker
                    var image = "https://img.atrisoluciones.com.co/img/ubicacion.png";
                    var contenidoStrig = "Usted esta AQUI! Sergio";
                    var infoWindow = new google.maps.InfoWindow({
                        content: contenidoStrig
                    });
                    var marker = new google.maps.Marker({
                        position: current_location,
                        // title: 'Usted esta AQUI!',
                        icon: image,
                        draggable: true,
                        animation: google.maps.Animation.DROP
                    });
                    var map;
                    var marker;
                    marker.addListener('dragend', function (event) {
                        var latlng = {
                            lat: event.latLng.lat(),
                            lng: event.latLng.lng(),
                            move: "N"
                        };
                        _this.origenServ = _this.origenUbicacion(latlng);
                        infoWindow.open(map, marker);
                    });
                    marker.setMap(_this.map);
                }).catch(function (error) {
                    console.log('Error getting current location', error);
                }).finally(function () { return _this.dismissLoader(); });
                trafficLayer = new google.maps.TrafficLayer();
                trafficLayer.setMap(this.map);
                return [2 /*return*/];
            });
        });
    };
    /******************************************* */
    MapsPage.prototype.origenUbicacion = function (latlng) {
        return __awaiter(this, void 0, void 0, function () {
            var geocoder, val;
            var _this = this;
            return __generator(this, function (_a) {
                if (latlng.move == 'N') {
                    geocoder = new google.maps.Geocoder;
                    val = geocoder.geocode({ 'location': latlng }, function (results, status) {
                        var infowindow = new google.maps.InfoWindow;
                        infowindow.setContent(results[0].formatted_address);
                        _this.origenServ = results[0].formatted_address;
                    });
                }
                // this.agregarMarcador(latlng);         
                return [2 /*return*/, this.origenServ];
            });
        });
    };
    /********************************************* */
    MapsPage.prototype.ubicacionActual = function (latlng) {
        return __awaiter(this, void 0, void 0, function () {
            var geocoder, val;
            var _this = this;
            return __generator(this, function (_a) {
                if (latlng.move == 'S') {
                    geocoder = new google.maps.Geocoder;
                    val = geocoder.geocode({ 'location': latlng }, function (results, status) {
                        var infowindow = new google.maps.InfoWindow;
                        infowindow.setContent(results[0].formatted_address);
                        //this.origenServ=results[0].formatted_address;
                        _this.origenServ = "Tu ubicación Actual";
                        // let tipoSearch=1;
                        // this.geocodePlaceId(results[0].place_id,tipoSearch)
                    });
                }
                return [2 /*return*/, this.origenServ];
            });
        });
    };
    /************************************************************************************ */
    MapsPage.prototype.searchDirOrigen = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, searchDestino, opcion, idPlace, tipoSearch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_search_ori_modal_search_ori_page__WEBPACK_IMPORTED_MODULE_6__["ModalSearchOriPage"],
                            enterAnimation: _animationenter__WEBPACK_IMPORTED_MODULE_7__["myEnterAnimation"],
                            leaveAnimation: _animationleave__WEBPACK_IMPORTED_MODULE_8__["myLeaveAnimation"],
                            componentProps: {
                                'destinoServ': 'Ingrese la dirección de Origen',
                                'opcion': '1'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log(data['nombreUbicacion']);
                        if (data['nombreUbicacion'] != '') {
                            searchDestino = (data['nombreUbicacion']);
                            opcion = data['opcion'];
                            idPlace = data.id;
                            tipoSearch = 1;
                            this.pasarDato(searchDestino, opcion);
                            this.geocodePlaceId(idPlace, tipoSearch);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /************************************************************************************ */
    MapsPage.prototype.searchDirDestino = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, searchDestino, opcion, idPlace, tipoSearch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_search_ori_modal_search_ori_page__WEBPACK_IMPORTED_MODULE_6__["ModalSearchOriPage"],
                            enterAnimation: _animationenter__WEBPACK_IMPORTED_MODULE_7__["myEnterAnimation"],
                            leaveAnimation: _animationleave__WEBPACK_IMPORTED_MODULE_8__["myLeaveAnimation"],
                            componentProps: {
                                'origenServ': 'Ingrese la dirección de Destino',
                                'opcion': '2'
                            }
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, modal.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log(data['nombreUbicacion']);
                        if (data['nombreUbicacion'] != '') {
                            searchDestino = (data['nombreUbicacion']);
                            opcion = data['opcion'];
                            idPlace = data.id;
                            tipoSearch = 2;
                            this.pasarDato(searchDestino, opcion);
                            this.geocodePlaceId(idPlace, tipoSearch);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /************************************************************************************ */
    MapsPage.prototype.pasarDato = function (ubicacion, opcion) {
        if (opcion == '1') {
            this.searchOrigen = ubicacion;
        }
        if (opcion == '2') {
            this.searchDestino = ubicacion;
        }
    };
    /************************************************************************************ */
    MapsPage.prototype.geocodePlaceId = function (idPlace, tipoSearch) {
        var tipoSearch;
        return __awaiter(this, void 0, void 0, function () {
            var map, placeId;
            var _this = this;
            return __generator(this, function (_a) {
                placeId = idPlace;
                this.geocoder = new google.maps.Geocoder();
                switch (tipoSearch) {
                    case 1:
                        this.geocoder.geocode({ 'placeId': placeId }, function (results, status) {
                            if (status === google.maps.GeocoderStatus.OK) {
                                var positionO = {
                                    origenlatitud: results[0].geometry.location.lat(),
                                    origenlongitud: results[0].geometry.location.lng()
                                };
                                _this.origenlongitud = positionO.origenlongitud;
                                _this.oringenlatitud = positionO.origenlatitud;
                                _this.geolocate(positionO.origenlatitud, positionO.origenlongitud);
                            }
                            else {
                                window.alert('Geocoder failed due to: ' + status);
                            }
                        });
                        break;
                    case 2:
                        this.geocoder.geocode({ 'placeId': placeId }, function (results, status) {
                            if (status === google.maps.GeocoderStatus.OK) {
                                var positionD = {
                                    destinolatitud: results[0].geometry.location.lat(),
                                    destinolongitud: results[0].geometry.location.lng()
                                };
                                _this.destinolongitud = positionD.destinolongitud;
                                _this.destinolatitud = positionD.destinolatitud;
                                //this.geolocate(positionD.destinolatitud,positionD.destinolongitud);
                                _this.startNavigating();
                            }
                            else {
                                window.alert('Geocoder failed due to: ' + status);
                            }
                        });
                        break;
                    default:
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    /************************************************************************************** */
    MapsPage.prototype.agregarMarcador = function (latlng) {
        return __awaiter(this, void 0, void 0, function () {
            var image, marker;
            return __generator(this, function (_a) {
                image = "https://img.atrisoluciones.com.co/img/Bandera.png";
                marker = new google.maps.Marker({
                    position: latlng,
                    title: 'Ubicacion Orgien...!',
                    icon: image,
                    animation: google.maps.Animation.DROP,
                });
                marker.setMap(this.map);
                return [2 /*return*/];
            });
        });
    };
    /************************************************************************************ */
    MapsPage.prototype.geolocate = function (latitud, longitud) {
        return __awaiter(this, void 0, void 0, function () {
            var lat, lng, infoWindow, trafficLayer;
            var _this = this;
            return __generator(this, function (_a) {
                this.presentLoader();
                lat = latitud;
                lng = longitud;
                Geolocation.getCurrentPosition().then(function (position) {
                    var current_location = new google.maps.LatLng(latitud, longitud);
                    _this.map.panTo(current_location);
                    // add a marker
                    // var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
                    var contenidoStrig = "Ubicación Origen Servicio ..!";
                    var infoWindow = new google.maps.InfoWindow({
                        content: contenidoStrig
                    });
                    var marker = new google.maps.Marker({
                        position: current_location,
                        title: 'Ubicacion Orgien...!',
                        //icon:image,
                        animation: google.maps.Animation.DROP,
                        draggable: true
                    });
                    marker.setMap(_this.map);
                }).catch(function (error) {
                    console.log('Error getting current location', error);
                }).finally(function () { return _this.dismissLoader(); });
                trafficLayer = new google.maps.TrafficLayer();
                trafficLayer.setMap(this.map);
                return [2 /*return*/];
            });
        });
    };
    /**************************************************************** */
    MapsPage.prototype.irA_Solicitud = function () {
        return __awaiter(this, void 0, void 0, function () {
            var enviardatos, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        enviardatos = {
                            'origenServ': this.searchOrigen,
                            'Olng': this.origenlongitud,
                            'Olat': this.oringenlatitud,
                            'Dlng': this.destinolongitud,
                            'Dlat': this.destinolatitud,
                            'destinoServ': this.searchDestino,
                            'distServ': this.distServ
                        };
                        if (!(enviardatos.origenServ === "" || enviardatos.destinoServ === "")) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                message: "Faltan datos por ingresar ...",
                                buttons: ['Ok']
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        //console.log(this.origenlongitud);
                        this.router.navigate(['/solicitud', enviardatos.origenServ, enviardatos.Olng, enviardatos.Olat,
                            enviardatos.Dlng, enviardatos.Dlat, enviardatos.destinoServ, enviardatos.distServ]);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /************************************************************************************ */
    /* ***** CREAR RUTA DE VEHICULO ************/
    MapsPage.prototype.startNavigating = function () {
        var _this = this;
        this.presentLoader();
        Geolocation.getCurrentPosition({
            timeout: 7000
        }).then(function (position) {
            var directionsService = new google.maps.DirectionsService;
            var directionsDisplay = new google.maps.DirectionsRenderer;
            directionsDisplay.setMap(_this.map);
            directionsService.route({
                origin: { lat: Number(_this.oringenlatitud), lng: Number(_this.origenlongitud) },
                destination: { lat: Number(_this.destinolatitud), lng: Number(_this.destinolongitud) },
                travelMode: google.maps.TravelMode['DRIVING']
            }, function (res, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(res);
                    //console.log((res.routes[0].legs[0].distance.value)/1000);
                    _this.distServ = res.routes[0].legs[0].distance.text;
                    // console.log(res.routes[0].legs[0].distance.text);
                    console.log(res);
                }
                else {
                    console.warn(status);
                }
            });
        }).catch(function (error) {
            console.log('Error getting current location', error);
        }).finally(function () { return _this.dismissLoader(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('directionsPanel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapsPage.prototype, "directionsPanel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"]),
        __metadata("design:type", _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"])
    ], MapsPage.prototype, "_GoogleMap", void 0);
    MapsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__(/*! ./maps.page.html */ "./src/app/global/pages/maps/maps.page.html"),
            styles: [__webpack_require__(/*! ./maps.page.scss */ "./src/app/global/pages/maps/maps.page.scss")]
        })
        /************************************************************************************ */
        ,
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], MapsPage);
    return MapsPage;
}());



/***/ })

}]);
//# sourceMappingURL=global-pages-maps-maps-module.js.map