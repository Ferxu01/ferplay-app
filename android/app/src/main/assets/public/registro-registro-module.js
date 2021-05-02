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
/* harmony import */ var src_app_usuarios_services_provincia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/usuarios/services/provincia.service */ "kj20");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "N/25");







let RegistroPage = class RegistroPage {
    constructor(authService, provinciaService) {
        this.authService = authService;
        this.provinciaService = provinciaService;
        this.usuario = {
            nombre: '',
            apellidos: '',
            email: '',
            nickname: '',
            password: '',
            avatar: '',
            provincia: 1
        };
    }
    ngOnInit() {
        this.provinciaService.obtenerProvincias().subscribe(resp => {
            console.log(resp);
            this.provincias = resp;
        });
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
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: src_app_usuarios_services_provincia_service__WEBPACK_IMPORTED_MODULE_5__["ProvinciaService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n    <ion-buttons slot=\"start\">\r\n    </ion-buttons>\r\n    <ion-title>Registro</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <form #registerForm=\"ngForm\" (ngSubmit)=\"registrar()\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Name</ion-label>\r\n        <ion-input name=\"name\" required [(ngModel)]=\"usuario.nombre\" #nameModel=\"ngModel\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"nameModel.dirty && nameModel.valid\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Apellidos</ion-label>\r\n        <ion-input name=\"apellidos\" required [(ngModel)]=\"usuario.apellidos\" #apellidosModel=\"ngModel\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"apellidosModel.dirty && apellidosModel.valid\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Email</ion-label>\r\n        <ion-input type=\"email\" name=\"email\" required [(ngModel)]=\"usuario.email\" #emailModel=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"emailModel.dirty && emailModel.valid\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nickname</ion-label>\r\n        <ion-input name=\"nickname\" required [(ngModel)]=\"usuario.nickname\" #nicknameModel=\"ngModel\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"nicknameModel.dirty && nicknameModel.valid\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <div ngModelGroup=\"passwordGroup\" #passwordGroupModel=\"ngModelGroup\" appMatch=\"password,password2\">\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Password</ion-label>\r\n          <ion-input type=\"password\" name=\"password\" minlength=\"4\" required [(ngModel)]=\"usuario.password\" #passwordModel=\"ngModel\"></ion-input>\r\n          <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"passwordModel.dirty && passwordModel.valid\"></ion-icon>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-label position=\"floating\">Password</ion-label>\r\n          <ion-input type=\"password\" name=\"password2\" minlength=\"4\" required [(ngModel)]=\"password2\" #passwordModel2=\"ngModel\"></ion-input>\r\n          <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"passwordModel2.dirty && passwordGroupModel.valid\"></ion-icon>\r\n        </ion-item>\r\n      </div>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Provincia</ion-label>\r\n        <ion-select required #provinciaModel=\"ngModel\" name=\"provincia\" [(ngModel)]=\"usuario.provincia\">\r\n          <ion-select-option value=\"0\">Choose a province...</ion-select-option>\r\n          <ion-select-option *ngFor=\"let provincia of provincias\" [value]=\"provincia.id\">{{provincia.nombre}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"provinciaModel.dirty && provinciaModel.valid && provinciaModel.value !== 0\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"inset\">Avatar</ion-label>\r\n        <ion-button color=\"secondary\" (click)=\"obtenerFotoCamara()\">\r\n          <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\r\n          Camera\r\n        </ion-button>\r\n        <ion-button color=\"tertiary\" (click)=\"obtenerFotoGaleria()\">\r\n          <ion-icon name=\"images\" slot=\"start\"></ion-icon>\r\n          Gallery\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-img [src]=\"usuario.avatar\" *ngIf=\"usuario.avatar\"></ion-img>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"registerForm.invalid || !usuario.avatar\">\r\n            <ion-icon name=\"paper-plane\" slot=\"start\"></ion-icon>\r\n            Register\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button color=\"danger\" expand=\"block\" fill=\"outline\" [routerLink]=\"['/auth/login']\" [routerDirection]=\"'root'\">\r\n            <ion-icon name=\"arrow-undo\" slot=\"start\"></ion-icon>\r\n            Cancel\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n");

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