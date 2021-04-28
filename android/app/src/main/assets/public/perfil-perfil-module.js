(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["perfil-perfil-module"],{

/***/ "9Iej":
/*!**************************************************!*\
  !*** ./src/app/usuarios/perfil/perfil.module.ts ***!
  \**************************************************/
/*! exports provided: PerfilPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPageModule", function() { return PerfilPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./perfil.page */ "jm12");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"]
    }
];
let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_5__["PerfilPage"]]
    })
], PerfilPageModule);



/***/ }),

/***/ "bg+W":
/*!**************************************************!*\
  !*** ./src/app/usuarios/perfil/perfil.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  line-height: 30px;\n}\nion-col > img {\n  width: 85%;\n  border-radius: 70%;\n}\na {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwZXJmaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjtBQUNFO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FBQ0o7QUFHQTtFQUNFLGVBQUE7QUFBRiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcblxyXG4gICYgPiBpbWcge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcwJTtcclxuICB9XHJcbn1cclxuXHJcbmEge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "jm12":
/*!************************************************!*\
  !*** ./src/app/usuarios/perfil/perfil.page.ts ***!
  \************************************************/
/*! exports provided: PerfilPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilPage", function() { return PerfilPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./perfil.page.html */ "nPO/");
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perfil.page.scss */ "bg+W");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_modals_modal_editar_modal_editar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modals/modal-editar/modal-editar.component */ "d2JP");







let PerfilPage = class PerfilPage {
    constructor(actionSheetCtrl, modalEditar, route) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalEditar = modalEditar;
        this.route = route;
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.usuario = data.usuario;
        });
    }
    mostrarActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Seleccionar una imagen',
                buttons: [
                    {
                        text: 'Hacer foto',
                        icon: 'camera',
                        handler: () => {
                            this.obtenerFotoCamara();
                        }
                    },
                    {
                        text: 'Seleccionar una imagen',
                        icon: 'images',
                        handler: () => {
                            this.obtenerFotoGaleria();
                        }
                    },
                    {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            this.actionSheetCtrl.dismiss();
                        }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    obtenerFotoCamara() {
        console.log('hazte una foto');
    }
    obtenerFotoGaleria() {
        console.log('selecciona una imagen de la galería');
    }
    mostrarModalEditar() {
        this.modalEditar.crearModalEditarPassword();
    }
    modalEditarPassword() {
        this.modalEditar;
    }
    cerrarModal() {
        this.modalEditar.cerrarModal();
    }
};
PerfilPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: src_app_shared_modals_modal_editar_modal_editar_component__WEBPACK_IMPORTED_MODULE_6__["ModalEditarComponent"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
PerfilPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PerfilPage);



/***/ }),

/***/ "nPO/":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/perfil/perfil.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Mi perfil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col>\r\n          <img (click)=\"mostrarActionSheet()\" [src]=\"usuario.avatar\">\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-end\">\r\n          <!--<ion-button (click)=\"mostrarModalEditar()\" color=\"light\" size=\"small\">\r\n            <ion-icon name=\"pencil-outline\"></ion-icon>\r\n          </ion-button>-->\r\n          <a (click)=\"mostrarModalEditar()\" color=\"primary\">\r\n            <ion-icon name=\"pencil-outline\"></ion-icon>\r\n          </a>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card-title>\r\n            {{usuario.nombre}} {{usuario.apellidos}}\r\n          </ion-card-title>\r\n\r\n            Email: {{usuario.email}} <br>\r\n            Nickname: {{usuario.nickname}} <br>\r\n            Provincia: {{usuario.provincia.nombre}}\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-card-content>\r\n    <ion-button class=\"button-small\">Editar contraseña</ion-button>\r\n  </ion-card-content>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=perfil-perfil-module.js.map