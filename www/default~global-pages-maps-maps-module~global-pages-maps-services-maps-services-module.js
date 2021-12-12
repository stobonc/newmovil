(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~global-pages-maps-maps-module~global-pages-maps-services-maps-services-module"],{

/***/ "./src/app/global/pages/animationenter.ts":
/*!************************************************!*\
  !*** ./src/app/global/pages/animationenter.ts ***!
  \************************************************/
/*! exports provided: myEnterAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myEnterAnimation", function() { return myEnterAnimation; });
function myEnterAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper'));
    wrapperAnimation
        .fromTo('transform', 'scaleX(0.1) scaleY(0.1)', 'translateX(0%) scaleX(1) scaleY(1)')
        .fromTo('opacity', 0, 1);
    backdropAnimation.fromTo('opacity', 0.01, 0.4);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('cubic-bezier(0.36,0.66,0.04,1)')
        .duration(400)
        .beforeAddClass('show-modal')
        .add(backdropAnimation)
        .add(wrapperAnimation));
}


/***/ }),

/***/ "./src/app/global/pages/animationleave.ts":
/*!************************************************!*\
  !*** ./src/app/global/pages/animationleave.ts ***!
  \************************************************/
/*! exports provided: myLeaveAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myLeaveAnimation", function() { return myLeaveAnimation; });
function myLeaveAnimation(AnimationC, baseEl) {
    var baseAnimation = new AnimationC();
    var backdropAnimation = new AnimationC();
    backdropAnimation.addElement(baseEl.querySelector('ion-backdrop'));
    var wrapperAnimation = new AnimationC();
    var wrapperEl = baseEl.querySelector('.modal-wrapper');
    wrapperAnimation.addElement(wrapperEl);
    var wrapperElRect = wrapperEl.getBoundingClientRect();
    wrapperAnimation.beforeStyles({ 'opacity': 1 })
        .fromTo('translateX', '0%', window.innerWidth - wrapperElRect.left + "px");
    backdropAnimation.fromTo('opacity', 0.4, 0.0);
    return Promise.resolve(baseAnimation
        .addElement(baseEl)
        .easing('ease-out')
        .duration(250)
        .add(backdropAnimation)
        .add(wrapperAnimation));
}


/***/ }),

/***/ "./src/app/global/pages/modal-search-ori/modal-search-ori.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/global/pages/modal-search-ori/modal-search-ori.module.ts ***!
  \**************************************************************************/
/*! exports provided: ModalSearchOriPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSearchOriPageModule", function() { return ModalSearchOriPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_search_ori_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal-search-ori.page */ "./src/app/global/pages/modal-search-ori/modal-search-ori.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import { Routes, RouterModule } from '@angular/router';


/*
const routes: Routes = [
  {
    path: '',
    component: ModalSearchOriPage
  }
];*/
var ModalSearchOriPageModule = /** @class */ (function () {
    function ModalSearchOriPageModule() {
    }
    ModalSearchOriPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            ],
            declarations: [_modal_search_ori_page__WEBPACK_IMPORTED_MODULE_4__["ModalSearchOriPage"]]
        })
    ], ModalSearchOriPageModule);
    return ModalSearchOriPageModule;
}());



/***/ }),

/***/ "./src/app/global/pages/modal-search-ori/modal-search-ori.page.html":
/*!**************************************************************************!*\
  !*** ./src/app/global/pages/modal-search-ori/modal-search-ori.page.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n    <ion-back-button  defaultHref=\"/maps\" (click)=\"salirSinArg()\"></ion-back-button><font size=\"1px\">Atras</font>\n    </ion-buttons>\n    <ion-title><font size=\"3px\">{{ origenServ}}{{ destinoServ }}</font></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n            \n  <ion-searchbar  cancel-button-icon='md-arrow-back' [(ngModel)]=\"search\" #searchInput (ionChange)=\"searchDireccion()\"Placeholder=\"Ingrese lugar a buscar..\" autofocus=\"true\" ></ion-searchbar>\n\n<ion-list>\n  <div  *ngFor=\"let result of searchResult\">\n\n    <ion-item name=\"dato\" (click)=\"salirConArg(result)\" color=\"light\" expand=\"full\" fill=\"solid\">\n      {{ result.description}}\n    </ion-item>\n    \n  </div> \n\n</ion-list>\n\n <!--<ion-button expand =\"full\" (click)=\"salirSinArg()\" >Regresar</ion-button>\n<ion-button expand=\"full\" (click)=\"salirConArg($event)\" >Salir CON argumento</ion-button>-->\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/global/pages/modal-search-ori/modal-search-ori.page.scss":
/*!**************************************************************************!*\
  !*** ./src/app/global/pages/modal-search-ori/modal-search-ori.page.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsb2JhbC9wYWdlcy9tb2RhbC1zZWFyY2gtb3JpL21vZGFsLXNlYXJjaC1vcmkucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/global/pages/modal-search-ori/modal-search-ori.page.ts":
/*!************************************************************************!*\
  !*** ./src/app/global/pages/modal-search-ori/modal-search-ori.page.ts ***!
  \************************************************************************/
/*! exports provided: ModalSearchOriPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalSearchOriPage", function() { return ModalSearchOriPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
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


var ModalSearchOriPage = /** @class */ (function () {
    function ModalSearchOriPage(modalCtrl, platform) {
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.origenServ = "";
        this.destinoServ = "";
        this.distServ = "";
        this.search = '';
        this.dato = "";
        this.googleAutoComplete = new google.maps.places.AutocompleteService();
        this.searchResult = new Array();
        this.platform.backButton.subscribeWithPriority(10, function () {
            console.log('Handler was called!');
        });
    }
    ModalSearchOriPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                setTimeout(function () {
                    _this.sInput.setFocus();
                }, 280);
                return [2 /*return*/];
            });
        });
    };
    ModalSearchOriPage.prototype.searchDireccion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var service;
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.search.trim().length)
                    return [2 /*return*/];
                service = new google.maps.places.AutocompleteService();
                service.getPlacePredictions({ input: this.search, types: ['geocode'],
                    componentRestrictions: { country: 'co' } }, function (predictions, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        for (var i = 0, prediction; prediction = predictions[i]; i++) {
                            // results.innerHTML += '<li>' + prediction.description + '</li>';
                            _this.searchResult = predictions;
                        }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ModalSearchOriPage.prototype.salirSinArg = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.modalCtrl.dismiss({
                    'nombreUbicacion': ''
                });
                return [2 /*return*/];
            });
        });
    };
    ModalSearchOriPage.prototype.salirConArg = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log(event);
                if (this.opcion === '1') {
                    this.modalCtrl.dismiss({
                        'nombreUbicacion': event.description,
                        'id': event.place_id,
                        'opcion': '1',
                    });
                }
                else {
                    this.modalCtrl.dismiss({
                        'nombreUbicacion': event.description,
                        'id': event.place_id,
                        'opcion': '2',
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ModalSearchOriPage.prototype, "opcion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchInput'),
        __metadata("design:type", Object)
    ], ModalSearchOriPage.prototype, "sInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('addresstext'),
        __metadata("design:type", Object)
    ], ModalSearchOriPage.prototype, "addresstext", void 0);
    ModalSearchOriPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-search-ori',
            template: __webpack_require__(/*! ./modal-search-ori.page.html */ "./src/app/global/pages/modal-search-ori/modal-search-ori.page.html"),
            styles: [__webpack_require__(/*! ./modal-search-ori.page.scss */ "./src/app/global/pages/modal-search-ori/modal-search-ori.page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], ModalSearchOriPage);
    return ModalSearchOriPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~global-pages-maps-maps-module~global-pages-maps-services-maps-services-module.js.map