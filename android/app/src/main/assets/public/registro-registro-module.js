(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registro-registro-module"],{

/***/ "/voj":
/*!************************************************!*\
  !*** ./src/app/auth/registro/registro.page.ts ***!
  \************************************************/
/*! exports provided: RegistroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPage", function() { return RegistroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registro.page.html */ "C4xl");
/* harmony import */ var _registro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss */ "009Z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "N/25");






let RegistroPage = class RegistroPage {
    constructor(authService) {
        this.authService = authService;
        this.usuario = {
            nombre: '',
            apellidos: 'aloha',
            email: '',
            nickname: 'bot1',
            password: '',
            avatar: '',
            provincia: 1
        };
    }
    ngOnInit() {
    }
    registrar() {
        console.log(this.usuario);
        this.authService.registrar(this.usuario).subscribe(() => {
            console.log('Usuario registrado');
        });
    }
    obtenerFotoCamara() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const photo = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Camera"].getPhoto({
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Camera,
                quality: 90,
                height: 640,
                width: 640,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].DataUrl
            });
            this.usuario.avatar = photo.dataUrl;
        });
    }
    obtenerFotoGaleria() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const photo = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Camera"].getPhoto({
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraSource"].Photos,
                height: 640,
                width: 640,
                allowEditing: true,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["CameraResultType"].DataUrl
            });
            this.usuario.avatar = photo.dataUrl;
        });
    }
};
RegistroPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
RegistroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registro',
        template: _raw_loader_registro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistroPage);



/***/ }),

/***/ "009Z":
/*!**************************************************!*\
  !*** ./src/app/auth/registro/registro.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "C4xl":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registro/registro.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"tertiary\">\n    <ion-buttons slot=\"start\">\n    </ion-buttons>\n    <ion-title>Registro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <form #registerForm=\"ngForm\" (ngSubmit)=\"registrar()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input name=\"name\" required [(ngModel)]=\"usuario.nombre\" #nameModel=\"ngModel\"></ion-input>\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"nameModel.dirty && nameModel.valid\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"email\" name=\"email\" required [(ngModel)]=\"usuario.email\" #emailModel=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"></ion-input>\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"emailModel.dirty && emailModel.valid\"></ion-icon>\n      </ion-item>\n\n      <div ngModelGroup=\"passwordGroup\" #passwordGroupModel=\"ngModelGroup\" appMatch=\"password,password2\">\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" name=\"password\" minlength=\"4\" required [(ngModel)]=\"usuario.password\" #passwordModel=\"ngModel\"></ion-input>\n          <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"passwordModel.dirty && passwordModel.valid\"></ion-icon>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" name=\"password2\" minlength=\"4\" required [(ngModel)]=\"password2\" #passwordModel2=\"ngModel\"></ion-input>\n          <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"passwordModel2.dirty && passwordGroupModel.valid\"></ion-icon>\n        </ion-item>\n      </div>\n\n      <ion-item>\n        <ion-label position=\"inset\">Avatar</ion-label>\n        <ion-button color=\"secondary\" (click)=\"obtenerFotoCamara()\">\n          <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n          Camera\n        </ion-button>\n        <ion-button color=\"tertiary\" (click)=\"obtenerFotoGaleria()\">\n          <ion-icon name=\"images\" slot=\"start\"></ion-icon>\n          Gallery\n        </ion-button>\n      </ion-item>\n    </ion-list>\n\n    <ion-img [src]=\"usuario.avatar\" *ngIf=\"usuario.avatar\"></ion-img>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"registerForm.invalid || !usuario.avatar\">\n            <ion-icon name=\"paper-plane\" slot=\"start\"></ion-icon>\n            Register\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"danger\" expand=\"block\" fill=\"outline\" [routerLink]=\"['/auth/login']\" [routerDirection]=\"'root'\">\n            <ion-icon name=\"arrow-undo\" slot=\"start\"></ion-icon>\n            Cancel\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ "RyoJ":
/*!**************************************************!*\
  !*** ./src/app/auth/registro/registro.module.ts ***!
  \**************************************************/
/*! exports provided: RegistroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroPageModule", function() { return RegistroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registro.page */ "/voj");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_5__["RegistroPage"]
    }
];
let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_5__["RegistroPage"]]
    })
], RegistroPageModule);



/***/ })

}]);
//# sourceMappingURL=registro-registro-module.js.map