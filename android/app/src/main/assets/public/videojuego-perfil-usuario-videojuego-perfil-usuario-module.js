(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videojuego-perfil-usuario-videojuego-perfil-usuario-module"],{

/***/ "5Niq":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videojuegos/videojuego-detalles/videojuego-perfil-usuario/videojuego-perfil-usuario.page.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Vendedor</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col>\r\n          <img (click)=\"mostrarActionSheet()\" [src]=\"usuario.avatar\">\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-end\">\r\n          <!--<ion-button (click)=\"mostrarModalEditar()\" color=\"light\" size=\"small\">\r\n            <ion-icon name=\"pencil-outline\"></ion-icon>\r\n          </ion-button>-->\r\n          <a (click)=\"mostrarModalEditar()\" color=\"primary\">\r\n            <ion-icon name=\"pencil-outline\"></ion-icon>\r\n          </a>\r\n        </ion-col>\r\n      </ion-row>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-card-title>\r\n            {{usuario.nombre}} {{usuario.apellidos}}\r\n          </ion-card-title>\r\n\r\n            Email: {{usuario.email}} <br>\r\n            Nickname: {{usuario.nickname}} <br>\r\n            Provincia: {{usuario.provincia.nombre}}\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n    <ion-item-divider></ion-item-divider>\r\n    <ion-card-content>\r\n      <ion-card-title>Videojuegos del usuario</ion-card-title>\r\n    </ion-card-content>\r\n    <ion-slides #sliderVideojuegosUsuario pager=\"true\" (ionSlidesDidLoad)=\"slidear(sliderVideojuegosUsuario)\">\r\n      <ion-slide *ngFor=\"let videojuego of videojuegosUsuario\">\r\n        <ion-card>\r\n          <ion-row>\r\n            <ion-img [src]=\"videojuego.imagen\"></ion-img>\r\n          </ion-row>\r\n          <ion-footer>\r\n            <ion-card-title class=\"mb-4\">\r\n              {{videojuego.nombre}}\r\n            </ion-card-title>\r\n          </ion-footer>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-card>\r\n");

/***/ }),

/***/ "D0nh":
/*!*************************************************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-perfil-usuario/videojuego-perfil-usuario.page.ts ***!
  \*************************************************************************************************************/
/*! exports provided: VideojuegoPerfilUsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoPerfilUsuarioPage", function() { return VideojuegoPerfilUsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videojuego_perfil_usuario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videojuego-perfil-usuario.page.html */ "5Niq");
/* harmony import */ var _videojuego_perfil_usuario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videojuego-perfil-usuario.page.scss */ "t7Vz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_shared_modals_modal_editar_modal_editar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/modals/modal-editar/modal-editar.component */ "d2JP");
/* harmony import */ var _services_videojuego_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/videojuego.service */ "PbcP");
/* harmony import */ var _videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../videojuego-detalles.page */ "PWwL");








let VideojuegoPerfilUsuarioPage = class VideojuegoPerfilUsuarioPage {
    constructor(parentComponent, videojuegosService, modalEditar, actionSheetController) {
        this.parentComponent = parentComponent;
        this.videojuegosService = videojuegosService;
        this.modalEditar = modalEditar;
        this.actionSheetController = actionSheetController;
        this.videojuegosUsuario = [];
    }
    ngOnInit() {
        this.usuario = this.parentComponent.videojuego.usuario;
        this.videojuegosService.obtenerVideojuegosUsuario(this.usuario.id).subscribe(resp => {
            this.videojuegosUsuario = resp;
        });
    }
    slidear(slides) {
        slides.startAutoplay();
    }
    mostrarActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
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
                            this.actionSheetController.dismiss();
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
    modalEditarPassword() {
        this.modalEditar.crearModalEditarPassword();
    }
    cerrarModal() {
        this.modalEditar.cerrarModal();
    }
};
VideojuegoPerfilUsuarioPage.ctorParameters = () => [
    { type: _videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_7__["VideojuegoDetallesPage"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_7__["VideojuegoDetallesPage"],] }] },
    { type: _services_videojuego_service__WEBPACK_IMPORTED_MODULE_6__["VideojuegoService"] },
    { type: src_app_shared_modals_modal_editar_modal_editar_component__WEBPACK_IMPORTED_MODULE_5__["ModalEditarComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] }
];
VideojuegoPerfilUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videojuego-perfil-usuario',
        template: _raw_loader_videojuego_perfil_usuario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videojuego_perfil_usuario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideojuegoPerfilUsuarioPage);



/***/ }),

/***/ "NO+q":
/*!***************************************************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-perfil-usuario/videojuego-perfil-usuario.module.ts ***!
  \***************************************************************************************************************/
/*! exports provided: VideojuegoPerfilUsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoPerfilUsuarioPageModule", function() { return VideojuegoPerfilUsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _videojuego_perfil_usuario_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videojuego-perfil-usuario.page */ "D0nh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _videojuego_perfil_usuario_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoPerfilUsuarioPage"]
    }
];
let VideojuegoPerfilUsuarioPageModule = class VideojuegoPerfilUsuarioPageModule {
};
VideojuegoPerfilUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_videojuego_perfil_usuario_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoPerfilUsuarioPage"]]
    })
], VideojuegoPerfilUsuarioPageModule);



/***/ }),

/***/ "t7Vz":
/*!***************************************************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-perfil-usuario/videojuego-perfil-usuario.page.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col {\n  line-height: 30px;\n}\nion-col > img {\n  width: 85%;\n  border-radius: 70%;\n}\nion-img {\n  height: 200px;\n}\nbutton ion-badge {\n  position: absolute;\n  top: -0.2rem;\n  right: -0.2rem;\n  opacity: 0.9;\n}\nbutton ion-badge ~ ion-icon {\n  margin-right: 1.2rem;\n}\na {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW9qdWVnby1wZXJmaWwtdXN1YXJpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUdBO0VBQ0UsYUFBQTtBQUFGO0FBSUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQURKO0FBR0k7RUFDRSxvQkFBQTtBQUROO0FBTUE7RUFDRSxlQUFBO0FBSEYiLCJmaWxlIjoidmlkZW9qdWVnby1wZXJmaWwtdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIHtcclxuICBsaW5lLWhlaWdodDogMzBweDtcclxuXHJcbiAgJiA+IGltZyB7XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNzAlO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWltZyB7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBpb24tYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAtMC4ycmVtO1xyXG4gICAgcmlnaHQ6IC0wLjJyZW07XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcblxyXG4gICAgJiB+IGlvbi1pY29uIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5hIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=videojuego-perfil-usuario-videojuego-perfil-usuario-module.js.map