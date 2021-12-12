(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-pages-registrousuario-registrousuario-module"],{

/***/ "./src/app/global/pages/registrousuario/registrousuario.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/global/pages/registrousuario/registrousuario.module.ts ***!
  \************************************************************************/
/*! exports provided: RegistrousuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrousuarioPageModule", function() { return RegistrousuarioPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registrousuario_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrousuario.page */ "./src/app/global/pages/registrousuario/registrousuario.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _registrousuario_page__WEBPACK_IMPORTED_MODULE_5__["RegistrousuarioPage"]
    }
];
var RegistrousuarioPageModule = /** @class */ (function () {
    function RegistrousuarioPageModule() {
    }
    RegistrousuarioPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_registrousuario_page__WEBPACK_IMPORTED_MODULE_5__["RegistrousuarioPage"]]
        })
    ], RegistrousuarioPageModule);
    return RegistrousuarioPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/registrousuario/registrousuario.page.html":
/*!************************************************************************!*\
  !*** ./src/app/global/pages/registrousuario/registrousuario.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n       Registro usuarios\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n  \n      <ion-content padding=\"true\" justify-content-center>\n        <form [formGroup]=\"formgroup\" (ngSubmit)=\"onSubmit(formgroup.value)\">\n          <ion-item>\n            <ion-label position=\"floating\">Email</ion-label>\n            <ion-input formControlName=\"email\"></ion-input>\n          </ion-item>\n      \n              <div *ngIf=\"submitted && frm.email.errors\" class=\"invalid-feedback\">\n                <ion-item *ngIf=\"frm.email.errors.required\">\n                    <p style=\"color:red\">El correo es requerido!</p>\n                </ion-item>\n                <ion-item *ngIf=\"frm.email.errors.email\">\n                    <p style=\"color:red\">El correo electrónico no es valido!</p>\n                </ion-item>\n              </div>\t\t\n      \n              <ion-item>\n                  <ion-label position=\"floating\">Nombre</ion-label>\n                  <ion-input formControlName=\"nombre\"></ion-input>\n                </ion-item>\n            \n                    <div *ngIf=\"submitted && frm.nombre.errors\" class=\"invalid-feedback\">\n                      <ion-item *ngIf=\"frm.nombre.errors.required\">\n                          <p style=\"color:red\">El nombre es requerido!</p>\n                      </ion-item>\n                      <ion-item *ngIf=\"frm.nombre.errors.minlength\">\n                          <p style=\"color:red\">El Nombre tiene menos de 6 caracteres!</p>\n                      </ion-item>\n                    </div>\n\n                    <ion-item>\n                      <ion-label position=\"floating\">Cedula</ion-label>\n                      <ion-input type=\"number\"formControlName=\"cedula\"></ion-input>\n                   </ion-item> \n                   <div *ngIf=\"submitted && frm.cedula.errors\" class=\"invalid-feedback\">\n                      <ion-item *ngIf=\"frm.cedula.errors.required\">\n                          <p style=\"color:red\">La cedula es requerida!</p>\n                      </ion-item>\n                      <ion-item *ngIf=\"frm.cedula.errors.minlength\">\n                          <p style=\"color:red\">la cedula tiene menos de 5 caracteres!</p>\n                      </ion-item>\n                    </div>\n\n              <ion-item>\n                  <ion-label position=\"floating\">Telefono</ion-label>\n                  <ion-input type=\"number\"formControlName=\"telefono\"></ion-input>\n               </ion-item> \n               <div *ngIf=\"submitted && frm.telefono.errors\" class=\"invalid-feedback\">\n                  <ion-item *ngIf=\"frm.telefono.errors.required\">\n                      <p style=\"color:red\">El Telefono es requerido!</p>\n                  </ion-item>\n                  <ion-item *ngIf=\"frm.telefono.errors.minlength\">\n                      <p style=\"color:red\">El Telefono tiene menos de 6 caracteres!</p>\n                  </ion-item>\n                </div>\n\n                <ion-item>\n                <ion-label position=\"floating\">Ciudad</ion-label>\n                  <ion-input type=\"text\"formControlName=\"ciudad\"></ion-input>\n               </ion-item> \n               <div *ngIf=\"submitted && frm.ciudad.errors\" class=\"invalid-feedback\">\n                  <ion-item *ngIf=\"frm.ciudad.errors.required\">\n                      <p style=\"color:red\">La ciudad es requerida!</p>\n                  </ion-item>\n                 \n                </div>\n          <ion-item>\n            <ion-label position=\"floating\">Clave</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n      \n              <div *ngIf=\"submitted && frm.password.errors\" class=\"invalid-feedback\">\n                <ion-item *ngIf=\"frm.password.errors.required\">\n                    <p style=\"color:red\">La clave es requerida</p>\n                </ion-item>\n                <ion-item *ngIf=\"frm.password.errors.minlength\">\n                    <p style=\"color:red\">La clave debe contener 6 caracteres minimo!</p>\n                </ion-item>\n              </div>\n      \n          <ion-grid>\n            <ion-row>\n              <ion-col>\n                <ion-button size=\"large\" type=\"submit\"  expand=\"block\" [disabled]=\"!formgroup.valid\">Ingresar Registro</ion-button>   \n              </ion-col>\n              <ion-col>\n             <ion-button class=\"signup-btn\" fill=\"clear\" [routerLink]=\"['/login']\">\n              Ingresar Login</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n      </ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/global/pages/registrousuario/registrousuario.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/global/pages/registrousuario/registrousuario.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".avatar {\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL3BhZ2VzL3JlZ2lzdHJvdXN1YXJpby9EOlxcUHJveWVjdG9zLUlvbmljXFxBcHBFbnRyZWdhcy9zcmNcXGFwcFxcZ2xvYmFsXFxwYWdlc1xccmVnaXN0cm91c3VhcmlvXFxyZWdpc3Ryb3VzdWFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsL3BhZ2VzL3JlZ2lzdHJvdXN1YXJpby9yZWdpc3Ryb3VzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF2YXRhcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuIH0iXX0= */"

/***/ }),

/***/ "./src/app/global/pages/registrousuario/registrousuario.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/global/pages/registrousuario/registrousuario.page.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrousuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrousuarioPage", function() { return RegistrousuarioPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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





var RegistrousuarioPage = /** @class */ (function () {
    function RegistrousuarioPage(formBuilder, router, httpClient, alertController) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.submitted = false;
        this.registroData = {};
    }
    RegistrousuarioPage.prototype.ngOnInit = function () {
        this.formgroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(7)]],
            cedula: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]],
            ciudad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
        }, {});
    };
    RegistrousuarioPage.prototype.onSubmit = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, dataPost, data;
            var _this = this;
            return __generator(this, function (_a) {
                this.submitted = true;
                // Stop if the form validation has failed
                if (this.formgroup.invalid) {
                    return [2 /*return*/];
                }
                url = "https://atrisoluciones.com.co/api/usuarios";
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                headers.append('Access-Control-Allow-Origin', '*');
                headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
                headers.append('Access-Control-Allow-Headers', 'x-id');
                dataPost = {
                    'user': this.formgroup.get('email').value,
                    'email': this.formgroup.get('email').value,
                    'name': this.formgroup.get('nombre').value,
                    'telefono': this.formgroup.get('telefono').value,
                    'cedula': this.formgroup.get('cedula').value,
                    'ciudad': this.formgroup.get('ciudad').value,
                    'password': this.formgroup.get('password').value
                };
                data = this.httpClient.post(url, dataPost, { headers: headers, responseType: 'text' });
                data.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var info, alert_1, alert_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(data);
                                info = JSON.parse(data);
                                console.log(info['code']);
                                console.log(info['estado']);
                                if (!(info['estado'] == '1')) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.alertController.create({
                                        header: 'Registo de Usuario',
                                        message: "Usuario creado correctamente",
                                        buttons: ['Ok']
                                    })];
                            case 1:
                                alert_1 = _a.sent();
                                return [4 /*yield*/, alert_1.present()];
                            case 2:
                                _a.sent();
                                this.submitted = false;
                                this.formgroup.reset();
                                this.router.navigateByUrl('/login');
                                return [3 /*break*/, 6];
                            case 3: return [4 /*yield*/, this.alertController.create({
                                    header: 'Registro usuario',
                                    message: 'El registro no se realizo, intenta nuevamente',
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
                }); });
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(RegistrousuarioPage.prototype, "frm", {
        get: function () { return this.formgroup.controls; },
        enumerable: true,
        configurable: true
    });
    RegistrousuarioPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registrousuario',
            template: __webpack_require__(/*! ./registrousuario.page.html */ "./src/app/global/pages/registrousuario/registrousuario.page.html"),
            styles: [__webpack_require__(/*! ./registrousuario.page.scss */ "./src/app/global/pages/registrousuario/registrousuario.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
    ], RegistrousuarioPage);
    return RegistrousuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=global-pages-registrousuario-registrousuario-module.js.map