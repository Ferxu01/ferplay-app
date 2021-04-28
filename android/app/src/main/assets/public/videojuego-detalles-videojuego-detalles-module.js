(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videojuego-detalles-videojuego-detalles-module"],{

/***/ "CcPI":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videojuegos/videojuego-detalles/videojuego-detalles.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>{{videojuego.nombre}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>-->\r\n\r\n<ion-tabs>\r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button [routerLink]=\"['/videojuegos']\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n      <ion-label>Home</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"info\">\r\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\r\n      <ion-label>Información</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"comentarios\">\r\n      <ion-icon name=\"chatbubble-outline\"></ion-icon>\r\n      <ion-label>Comentarios</ion-label>\r\n    </ion-tab-button>\r\n    <ion-tab-button tab=\"perfil\">\r\n      <ion-icon name=\"person-sharp\"></ion-icon>\r\n      <ion-label>Perfil</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n</ion-tabs>\r\n");

/***/ }),

/***/ "O28S":
/*!*******************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-detalles.module.ts ***!
  \*******************************************************************************/
/*! exports provided: VideojuegoDetallesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoDetallesPageModule", function() { return VideojuegoDetallesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videojuego-detalles.page */ "PWwL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoDetallesPage"],
        children: [
            {
                path: 'info',
                loadChildren: () => __webpack_require__.e(/*! import() | videojuego-info-videojuego-info-module */ "videojuego-info-videojuego-info-module").then(__webpack_require__.bind(null, /*! ./videojuego-info/videojuego-info.module */ "BPWB")).then(m => m.VideojuegoInfoPageModule)
            },
            {
                path: 'comentarios',
                loadChildren: () => __webpack_require__.e(/*! import() | videojuego-comentarios-videojuego-comentarios-module */ "videojuego-comentarios-videojuego-comentarios-module").then(__webpack_require__.bind(null, /*! ./videojuego-comentarios/videojuego-comentarios.module */ "5OX7")).then(m => m.VideojuegoComentariosPageModule)
            },
            {
                path: 'perfil',
                loadChildren: () => __webpack_require__.e(/*! import() | videojuego-perfil-usuario-videojuego-perfil-usuario-module */ "videojuego-perfil-usuario-videojuego-perfil-usuario-module").then(__webpack_require__.bind(null, /*! ./videojuego-perfil-usuario/videojuego-perfil-usuario.module */ "NO+q")).then(m => m.VideojuegoPerfilUsuarioPageModule)
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'info'
            }
        ]
    }
];
let VideojuegoDetallesPageModule = class VideojuegoDetallesPageModule {
};
VideojuegoDetallesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoDetallesPage"]]
    })
], VideojuegoDetallesPageModule);



/***/ }),

/***/ "PWwL":
/*!*****************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-detalles.page.ts ***!
  \*****************************************************************************/
/*! exports provided: VideojuegoDetallesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoDetallesPage", function() { return VideojuegoDetallesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videojuego_detalles_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videojuego-detalles.page.html */ "CcPI");
/* harmony import */ var _videojuego_detalles_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videojuego-detalles.page.scss */ "SMNS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_videojuego_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/videojuego.service */ "PbcP");






let VideojuegoDetallesPage = class VideojuegoDetallesPage {
    constructor(videojuegoService, route) {
        this.videojuegoService = videojuegoService;
        this.route = route;
        /*this.route.data.subscribe(
          resp => {
            this.videojuego = resp.videojuego;
          }
        );*/
        //this.videojuego$ = this.videojuegoService.obtenerVideojuego(this.route.snapshot.params.id).pipe(shareReplay(1));
    }
    ngOnInit() {
        this.route.data.subscribe(resp => {
            this.videojuego = resp.videojuego;
        });
    }
};
VideojuegoDetallesPage.ctorParameters = () => [
    { type: _services_videojuego_service__WEBPACK_IMPORTED_MODULE_5__["VideojuegoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
VideojuegoDetallesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videojuego-detalles',
        template: _raw_loader_videojuego_detalles_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videojuego_detalles_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideojuegoDetallesPage);



/***/ }),

/***/ "SMNS":
/*!*******************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-detalles.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb2p1ZWdvLWRldGFsbGVzLnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=videojuego-detalles-videojuego-detalles-module.js.map