(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videojuego-info-videojuego-info-module"],{

/***/ "5hRp":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videojuegos/videojuego-detalles/videojuego-info/videojuego-info.page.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Información</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-avatar slot=\"start\">\n        <img [src]=\"videojuego.usuario.avatar\" alt=\"\">\n      </ion-avatar>\n      <ion-label>\n        <h3>{{videojuego.usuario.nombre}}</h3>\n        <p>{{videojuego.fechaCreacion}}</p>\n      </ion-label>\n      <ion-icon slot=\"end\" name=\"ellipsis-vertical\" (click)=\"showActionSheet()\"></ion-icon>\n    </ion-item>\n\n    <ion-img [src]=\"videojuego.imagen\"></ion-img>\n\n    <ion-card-header>\n      <ion-card-title>{{videojuego.nombre}}</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-row>\n        <ion-col class=\"ion-text-center precio\">\n          {{videojuego.precio}} €\n        </ion-col>\n        <ion-col class=\"ion-text-center plataforma\">\n          {{videojuego.plataforma.nombre}}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>{{videojuego.descripcion}}</ion-col>\n      </ion-row>\n    </ion-card-content>\n\n    <ion-footer>\n      <ion-row>\n        <ion-col>\n          <button center text-center (click)=\"addVideojuegoCarro()\">\n            <ion-icon name=\"cart\"></ion-icon>\n            <div>Añadir a carro</div>\n          </button>\n        </ion-col>\n        <ion-col>\n          <button center text-center [routerLink]=\"['/videojuegos/edit', videojuego.id]\">\n            <ion-icon name=\"create-outline\"></ion-icon>\n            <div>Editar</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-footer>\n  </ion-card>\n</ion-content>\n");

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

/***/ "Kboj":
/*!************************************************************************!*\
  !*** ./src/app/features/carro-compra/services/carro-compra.service.ts ***!
  \************************************************************************/
/*! exports provided: CarroCompraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarroCompraService", function() { return CarroCompraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let CarroCompraService = class CarroCompraService {
    constructor(http) {
        this.http = http;
        this.urlCarro = 'carro';
    }
    addVideojuegoCarro(videojuego) {
        return this.http.post(`videojuegos/${videojuego.id}/${this.urlCarro}`, videojuego).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp));
    }
};
CarroCompraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CarroCompraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CarroCompraService);



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
/* harmony default export */ __webpack_exports__["default"] = ("button {\n  background-color: white;\n}\n\nion-icon {\n  font-size: 30px;\n}\n\n.plataforma {\n  font-size: 28px;\n}\n\n.precio {\n  font-size: 28px;\n}\n\n.precio, .plataforma {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW9qdWVnby1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0YiLCJmaWxlIjoidmlkZW9qdWVnby1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLnBsYXRhZm9ybWEge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5wcmVjaW8ge1xuICBmb250LXNpemU6IDI4cHg7XG59XG5cbi5wcmVjaW8sIC5wbGF0YWZvcm1hIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=videojuego-info-videojuego-info-module.js.map