(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videojuego-info-videojuego-info-module"],{

/***/ "5hRp":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videojuegos/videojuego-detalles/videojuego-info/videojuego-info.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Información</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"videojuego.usuario.avatar\" alt=\"\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>{{videojuego.usuario.nombre}}</h3>\r\n        <p>{{videojuego.fechaCreacion}}</p>\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"ellipsis-vertical\" (click)=\"showActionSheet()\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-img [src]=\"videojuego.imagen\"></ion-img>\r\n\r\n    <ion-card-header>\r\n      <ion-card-title>{{videojuego.nombre}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col class=\"ion-text-center precio\">\r\n          {{videojuego.precio}} €\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center plataforma\">\r\n          {{videojuego.plataforma.nombre}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col>{{videojuego.descripcion}}</ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n\r\n    <ion-footer>\r\n      <ion-row>\r\n        <ion-col>\r\n          <button center text-center (click)=\"addVideojuegoCarro()\">\r\n            <ion-icon name=\"cart\"></ion-icon>\r\n            <div>Añadir a carro</div>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <button center text-center [routerLink]=\"['/videojuegos/edit', videojuego.id]\">\r\n            <ion-icon name=\"create-outline\"></ion-icon>\r\n            <div>Editar</div>\r\n          </button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-footer>\r\n  </ion-card>\r\n</ion-content>\r\n");

/***/ }),

/***/ "BPWB":
/*!*******************************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-info/videojuego-info.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: VideojuegoInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoInfoPageModule", function() { return VideojuegoInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _videojuego_info_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videojuego-info.page */ "Rep4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _videojuego_info_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoInfoPage"]
    }
];
let VideojuegoInfoPageModule = class VideojuegoInfoPageModule {
};
VideojuegoInfoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_videojuego_info_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoInfoPage"]]
    })
], VideojuegoInfoPageModule);



/***/ }),

/***/ "Rep4":
/*!*****************************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-info/videojuego-info.page.ts ***!
  \*****************************************************************************************/
/*! exports provided: VideojuegoInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoInfoPage", function() { return VideojuegoInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videojuego_info_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videojuego-info.page.html */ "5hRp");
/* harmony import */ var _videojuego_info_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videojuego-info.page.scss */ "yZ0l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_features_carro_compra_services_carro_compra_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/features/carro-compra/services/carro-compra.service */ "Kboj");
/* harmony import */ var _services_videojuego_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/videojuego.service */ "PbcP");
/* harmony import */ var _videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../videojuego-detalles.page */ "PWwL");









let VideojuegoInfoPage = class VideojuegoInfoPage {
    constructor(parentComponent, videojuegoService, carroCompraService, router, actionSheetCtrl) {
        this.parentComponent = parentComponent;
        this.videojuegoService = videojuegoService;
        this.carroCompraService = carroCompraService;
        this.router = router;
        this.actionSheetCtrl = actionSheetCtrl;
        this.buttons = [];
    }
    ngOnInit() {
        this.videojuego = this.parentComponent.videojuego;
        this.buttons = [
            {
                text: 'Borrar',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                    this.videojuegoService.borrarVideojuego(this.videojuego.id).subscribe(() => {
                        this.router.navigate(['/videojuegos']);
                        console.log('elem borrado');
                    });
                }
            },
            {
                text: 'Añadir al carro',
                icon: 'cart',
                handler: () => {
                    console.log('Añadiendo al carro');
                }
            },
            {
                text: 'Cancelar',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                    console.log('Cancelar clickado');
                }
            }
        ];
    }
    showActionSheet() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                buttons: this.buttons
            });
            yield actionSheet.present();
            const { role } = yield actionSheet.onDidDismiss();
            console.log('onDidDismiss resolved with role', role);
        });
    }
    addVideojuegoCarro() {
        this.carroCompraService.addVideojuegoCarro(this.videojuego).subscribe(resp => console.log(resp));
    }
};
VideojuegoInfoPage.ctorParameters = () => [
    { type: _videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_8__["VideojuegoDetallesPage"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_8__["VideojuegoDetallesPage"],] }] },
    { type: _services_videojuego_service__WEBPACK_IMPORTED_MODULE_7__["VideojuegoService"] },
    { type: src_app_features_carro_compra_services_carro_compra_service__WEBPACK_IMPORTED_MODULE_6__["CarroCompraService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] }
];
VideojuegoInfoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videojuego-info',
        template: _raw_loader_videojuego_info_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videojuego_info_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideojuegoInfoPage);



/***/ }),

/***/ "yZ0l":
/*!*******************************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-info/videojuego-info.page.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  background-color: white;\n}\n\nion-icon {\n  font-size: 30px;\n}\n\n.plataforma {\n  font-size: 28px;\n}\n\n.precio {\n  font-size: 28px;\n}\n\n.precio, .plataforma {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW9qdWVnby1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoidmlkZW9qdWVnby1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuXHJcbi5wbGF0YWZvcm1hIHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuXHJcbi5wcmVjaW8ge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLnByZWNpbywgLnBsYXRhZm9ybWEge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=videojuego-info-videojuego-info-module.js.map