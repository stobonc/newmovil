(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["global-pages-login-login-module"],{

/***/ "./src/app/global/pages/login/login.module.ts":
/*!****************************************************!*\
  !*** ./src/app/global/pages/login/login.module.ts ***!
  \****************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/global/pages/login/login.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/login/login.page.html":
/*!****************************************************!*\
  !*** ./src/app/global/pages/login/login.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>Login</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n     \n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n          <ion-list class=\"inputs-list\" lines=\"full\">\n            <ion-item class=\"input-item\">\n              <ion-label position=\"floating\">Correo</ion-label>\n              <ion-input type=\"email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n\n            </ion-item>\n                <div class=\"error-container\">\n                  <ng-container *ngFor=\"let validation of validation_messages.email\">\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon>\n                    <span><font size=\"2px\">{{ validation.message }}</font></span>\n                    </div>\n                  </ng-container>\n                </div>\n\t\n                <ion-item class=\"input-item\">\n                  <ion-label position=\"floating\">Clave</ion-label>\n                  <app-show-hide-password>\n                    \n                    <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n                  </app-show-hide-password>\n                </ion-item>\n                <div class=\"error-container\">\n                  <ng-container *ngFor=\"let validation of validation_messages.password\">\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                      <ion-icon name=\"information-circle-outline\"></ion-icon>\n                      <span><font size=\"2px\">{{ validation.message }}</font></span>\n                    </div>\n                  </ng-container>\n                </div>\n                    <ion-col>\n                      <ion-button size=\"large\" type=\"submit\"  expand=\"block\" [disabled]=\"!loginForm.valid\">Ingresar</ion-button>   \n                    </ion-col>\n            </ion-list> \n          </form>\n         \n          <ion-button class=\"signup-btn\" fill=\"clear\" [routerLink]=\"['/registrousuario']\">\n            Registrarme!\n          </ion-button>\n          <ion-button fill=\"clear\" [routerLink]=\"['/truckservices']\">\n            Recuperar Contraseña!\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/global/pages/login/login.page.scss":
/*!****************************************************!*\
  !*** ./src/app/global/pages/login/login.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "page-login ion-item {\n  --background: #3880ff;\n  --color: #fff; }\n\npage-login ion-button {\n  --background: #062f77; }\n\n:host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade); }\n\n.login-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin); }\n\n.login-content .auth-title {\n    color: var(--ion-color-dark);\n    font-weight: bold;\n    margin-top: calc(var(--page-margin) / 2);\n    margin-bottom: calc(var(--page-margin) * (3/2));\n    letter-spacing: 0.6px; }\n\n.login-content .inputs-list {\n    --ion-item-background: var(--page-background); }\n\n.login-content .inputs-list .input-item {\n      --padding-start: 0px;\n      --padding-end: 0px;\n      --inner-padding-end: 0px; }\n\n.login-content .inputs-list .error-container .error-message {\n      margin: calc(var(--page-margin) / 2) 0px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      color: var(--ion-color-danger);\n      font-size: 14px; }\n\n.login-content .inputs-list .error-container .error-message ion-icon {\n        -webkit-padding-end: calc(var(--page-margin) / 2);\n                padding-inline-end: calc(var(--page-margin) / 2); }\n\n.login-content .login-btn {\n    margin: calc(var(--page-margin) / 2) 0px; }\n\n.login-content .other-auth-options-row {\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n            align-items: center; }\n\n.login-content .other-auth-options-row .forgot-btn {\n      --color: var(--ion-color-medium);\n      margin: 0px; }\n\n.login-content .other-auth-options-row .signup-btn {\n      --color: var(--ion-color-secondary);\n      margin: 0px; }\n\n.login-content .social-auth-options .options-divider {\n    color: var(--ion-color-medium);\n    margin: var(--page-margin) 0px;\n    text-align: center; }\n\n.login-content .social-auth-options .social-auth-btn {\n    margin: 0px; }\n\n.login-content .social-auth-options .social-auth-btn:not(:first-child) {\n      margin-top: var(--page-margin); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2xvYmFsL3BhZ2VzL2xvZ2luL0Q6XFxQcm95ZWN0b3MtSW9uaWNcXEFwcEVudHJlZ2FzL3NyY1xcYXBwXFxnbG9iYWxcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEscUJBQWE7RUFDYixhQUFRLEVBQUE7O0FBSGhCO0VBTVEscUJBQWEsRUFBQTs7QUFHckI7RUFDSSxzQ0FBYztFQUNkLDhDQUFrQixFQUFBOztBQUlwQjtFQUNFLG9DQUFhO0VBQ2IsbUNBQWdCO0VBQ2hCLGlDQUFjO0VBQ2QsaUNBQWM7RUFDZCxvQ0FBaUIsRUFBQTs7QUFMbkI7SUFRSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLHdDQUF3QztJQUN4QywrQ0FBK0M7SUFDL0MscUJBQXFCLEVBQUE7O0FBWnpCO0lBZ0JJLDZDQUFzQixFQUFBOztBQWhCMUI7TUFtQk0sb0JBQWdCO01BQ2hCLGtCQUFjO01BQ2Qsd0JBQW9CLEVBQUE7O0FBckIxQjtNQTBCUSx3Q0FBd0M7TUFDeEMsb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsZUFBZSxFQUFBOztBQTlCdkI7UUFpQ1UsaURBQWdEO2dCQUFoRCxnREFBZ0QsRUFBQTs7QUFqQzFEO0lBd0NJLHdDQUF3QyxFQUFBOztBQXhDNUM7SUE0Q0kseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5Qix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7O0FBN0N2QjtNQWdETSxnQ0FBUTtNQUVSLFdBQVcsRUFBQTs7QUFsRGpCO01Bc0RNLG1DQUFRO01BRVIsV0FBVyxFQUFBOztBQXhEakI7SUE4RE0sOEJBQThCO0lBQzFCLDhCQUE4QjtJQUM5QixrQkFBa0IsRUFBQTs7QUFoRTVCO0lBb0VNLFdBQVcsRUFBQTs7QUFwRWpCO01BdUVRLDhCQUE4QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ2xvYmFsL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInBhZ2UtbG9naW57XHJcbiAgICBpb24taXRlbXtcclxuICAgICAgICAtLWJhY2tncm91bmQ6ICMzODgwZmY7XHJcbiAgICAgICAgLS1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMDYyZjc3O1xyXG4gICAgfVxyXG59XHJcbjpob3N0IHtcclxuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xyXG4gICAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXHJcbiAgLmxvZ2luLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gICAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLXBhZGRpbmctZW5kOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XHJcbiAgXHJcbiAgICAuYXV0aC10aXRsZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqICgzLzIpKTtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNnB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlucHV0cy1saXN0IHtcclxuICAgICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xyXG4gIFxyXG4gICAgICAuaW5wdXQtaXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuZXJyb3ItY29udGFpbmVyIHtcclxuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgXHJcbiAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5sb2dpbi1idG4ge1xyXG4gICAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm90aGVyLWF1dGgtb3B0aW9ucy1yb3cge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICAgIC5mb3Jnb3QtYnRuIHtcclxuICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICBcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc2lnbnVwLWJ0biB7XHJcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgXHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBcclxuICAgIC5zb2NpYWwtYXV0aC1vcHRpb25zIHtcclxuICAgICAgLm9wdGlvbnMtZGl2aWRlciB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICAuc29jaWFsLWF1dGgtYnRuIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICBcclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/global/pages/login/login.page.ts":
/*!**************************************************!*\
  !*** ./src/app/global/pages/login/login.page.ts ***!
  \**************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
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






var Network = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].Network;
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder, router, httpClient, alertController, loadingCtrl, menu) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.httpClient = httpClient;
        this.alertController = alertController;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.submitted = false;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'El correo es requerido.' },
                { type: 'pattern', message: 'Entre un correo valido.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' }
            ]
        };
    }
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
        }, {});
        this.getStatus();
    };
    LoginPage.prototype.ionViewDidEnter = function () {
        this.getStatus();
    };
    LoginPage.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, estado, alert_1, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 6, , 7]);
                        _a = this;
                        return [4 /*yield*/, Network.getStatus()];
                    case 1:
                        _a.status = _b.sent();
                        estado = this.status['connected'];
                        console.log(this.status);
                        if (!(estado === false)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Conexion Internet',
                                message: 'Favor revisar tu conexión a internet...',
                                buttons: ['Ok']
                            })];
                    case 2:
                        alert_1 = _b.sent();
                        this.router.navigateByUrl('/walkthrough');
                        return [4 /*yield*/, alert_1.present()];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        console.log('Conexion a Internet TRUE');
                        _b.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _b.sent();
                        console.log("Error", e_1);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.onSubmit = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var url, headers, dataPost, data;
            var _this = this;
            return __generator(this, function (_a) {
                this.submitted = true;
                // Stop if the form validation has failed
                if (this.loginForm.invalid) {
                    return [2 /*return*/];
                }
                url = "https://atrisoluciones.com.co/api/usuarios/ingresar";
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                headers.append("Accept", 'application/json');
                headers.append('Content-Type', 'application/json');
                headers.append('Access-Control-Allow-Origin', '*');
                dataPost = {
                    'user': this.loginForm.get('email').value,
                    'password': this.loginForm.get('password').value
                };
                data = this.httpClient.post(url, dataPost, { headers: headers, responseType: 'text' });
                data.subscribe(function (data) { return __awaiter(_this, void 0, void 0, function () {
                    var respuesta, alert_2, alert_3;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                console.log(data);
                                respuesta = JSON.parse(data);
                                if (!(respuesta['estado'] == 1)) return [3 /*break*/, 3];
                                return [4 /*yield*/, this.alertController.create({
                                        header: 'Ingresar',
                                        message: 'El usuario está inactivo',
                                        buttons: ['Aceptar']
                                    })];
                            case 1:
                                alert_2 = _a.sent();
                                return [4 /*yield*/, alert_2.present()];
                            case 2:
                                _a.sent();
                                return [3 /*break*/, 7];
                            case 3:
                                if (!(respuesta['resultPass'] == true)) return [3 /*break*/, 4];
                                localStorage.setItem("UserCod", respuesta['User']);
                                this.router.navigate(['/inicio']);
                                return [3 /*break*/, 7];
                            case 4:
                                console.log(respuesta['estado']);
                                return [4 /*yield*/, this.alertController.create({
                                        header: 'Ingresar',
                                        message: 'El usuario o contraseña no son correctos',
                                        buttons: ['Aceptar']
                                    })];
                            case 5:
                                alert_3 = _a.sent();
                                return [4 /*yield*/, alert_3.present()];
                            case 6:
                                _a.sent();
                                _a.label = 7;
                            case 7: return [2 /*return*/];
                        }
                    });
                }); });
                this.submitted = false;
                this.loginForm.reset();
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(LoginPage.prototype, "frm", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/global/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/global/pages/login/login.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=global-pages-login-login-module.js.map