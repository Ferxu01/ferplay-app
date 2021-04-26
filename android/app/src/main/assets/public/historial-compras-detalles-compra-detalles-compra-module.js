(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["historial-compras-detalles-compra-detalles-compra-module"],{

/***/ "5q0z":
/*!**************************************************************************************!*\
  !*** ./src/app/features/historial-compras/detalles-compra/detalles-compra.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DetallesCompraPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCompraPageModule", function() { return DetallesCompraPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detalles_compra_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detalles-compra-routing.module */ "zSoa");
/* harmony import */ var _detalles_compra_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalles-compra.page */ "mvSI");







let DetallesCompraPageModule = class DetallesCompraPageModule {
};
DetallesCompraPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detalles_compra_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetallesCompraPageRoutingModule"]
        ],
        declarations: [_detalles_compra_page__WEBPACK_IMPORTED_MODULE_6__["DetallesCompraPage"]]
    })
], DetallesCompraPageModule);



/***/ }),

/***/ "zSoa":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/historial-compras/detalles-compra/detalles-compra-routing.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: DetallesCompraPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCompraPageRoutingModule", function() { return DetallesCompraPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detalles_compra_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detalles-compra.page */ "mvSI");




const routes = [
    {
        path: '',
        component: _detalles_compra_page__WEBPACK_IMPORTED_MODULE_3__["DetallesCompraPage"]
    }
];
let DetallesCompraPageRoutingModule = class DetallesCompraPageRoutingModule {
};
DetallesCompraPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetallesCompraPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=historial-compras-detalles-compra-detalles-compra-module.js.map