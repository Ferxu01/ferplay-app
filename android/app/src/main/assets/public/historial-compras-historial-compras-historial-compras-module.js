(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historial-compras-historial-compras-historial-compras-module"],{

/***/ "4HSc":
/*!****************************************************************************************!*\
  !*** ./src/app/features/historial-compras/historial-compras/historial-compras.page.ts ***!
  \****************************************************************************************/
/*! exports provided: HistorialComprasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComprasPage", function() { return HistorialComprasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_historial_compras_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./historial-compras.page.html */ "X1dq");
/* harmony import */ var _historial_compras_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./historial-compras.page.scss */ "XkUU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_historial_compras_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/historial-compras.service */ "A6g+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_shared_modals_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/modals/modal-detalle-compra/modal-detalle-compra.component */ "Iurt");







let HistorialComprasPage = class HistorialComprasPage {
    constructor(historialCompraService, modalDetalleCompra) {
        this.historialCompraService = historialCompraService;
        this.modalDetalleCompra = modalDetalleCompra;
        this.fechaCompra = '';
    }
    ngOnInit() {
        //Configurar librería moment en idioma español
        moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('es');
        this.obtenerHistorialCompras();
    }
    obtenerHistorialCompras() {
        this.historialCompraService.obtenerHistorialCompras().subscribe(resp => {
            this.compras = resp;
            this.compras.forEach(compra => {
                compra.fechaCompra = moment__WEBPACK_IMPORTED_MODULE_5__(compra.fechaCompra).fromNow();
            });
        });
    }
    verDetalleCompra(lineaCompra) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.modalDetalleCompra.crearModalDetalleCompra(lineaCompra);
        });
    }
};
HistorialComprasPage.ctorParameters = () => [
    { type: _services_historial_compras_service__WEBPACK_IMPORTED_MODULE_4__["HistorialComprasService"] },
    { type: src_app_shared_modals_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_6__["ModalDetalleCompraComponent"] }
];
HistorialComprasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-historial-compras',
        template: _raw_loader_historial_compras_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_historial_compras_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HistorialComprasPage);



/***/ }),

/***/ "A6g+":
/*!**********************************************************************************!*\
  !*** ./src/app/features/historial-compras/services/historial-compras.service.ts ***!
  \**********************************************************************************/
/*! exports provided: HistorialComprasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComprasService", function() { return HistorialComprasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let HistorialComprasService = class HistorialComprasService {
    constructor(http) {
        this.http = http;
        this.historialUrl = 'history';
    }
    obtenerHistorialCompras() {
        return this.http.get(`profile/buy/${this.historialUrl}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data));
    }
};
HistorialComprasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
HistorialComprasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], HistorialComprasService);



/***/ }),

/***/ "X1dq":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/historial-compras/historial-compras/historial-compras.page.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Mis compras</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let compra of compras\">\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-label>\r\n            <h2>Realizado: {{compra.fechaCompra}}</h2>\r\n            <h2>Nº compra: {{compra.id}}</h2>\r\n            <h2>Linea compra: {{compra.lineaCompra}}</h2>\r\n          </ion-label>\r\n        </ion-col>\r\n        <ion-col class=\"ion-align-items-center\">\r\n          <ion-button size=\"small\" fill=\"clear\" (click)=\"verDetalleCompra(compra.lineaCompra)\">\r\n            <ion-icon slot=\"icon-only\" name=\"eye\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "XkUU":
/*!******************************************************************************************!*\
  !*** ./src/app/features/historial-compras/historial-compras/historial-compras.page.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoaXN0b3JpYWwtY29tcHJhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "hIar":
/*!******************************************************************************************!*\
  !*** ./src/app/features/historial-compras/historial-compras/historial-compras.module.ts ***!
  \******************************************************************************************/
/*! exports provided: HistorialComprasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistorialComprasPageModule", function() { return HistorialComprasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _historial_compras_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./historial-compras.page */ "4HSc");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _historial_compras_page__WEBPACK_IMPORTED_MODULE_5__["HistorialComprasPage"]
    }
];
let HistorialComprasPageModule = class HistorialComprasPageModule {
};
HistorialComprasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_historial_compras_page__WEBPACK_IMPORTED_MODULE_5__["HistorialComprasPage"]]
    })
], HistorialComprasPageModule);



/***/ })

}]);
//# sourceMappingURL=historial-compras-historial-compras-historial-compras-module.js.map