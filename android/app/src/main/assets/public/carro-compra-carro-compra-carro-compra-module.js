(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carro-compra-carro-compra-carro-compra-module"],{

/***/ "Huff":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/carro-compra/carro-compra/carro-compra.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Mi carro compra</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item-sliding *ngFor=\"let videojuegoCarro of videojuegosCarro; let i = index;\">\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img [src]=\"videojuegoCarro.videojuego.imagen\">\r\n      </ion-thumbnail>\r\n\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"5\">\r\n            <ion-label>\r\n              <h3>{{videojuegoCarro.videojuego.nombre}}</h3>\r\n              <!--<h4>Precio: {{videojuegoCarro.videojuego.precio | currency:'EUR':'symbol':'0.0-2'}}</h4>-->\r\n            </ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-align-self-center\">\r\n            <ion-button color=\"medium\" fill=\"clear\" (click)=\"decrementarStockVideojuego(videojuegoCarro.videojuego, videojuegoCarro)\">\r\n              <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n            {{videojuegoCarro.cantidad}}\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n            <ion-button color=\"medium\" fill=\"clear\" (click)=\"aumentarStockVideojuego(videojuegoCarro.videojuego, videojuegoCarro)\">\r\n              <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-align-items-end\">\r\n          <ion-col size=\"4\" offset=\"8\">\r\n            <p class=\"style-item-cart\">\r\n              {{videojuegoCarro.cantidad * videojuegoCarro.videojuego.precio | currency:'EUR':'symbol':'0.0-2'}}\r\n            </p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"danger\" (click)=\"eliminarVideojuegoCarro(videojuegoCarro.videojuego.id, videojuegoCarro.id, i)\">Borrar</ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <ion-item *ngIf=\"videojuegosCarro\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"9\">\r\n          Total:\r\n        </ion-col>\r\n        <ion-col size=\"3\" class=\"ion-text-end\">\r\n          {{getTotal() | currency:'EUR':'symbol':'0.0-2'}}\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n\r\n  <!--<ion-list>\r\n    <ion-item *ngFor=\"let videojuegoCarro of videojuegosCarro\" class=\"ion-text-wrap\">\r\n      <ion-grid>\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n            <ion-button color=\"medium\" fill=\"clear\">\r\n              <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n            10\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" class=\"ion-align-self-center\">\r\n            <ion-button color=\"medium\" fill=\"clear\">\r\n              <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"2\" offset=\"4\">\r\n            <ion-button color=\"medium\" fill=\"clear\">\r\n              <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col size=\"9\">\r\n            <b>{{ videojuegoCarro.videojuego.nombre }}</b>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-end\">\r\n            {{ videojuegoCarro.cantidad * videojuegoCarro.videojuego.precio | currency:'EUR' }}\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"9\">\r\n            Total:\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-end\">\r\n            10\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-list>-->\r\n\r\n  <ion-button *ngIf=\"videojuegosCarro\" expand=\"full\">\r\n    Realizar compra\r\n  </ion-button>\r\n\r\n  <div *ngIf=\"error\" class=\"alert alert-danger\">\r\n    {{error}}\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "NjmW":
/*!***************************************************************************!*\
  !*** ./src/app/features/carro-compra/carro-compra/carro-compra.module.ts ***!
  \***************************************************************************/
/*! exports provided: CarroCompraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarroCompraPageModule", function() { return CarroCompraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _carro_compra_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carro-compra.page */ "a2oq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _carro_compra_page__WEBPACK_IMPORTED_MODULE_5__["CarroCompraPage"]
    }
];
let CarroCompraPageModule = class CarroCompraPageModule {
};
CarroCompraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_carro_compra_page__WEBPACK_IMPORTED_MODULE_5__["CarroCompraPage"]]
    })
], CarroCompraPageModule);



/***/ }),

/***/ "a2oq":
/*!*************************************************************************!*\
  !*** ./src/app/features/carro-compra/carro-compra/carro-compra.page.ts ***!
  \*************************************************************************/
/*! exports provided: CarroCompraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarroCompraPage", function() { return CarroCompraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_carro_compra_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./carro-compra.page.html */ "Huff");
/* harmony import */ var _carro_compra_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carro-compra.page.scss */ "zeLf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_carro_compra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/carro-compra.service */ "Kboj");





let CarroCompraPage = class CarroCompraPage {
    constructor(carroService) {
        this.carroService = carroService;
        this.error = '';
    }
    ngOnInit() {
        this.obtenerVideojuegosCarro();
    }
    obtenerVideojuegosCarro() {
        this.carroService.obtenerVideojuegosCarro().subscribe(resp => {
            this.videojuegosCarro = resp;
        }, error => {
            this.error = error.error.errores.mensajes;
        });
    }
    eliminarVideojuegoCarro(idVideojuego, idVideojuegoCarro, indexVideojuego) {
        this.carroService.removeVideojuegoCarro(idVideojuego, idVideojuegoCarro).subscribe(() => {
            console.log('videojuego borrado');
            this.videojuegosCarro.splice(indexVideojuego, 1);
        });
    }
    aumentarStockVideojuego(videojuego, videojuegoCarro) {
        this.carroService.aumentarStock(videojuego, videojuegoCarro).subscribe(resp => {
            const videojuego = this.videojuegosCarro.find(v => v.videojuego.id === videojuegoCarro.videojuego.id);
            videojuego.cantidad += 1;
        });
    }
    decrementarStockVideojuego(videojuego, videojuegoCarro) {
        this.carroService.decrementarStock(videojuego, videojuegoCarro).subscribe(resp => {
            const videojuego = this.videojuegosCarro.find(v => v.videojuego.id === videojuegoCarro.videojuego.id);
            videojuego.cantidad -= 1;
        });
    }
    getTotal() {
        if (this.videojuegosCarro) {
            return this.videojuegosCarro.reduce((i, j) => i + j.videojuego.precio * j.cantidad, 0);
        }
    }
    realizarCompra() {
        console.log('Compra realizada');
    }
};
CarroCompraPage.ctorParameters = () => [
    { type: _services_carro_compra_service__WEBPACK_IMPORTED_MODULE_4__["CarroCompraService"] }
];
CarroCompraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-carro-compra',
        template: _raw_loader_carro_compra_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_carro_compra_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CarroCompraPage);



/***/ }),

/***/ "zeLf":
/*!***************************************************************************!*\
  !*** ./src/app/features/carro-compra/carro-compra/carro-compra.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".style-item-cart {\n  font-size: 22px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2Fycm8tY29tcHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImNhcnJvLWNvbXByYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3R5bGUtaXRlbS1jYXJ0IHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=carro-compra-carro-compra-carro-compra-module.js.map