(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["truckservices-truckservices-module"],{

/***/ "./src/app/global/pages/truckservices/truckservices.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/truckservices/truckservices.module.ts ***!
  \********************************************************************/
/*! exports provided: TruckservicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckservicesPageModule", function() { return TruckservicesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _truckservices_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./truckservices.page */ "./src/app/global/pages/truckservices/truckservices.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _truckservices_page__WEBPACK_IMPORTED_MODULE_5__["TruckservicesPage"]
    }
];
var TruckservicesPageModule = /** @class */ (function () {
    function TruckservicesPageModule() {
    }
    TruckservicesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_truckservices_page__WEBPACK_IMPORTED_MODULE_5__["TruckservicesPage"]]
        })
    ], TruckservicesPageModule);
    return TruckservicesPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/truckservices/truckservices.page.html":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/truckservices/truckservices.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button  defaultHref=\"/inicio\" (click)=\"ngOnDestroy\"></ion-back-button><font size=\"1px\">Atras</font>\n      </ion-buttons>\n      <ion-title><font size=\"4px\">Solicitudes Pendientes</font></ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n<form>\n  <ion-list> \n    <div *ngFor=\"let data of dataServicios; let i=index\">        \n     <div *ngIf=\"data.estatus==0\">\n       <ion-card>\n        <ion-badge>{{i+1}}</ion-badge>\n         <ion-item>\n             <ion-label class=\"ion-text-wrap\">    \n               <p><strong><font size=\"2px\" color=\"Black\">Origen:</font></strong><font size=\"2px\">{{data.origenServ}}</font></p>\n               <hr align=\"center\" color=\"primary\" size=\"3\" width=\"80%\" />\n               <p><strong><font size=\"2px\" color=\"Black\">Destino:</font></strong><font size=\"2px\">{{data.destinoServ}}</font></p>  \n               <ion-label>Serv A: {{data.distancia}} km</ion-label>\n             </ion-label> \n             <ion-chip>\n               <ion-avatar>\n                 <img src=\"https://img.atrisoluciones.com.co/img/BotonAceptar.png\">\n               </ion-avatar>\n               <ion-label (click)=\"Ir_a(data)\" color=\"primary\"><font size=\"px\">Aceptar</font></ion-label>\n             </ion-chip>\n       </ion-item>\n     </ion-card> \n     </div>\n    </div>\n   </ion-list>\n  </form>\n    </ion-content>\n"

/***/ }),

/***/ "./src/app/global/pages/truckservices/truckservices.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/global/pages/truckservices/truckservices.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color {\n  background: #E0FFFF; }\n\n.h6 {\n  color: black;\n  font-size: 11px; }\n\n.colorRow {\n  background: rgba(253, 253, 253, 0.637); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL3BhZ2VzL3RydWNrc2VydmljZXMvRDpcXFByb3llY3Rvcy1Jb25pY1xcQXBwRW50cmVnYXMvc3JjXFxhcHBcXGdsb2JhbFxccGFnZXNcXHRydWNrc2VydmljZXNcXHRydWNrc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0EsbUJBQW1CLEVBQUE7O0FBRW5CO0VBQ0ksWUFBVztFQUNYLGVBQWUsRUFBQTs7QUFFakI7RUFDRSxzQ0FBcUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9wYWdlcy90cnVja3NlcnZpY2VzL3RydWNrc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9ye1xyXG5iYWNrZ3JvdW5kOiAjRTBGRkZGO1xyXG59XHJcbi5oNiB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLmNvbG9yUm93e1xyXG4gICAgYmFja2dyb3VuZDpyZ2JhKDI1MywgMjUzLCAyNTMsIDAuNjM3KTtcclxuICAgIFxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/global/pages/truckservices/truckservices.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/global/pages/truckservices/truckservices.page.ts ***!
  \******************************************************************/
/*! exports provided: TruckservicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckservicesPage", function() { return TruckservicesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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






var Geolocation = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Geolocation, Geoposition = _capacitor_core__WEBPACK_IMPORTED_MODULE_1__["Plugins"].Geoposition;
var TruckservicesPage = /** @class */ (function () {
    function TruckservicesPage(formBuilder, HttpClient, router, navCtrl, alertController) {
        this.formBuilder = formBuilder;
        this.HttpClient = HttpClient;
        this.router = router;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.submitted = false;
        this.dataServicios = [];
    }
    TruckservicesPage.prototype.ngOnInit = function () {
        this.ionViewDidEnter();
    };
    TruckservicesPage.prototype.ionViewDidEnter = function () {
        this.formgroup = this.formBuilder.group({
        //descripcionServ:['',[Validators.required,Validators.minLength(6)]]
        }, {});
        this.getGeolocation();
    };
    TruckservicesPage.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, dataPost, data;
            var _this = this;
            return __generator(this, function (_a) {
                this.submitted = true;
                if (this.formgroup.invalid) {
                    return [2 /*return*/];
                }
                url = "https://atrisoluciones.com.co/api/truckservices";
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                headers.append('Access-Control-Allow-Origin', '*');
                headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
                headers.append('Access-Control-Allow-Headers', 'x-id');
                dataPost = {
                    'latitudActual': this.lat,
                    'longitudActual': this.lng,
                    'estatus': '0',
                };
                data = this.HttpClient.post(url, dataPost, { headers: headers, responseType: 'text' });
                data.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        // console.log(dataPost);
                        this.dataServicios = JSON.parse(data);
                        console.log(this.dataServicios.length);
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
    TruckservicesPage.prototype.getGeolocation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var position, lng1, lat1, latlng, error_1, ubicacion, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 7]);
                        return [4 /*yield*/, Geolocation.getCurrentPosition()];
                    case 1:
                        position = _a.sent();
                        console.log(position);
                        this.lat = position.coords.latitude;
                        this.lng = position.coords.longitude;
                        lng1 = Number(-74.778547);
                        lat1 = Number(7.203511);
                        latlng = { lat: lat1, lng: lng1 };
                        return [3 /*break*/, 7];
                    case 2:
                        error_1 = _a.sent();
                        ubicacion = error_1['code'];
                        if (!(ubicacion === 2)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'GPS',
                                message: 'No se puede obtener su ubicación de GPS, favor validar si esta activada el GPS y si tiene conexion a Internet',
                                buttons: ['Ok']
                            })];
                    case 3:
                        alert_1 = _a.sent();
                        this.router.navigateByUrl('/inicio');
                        return [4 /*yield*/, alert_1.present()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        this.geocoder = new google.maps.Geocoder();
                        this.geocoder.geocode({ 'location': latlng }, function (results, status) {
                            if (status === google.maps.GeocoderStatus.OK) {
                                /*console.log(results[0]);
                                console.log(results['0']['address_components']['3']['long_name']);
                                console.log(results['0']['address_components']['6']['long_name']);
                                console.log(results['0']['address_components']['5']['long_name']);*/
                            }
                            else {
                                window.alert('La geolocalización ha fallado debido a: ' + status);
                            }
                        });
                        _a.label = 6;
                    case 6: return [3 /*break*/, 7];
                    case 7:
                        this.onSubmit();
                        return [2 /*return*/];
                }
            });
        });
    };
    TruckservicesPage.prototype.Ir_a = function (event) {
        if (event.tipoServicio == 1) {
            this.medidas = "|| Largo: " + event.largoCms + " -Cms. || Ancho: " + event.anchoCms + " -Cms. || Alto: " + event.altoCms + " -Cms. || Cantidad: " + event.cantidadUnd + " -Cajas. || Peso: " + event.pesoKg + " -Kg || Valor Declarado: $" + event.valorDeclarado + " ||";
        }
        else {
            if (event.tipoServicio == 2) {
                this.medidas = "|| Cantidad: " + event.cantidadUnd + " -Cajas. || Peso: " + event.pesoKg + " -Kg || Valor Declarado: $" + event.valorDeclarado + " ||";
            }
            else {
                this.medidas = "|| Valor Declarado: $" + event.valorDeclarado + " ||";
            }
        }
        this.data = {
            'created_at': event.created_at,
            'descripcionServ': event.descripcionServ,
            'destinoLatitud': event.destinoLatitud,
            'destinoLongitud': event.destinoLongitud,
            'destinoServ': event.destinoServ,
            'distancia': event.distancia,
            'distanciaServicio': event.distanciaServicio,
            'id': event.id,
            'valorDeclarado': event.valorDeclarado,
            'origenLatitud': event.origenLatitud,
            'origenLongitud': event.origenLongitud,
            'origenServ': event.origenServ,
            'largo': event.largoCms,
            'medidas': this.medidas,
            'tipoServicio': event.tipoServicio,
            'estatus': event.estatus
        };
        var extras = {
            queryParams: {
                data: JSON.stringify(this.data),
            }
        };
        this.router.navigate(['/viewservices'], extras);
        this.ngOnDestroy();
    };
    TruckservicesPage.prototype.ngOnDestroy = function () {
    };
    TruckservicesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-truckservices',
            template: __webpack_require__(/*! ./truckservices.page.html */ "./src/app/global/pages/truckservices/truckservices.page.html"),
            styles: [__webpack_require__(/*! ./truckservices.page.scss */ "./src/app/global/pages/truckservices/truckservices.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], TruckservicesPage);
    return TruckservicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=truckservices-truckservices-module.js.map