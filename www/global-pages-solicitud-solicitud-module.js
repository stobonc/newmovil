(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-pages-solicitud-solicitud-module"],{

/***/ "./src/app/global/pages/modal-fee/modal-fee.module.ts":
/*!************************************************************!*\
  !*** ./src/app/global/pages/modal-fee/modal-fee.module.ts ***!
  \************************************************************/
/*! exports provided: ModalFeePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFeePageModule", function() { return ModalFeePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_fee_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-fee.page */ "./src/app/global/pages/modal-fee/modal-fee.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { Routes, RouterModule } from '@angular/router';


// const routes: Routes = [
//   {
//     path: '',
//     component: ModalFeePage
//   }
// ];
var ModalFeePageModule = /** @class */ (function () {
    function ModalFeePageModule() {
    }
    ModalFeePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                // RouterModule.forChild(routes)
            ],
            declarations: [_modal_fee_page__WEBPACK_IMPORTED_MODULE_4__["ModalFeePage"]]
        })
    ], ModalFeePageModule);
    return ModalFeePageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/modal-fee/modal-fee.page.html":
/*!************************************************************!*\
  !*** ./src/app/global/pages/modal-fee/modal-fee.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <!-- <ion-title>{{distancia}} </ion-title> -->\n     <h6 align =\"center\">Calcular servicio: {{descripcion}} </h6>\n    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]=\"tipo\">\n\n  <ion-grid>\n    <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n      <form [formGroup]=\"formgroup\" (ngSubmit)=\"onSubmit(formgroup.value)\">\n       <ion-card *ngSwitchCase=\"1\">\n        <ion-row>\n          <ion-col size='4'> \n            <ion-item>\n              <ion-label position=\"floating\"><h6>Largo Cms:</h6></ion-label>\n              <ion-input formControlName=\"largo\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"submitted && frm.largo.errors\" class=\"invalid-feedback\">\n              <ion-item *ngIf=\"frm.largo.errors.required\">\n                  <p style=\"color:red\">El largo es requerido!</p>\n              </ion-item>\n              <ion-item *ngIf=\"frm.largo.errors.minlength\">\n                  <p style=\"color:red\">El largo es requerido!</p>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size='4'>\n            <ion-item>\n              <ion-label position=\"floating\"><h6>Ancho Cms:</h6></ion-label>\n              <ion-input formControlName=\"ancho\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"submitted && frm.ancho.errors\" class=\"invalid-feedback\">\n              <ion-item *ngIf=\"frm.ancho.errors.required\">\n                  <p style=\"color:red\">El Ancho es requerido!</p>\n              </ion-item>\n              <ion-item *ngIf=\"frm.ancho.errors.minlength\">\n                  <p style=\"color:red\">El Ancho es requerido!</p>\n              </ion-item>\n            </div>\n\n          </ion-col>\n          <ion-col size='4'>\n            <ion-item>\n              <ion-label position=\"floating\"><h6>Alto Cms:</h6></ion-label>\n              <ion-input formControlName=\"alto\"></ion-input>\n            </ion-item>\n            <div *ngIf=\"submitted && frm.alto.errors\" class=\"invalid-feedback\">\n              <ion-item *ngIf=\"frm.alto.errors.required\">\n                  <p style=\"color:red\">El Alto es requerido!</p>\n              </ion-item>\n              <ion-item *ngIf=\"frm.alto.errors.minlength\">\n                  <p style=\"color:red\">El Alto es requerido!</p>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n          <!-- **************************************************************-->\n\n          <ion-row>\n            <ion-col size='4'> \n              <ion-item>\n                <ion-label position=\"floating\"><h6>Peso Kg:</h6></ion-label>\n                <ion-input formControlName=\"peso\"></ion-input>\n              </ion-item>\n              <div *ngIf=\"submitted && frm.peso.errors\" class=\"invalid-feedback\">\n                <ion-item *ngIf=\"frm.peso.errors.required\">\n                    <p style=\"color:red\">El Peso es requerido!</p>\n                </ion-item>\n                <ion-item *ngIf=\"frm.peso.errors.minlength\">\n                    <p style=\"color:red\">El Peso es requerido!</p>\n                </ion-item>\n              </div>\n            </ion-col>\n            <ion-col size='4'>\n              <ion-item>\n                <ion-label position=\"floating\"><h6>Cantidad:</h6></ion-label>\n                <ion-input formControlName=\"cantidad\"></ion-input>\n              </ion-item>\n              <div *ngIf=\"submitted && frm.cantidad.errors\" class=\"invalid-feedback\">\n                <ion-item *ngIf=\"frm.cantidad.errors.required\">\n                    <p style=\"color:red\">La Cantidad es requerida!</p>\n                </ion-item>\n                <ion-item *ngIf=\"frm.cantidad.errors.minlength\">\n                    <p style=\"color:red\">La Cantidad es requerida!</p>\n                </ion-item>\n              </div>\n  \n            </ion-col>\n            \n          </ion-row>\n       </ion-card>\n       <div *ngSwitchCase=\"2\"> SERGIO TOBON</div>\n          <ion-row *ngSwitchCaseDefault></ion-row>\n          <ng-template #nottipo>\n            Please friend, login.\n          </ng-template>\n        <ion-col>\n          <ion-button size=\"large\" type=\"submit\"  expand=\"block\" [disabled]=\"!formgroup.valid\">Ingresar</ion-button>   \n        </ion-col>\n      </form>\n    </ion-col>\n  </ion-grid>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/global/pages/modal-fee/modal-fee.page.scss":
/*!************************************************************!*\
  !*** ./src/app/global/pages/modal-fee/modal-fee.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9wYWdlcy9tb2RhbC1mZWUvbW9kYWwtZmVlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/global/pages/modal-fee/modal-fee.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/global/pages/modal-fee/modal-fee.page.ts ***!
  \**********************************************************/
/*! exports provided: ModalFeePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFeePage", function() { return ModalFeePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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



var ModalFeePage = /** @class */ (function () {
    function ModalFeePage(modalCtrl, formBuilder, alertController) {
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
    }
    ModalFeePage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.formgroup = this.formBuilder.group({
                    largo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                    ancho: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                    alto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                    peso: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
                    cantidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]]
                }, {});
                return [2 /*return*/];
            });
        });
    };
    //********************************************************** */
    ModalFeePage.prototype.salirSinArg = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.modalCtrl.dismiss();
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalFeePage.prototype, "distancia", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalFeePage.prototype, "tipo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalFeePage.prototype, "descripcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", Object)
    ], ModalFeePage.prototype, "sInput", void 0);
    ModalFeePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-fee',
            template: __webpack_require__(/*! ./modal-fee.page.html */ "./src/app/global/pages/modal-fee/modal-fee.page.html"),
            styles: [__webpack_require__(/*! ./modal-fee.page.scss */ "./src/app/global/pages/modal-fee/modal-fee.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]])
    ], ModalFeePage);
    return ModalFeePage;
}());



/***/ }),

/***/ "./src/app/global/pages/solicitud/solicitud.module.ts":
/*!************************************************************!*\
  !*** ./src/app/global/pages/solicitud/solicitud.module.ts ***!
  \************************************************************/
/*! exports provided: SolicitudPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudPageModule", function() { return SolicitudPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _solicitud_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./solicitud.page */ "./src/app/global/pages/solicitud/solicitud.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _modal_fee_modal_fee_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal-fee/modal-fee.page */ "./src/app/global/pages/modal-fee/modal-fee.page.ts");
/* harmony import */ var _modal_fee_modal_fee_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal-fee/modal-fee.module */ "./src/app/global/pages/modal-fee/modal-fee.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    {
        path: '',
        component: _solicitud_page__WEBPACK_IMPORTED_MODULE_5__["SolicitudPage"]
    }
];
var SolicitudPageModule = /** @class */ (function () {
    function SolicitudPageModule() {
    }
    SolicitudPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [
                _modal_fee_modal_fee_page__WEBPACK_IMPORTED_MODULE_7__["ModalFeePage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _modal_fee_modal_fee_module__WEBPACK_IMPORTED_MODULE_8__["ModalFeePageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_solicitud_page__WEBPACK_IMPORTED_MODULE_5__["SolicitudPage"]]
        })
    ], SolicitudPageModule);
    return SolicitudPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/solicitud/solicitud.page.html":
/*!************************************************************!*\
  !*** ./src/app/global/pages/solicitud/solicitud.page.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button  defaultHref=\"/maps\" (click)=\"ngDestroy()\"></ion-back-button><font size=\"1px\">Atras</font>\r\n      </ion-buttons>\r\n      <ion-title>\r\n       Crear Solicitud\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-content padding>\r\n  <form [formGroup]=\"formgroup\" (ngSubmit)=\"onSubmit()\"> \r\n    \r\n      <ion-card color=\"light\">\r\n        <font size=\"1px\">\r\n        <ion-card-subtitle>* Origen del Servicio</ion-card-subtitle>\r\n        <ion-card-content> {{recibirDatosOrigen}} </ion-card-content>\r\n          <ion-card-subtitle>* Destino del Servicio</ion-card-subtitle>\r\n          <ion-card-content>{{recibirDatosDestino}}</ion-card-content>\r\n        </font> \r\n      </ion-card>\r\n   \r\n    \r\n    <ion-item><font size=\"2px\">{{distServ}} de distancia</font></ion-item>\r\n  \r\n     <ion-item> \r\n      <ion-row>\r\n        <ion-col>\r\n        <ion-button shape=\"round\" color=\"secondary\" size=\"small\" type=\"submit\" (click)='presentAlertRadioTipo()' expand=\"block\" >Tipo Servicio</ion-button><p></p>\r\n      </ion-col>\r\n      <ion-col>\r\n     <!-- <ion-chip>\r\n      <ion-avatar>\r\n       <img src=\"https://cdn1.imggmi.com/uploads/2019/10/12/0376074a779cf4595019b285a87f8102-full.png\">\r\n      </ion-avatar>\r\n      <ion-label  (click)=\"takePicture()\">Tomar Foto</ion-label>\r\n    </ion-chip>-->\r\n        <ion-button  shape=\"round\" color=\"secondary\" size=\"small\" (click)=\"alertRadioTipoFoto($event)\">\r\n          <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\r\n          <ion-label><font size=\"2px\">Tomar Foto</font></ion-label>\r\n        </ion-button>\r\n       <!-- <input type=\"file\" *ngIf=\"isDesktop\" #filePicker (change)=\"onFileChoose($event)\"/>-->\r\n  \r\n\r\n      </ion-col>\r\n      </ion-row>\r\n      <!--***************************************************************************-->\r\n     \r\n      \r\n      <!--************************************************************************-->\r\n    </ion-item>\r\n     <!--************************************************************************************-->\r\n    <div [ngSwitch]=\"tipo\">\r\n    <div style=\"justify-content: center;\" *ngSwitchCase=\"'1'\">\r\n      <ion-label position=\"floating\" color=\"primary\"><font size=\"1px\">Descripción del servicio:</font></ion-label>\r\n      <ion-grid >\r\n        <ion-item>\r\n        <ion-row>\r\n          <ion-col  size=\"auto\">\r\n            <font color=\"#6D6E6E\" size=\"2px\">Largo: </font><font color=\"black\" size=\"2px\">{{largo}}-Cms</font>\r\n          </ion-col>\r\n          <ion-col  size=\"auto\">\r\n            <font color=\"#6D6E6E\" size=\"2px\">Ancho:</font><font color=\"black\" size=\"2px\">{{ancho}}-Cms</font>\r\n          </ion-col>\r\n          <ion-col  size=\"auto\">\r\n            <font color=\"#6D6E6E\" size=\"2px\">Alto:</font><font color=\"black\" size=\"2px\">{{alto}}-Cms</font>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col  size=\"auto\">\r\n            <font color=\"#6D6E6E\" size=\"2px\">Peso:</font><font color=\"black\" size=\"2px\">{{peso}}- kg</font>\r\n          </ion-col>\r\n          <ion-col  size=\"auto\">\r\n            <font color=\"#6D6E6E\" size=\"2px\">Cant:</font><font color=\"black\" size=\"2px\">{{cantidad}} - Cajas</font>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-item>\r\n      </ion-grid>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Valor Declarado:$</ion-label>\r\n        <ion-input autofocus=\"true\" type=\"number\"formControlName=\"valorDeclarado\"></ion-input>\r\n       <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.valorDeclarado\">\r\n        <div  class=\"error-message\" *ngIf=\"formgroup.get('valorDeclarado').hasError(validation.type) && (formgroup.get('valorDeclarado').dirty || formgroup.get('valorDeclarado').touched)\">  \r\n          <span> <font size=\"2px\"> {{validation.message}}</font></span>\r\n        </div>\r\n        </ng-container>\r\n       </div>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Detalle:</ion-label>\r\n        <ion-textarea rows=\"1\" cols=\"5\" font-size=\"2px\"  formControlName=\"descripcionServ\"></ion-textarea>\r\n      </ion-item>\r\n      <div class=\"error-container\">\r\n        <ng-container *ngFor=\"let validation of validation_messages.descripcionServ\">\r\n        <div  class=\"error-message\" *ngIf=\"formgroup.get('descripcionServ').hasError(validation.type) && (formgroup.get('descripcionServ').dirty || formgroup.get('descripcionServ').touched)\">  \r\n          <span> <font size=\"2px\"> {{validation.message}}</font></span>\r\n        </div>\r\n        </ng-container>\r\n       </div>\r\n\r\n      <ion-button    size=\"default\" type=\"submit\"  expand=\"block\" [disabled]=\"!formgroup.valid\">Ingresar Solicitud</ion-button>\r\n     \r\n    </div>\r\n\r\n <!--************************************************************************************-->\r\n\r\n <div style=\"justify-content: center;\" *ngSwitchCase=\"'2'\">\r\n  <ion-label position=\"floating\" color=\"primary\">Descripción del servicio:</ion-label>\r\n  <ion-grid >\r\n    <ion-item>\r\n    <ion-row>\r\n      <ion-col  size=\"auto\">\r\n        <font color=\"#6D6E6E\" size=\"2px\">Cantidad: </font><font color=\"black\" size=\"2px\">{{cantidad}}</font>\r\n      </ion-col>\r\n      <ion-col  size=\"auto\">\r\n        <font color=\"#6D6E6E\" size=\"2px\">Peso:</font><font color=\"black\" size=\"2px\">{{peso}}-Kg</font>\r\n      </ion-col>\r\n    </ion-row>\r\n    </ion-item>\r\n  </ion-grid>\r\n    <ion-item>\r\n     <ion-label position=\"floating\">Valor Declarado:$</ion-label>\r\n      <ion-input autofocus=\"true\" type=\"number\"formControlName=\"valorDeclarado\"></ion-input>\r\n    <div class=\"error-container\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.valorDeclarado\">\r\n        <div  class=\"error-message\" *ngIf=\"formgroup.get('valorDeclarado').hasError(validation.type) && (formgroup.get('valorDeclarado').dirty || formgroup.get('valorDeclarado').touched)\">  \r\n          <span> <font size=\"2px\"> {{validation.message}}</font></span>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n   </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Detalle:</ion-label>\r\n      <ion-textarea rows=\"1\" cols=\"5\" font-size=\"2px\"  formControlName=\"descripcionServ\"></ion-textarea>\r\n     </ion-item>\r\n    <div class=\"error-container\">\r\n      <ng-container *ngFor=\"let validation of validation_messages.descripcionServ\">\r\n          <div  class=\"error-message\" *ngIf=\"formgroup.get('descripcionServ').hasError(validation.type) && (formgroup.get('descripcionServ').dirty || formgroup.get('descripcionServ').touched)\">  \r\n            <span> <font size=\"2px\"> {{validation.message}}</font></span>\r\n           </div>\r\n        </ng-container>\r\n   </div>\r\n\r\n    <ion-button    size=\"default\" type=\"submit\"  expand=\"block\" [disabled]=\"!formgroup.valid\">Ingresar Solicitud</ion-button>\r\n \r\n  </div>\r\n    <!--************************************************************************************-->\r\n    <div style=\"justify-content: center;\" *ngSwitchCase=\"'3'\">\r\n      \r\n        <div>Descripción del Servicio:</div><p></p>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Valor Declarado:$</ion-label>\r\n           <ion-input autofocus=\"true\" type=\"number\"formControlName=\"valorDeclarado\"></ion-input>\r\n         <div class=\"error-container\">\r\n           <ng-container *ngFor=\"let validation of validation_messages.valorDeclarado\">\r\n             <div  class=\"error-message\" *ngIf=\"formgroup.get('valorDeclarado').hasError(validation.type) && (formgroup.get('valorDeclarado').dirty || formgroup.get('valorDeclarado').touched)\">  \r\n               <span> <font size=\"2px\"> {{validation.message}}</font></span>\r\n             </div>\r\n           </ng-container>\r\n         </div>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Detalle:</ion-label>\r\n          <ion-textarea rows=\"1\" cols=\"5\" font-size=\"2px\"  formControlName=\"descripcionServ\"></ion-textarea>\r\n         </ion-item>\r\n        <div class=\"error-container\">\r\n          <ng-container *ngFor=\"let validation of validation_messages.descripcionServ\">\r\n              <div  class=\"error-message\" *ngIf=\"formgroup.get('descripcionServ').hasError(validation.type) && (formgroup.get('descripcionServ').dirty || formgroup.get('descripcionServ').touched)\">  \r\n                <span> <font size=\"2px\"> {{validation.message}}</font></span>\r\n               </div>\r\n            </ng-container>\r\n       </div>\r\n       <ion-button    size=\"default\" type=\"submit\"  expand=\"block\" [disabled]=\"!formgroup.valid\">Ingresar Solicitud</ion-button>\r\n      </div>\r\n     <!--************************************************************************************-->\r\n    <div style=\"justify-content: center;\" *ngSwitchDefault></div>\r\n </div>\r\n \r\n <ion-card *ngIf=\"photo\">\r\n  <ion-card-content>\r\n    <img [src]=\"photo\">\r\n  </ion-card-content>\r\n</ion-card>\r\n</form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/global/pages/solicitud/solicitud.page.scss":
/*!************************************************************!*\
  !*** ./src/app/global/pages/solicitud/solicitud.page.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-background-color {\n  --background: #0000ff; }\n\n.error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px; }\n\n.error-container .error-message ion-icon {\n    -webkit-padding-end: calc(var(--page-margin) / 2);\n            padding-inline-end: calc(var(--page-margin) / 2); }\n\ninput[type=\"file\"] {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL3BhZ2VzL3NvbGljaXR1ZC9EOlxcUHJveWVjdG9zLUlvbmljXFxBcHBFbnRyZWdhcy9zcmNcXGFwcFxcZ2xvYmFsXFxwYWdlc1xcc29saWNpdHVkXFxzb2xpY2l0dWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQWEsRUFBQTs7QUFFakI7RUFFTSx3Q0FBd0M7RUFDeEMsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZSxFQUFBOztBQU5yQjtJQVNRLGlEQUFnRDtZQUFoRCxnREFBZ0QsRUFBQTs7QUFJeEQ7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9nbG9iYWwvcGFnZXMvc29saWNpdHVkL3NvbGljaXR1ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDAwZmY7XHJcbn1cclxuLmVycm9yLWNvbnRhaW5lciB7XHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/global/pages/solicitud/solicitud.page.ts":
/*!**********************************************************!*\
  !*** ./src/app/global/pages/solicitud/solicitud.page.ts ***!
  \**********************************************************/
/*! exports provided: SolicitudPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolicitudPage", function() { return SolicitudPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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







var Camera = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Camera;
var SolicitudPage = /** @class */ (function () {
    function SolicitudPage(formBuilder, HttpClient, router, activatedRoute, alertController, modalCtrl, sanitizer, platform) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.HttpClient = HttpClient;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.submitted = false;
        this.recibirDatosOrigen = "";
        this.recibirDatosDestino = "";
        this.descripcionServ = "";
        this.recibirDatosOlng = "";
        this.recibirDatosOlat = "";
        this.recibirDatosDlng = "";
        this.recibirDatosDlat = "";
        this.distServ = "";
        this.tipo = 0;
        this.validation_messages = {
            'valorDeclarado': [
                { type: 'required', message: 'Favor ingrese el costo del producto.' },
            ],
            'descripcionServ': [
                { type: 'required', message: 'Favor ingrese una descricion para el servicio' },
            ],
        };
        this.activatedRoute.queryParams.subscribe(function (params) {
            console.log(params);
            /*  if(params && params.datos){
                this.user=JSON.parse(params.datos);
                console.log(this.user, 'si llegue')
              }*/
            _this.recibirDatosOrigen = params['origenServ'],
                _this.recibirDatosOlng = params['Olng'],
                _this.recibirDatosOlat = params['Olat'],
                _this.recibirDatosDestino = params['destinoServ'],
                _this.recibirDatosDlng = params['Dlng'],
                _this.recibirDatosDlat = params['Dlat'],
                _this.distServ = params['distServ'];
            // this.user=localStorage.getItem("UserCod");
            _this.tipo = 0;
        });
    }
    SolicitudPage.prototype.ngOnInit = function () {
        this.formgroup = this.formBuilder.group({
            descripcionServ: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            valorDeclarado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]]
        }, {});
        if ((this.platform.is('mobile') && this.platform.is('hybrid')) || this.platform.is('desktop')) {
            this.isDesktop = true;
        }
    };
    /********************************************************************** */
    /**************   Guarda los datos de la solicitud   ****************** */
    SolicitudPage.prototype.onSubmit = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, dataPost, data;
            var _this = this;
            return __generator(this, function (_a) {
                this.submitted = true;
                if (this.formgroup.invalid) {
                    return [2 /*return*/];
                }
                url = "https://atrisoluciones.com.co/api/servicios";
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                headers.append('Access-Control-Allow-Origin', '*');
                headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
                headers.append('Access-Control-Allow-Headers', 'x-id');
                dataPost = {
                    'tipoServicio': this.tipo,
                    'origenServ': this.recibirDatosOrigen,
                    'destinoServ': this.recibirDatosDestino,
                    'largo': this.largo,
                    'ancho': this.ancho,
                    'alto': this.alto,
                    'peso': this.peso,
                    'cantidad': this.cantidad,
                    'valorDeclarado': this.formgroup.get('valorDeclarado').value,
                    'descripcionServ': this.formgroup.get('descripcionServ').value,
                    'origenLatitud': this.recibirDatosOlat,
                    'origenLongitud': this.recibirDatosOlng,
                    'destinoLatitud': this.recibirDatosDlat,
                    'destinoLongitud': this.recibirDatosDlng,
                    'distanciaServicio': this.distServ,
                    'userServ': localStorage.getItem("UserCod"),
                };
                data = this.HttpClient.post(url, dataPost, { headers: headers, responseType: 'text' });
                data.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var info, alert_1, alert_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                info = JSON.parse(data);
                                if (!(info['code'] == "200")) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.alertController.create({
                                        header: 'Solicitud',
                                        message: "Solicitud creada correctamente",
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
                                    message: "Solicitud no creada correctamente, se presento un erro",
                                    buttons: ['Ok']
                                })];
                            case 4:
                                alert_2 = _a.sent();
                                return [4 /*yield*/, alert_2.present()];
                            case 5:
                                _a.sent();
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
    Object.defineProperty(SolicitudPage.prototype, "frm", {
        //******************************************************************** */
        get: function () { return this.formgroup.controls; },
        enumerable: true,
        configurable: true
    });
    //******************************************************************** */
    SolicitudPage.prototype.presentAlertRadioTipo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Tipos de servicio',
                            inputs: [
                                {
                                    name: 'radio1',
                                    type: 'radio',
                                    label: 'Cajas',
                                    value: '1 Cajas',
                                },
                                {
                                    name: 'radio2',
                                    type: 'radio',
                                    label: 'Sobres o Paquetes',
                                    value: '2 Sobres o Paquetes'
                                },
                                {
                                    name: 'radio3',
                                    type: 'radio',
                                    label: 'Otros',
                                    value: '3 Otros'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (data) {
                                        console.log('Confirm Cancel', data);
                                        _this.estadoBtn = '0';
                                    }
                                }, {
                                    text: 'Aceptar',
                                    handler: function (data) {
                                        console.log('Confirm Ok', data.substr(0));
                                        _this.estadoBtn = data.substr(0, 1);
                                        if (_this.estadoBtn == "1") {
                                            _this.presentAlertPromptCjas('', '', '', '', '');
                                        }
                                        if (_this.estadoBtn == "2") {
                                            _this.presentAlertPromptSbres('', '');
                                        }
                                        if (_this.estadoBtn == "3") {
                                            setTimeout(function () {
                                                _this.tipo = 3;
                                            }, 280);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        return [2 /*return*/];
                }
            });
        });
    };
    //****************************************************************************************************** */
    SolicitudPage.prototype.presentAlertPromptCjas = function (largo, ancho, alto, peso, cantidad) {
        return __awaiter(this, void 0, void 0, function () {
            var alert, data, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ingrese la información de sus cajas',
                            inputs: [
                                {
                                    name: 'largo',
                                    type: 'number',
                                    value: largo,
                                    placeholder: 'Largo Cms:'
                                },
                                {
                                    name: 'ancho',
                                    type: 'number',
                                    value: ancho,
                                    placeholder: 'Ancho Cms:'
                                },
                                {
                                    name: 'alto',
                                    type: 'number',
                                    value: alto,
                                    placeholder: 'Alto Cms:'
                                },
                                {
                                    name: 'peso',
                                    type: 'number',
                                    value: peso,
                                    placeholder: 'Peso Kg:',
                                },
                                {
                                    name: 'cantidad',
                                    type: 'number',
                                    value: cantidad,
                                    placeholder: 'Cantidad:'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Aceptar',
                                    handler: function (alert) {
                                        if (alert['largo'] == '' || alert['ancho'] == '' || alert['alto'] == '' || alert['peso'] == '' || alert['cantidad'] == '') {
                                            _this.presentAlertPromptCjas(alert['largo'], alert['ancho'], alert['alto'], alert['peso'], alert['cantidad']);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        result = Object.values(data);
                        this.doRefreshCjas('false', result[0]['largo'], result[0]['ancho'], result[0]['alto'], result[0]['peso'], result[0]['cantidad']);
                        return [2 /*return*/];
                }
            });
        });
    };
    /************************************************************************************* */
    SolicitudPage.prototype.doRefreshCjas = function (event, largo, ancho, alto, peso, cantidad) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.tipo = 1;
                    _this.largo = largo;
                    _this.ancho = ancho;
                    _this.alto = alto;
                    _this.cantidad = cantidad;
                    _this.peso = peso;
                }, 280);
                return [2 /*return*/];
            });
        });
    };
    //************************************************************ */
    SolicitudPage.prototype.presentAlertPromptSbres = function (cantidad, peso) {
        return __awaiter(this, void 0, void 0, function () {
            var alert, data, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Ingrese la información de sus Sobre o paquetes',
                            inputs: [
                                {
                                    name: 'cantidad',
                                    type: 'number',
                                    value: cantidad,
                                    placeholder: 'Cantidad:',
                                },
                                {
                                    name: 'peso',
                                    type: 'number',
                                    value: peso,
                                    placeholder: 'Peso Kg:'
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Aceptar',
                                    handler: function (alert) {
                                        //console.log('Confirm Ok', alert); 
                                        if (alert['cantidad'] == '' || alert['peso'] == '') {
                                            console.log(alert['cantidad'], alert['peso']);
                                            _this.presentAlertPromptSbres(alert['cantidad'], alert['peso']);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        result = Object.values(data);
                        this.doRefreshSbres('false', result[0]['cantidad'], result[0]['peso']);
                        return [2 /*return*/];
                }
            });
        });
    };
    /************************************************************************** */
    SolicitudPage.prototype.doRefreshSbres = function (event, cantidad, peso) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.tipo = 2;
                    _this.cantidad = cantidad;
                    _this.peso = peso;
                }, 280);
                return [2 /*return*/];
            });
        });
    };
    /*************************************************************************** */
    /***** opcion de fotogragia  */
    SolicitudPage.prototype.alertRadioTipoFoto = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var alert, data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Seleccione una opción para la imagen',
                            inputs: [
                                {
                                    name: 'radio1',
                                    type: 'radio',
                                    label: 'Cámara celular',
                                    value: '1',
                                },
                                {
                                    name: 'radio2',
                                    type: 'radio',
                                    label: 'Galería celular',
                                    value: '2'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancelar',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (data) {
                                        console.log('Confirm Cancel', data);
                                        _this.estadoBtn = '0';
                                    }
                                }, {
                                    text: 'Aceptar',
                                    handler: function (data) {
                                        console.log('Confirm Ok', data.substr(0));
                                        _this.estadoBtn = data.substr(0, 1);
                                        if (_this.estadoBtn == "1") {
                                            _this.takePicture('camara');
                                        }
                                        if (_this.estadoBtn == "2") {
                                            _this.onFileChoose(event);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, alert.onDidDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        return [2 /*return*/];
                }
            });
        });
    };
    /****************************************************************************** */
    /**tomar foto*** */
    SolicitudPage.prototype.takePicture = function (type) {
        return __awaiter(this, void 0, void 0, function () {
            var image;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Capacitor"].isPluginAvailable('Camera') || (this.isDesktop && type === 'gallery')) {
                            this.filePickerRef.nativeElement.click();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Camera.getPhoto({
                                quality: 100,
                                allowEditing: false,
                                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].DataUrl,
                                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Prompt
                            })];
                    case 1:
                        image = _a.sent();
                        //let nameImg="https://img.atrisoluciones.com.co/img/primerfoto.png"
                        this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
                        console.log(this.photo, 'photo');
                        return [2 /*return*/];
                }
            });
        });
    };
    /****************************************************************************** */
    /*****Obtener foto desde la galeria*** */
    SolicitudPage.prototype.onFileChoose = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            console.log('File format not supported');
            return;
        }
        reader.onload = function () {
            _this.photo = reader.result.toString();
        };
        reader.readAsDataURL(file);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textDetalle'),
        __metadata("design:type", Object)
    ], SolicitudPage.prototype, "sInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('filePicker'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SolicitudPage.prototype, "filePickerRef", void 0);
    SolicitudPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solicitud',
            template: __webpack_require__(/*! ./solicitud.page.html */ "./src/app/global/pages/solicitud/solicitud.page.html"),
            styles: [__webpack_require__(/*! ./solicitud.page.scss */ "./src/app/global/pages/solicitud/solicitud.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
    ], SolicitudPage);
    return SolicitudPage;
}());



/***/ })

}]);
//# sourceMappingURL=global-pages-solicitud-solicitud-module.js.map