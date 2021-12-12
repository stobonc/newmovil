(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-pages-maps-services-maps-services-module"],{

/***/ "./src/app/global/pages/maps-services/maps-services.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/maps-services/maps-services.module.ts ***!
  \********************************************************************/
/*! exports provided: MapsServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsServicesPageModule", function() { return MapsServicesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _maps_services_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maps-services.page */ "./src/app/global/pages/maps-services/maps-services.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
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
        component: _maps_services_page__WEBPACK_IMPORTED_MODULE_5__["MapsServicesPage"]
    }
];
var MapsServicesPageModule = /** @class */ (function () {
    function MapsServicesPageModule() {
    }
    MapsServicesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [
                _modal_search_ori_modal_search_ori_page__WEBPACK_IMPORTED_MODULE_7__["ModalSearchOriPage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _modal_search_ori_modal_search_ori_module__WEBPACK_IMPORTED_MODULE_8__["ModalSearchOriPageModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_maps_services_page__WEBPACK_IMPORTED_MODULE_5__["MapsServicesPage"]]
        })
    ], MapsServicesPageModule);
    return MapsServicesPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/maps-services/maps-services.page.html":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/maps-services/maps-services.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button  defaultHref=\"/inicio\" (click)=\"ngOnDestroy\"></ion-back-button><font size=\"1px\">Atras</font>\n    </ion-buttons>\n    <ion-title><font size=\"4px\">Crear Servicios</font></ion-title>\n  </ion-toolbar>\n</ion-header>\n  \n  <ion-content> \n \n     <ion-searchbar disabled=\"true\" cancel-button-icon='md-arrow-back' [(ngModel)]=\"searchOrigen\" (click)=\"searchDirOrigen()\"Placeholder=\"Dirección Origen\" value={{origenServ}}></ion-searchbar>\n     <ion-searchbar cancel-button-icon='md-arrow-back' [(ngModel)]=\"searchDestino\" (click)=\"searchDirDestino()\"Placeholder=\"Dirección Destino\" value={{destinoServ}} ></ion-searchbar>\n \n  \n    <ion-button shape=\"round\" color=\"secondary\" size=\"small\" type=\"submit\" (click)='irA_Solicitud()' expand=\"block\" >Ingresar Solicitud</ion-button>\n \n  </ion-content>\n \n  <ion-fab horizontal=\"start\" vertical=\"bottom\" slot=\"fixed\">\n    <ion-fab-button (click)=\"ubicacionInicial()\" color=\"secondary\">\n    <ion-icon name=\"locate\"></ion-icon>\n   </ion-fab-button>\n   </ion-fab>\n    <google-map [mapOptions]=\"mapOptions\"></google-map>\n"

/***/ }),

/***/ "./src/app/global/pages/maps-services/maps-services.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/maps-services/maps-services.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "google-map {\n  display: block;\n  width: 100%;\n  height: 68%; }\n\nion-list {\n  background-color: #ffff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL3BhZ2VzL21hcHMtc2VydmljZXMvRDpcXFByb3llY3Rvcy1Jb25pY1xcQXBwRW50cmVnYXMvc3JjXFxhcHBcXGdsb2JhbFxccGFnZXNcXG1hcHMtc2VydmljZXNcXG1hcHMtc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBRWI7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9wYWdlcy9tYXBzLXNlcnZpY2VzL21hcHMtc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZ29vZ2xlLW1hcCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2OCU7XHJcbiAgfVxyXG4gIGlvbi1saXN0IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/global/pages/maps-services/maps-services.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/global/pages/maps-services/maps-services.page.ts ***!
  \******************************************************************/
/*! exports provided: MapsServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsServicesPage", function() { return MapsServicesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/google-map/google-map.component */ "./src/app/components/google-map/google-map.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_search_ori_modal_search_ori_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-search-ori/modal-search-ori.page */ "./src/app/global/pages/modal-search-ori/modal-search-ori.page.ts");
/* harmony import */ var _animationenter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animationenter */ "./src/app/global/pages/animationenter.ts");
/* harmony import */ var _animationleave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animationleave */ "./src/app/global/pages/animationleave.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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


var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Geolocation;






var MapsServicesPage = /** @class */ (function () {
    function MapsServicesPage(loadingController, modalCtrl, router, alertController, activatedRoute) {
        var _this = this;
        this.loadingController = loadingController;
        this.modalCtrl = modalCtrl;
        this.router = router;
        this.alertController = alertController;
        this.activatedRoute = activatedRoute;
        //googleAutoComplete= new google.maps.places.AutocompleteService();
        this.searchResult = new Array();
        this.myLatLong = { lat: 4.633338, lng: -74.311463 };
        this.mapOptions = {
            zoom: 14,
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
        this.grupoMarker = [];
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params && params.datos) {
                _this.user = params.datos;
            }
        });
    }
    MapsServicesPage.prototype.ngOnInit = function () {
        var _this = this;
        this._GoogleMap.$mapReady.subscribe(function (map) {
            _this.map = map;
        });
        //this.ionViewWillEnter();
    };
    MapsServicesPage.prototype.createLoader = function () {
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
                        return [2 /*return*/];
                }
            });
        });
    };
    MapsServicesPage.prototype.presentLoader = function () {
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
    MapsServicesPage.prototype.dismissLoader = function () {
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
    /********************************************************************* */
    MapsServicesPage.prototype.ionViewWillEnter = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('ingrese');
                this.ubicacionInicial();
                return [2 /*return*/];
            });
        });
    };
    MapsServicesPage.prototype.ubicacionInicial = function () {
        return __awaiter(this, void 0, void 0, function () {
            var infoWindow;
            var _this = this;
            return __generator(this, function (_a) {
                Geolocation.getCurrentPosition({ timeout: 500 }).then(function (position) {
                    var ubicacionActual = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                    _this.LatLngOrigen = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    // centrar el mapa en la ubicación inicial
                    var mapOptions = {
                        // zoom:15,
                        center: _this.LatLngOrigen,
                    };
                    _this.crearMarke(_this.LatLngOrigen); // crear marcador de inicio de ruta
                    setTimeout(function () {
                        _this.map.panTo(_this.LatLngOrigen); // Dibujar el mapa
                    }, 270);
                });
                return [2 /*return*/];
            });
        });
    };
    /********************************************************************** */
    MapsServicesPage.prototype.crearMarke = function (ubicacionActual) {
        var _this = this;
        var image = "https://img.atrisoluciones.com.co/img/ubicacion.png";
        var marker = new google.maps.Marker({
            position: ubicacionActual,
            icon: image,
            draggable: true,
            animation: google.maps.Animation.DROP,
        });
        marker.setMap(this.map);
        this.tuDireccion(this.LatLngOrigen);
        //Permite mover el marcador de Origen
        google.maps.event.addListener(marker, 'dragend', function (event) {
            _this.LatLngOrigen = {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
            };
            // Busca la direccion del marcador de inicio si se mueve
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({ 'location': _this.LatLngOrigen }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        _this.origenServ = results[0].formatted_address;
                    }
                    else {
                        window.alert('No results found');
                    }
                }
                else {
                    window.alert('Geocoder failed due to: ' + status);
                }
            });
            // Si se mueve la ubicacion inicial sin tener la ubicacion final y poder calcular la ruta 
            if (_this.LatLngDestino != null) {
                _this.trazarRuta();
            }
        });
        //infoWindow.open(this.map,marker); // abre el marker
    };
    /*********************************************************************** */
    MapsServicesPage.prototype.tuDireccion = function (LatLngOrigen) {
        return __awaiter(this, void 0, void 0, function () {
            var infowindow, geocoder, geocoder, infowindow;
            var _this = this;
            return __generator(this, function (_a) {
                infowindow = new google.maps.InfoWindow;
                geocoder = new google.maps.Geocoder;
                geocoder = new google.maps.Geocoder;
                infowindow = new google.maps.InfoWindow;
                geocoder.geocode({ 'location': LatLngOrigen }, function (results, status) {
                    if (status === google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            infowindow.setContent(results[0].formatted_address);
                            _this.origenServ = results[0].formatted_address;
                        }
                        else {
                            window.alert('No results found');
                        }
                    }
                    else {
                        window.alert('Geocoder failed due to: ' + status);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    /*********************************************************************** */
    MapsServicesPage.prototype.searchDirDestino = function () {
        return __awaiter(this, void 0, void 0, function () {
            var modal, data, idPlace, infoWindow, dat;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: _modal_search_ori_modal_search_ori_page__WEBPACK_IMPORTED_MODULE_4__["ModalSearchOriPage"],
                            enterAnimation: _animationenter__WEBPACK_IMPORTED_MODULE_5__["myEnterAnimation"],
                            leaveAnimation: _animationleave__WEBPACK_IMPORTED_MODULE_6__["myLeaveAnimation"],
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
                            idPlace = data.id;
                            this.destinoServ = data['nombreUbicacion'];
                            // Funcion que permite encontrar la lat, lng del destino
                            this.geocoder = new google.maps.Geocoder();
                            infoWindow = new google.maps.InfoWindow;
                            dat = this.geocoder.geocode({ 'placeId': idPlace }, function (results, status) {
                                if (status === google.maps.GeocoderStatus.OK) {
                                    _this.LatLngDestino = {
                                        lat: results[0].geometry.location.lat(),
                                        lng: results[0].geometry.location.lng()
                                    };
                                }
                                // Esta funcion permite crear  el marcador de destino
                                var image = "https://img.atrisoluciones.com.co/img/puntoFinalDes.png";
                                var marker = new google.maps.Marker({
                                    position: _this.LatLngDestino,
                                    icon: image,
                                    draggable: true,
                                    animation: google.maps.Animation.DROP
                                });
                                if (_this.grupoMarker.length != 0) {
                                    _this.grupoMarker[0].setMap(null);
                                }
                                _this.grupoMarker.push(marker);
                                marker.setMap(_this.map);
                                _this.trazarRuta();
                                // Esta funcion permite mover el marcador de destino
                                google.maps.event.addListener(marker, 'dragend', function (event) {
                                    // this.grupoMarker[0].setMap(null);
                                    var latlng = {
                                        lat: event.latLng.lat(),
                                        lng: event.latLng.lng(),
                                    };
                                    _this.LatLngDestino = latlng;
                                    var geocoder = new google.maps.Geocoder;
                                    geocoder.geocode({ 'location': latlng }, function (results, status) {
                                        if (status === google.maps.GeocoderStatus.OK) {
                                            if (results[0]) {
                                                //infowindow.setContent(results[0].formatted_address);
                                                _this.destinoServ = results[0].formatted_address;
                                            }
                                            else {
                                                window.alert('No results found');
                                            }
                                        }
                                        else {
                                            window.alert('Geocoder failed due to: ' + status);
                                        }
                                    });
                                    _this.trazarRuta();
                                });
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //**************************************************************** */
    MapsServicesPage.prototype.trazarRuta = function () {
        return __awaiter(this, void 0, void 0, function () {
            var directionsService;
            var _this = this;
            return __generator(this, function (_a) {
                // limpia los marcadores creados  que hay en mapa
                if (this.directionsRenderer != null) {
                    this.directionsRenderer.setMap(null);
                    this.directionsRenderer = null;
                }
                directionsService = new google.maps.DirectionsService();
                this.directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
                this.directionsRenderer.setMap(this.map);
                // se calcula la distancia de la ruta
                directionsService.route({
                    origin: { lat: Number(this.LatLngOrigen.lat), lng: Number(this.LatLngOrigen.lng) },
                    destination: { lat: Number(this.LatLngDestino.lat), lng: Number(this.LatLngDestino.lng) },
                    travelMode: google.maps.TravelMode['DRIVING'],
                    provideRouteAlternatives: true
                }, function (results, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        _this.directionsRenderer.setDirections(results);
                        //console.log((res.routes[0].legs[0].distance.value)/1000);
                        _this.distServ = results.routes[0].legs[0].distance.text;
                        console.log(_this.distServ);
                    }
                    else {
                        console.warn(status);
                    }
                });
                this.directionsRenderer.setMap(this.map);
                return [2 /*return*/];
            });
        });
    };
    //********************************************************************* */
    MapsServicesPage.prototype.irA_Solicitud = function () {
        return __awaiter(this, void 0, void 0, function () {
            var extras, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        extras = {
                            queryParams: {
                                'origenServ': this.origenServ,
                                'Olng': this.LatLngOrigen.lng,
                                'Olat': this.LatLngOrigen.lat,
                                'Dlng': this.LatLngDestino.lng,
                                'Dlat': this.LatLngDestino.lat,
                                'destinoServ': this.destinoServ,
                                'distServ': this.distServ,
                            }
                        };
                        console.log(extras.queryParams['distServ'], 'extras');
                        if (!(extras.queryParams['origenServ'] === "" || extras.queryParams['destinoServ'] === "")) return [3 /*break*/, 3];
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
                        this.router.navigate(['/solicitud'], extras);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MapsServicesPage.prototype.ngOnDestroy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                location.reload(true);
                console.log('tiempo para descargar');
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('directionsPanel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapsServicesPage.prototype, "directionsPanel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_2__["GoogleMapComponent"]),
        __metadata("design:type", _components_google_map_google_map_component__WEBPACK_IMPORTED_MODULE_2__["GoogleMapComponent"])
    ], MapsServicesPage.prototype, "_GoogleMap", void 0);
    MapsServicesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maps-services',
            template: __webpack_require__(/*! ./maps-services.page.html */ "./src/app/global/pages/maps-services/maps-services.page.html"),
            styles: [__webpack_require__(/*! ./maps-services.page.scss */ "./src/app/global/pages/maps-services/maps-services.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]])
    ], MapsServicesPage);
    return MapsServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=global-pages-maps-services-maps-services-module.js.map