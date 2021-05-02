(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+js1":
/*!********************************************************!*\
  !*** ./src/app/interceptors/auth-token.interceptor.ts ***!
  \********************************************************/
/*! exports provided: AuthTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthTokenInterceptor", function() { return AuthTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let AuthTokenInterceptor = class AuthTokenInterceptor {
    constructor() { }
    intercept(req, next) {
        const token = localStorage.getItem('token');
        if (token) {
            const authReq = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
            return next.handle(authReq);
        }
        return next.handle(req);
    }
};
AuthTokenInterceptor.ctorParameters = () => [];
AuthTokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthTokenInterceptor);



/***/ }),

/***/ "/Of8":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/shared/edit-avatar/edit-avatar.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #editAvatarForm=\"ngForm\" (ngSubmit)=\"editarAvatar()\">\n  <ion-img [src]=\"avatar\" *ngIf=\"avatar\"></ion-img>\n\n  <ion-row>\n    <ion-col>\n      <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"editAvatarForm.invalid\">\n        Edit avatar\n      </ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button color=\"danger\" expand=\"block\" fill=\"outline\" (click)=\"cancelar()\">\n        <ion-icon name=\"arrow-undo\" slot=\"start\"></ion-icon>\n        Cancel\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</form>\n");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fernando\Desktop\Proyectos_Ionic\ferplay-app\src\main.ts */"zUnb");


/***/ }),

/***/ "0G8V":
/*!*********************************************!*\
  !*** ./src/app/usuarios/usuarios.module.ts ***!
  \*********************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios-routing.module */ "JctN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "8KJZ");







let UsuariosModule = class UsuariosModule {
};
UsuariosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsuariosRoutingModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ]
    })
], UsuariosModule);



/***/ }),

/***/ "0e1J":
/*!*****************************************************!*\
  !*** ./src/app/features/features-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeaturesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRoutingModule", function() { return FeaturesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./../videojuegos/home/home.module */ "CiAP")).then(m => m.HomePageModule),
        pathMatch: 'full'
    },
    {
        path: 'carro',
        loadChildren: () => __webpack_require__.e(/*! import() | carro-compra-carro-compra-carro-compra-module */ "carro-compra-carro-compra-carro-compra-module").then(__webpack_require__.bind(null, /*! ./carro-compra/carro-compra/carro-compra.module */ "NjmW")).then(m => m.CarroCompraPageModule)
    },
    {
        path: 'compras/historial',
        loadChildren: () => __webpack_require__.e(/*! import() | historial-compras-historial-compras-historial-compras-module */ "historial-compras-historial-compras-historial-compras-module").then(__webpack_require__.bind(null, /*! ./historial-compras/historial-compras/historial-compras.module */ "hIar")).then(m => m.HistorialComprasPageModule)
    },
    {
        path: 'detalles-compra',
        loadChildren: () => __webpack_require__.e(/*! import() | historial-compras-detalles-compra-detalles-compra-module */ "historial-compras-detalles-compra-detalles-compra-module").then(__webpack_require__.bind(null, /*! ./historial-compras/detalles-compra/detalles-compra.module */ "5q0z")).then(m => m.DetallesCompraPageModule)
    },
    {
        path: 'favoritos',
        loadChildren: () => __webpack_require__.e(/*! import() | favoritos-favoritos-module */ "favoritos-favoritos-module").then(__webpack_require__.bind(null, /*! ./favoritos/favoritos.module */ "Bo6o")).then(m => m.FavoritosPageModule)
    }
];
let FeaturesRoutingModule = class FeaturesRoutingModule {
};
FeaturesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], FeaturesRoutingModule);



/***/ }),

/***/ "1R6r":
/*!**********************************************************************!*\
  !*** ./src/app/videojuegos/resolvers/videojuego-resolver.service.ts ***!
  \**********************************************************************/
/*! exports provided: VideojuegoResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoResolverService", function() { return VideojuegoResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_videojuego_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/videojuego.service */ "PbcP");






let VideojuegoResolverService = class VideojuegoResolverService {
    constructor(router, videojuegoService) {
        this.router = router;
        this.videojuegoService = videojuegoService;
    }
    resolve(route, state) {
        const id = route.params.id;
        return this.videojuegoService.obtenerVideojuego(+id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
            this.router.navigate(['/videojuegos']);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }));
    }
};
VideojuegoResolverService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_videojuego_service__WEBPACK_IMPORTED_MODULE_5__["VideojuegoService"] }
];
VideojuegoResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VideojuegoResolverService);



/***/ }),

/***/ "6epW":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~login-login-module~perfil-perfil-module~registro-registro-module~videojuego-form-videojuego-~215c839c"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "lu3c")).then(m => m.LoginPageModule)
    },
    {
        path: 'registro',
        loadChildren: () => Promise.all(/*! import() | registro-registro-module */[__webpack_require__.e("default~login-login-module~perfil-perfil-module~registro-registro-module~videojuego-form-videojuego-~215c839c"), __webpack_require__.e("registro-registro-module")]).then(__webpack_require__.bind(null, /*! ./registro/registro.module */ "RyoJ")).then(m => m.RegistroPageModule)
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "6mzX":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/modals/modal-detalle-compra/modal-detalle-compra.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1kZXRhbGxlLWNvbXByYS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "7l9E":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/videojuegos/videojuego-card/videojuego-card.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\r\n  <img [src]=\"videojuego.imagen\" alt=\"{{videojuego.nombre}}\">\r\n  <ion-card-header>\r\n    <ion-card-title>{{videojuego.nombre}}</ion-card-title>\r\n  </ion-card-header>\r\n  <ion-card-content>\r\n    <ion-row>\r\n      <ion-col>\r\n        {{videojuego.descripcion}}\r\n      </ion-col>\r\n      <ion-col class=\"ion-text-center plataforma\">\r\n        {{videojuego.plataforma.nombre}}\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card-content>\r\n\r\n  <ion-footer>\r\n    <ion-row class=\"ion-align-items-center ion-text-center\">\r\n      <ion-col text-center>\r\n        <ion-label>{{videojuego.numLikes}} <span *ngIf=\"videojuego.numLikes === 1\">like</span> <span *ngIf=\"videojuego.numLikes === 0 || videojuego.numLikes > 1\">likes</span></ion-label>\r\n      </ion-col>\r\n      <ion-col text-center>\r\n        <ion-label>{{videojuego.stock}} en stock</ion-label>\r\n      </ion-col>\r\n      <ion-col text-center>\r\n        <ion-label>{{videojuego.fechaCreacion}}</ion-label>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-footer>\r\n  <ion-footer>\r\n    <ion-row class=\"ion-align-items-center ion-text-center\">\r\n      <ion-col text-center>\r\n        <button *ngIf=\"!videojuego.liked\" (click)=\"darLike()\">\r\n          <ion-icon name=\"heart-outline\"></ion-icon>\r\n          <div>Like</div>\r\n        </button>\r\n\r\n        <button *ngIf=\"videojuego.liked\" (click)=\"eliminarLike()\">\r\n          <ion-icon color=\"warning\" name=\"heart-outline\"></ion-icon>\r\n          <div>Like</div>\r\n        </button>\r\n      </ion-col>\r\n      <ion-col text-center>\r\n        <button [routerLink]=\"['/videojuegos', videojuego.id]\">\r\n          <ion-icon name=\"information-circle\"></ion-icon>\r\n          <div>Más info</div>\r\n        </button>\r\n      </ion-col>\r\n      <ion-col text-center>\r\n        <button *ngIf=\"!videojuego.favourite\" (click)=\"addFavoritos()\">\r\n          <ion-icon name=\"bookmark-outline\"></ion-icon>\r\n          <ion-icon *ngIf=\"videojuego.favourite\" color=\"warning\" name=\"bookmark-outline\"></ion-icon>\r\n          <div>Favorito</div>\r\n        </button>\r\n\r\n        <button *ngIf=\"videojuego.favourite\" (click)=\"eliminarFavoritos()\">\r\n          <ion-icon color=\"warning\" name=\"bookmark-outline\"></ion-icon>\r\n          <div>Favorito</div>\r\n        </button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-footer>\r\n</ion-card>\r\n");

/***/ }),

/***/ "8KJZ":
/*!**************************************************!*\
  !*** ./src/app/usuarios/shared/shared.module.ts ***!
  \**************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-password/edit-password.component */ "gLzG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _edit_perfil_edit_perfil_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-perfil/edit-perfil.component */ "EVJX");
/* harmony import */ var _edit_avatar_edit_avatar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-avatar/edit-avatar.component */ "DwT7");








let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_3__["EditPasswordComponent"], _edit_perfil_edit_perfil_component__WEBPACK_IMPORTED_MODULE_6__["EditPerfilComponent"], _edit_avatar_edit_avatar_component__WEBPACK_IMPORTED_MODULE_7__["EditAvatarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ],
        exports: [
            _edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_3__["EditPasswordComponent"],
            _edit_perfil_edit_perfil_component__WEBPACK_IMPORTED_MODULE_6__["EditPerfilComponent"],
            _edit_avatar_edit_avatar_component__WEBPACK_IMPORTED_MODULE_7__["EditAvatarComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "8TPX":
/*!*********************************************************!*\
  !*** ./src/app/videojuegos/home/home-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "AcIx");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "AcIx":
/*!***********************************************!*\
  !*** ./src/app/videojuegos/home/home.page.ts ***!
  \***********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "zAHJ");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "eUEs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_videojuego_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/videojuego.service */ "PbcP");





let HomePage = class HomePage {
    constructor(videojuegoService) {
        this.videojuegoService = videojuegoService;
        this.videojuegos = [];
    }
    ngOnInit() {
        this.obtenerVideojuegos();
    }
    obtenerVideojuegos() {
        this.videojuegoService.obtenerVideojuegos().subscribe(resp => this.videojuegos = resp);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_videojuego_service__WEBPACK_IMPORTED_MODULE_4__["VideojuegoService"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:8000/',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CAJa":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/historial-compras/detalles-compra/detalles-compra.page.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-title class=\"mt-3 mb-3\">Detalle de la compra</ion-title>\r\n    </ion-col>\r\n      <ion-buttons class=\"btnCerrar\">\r\n        <ion-button (click)=\"cerrarModal()\">Cerrar</ion-button>\r\n      </ion-buttons>\r\n  </ion-row>\r\n\r\n  <ion-item *ngFor=\"let videojuegoCompra of videojuegosCompra\">\r\n    <ion-thumbnail slot=\"start\">\r\n      <img [src]=\"videojuegoCompra.videojuego.imagen\">\r\n    </ion-thumbnail>\r\n\r\n    <ion-grid>\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"12\">\r\n          <ion-label>\r\n            <h2>{{videojuegoCompra.videojuego.nombre}}</h2>\r\n            <h3>\r\n              {{videojuegoCompra.precio | currency:'EUR':'symbol':'0.0-2'}} X {{videojuegoCompra.cantidad}}\r\n\r\n              <span *ngIf=\"videojuegoCompra.cantidad === 1\">unidad</span>\r\n              <span *ngIf=\"videojuegoCompra.cantidad > 1\">unidades</span>\r\n            </h3>\r\n          </ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n</ion-content>\r\n");

/***/ }),

/***/ "CiAP":
/*!*************************************************!*\
  !*** ./src/app/videojuegos/home/home.module.ts ***!
  \*************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "8TPX");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "AcIx");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "DwT7":
/*!**********************************************************************!*\
  !*** ./src/app/usuarios/shared/edit-avatar/edit-avatar.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditAvatarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAvatarComponent", function() { return EditAvatarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_avatar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-avatar.component.html */ "/Of8");
/* harmony import */ var _edit_avatar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-avatar.component.scss */ "iXL1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/usuarios.service */ "ust+");






let EditAvatarComponent = class EditAvatarComponent {
    constructor(modalCtrl, usuarioService) {
        this.modalCtrl = modalCtrl;
        this.usuarioService = usuarioService;
    }
    ngOnInit() {
        this.usuarioService.obtenerMiPerfil().subscribe(resp => this.usuario = resp);
    }
    editarAvatar() {
        this.usuarioService.editarAvatar(this.avatar).subscribe(() => {
            console.log('Avatar editado');
            this.modalCtrl.dismiss();
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
};
EditAvatarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"] }
];
EditAvatarComponent.propDecorators = {
    avatar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
EditAvatarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-avatar',
        template: _raw_loader_edit_avatar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_avatar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditAvatarComponent);



/***/ }),

/***/ "EVJX":
/*!**********************************************************************!*\
  !*** ./src/app/usuarios/shared/edit-perfil/edit-perfil.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditPerfilComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPerfilComponent", function() { return EditPerfilComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_perfil_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-perfil.component.html */ "ST/v");
/* harmony import */ var _edit_perfil_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-perfil.component.scss */ "gyaU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/usuarios.service */ "ust+");
/* harmony import */ var _services_provincia_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/provincia.service */ "kj20");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let EditPerfilComponent = class EditPerfilComponent {
    constructor(modalCtrl, usuarioService, provinciaService) {
        this.modalCtrl = modalCtrl;
        this.usuarioService = usuarioService;
        this.provinciaService = provinciaService;
    }
    ngOnInit() {
        this.provinciaService.obtenerProvincias().subscribe(resp => {
            this.provincias = resp;
        });
        this.usuarioService.obtenerMiPerfil().subscribe(resp => {
            this.usuario = resp;
            this.nombre = this.usuario.nombre;
            this.apellidos = this.usuario.apellidos;
            this.nickname = this.usuario.nickname;
            this.provincia = this.usuario.provincia.id;
        });
    }
    editarPerfil() {
        this.usuarioService.editarPerfil(this.nombre, this.apellidos, this.usuario.email, this.nickname, this.provincia).subscribe(() => {
            console.log('Perfil editado');
        });
    }
    cancelar() {
        this.modalCtrl.dismiss();
    }
};
EditPerfilComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_4__["UsuariosService"] },
    { type: _services_provincia_service__WEBPACK_IMPORTED_MODULE_5__["ProvinciaService"] }
];
EditPerfilComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-perfil',
        template: _raw_loader_edit_perfil_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_perfil_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditPerfilComponent);



/***/ }),

/***/ "FQVY":
/*!*********************************************!*\
  !*** ./src/app/services/general.service.ts ***!
  \*********************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let GeneralService = class GeneralService {
    constructor(http) {
        this.http = http;
        this.urlPerfil = 'profile';
    }
    obtenerUsuarioLogueado() {
        return this.http.get(`${this.urlPerfil}/me`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data));
    }
};
GeneralService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GeneralService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GeneralService);



/***/ }),

/***/ "Iurt":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/modals/modal-detalle-compra/modal-detalle-compra.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ModalDetalleCompraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDetalleCompraComponent", function() { return ModalDetalleCompraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_detalle_compra_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-detalle-compra.component.html */ "cXvD");
/* harmony import */ var _modal_detalle_compra_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-detalle-compra.component.scss */ "6mzX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_features_historial_compras_detalles_compra_detalles_compra_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/features/historial-compras/detalles-compra/detalles-compra.page */ "mvSI");






let ModalDetalleCompraComponent = class ModalDetalleCompraComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    crearModalDetalleCompra(lineaCompra) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_features_historial_compras_detalles_compra_detalles_compra_page__WEBPACK_IMPORTED_MODULE_5__["DetallesCompraPage"],
                componentProps: {
                    lineaCompra: lineaCompra
                }
            });
            return yield modal.present();
        });
    }
    cerrarModal() {
        this.modalCtrl.dismiss();
    }
};
ModalDetalleCompraComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalDetalleCompraComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-detalle-compra',
        template: _raw_loader_modal_detalle_compra_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_detalle_compra_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalDetalleCompraComponent);



/***/ }),

/***/ "JHGF":
/*!************************************************************************!*\
  !*** ./src/app/shared/modals/modal-editar/modal-editar.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1lZGl0YXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "JctN":
/*!*****************************************************!*\
  !*** ./src/app/usuarios/usuarios-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: UsuariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosRoutingModule", function() { return UsuariosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_usuarios_resolvers_perfil_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/usuarios/resolvers/perfil-resolver.service */ "h0Y0");




const routes = [
    {
        path: '',
        redirectTo: 'videojuegos',
        pathMatch: 'full'
    },
    {
        path: 'me',
        loadChildren: () => Promise.all(/*! import() | perfil-perfil-module */[__webpack_require__.e("default~login-login-module~perfil-perfil-module~registro-registro-module~videojuego-form-videojuego-~215c839c"), __webpack_require__.e("perfil-perfil-module")]).then(__webpack_require__.bind(null, /*! ./perfil/perfil.module */ "9Iej")).then(m => m.PerfilPageModule),
        resolve: {
            usuario: _shared_usuarios_resolvers_perfil_resolver_service__WEBPACK_IMPORTED_MODULE_3__["PerfilResolverService"]
        }
    }
];
let UsuariosRoutingModule = class UsuariosRoutingModule {
};
UsuariosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UsuariosRoutingModule);



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let CarroCompraService = class CarroCompraService {
    constructor(http) {
        this.http = http;
        this.urlCarro = 'carro';
        this.numVideojuegosCarroCompra = 0;
        this.contVideojuegosCarro = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
    }
    obtenerContVideojuegosCarro() {
        return this.contVideojuegosCarro;
    }
    obtenerNumVideojuegosCarroCompra() {
        return this.numVideojuegosCarroCompra;
    }
    obtenerVideojuegosCarro() {
        return this.http.get(`videojuegos/${this.urlCarro}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            this.contVideojuegosCarro.next(resp.data.length);
            return resp.data;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    addVideojuegoCarro(videojuego) {
        return this.http.post(`videojuegos/${videojuego.id}/${this.urlCarro}`, videojuego).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            this.numVideojuegosCarroCompra += 1;
            this.contVideojuegosCarro.next(this.contVideojuegosCarro.value + this.numVideojuegosCarroCompra);
            return resp;
        }));
    }
    removeVideojuegoCarro(idVideojuego, idVideojuegoCarro) {
        this.contVideojuegosCarro.next(this.contVideojuegosCarro.value - 1);
        return this.http.delete(`videojuegos/${idVideojuego}/${this.urlCarro}/${idVideojuegoCarro}`);
    }
    aumentarStock(videojuego, videojuegoCarro) {
        return this.http.patch(`videojuegos/${videojuego.id}/${this.urlCarro}/${videojuegoCarro.id}`, {
            stock: videojuegoCarro.cantidad + 1
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => resp));
    }
    decrementarStock(videojuego, videojuegoCarro) {
        return this.http.patch(`videojuegos/${videojuego.id}/${this.urlCarro}/${videojuegoCarro.id}`, {
            stock: videojuegoCarro.cantidad - 1
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => resp));
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

/***/ "N/25":
/*!***********************************************!*\
  !*** ./src/app/auth/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.authURL = 'auth';
        this.logged = false;
        this.loginChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    isLogged() {
        if (this.logged) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
        }
        else if (!this.logged && !localStorage.getItem('token')) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
    }
    login(usuario) {
        return this.http.post(`${this.authURL}/login`, usuario).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            localStorage.setItem('token', resp.token);
            this.logged = true;
            this.loginChange$.next(true);
        }));
    }
    registrar(usuario) {
        return this.http.post(`${this.authURL}/register`, usuario);
    }
    loginGoogle(token) {
        return this.http.post(`${this.authURL}/google`, { access_token: token }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
            localStorage.setItem('token', resp.token);
            this.loginChange$.next(true);
            this.logged = true;
        }));
    }
    cerrarSesion() {
        localStorage.removeItem('token');
        this.logged = false;
        this.loginChange$.next(false);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "NFnX":
/*!***********************************************************!*\
  !*** ./src/app/videojuegos/videojuegos-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: VideojuegosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegosRoutingModule", function() { return VideojuegosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _resolvers_videojuego_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/videojuego-resolver.service */ "1R6r");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "CiAP")).then(m => m.HomePageModule),
        pathMatch: 'full'
    },
    {
        path: 'nuevo',
        loadChildren: () => Promise.all(/*! import() | videojuego-form-videojuego-form-module */[__webpack_require__.e("default~login-login-module~perfil-perfil-module~registro-registro-module~videojuego-form-videojuego-~215c839c"), __webpack_require__.e("videojuego-form-videojuego-form-module")]).then(__webpack_require__.bind(null, /*! ./videojuego-form/videojuego-form.module */ "9DYZ")).then(m => m.VideojuegoFormPageModule)
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | videojuego-detalles-videojuego-detalles-module */ "videojuego-detalles-videojuego-detalles-module").then(__webpack_require__.bind(null, /*! ./videojuego-detalles/videojuego-detalles.module */ "O28S")).then(m => m.VideojuegoDetallesPageModule),
        resolve: {
            videojuego: _resolvers_videojuego_resolver_service__WEBPACK_IMPORTED_MODULE_3__["VideojuegoResolverService"]
        }
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | videojuego-form-videojuego-form-module */[__webpack_require__.e("default~login-login-module~perfil-perfil-module~registro-registro-module~videojuego-form-videojuego-~215c839c"), __webpack_require__.e("videojuego-form-videojuego-form-module")]).then(__webpack_require__.bind(null, /*! ./videojuego-form/videojuego-form.module */ "9DYZ")).then(m => m.VideojuegoFormPageModule)
    }
];
let VideojuegosRoutingModule = class VideojuegosRoutingModule {
};
VideojuegosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VideojuegosRoutingModule);



/***/ }),

/***/ "OByn":
/*!******************************************************!*\
  !*** ./src/app/auth/guards/logout-activate.guard.ts ***!
  \******************************************************/
/*! exports provided: LogoutActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutActivateGuard", function() { return LogoutActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "N/25");





let LogoutActivateGuard = class LogoutActivateGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.isLogged().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            if (resp === false) {
                return true;
            }
            else {
                return this.router.createUrlTree(['/videojuegos']);
            }
        }));
    }
};
LogoutActivateGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LogoutActivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LogoutActivateGuard);



/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _modals_modal_editar_modal_editar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modals/modal-editar/modal-editar.component */ "d2JP");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _videojuegos_videojuego_card_videojuego_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videojuegos/videojuego-card/videojuego-card.component */ "XBur");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modals_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modals/modal-detalle-compra/modal-detalle-compra.component */ "Iurt");








let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_modals_modal_editar_modal_editar_component__WEBPACK_IMPORTED_MODULE_3__["ModalEditarComponent"], _videojuegos_videojuego_card_videojuego_card_component__WEBPACK_IMPORTED_MODULE_5__["VideojuegoCardComponent"], _modals_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_7__["ModalDetalleCompraComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ],
        exports: [
            _modals_modal_editar_modal_editar_component__WEBPACK_IMPORTED_MODULE_3__["ModalEditarComponent"],
            _modals_modal_detalle_compra_modal_detalle_compra_component__WEBPACK_IMPORTED_MODULE_7__["ModalDetalleCompraComponent"],
            _videojuegos_videojuego_card_videojuego_card_component__WEBPACK_IMPORTED_MODULE_5__["VideojuegoCardComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "PGME":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modals/modal-editar/modal-editar.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-buttons slot=\"end\">\r\n    <ion-button (click)=\"cerrarModal()\">\r\n      Cerrar\r\n    </ion-button>\r\n  </ion-buttons>\r\n");

/***/ }),

/***/ "PbcP":
/*!************************************************************!*\
  !*** ./src/app/videojuegos/services/videojuego.service.ts ***!
  \************************************************************/
/*! exports provided: VideojuegoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoService", function() { return VideojuegoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let VideojuegoService = class VideojuegoService {
    constructor(http) {
        this.http = http;
        this.videojuegoURL = 'videojuegos';
    }
    obtenerVideojuegos() {
        return this.http.get(`${this.videojuegoURL}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data));
    }
    obtenerVideojuego(id) {
        return this.http.get(`${this.videojuegoURL}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data));
    }
    obtenerVideojuegosUsuario(idUsuario) {
        return this.http.get(`${this.videojuegoURL}/usuario/${idUsuario}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data));
    }
    subirVideojuego(videojuego) {
        console.log('aloha');
        console.log(videojuego);
        return this.http.post(this.videojuegoURL, videojuego).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data));
    }
    editarVideojuego(videojuego) {
        return this.http.put(`${this.videojuegoURL}/edit/${videojuego.id}`, {
            nombre: videojuego.nombre,
            descripcion: videojuego.descripcion,
            precio: videojuego.precio,
            imagen: videojuego.imagen,
            plataforma: videojuego.plataforma,
            stock: videojuego.stock
        });
    }
    borrarVideojuego(id) {
        return this.http.delete(`${this.videojuegoURL}/${id}`);
    }
    obtenerVideojuegosFavoritos() {
        return this.http.get(`${this.videojuegoURL}/favoritos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data));
    }
    darLike(id) {
        return this.http.post(`${this.videojuegoURL}/${id}/like`, { liked: true });
    }
    eliminarLike(id) {
        return this.http.delete(`${this.videojuegoURL}/${id}/like`);
    }
    darFavorito(id) {
        return this.http.post(`${this.videojuegoURL}/${id}/favourite`, { favourite: true });
    }
    eliminarFavoritos(id) {
        return this.http.delete(`${this.videojuegoURL}/${id}/favourite`);
    }
};
VideojuegoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
VideojuegoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], VideojuegoService);



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "ST/v":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/shared/edit-perfil/edit-perfil.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form #editProfileForm=\"ngForm\" (ngSubmit)=\"editarPerfil()\">\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Name</ion-label>\r\n      <ion-input type=\"text\" name=\"name\" required [(ngModel)]=\"nombre\" #nameModel=\"ngModel\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Apellidos</ion-label>\r\n      <ion-input type=\"text\" name=\"apellidos\" required [(ngModel)]=\"apellidos\" #apellidosModel=\"ngModel\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nickname</ion-label>\r\n      <ion-input type=\"text\" name=\"nickname\" required [(ngModel)]=\"nickname\" #nicknameModel=\"ngModel\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Provincia</ion-label>\r\n      <ion-select required #provinciaModel=\"ngModel\" name=\"provincia\" [(ngModel)]=\"provincia\">\r\n        <ion-select-option value=\"0\">Choose a province...</ion-select-option>\r\n        <ion-select-option *ngFor=\"let provincia of provincias\" [value]=\"provincia.id\">{{provincia.nombre}}</ion-select-option>\r\n      </ion-select>\r\n      <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"provinciaModel.dirty && provinciaModel.valid && provinciaModel.value !== 0\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"editProfileForm.invalid\">\r\n        Edit profile\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button color=\"danger\" expand=\"block\" fill=\"outline\" (click)=\"cancelar()\">\r\n        <ion-icon name=\"arrow-undo\" slot=\"start\"></ion-icon>\r\n        Cancel\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</form>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_general_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/general.service */ "FQVY");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/services/auth.service */ "N/25");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _features_carro_compra_services_carro_compra_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./features/carro-compra/services/carro-compra.service */ "Kboj");








let AppComponent = class AppComponent {
    constructor(generalService, authService, carroService, nav) {
        this.generalService = generalService;
        this.authService = authService;
        this.carroService = carroService;
        this.nav = nav;
        this.user = {
            email: 'hola',
            nickname: 'nickname',
            avatar: ''
        };
        this.menuDisabled = true;
        this.appPages = [
            { title: 'Home', url: '/videojuegos', icon: 'home' },
            { title: 'Subir un videojuego', url: '/videojuegos/nuevo', icon: 'add-circle' },
            { title: 'Favoritos', url: '/features/favoritos', icon: 'bookmark' },
            { title: 'Carro de compra', url: '/features/carro', icon: 'cart' },
            { title: 'Mis compras', url: '/features/compras/historial', icon: 'list' },
            { title: 'Mi perfil', url: '/usuarios/me', icon: 'person' },
        ];
        this.authService.loginChange$.subscribe(logged => this.menuDisabled = !logged);
    }
    ngOnInit() {
        this.obtenerInfoUsuario();
        this.numVideojuegosCarro = this.carroService.obtenerContVideojuegosCarro();
    }
    obtenerInfoUsuario() {
        this.generalService.obtenerUsuarioLogueado().subscribe(resp => {
            this.user = resp;
            console.log(this.user);
        });
    }
    cerrarSesion() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.cerrarSesion();
            this.nav.navigateRoot(['/auth/login']);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_general_service__WEBPACK_IMPORTED_MODULE_4__["GeneralService"] },
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _features_carro_compra_services_carro_compra_service__WEBPACK_IMPORTED_MODULE_7__["CarroCompraService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n              <img [src]=\"user.avatar\" alt=\"Avatar usuario\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h2>{{user.nombre}} {{user.apellidos}}</h2>\r\n              <p>{{user.email}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item *ngIf=\"p.icon !== 'cart'\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item *ngIf=\"p.icon === 'cart'\" routerDirection=\"root\" [routerLink]=\"['/features/carro']\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" [ios]=\"'cart-outline'\" [md]=\"'cart-sharp'\"></ion-icon>\r\n              <ion-label>Carro de compra</ion-label>\r\n              <ion-badge *ngIf=\"numVideojuegosCarro.value !== 0\" color=\"danger\" class=\"badge-cart\">{{numVideojuegosCarro.value}}</ion-badge>\r\n            </ion-item>\r\n\r\n          </ion-menu-toggle>\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item lines=\"none\" (click)=\"cerrarSesion()\">\r\n              <ion-icon slot=\"start\" [md]=\"'exit-sharp'\"></ion-icon>\r\n              <ion-label>Cerrar sesión</ion-label>\r\n            </ion-item>\r\n\r\n            <!-- Icono con cantidad de artículos en carro de compra -->\r\n            <!--<ion-button>\r\n              <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n              <ion-badge color=\"danger\" class=\"badge-cart\">99</ion-badge>\r\n            </ion-button>-->\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

/***/ }),

/***/ "XBur":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/videojuegos/videojuego-card/videojuego-card.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VideojuegoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoCardComponent", function() { return VideojuegoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videojuego_card_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videojuego-card.component.html */ "7l9E");
/* harmony import */ var _videojuego_card_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videojuego-card.component.scss */ "bqCF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_videojuegos_services_videojuego_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/videojuegos/services/videojuego.service */ "PbcP");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






let VideojuegoCardComponent = class VideojuegoCardComponent {
    constructor(videojuegoService) {
        this.videojuegoService = videojuegoService;
        this.liked = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.favourite = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    }
    ngOnInit() {
        moment__WEBPACK_IMPORTED_MODULE_5__["locale"]('es');
        this.videojuego.fechaCreacion = moment__WEBPACK_IMPORTED_MODULE_5__(this.videojuego.fechaCreacion).fromNow();
    }
    setLike() {
        if (this.videojuego.liked === true) {
            this.eliminarLike();
        }
        else {
            this.darLike();
        }
    }
    setFavorito() {
        if (this.videojuego.favourite) {
            this.eliminarFavoritos();
        }
        else {
            this.addFavoritos();
        }
    }
    darLike() {
        this.liked.emit();
        this.videojuego.liked = true;
        this.videojuego.numLikes += 1;
        this.videojuegoService.darLike(this.videojuego.id).subscribe(() => {
            console.log('Videojuego like');
        }, error => {
            this.videojuego.liked = false;
            this.videojuego.numLikes -= 1;
        });
    }
    eliminarLike() {
        this.liked.emit();
        this.videojuego.liked = false;
        this.videojuego.numLikes -= 1;
        this.videojuegoService.eliminarLike(this.videojuego.id).subscribe(() => {
            console.log('Videojuego like eliminado');
        }, error => {
            this.videojuego.liked = true;
            this.videojuego.numLikes += 1;
        });
    }
    addFavoritos() {
        this.favourite.emit();
        this.videojuego.favourite = true;
        this.videojuegoService.darFavorito(this.videojuego.id).subscribe(() => {
            console.log('Videojuego favorito');
        }, error => {
            this.videojuego.favourite = false;
        });
    }
    eliminarFavoritos() {
        this.favourite.emit();
        this.videojuego.favourite = false;
        this.videojuegoService.eliminarFavoritos(this.videojuego.id).subscribe(() => {
            console.log('Videojuego favorito eliminado');
        }, error => {
            this.videojuego.favourite = true;
        });
    }
};
VideojuegoCardComponent.ctorParameters = () => [
    { type: src_app_videojuegos_services_videojuego_service__WEBPACK_IMPORTED_MODULE_4__["VideojuegoService"] }
];
VideojuegoCardComponent.propDecorators = {
    videojuego: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    liked: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    favourite: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
VideojuegoCardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videojuego-card',
        template: _raw_loader_videojuego_card_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videojuego_card_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideojuegoCardComponent);



/***/ }),

/***/ "XXls":
/*!******************************************************!*\
  !*** ./src/app/interceptors/base-url.interceptor.ts ***!
  \******************************************************/
/*! exports provided: BaseUrlInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseUrlInterceptor", function() { return BaseUrlInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");



let BaseUrlInterceptor = class BaseUrlInterceptor {
    constructor() { }
    intercept(request, next) {
        const newRequest = request.clone({
            url: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + request.url
        });
        return next.handle(newRequest);
    }
};
BaseUrlInterceptor.ctorParameters = () => [];
BaseUrlInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BaseUrlInterceptor);



/***/ }),

/***/ "Y8Tu":
/*!***************************************************!*\
  !*** ./src/app/videojuegos/videojuegos.module.ts ***!
  \***************************************************/
/*! exports provided: VideojuegosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegosModule", function() { return VideojuegosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _videojuegos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videojuegos-routing.module */ "NFnX");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ "CiAP");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");







let VideojuegosModule = class VideojuegosModule {
};
VideojuegosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _videojuegos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideojuegosRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        exports: [
            _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomePageModule"]
        ]
    })
], VideojuegosModule);



/***/ }),

/***/ "Yj9t":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-routing.module */ "6epW");





let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_4__["AuthRoutingModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/base-url.interceptor */ "XXls");
/* harmony import */ var _interceptors_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/auth-token.interceptor */ "+js1");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.module */ "Yj9t");
/* harmony import */ var _videojuegos_videojuegos_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./videojuegos/videojuegos.module */ "Y8Tu");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usuarios/usuarios.module */ "0G8V");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/features.module */ "hB0V");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"],
            _videojuegos_videojuegos_module__WEBPACK_IMPORTED_MODULE_11__["VideojuegosModule"],
            _usuarios_usuarios_module__WEBPACK_IMPORTED_MODULE_13__["UsuariosModule"],
            _features_features_module__WEBPACK_IMPORTED_MODULE_14__["FeaturesModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"]
        ],
        providers: [
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_8__["BaseUrlInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HTTP_INTERCEPTORS"],
                useClass: _interceptors_auth_token_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthTokenInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "bqCF":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/videojuegos/videojuego-card/videojuego-card.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 30px;\n}\n\nion-label {\n  color: black;\n  font-size: 15px;\n}\n\nbutton {\n  background-color: white;\n}\n\n.plataforma {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW9qdWVnby1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoidmlkZW9qdWVnby1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ucGxhdGFmb3JtYSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "cXvD":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modals/modal-detalle-compra/modal-detalle-compra.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  modal-detalle-compra works!\n</p>\n");

/***/ }),

/***/ "d2JP":
/*!**********************************************************************!*\
  !*** ./src/app/shared/modals/modal-editar/modal-editar.component.ts ***!
  \**********************************************************************/
/*! exports provided: ModalEditarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEditarComponent", function() { return ModalEditarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_editar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-editar.component.html */ "PGME");
/* harmony import */ var _modal_editar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-editar.component.scss */ "JHGF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_usuarios_shared_edit_avatar_edit_avatar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/usuarios/shared/edit-avatar/edit-avatar.component */ "DwT7");
/* harmony import */ var src_app_usuarios_shared_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/usuarios/shared/edit-password/edit-password.component */ "gLzG");
/* harmony import */ var src_app_usuarios_shared_edit_perfil_edit_perfil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/usuarios/shared/edit-perfil/edit-perfil.component */ "EVJX");








let ModalEditarComponent = class ModalEditarComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    crearModalEditarPassword() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_usuarios_shared_edit_password_edit_password_component__WEBPACK_IMPORTED_MODULE_6__["EditPasswordComponent"]
            });
            return yield modal.present();
        });
    }
    crearModalEditarPerfil() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_usuarios_shared_edit_perfil_edit_perfil_component__WEBPACK_IMPORTED_MODULE_7__["EditPerfilComponent"],
                componentProps: { usuario: this.usuario }
            });
            return yield modal.present();
        });
    }
    crearModalEditarAvatar(avatar) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_usuarios_shared_edit_avatar_edit_avatar_component__WEBPACK_IMPORTED_MODULE_5__["EditAvatarComponent"],
                componentProps: { avatar: avatar }
            });
            return yield modal.present();
        });
    }
    cerrarModal() {
        this.modalCtrl.dismiss();
    }
};
ModalEditarComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalEditarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    }),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-editar',
        template: _raw_loader_modal_editar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_editar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalEditarComponent);



/***/ }),

/***/ "eUEs":
/*!*************************************************!*\
  !*** ./src/app/videojuegos/home/home.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  font-size: 30px;\n}\n\nion-label {\n  color: black;\n  font-size: 15px;\n}\n\nbutton {\n  background-color: white;\n}\n\n/*.styleicono:hover {\n  transform: scale(1.5);\n}*/\n\n.plataforma {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBOztFQUFBOztBQUlBO0VBQ0UsZUFBQTtBQUFGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vKi5zdHlsZWljb25vOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn0qL1xyXG5cclxuLnBsYXRhZm9ybWEge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "euYS":
/*!**************************************************************************************!*\
  !*** ./src/app/features/historial-compras/detalles-compra/detalles-compra.page.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btnCerrar {\n  margin-right: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGV0YWxsZXMtY29tcHJhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoiZGV0YWxsZXMtY29tcHJhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5DZXJyYXIge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "gLzG":
/*!**************************************************************************!*\
  !*** ./src/app/usuarios/shared/edit-password/edit-password.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPasswordComponent", function() { return EditPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_password_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-password.component.html */ "vbUa");
/* harmony import */ var _edit_password_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-password.component.scss */ "umHe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/usuarios.service */ "ust+");






let EditPasswordComponent = class EditPasswordComponent {
    constructor(usuarioService, modalCtrl) {
        this.usuarioService = usuarioService;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    editarPassword() {
        this.usuarioService.editarPassword(this.password).subscribe(() => {
            console.log('Contraseña editada');
        }, error => console.error(error));
    }
    cancelar() {
        this.modalCtrl.dismiss({ changed: false });
    }
};
EditPasswordComponent.ctorParameters = () => [
    { type: _services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
EditPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-password',
        template: _raw_loader_edit_password_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_password_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditPasswordComponent);



/***/ }),

/***/ "gyaU":
/*!************************************************************************!*\
  !*** ./src/app/usuarios/shared/edit-perfil/edit-perfil.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBlcmZpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "h0Y0":
/*!**********************************************************************!*\
  !*** ./src/app/shared/usuarios/resolvers/perfil-resolver.service.ts ***!
  \**********************************************************************/
/*! exports provided: PerfilResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerfilResolverService", function() { return PerfilResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_usuarios_services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/usuarios/services/usuarios.service */ "ust+");






let PerfilResolverService = class PerfilResolverService {
    constructor(router, usuariosService) {
        this.router = router;
        this.usuariosService = usuariosService;
    }
    resolve(route, state) {
        const id = route.params.id;
        if (isNaN(id)) {
            return this.usuariosService.obtenerMiPerfil().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
                this.router.navigate(['/videojuegos']);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }));
        }
        else {
            return this.usuariosService.obtenerPerfil(+id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(error => {
                this.router.navigate(['/videojuegos']);
                return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }));
        }
    }
};
PerfilResolverService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_usuarios_services_usuarios_service__WEBPACK_IMPORTED_MODULE_5__["UsuariosService"] }
];
PerfilResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PerfilResolverService);



/***/ }),

/***/ "hB0V":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features-routing.module */ "0e1J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");






let FeaturesModule = class FeaturesModule {
};
FeaturesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _features_routing_module__WEBPACK_IMPORTED_MODULE_3__["FeaturesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], FeaturesModule);



/***/ }),

/***/ "iXL1":
/*!************************************************************************!*\
  !*** ./src/app/usuarios/shared/edit-avatar/edit-avatar.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LWF2YXRhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "kj20":
/*!********************************************************!*\
  !*** ./src/app/usuarios/services/provincia.service.ts ***!
  \********************************************************/
/*! exports provided: ProvinciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvinciaService", function() { return ProvinciaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let ProvinciaService = class ProvinciaService {
    constructor(http) {
        this.http = http;
        this.provinciaUrl = 'provincias';
    }
    obtenerProvincias() {
        return this.http.get(`${this.provinciaUrl}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data));
    }
};
ProvinciaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProvinciaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ProvinciaService);



/***/ }),

/***/ "mvSI":
/*!************************************************************************************!*\
  !*** ./src/app/features/historial-compras/detalles-compra/detalles-compra.page.ts ***!
  \************************************************************************************/
/*! exports provided: DetallesCompraPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesCompraPage", function() { return DetallesCompraPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detalles_compra_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detalles-compra.page.html */ "CAJa");
/* harmony import */ var _detalles_compra_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detalles-compra.page.scss */ "euYS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_detalle_compra_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/detalle-compra.service */ "ywlG");






let DetallesCompraPage = class DetallesCompraPage {
    constructor(detalleCompraService, modalCtrl) {
        this.detalleCompraService = detalleCompraService;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        this.obtenerDetallesCompra();
    }
    obtenerDetallesCompra() {
        this.detalleCompraService.getDetalleCompra(this.lineaCompra).subscribe(resp => {
            this.videojuegosCompra = resp;
        });
    }
    cerrarModal() {
        this.modalCtrl.dismiss();
    }
};
DetallesCompraPage.ctorParameters = () => [
    { type: _services_detalle_compra_service__WEBPACK_IMPORTED_MODULE_5__["DetalleCompraService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
DetallesCompraPage.propDecorators = {
    lineaCompra: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
DetallesCompraPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detalles-compra',
        template: _raw_loader_detalles_compra_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detalles_compra_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetallesCompraPage);



/***/ }),

/***/ "umHe":
/*!****************************************************************************!*\
  !*** ./src/app/usuarios/shared/edit-password/edit-password.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "ust+":
/*!*******************************************************!*\
  !*** ./src/app/usuarios/services/usuarios.service.ts ***!
  \*******************************************************/
/*! exports provided: UsuariosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosService", function() { return UsuariosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let UsuariosService = class UsuariosService {
    constructor(http) {
        this.http = http;
        this.usuariosUrl = 'profile';
    }
    obtenerMiPerfil() {
        return this.http.get(`${this.usuariosUrl}/me`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => resp.data));
    }
    obtenerPerfil(id) {
        return this.http.get(`${this.usuariosUrl}/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => resp.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(`No se pudo obtener el perfil`);
        }));
    }
    editarPassword(password) {
        return this.http.patch(`${this.usuariosUrl}/edit/password`, { password: password });
    }
    editarPerfil(nombre, apellidos, email, nickname, provincia) {
        return this.http.put(`${this.usuariosUrl}/me`, {
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            nickname: nickname,
            provincia: provincia
        });
    }
    editarAvatar(avatar) {
        return this.http.patch(`${this.usuariosUrl}/edit/avatar`, { avatar: avatar });
    }
};
UsuariosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UsuariosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UsuariosService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_guards_login_activate_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/guards/login-activate.guard */ "zVXe");
/* harmony import */ var _auth_guards_logout_activate_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/guards/logout-activate.guard */ "OByn");





const routes = [
    {
        path: '',
        redirectTo: '/videojuegos',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthModule),
        canActivate: [_auth_guards_logout_activate_guard__WEBPACK_IMPORTED_MODULE_4__["LogoutActivateGuard"]]
    },
    {
        path: 'videojuegos',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./videojuegos/videojuegos.module */ "Y8Tu")).then(m => m.VideojuegosModule),
        canActivate: [_auth_guards_login_activate_guard__WEBPACK_IMPORTED_MODULE_3__["LoginActivateGuard"]]
    },
    {
        path: 'usuarios',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./usuarios/usuarios.module */ "0G8V")).then(m => m.UsuariosModule),
        canActivate: [_auth_guards_login_activate_guard__WEBPACK_IMPORTED_MODULE_3__["LoginActivateGuard"]]
    },
    {
        path: 'features',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./features/features.module */ "hB0V")).then(m => m.FeaturesModule),
        canActivate: [_auth_guards_login_activate_guard__WEBPACK_IMPORTED_MODULE_3__["LoginActivateGuard"]]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vbUa":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuarios/shared/edit-password/edit-password.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"editarPassword()\">\r\n  <ion-list ngModelGroup=\"passwordGroup\" appEqualPasswords>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Password</ion-label>\r\n      <ion-input type=\"password\" name=\"password\" required [(ngModel)]=\"password\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Repeat password</ion-label>\r\n      <ion-input type=\"password\" name=\"password2\" required [(ngModel)]=\"password2\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button type=\"submit\" color=\"primary\" expand=\"block\">\r\n        Edit password\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col>\r\n      <ion-button color=\"danger\" expand=\"block\" fill=\"outline\" (click)=\"cancelar()\">\r\n        <ion-icon name=\"arrow-undo\" slot=\"start\"></ion-icon>\r\n        Cancel\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</form>\r\n");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\nion-menu.md ion-list {\n  padding: 20px 0;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*\n  Estilos extra botón carro compra\n*/\n.badge-cart {\n  position: relative;\n  right: 20px;\n  width: 23px;\n  top: 0px;\n  border-radius: 75%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDJFQUFBO0FBRUY7QUFDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBOztFQUVFLGtCQUFBO0FBRUY7QUFDQTtFQUNFLDJEQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUtBO0VBQ0Usc0RBQUE7QUFGRjtBQUtBO0VBQ0UsK0JBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxzQkFBQTtBQUZGO0FBS0E7RUFDRSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0E7RUFDRSwrQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUhGO0FBTUE7RUFDRSxpQ0FBQTtBQUhGO0FBTUE7O0NBQUE7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFIRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi8qXG4gIEVzdGlsb3MgZXh0cmEgYm90w7NuIGNhcnJvIGNvbXByYVxuKi9cbi5iYWRnZS1jYXJ0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMjBweDtcbiAgd2lkdGg6IDIzcHg7XG4gIHRvcDogMHB4O1xuICBib3JkZXItcmFkaXVzOiA3NSU7XG59Il19 */");

/***/ }),

/***/ "ywlG":
/*!*******************************************************************************!*\
  !*** ./src/app/features/historial-compras/services/detalle-compra.service.ts ***!
  \*******************************************************************************/
/*! exports provided: DetalleCompraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleCompraService", function() { return DetalleCompraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




let DetalleCompraService = class DetalleCompraService {
    constructor(http) {
        this.http = http;
    }
    getDetalleCompra(lineaCompra) {
        return this.http.get(`profile/buy/${lineaCompra}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => resp.data));
    }
};
DetalleCompraService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DetalleCompraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], DetalleCompraService);



/***/ }),

/***/ "zAHJ":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videojuegos/home/home.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Videojuegos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <app-videojuego-card *ngFor=\"let videojuego of videojuegos\" [videojuego]=\"videojuego\"></app-videojuego-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button [routerLink]=\"['/videojuegos/nuevo']\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zVXe":
/*!*****************************************************!*\
  !*** ./src/app/auth/guards/login-activate.guard.ts ***!
  \*****************************************************/
/*! exports provided: LoginActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActivateGuard", function() { return LoginActivateGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "N/25");





let LoginActivateGuard = class LoginActivateGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.authService.isLogged().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(resp => {
            if (resp === true) {
                return true;
            }
            else if (resp === false && localStorage.getItem('token')) {
                return true;
            }
            else {
                return this.router.createUrlTree(['/auth/login']);
            }
        }));
    }
};
LoginActivateGuard.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginActivateGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginActivateGuard);



/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map