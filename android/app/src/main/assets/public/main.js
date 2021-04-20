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

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Fernando\Desktop\Proyectos_Ionic\ferplay-app\src\main.ts */"zUnb");


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
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "lu3c")).then(m => m.LoginPageModule)
    },
    {
        path: 'registro',
        loadChildren: () => __webpack_require__.e(/*! import() | registro-registro-module */ "registro-registro-module").then(__webpack_require__.bind(null, /*! ./registro/registro.module */ "RyoJ")).then(m => m.RegistroPageModule)
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

/***/ "9btc":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videojuegos/videojuego-form/videojuego-form.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"editando\">\n      Editar videojuego\n    </ion-title>\n    <ion-title *ngIf=\"!editando\">\n      Nuevo videojuego\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form #productForm=\"ngForm\" (ngSubmit)=\"enviarFormulario()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"floating\">Title</ion-label>\n        <ion-input minlength=\"5\" name=\"title\" required [(ngModel)]=\"nuevoVideojuego.nombre\" #titleModel=\"ngModel\"></ion-input>\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"titleModel.dirty && titleModel.valid\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Description</ion-label>\n        <ion-input name=\"description\" required [(ngModel)]=\"nuevoVideojuego.descripcion\" #descriptionModel=\"ngModel\"></ion-input>\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"descriptionModel.dirty && descriptionModel.valid\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Category</ion-label>\n        <ion-select required #categoryModel=\"ngModel\" name=\"category\" [(ngModel)]=\"nuevoVideojuego.plataforma\">\n          <ion-select-option value=\"0\">Choose a category...</ion-select-option>\n          <ion-select-option *ngFor=\"let plataforma of plataformas\" [value]=\"plataforma.id\">{{plataforma.nombre}}</ion-select-option>\n        </ion-select>\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"categoryModel.dirty && categoryModel.valid && categoryModel.value !== 0\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Price</ion-label>\n        <ion-input type=\"number\" min=\"0.00\" step=\"0.01\" name=\"price\" required [(ngModel)]=\"nuevoVideojuego.precio\" #priceModel=\"ngModel\"></ion-input>\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"priceModel.dirty && priceModel.valid\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Stock</ion-label>\n        <ion-input type=\"number\" min=\"0\" name=\"stock\" required [(ngModel)]=\"nuevoVideojuego.stock\" #stockModel=\"ngModel\"></ion-input>\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"stockModel.dirty && stockModel.valid\"></ion-icon>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"inset\">Image</ion-label>\n        <ion-button color=\"secondary\" (click)=\"obtenerFotoCamara()\">\n          <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n          Camera\n        </ion-button>\n        <ion-button color=\"tertiary\" (click)=\"obtenerFotoGaleria()\">\n          <ion-icon name=\"images\" slot=\"start\"></ion-icon>\n          Gallery\n        </ion-button>\n      </ion-item>\n    </ion-list>\n\n    <ion-img [src]=\"nuevoVideojuego.imagen\" *ngIf=\"nuevoVideojuego.imagen && !editando\"></ion-img>\n\n    <ion-img *ngIf=\"editando\" [src]=\"nuevoVideojuego.imagen\"></ion-img>\n\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button *ngIf=\"!editando\" type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"productForm.invalid || !nuevoVideojuego.imagen\">\n            <ion-icon name=\"paper-plane\" slot=\"start\"></ion-icon>\n            Subir videojuego\n          </ion-button>\n\n          <ion-button *ngIf=\"editando\" type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"productForm.invalid || !nuevoVideojuego.imagen\">\n            <ion-icon name=\"paper-plane\" slot=\"start\"></ion-icon>\n            Editar videojuego\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"danger\" expand=\"block\" fill=\"outline\" [routerLink]=\"['/videojuegos']\" [routerDirection]=\"'root'\">\n            <ion-icon name=\"arrow-undo\" slot=\"start\"></ion-icon>\n            Cancelar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

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
    baseUrl: 'http://localhost:8000/'
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







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



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
        return this.http.post(`${this.authURL}/google`, { token: token }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => {
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
        loadChildren: () => __webpack_require__.e(/*! import() | videojuego-form-videojuego-form-module */ "videojuego-form-videojuego-form-module").then(__webpack_require__.bind(null, /*! ./videojuego-form/videojuego-form.module */ "9DYZ")).then(m => m.VideojuegoFormPageModule)
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
        loadChildren: () => __webpack_require__.e(/*! import() | videojuego-form-videojuego-form-module */ "videojuego-form-videojuego-form-module").then(__webpack_require__.bind(null, /*! ./videojuego-form/videojuego-form.module */ "9DYZ")).then(m => m.VideojuegoFormPageModule)
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





let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_modals_modal_editar_modal_editar_component__WEBPACK_IMPORTED_MODULE_3__["ModalEditarComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
        ],
        exports: [
            _modals_modal_editar_modal_editar_component__WEBPACK_IMPORTED_MODULE_3__["ModalEditarComponent"]
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
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-buttons slot=\"end\">\n    <ion-button (click)=\"cerrarModal()\">\n      Cerrar\n    </ion-button>\n  </ion-buttons>\n");

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







let AppComponent = class AppComponent {
    constructor(generalService, authService, nav) {
        this.generalService = generalService;
        this.authService = authService;
        this.nav = nav;
        this.user = {
            email: 'hola',
            nickname: 'nickname',
            avatar: ''
        };
        this.appPages = [
            { title: 'Home', url: '/videojuegos', icon: 'home' },
            { title: 'Subir un videojuego', url: '/videojuegos/nuevo', icon: 'add-circle' },
            { title: 'Favoritos', url: '/folder/Favorites', icon: 'bookmark' },
            { title: 'Carro de compra', url: '/folder/Archived', icon: 'cart' },
            { title: 'Mis compras', url: '/folder/Trash', icon: 'list' },
            { title: 'Mi perfil', url: '/profile/me', icon: 'person' },
        ];
    }
    ngOnInit() {
        this.obtenerInfoUsuario();
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\r\n      <ion-content>\r\n\r\n        <ion-list id=\"inbox-list\">\r\n          <ion-item>\r\n            <ion-avatar slot=\"start\">\r\n              <img [src]=\"user.avatar\" alt=\"Avatar usuario\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <h2>{{user.nombre}} {{user.apellidos}}</h2>\r\n              <p>{{user.email}}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\r\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\">\r\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\r\n              <ion-label>{{ p.title }}</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item lines=\"none\" (click)=\"cerrarSesion()\">\r\n              <ion-icon slot=\"start\" [md]=\"'exit-sharp'\"></ion-icon>\r\n              <ion-label>Cerrar sesión</ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n");

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






let VideojuegosModule = class VideojuegosModule {
};
VideojuegosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _videojuegos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VideojuegosRoutingModule"]
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
/* harmony import */ var src_app_videojuegos_videojuego_form_videojuego_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/videojuegos/videojuego-form/videojuego-form.page */ "ti6u");






let ModalEditarComponent = class ModalEditarComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    crearModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: src_app_videojuegos_videojuego_form_videojuego_form_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoFormPage"]
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

/***/ "sh4t":
/*!************************************************************!*\
  !*** ./src/app/videojuegos/services/plataforma.service.ts ***!
  \************************************************************/
/*! exports provided: PlataformaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlataformaService", function() { return PlataformaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let PlataformaService = class PlataformaService {
    constructor(http) {
        this.http = http;
        this.URL = 'plataformas';
    }
    obtenerPlataformas() {
        return this.http.get(this.URL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => resp.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(`Error ${error.status}. No se obtuvieron las plataformas`);
        }));
    }
};
PlataformaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
PlataformaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PlataformaService);



/***/ }),

/***/ "ti6u":
/*!*********************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-form/videojuego-form.page.ts ***!
  \*********************************************************************/
/*! exports provided: VideojuegoFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoFormPage", function() { return VideojuegoFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videojuego_form_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videojuego-form.page.html */ "9btc");
/* harmony import */ var _videojuego_form_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videojuego-form.page.scss */ "tviR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_plataforma_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/plataforma.service */ "sh4t");
/* harmony import */ var _services_videojuego_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/videojuego.service */ "PbcP");









let VideojuegoFormPage = class VideojuegoFormPage {
    constructor(plataformaService, videojuegoService, route, nav) {
        this.plataformaService = plataformaService;
        this.videojuegoService = videojuegoService;
        this.route = route;
        this.nav = nav;
        this.nuevoVideojuego = {
            nombre: '',
            descripcion: '',
            precio: 0,
            imagen: '',
            plataforma: 0
        };
        this.editando = false;
    }
    ngOnInit() {
        this.plataformaService.obtenerPlataformas().subscribe(plataformas => this.plataformas = plataformas, (error) => console.error(error));
        if (this.route.snapshot.params.id !== undefined) {
            const id = this.route.snapshot.params.id;
            this.videojuegoService.obtenerVideojuego(parseInt(id)).subscribe(resp => {
                console.warn(resp);
                this.nuevoVideojuego = {
                    id: resp.id,
                    nombre: resp.nombre,
                    descripcion: resp.descripcion,
                    precio: resp.precio,
                    imagen: resp.imagen,
                    plataforma: resp.plataforma.id,
                    stock: resp.stock
                };
                this.editando = true;
            });
        }
    }
    enviarFormulario() {
        if (this.editando) {
            this.editarVideojuego();
        }
        else {
            this.subirVideojuego();
        }
    }
    subirVideojuego() {
        this.videojuegoService.subirVideojuego(this.nuevoVideojuego).subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield console.log('aloha 2');
        }));
    }
    editarVideojuego() {
        this.videojuegoService.editarVideojuego(this.nuevoVideojuego).subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('editado');
            yield this.nav.navigateRoot(['/videojuegos']);
        }));
    }
    obtenerFotoCamara() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const foto = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Camera"].getPhoto({
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Camera,
                quality: 90,
                height: 640,
                width: 640,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].DataUrl
            });
            this.nuevoVideojuego.imagen = foto.dataUrl;
        });
    }
    obtenerFotoGaleria() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const foto = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Camera"].getPhoto({
                source: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraSource"].Photos,
                height: 640,
                width: 640,
                resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["CameraResultType"].DataUrl
            });
            this.nuevoVideojuego.imagen = foto.dataUrl;
        });
    }
};
VideojuegoFormPage.ctorParameters = () => [
    { type: _services_plataforma_service__WEBPACK_IMPORTED_MODULE_7__["PlataformaService"] },
    { type: _services_videojuego_service__WEBPACK_IMPORTED_MODULE_8__["VideojuegoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] }
];
VideojuegoFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videojuego-form',
        template: _raw_loader_videojuego_form_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videojuego_form_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideojuegoFormPage);



/***/ }),

/***/ "tviR":
/*!***********************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-form/videojuego-form.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWRlb2p1ZWdvLWZvcm0ucGFnZS5zY3NzIn0= */");

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

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "zAHJ":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videojuegos/home/home.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Videojuegos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngFor=\"let videojuego of videojuegos\">\r\n    <img [src]=\"videojuego.imagen\" alt=\"{{videojuego.nombre}}\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{videojuego.nombre}}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <ion-row>\r\n        <ion-col>\r\n          {{videojuego.descripcion}}\r\n        </ion-col>\r\n        <ion-col class=\"ion-text-center plataforma\">\r\n          {{videojuego.plataforma.nombre}}\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-card-content>\r\n\r\n    <ion-footer>\r\n      <ion-row class=\"ion-align-items-center ion-text-center\">\r\n        <ion-col text-center>\r\n          <ion-label>{{videojuego.numLikes}} likes</ion-label>\r\n        </ion-col>\r\n        <ion-col text-center>\r\n          <ion-label>{{videojuego.stock}} en stock</ion-label>\r\n        </ion-col>\r\n        <ion-col text-center>\r\n          <ion-label>Hace {{videojuego.fechaCreacion}}</ion-label>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-footer>\r\n    <ion-footer>\r\n      <ion-row class=\"ion-align-items-center ion-text-center\">\r\n        <ion-col text-center>\r\n          <button>\r\n            <ion-icon class=\"styleicono\" name=\"heart-outline\"></ion-icon>\r\n            <div>Like</div>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col text-center>\r\n          <button [routerLink]=\"['/videojuegos', videojuego.id]\">\r\n            <ion-icon name=\"information-circle\"></ion-icon>\r\n            <div>Más info</div>\r\n          </button>\r\n        </ion-col>\r\n        <ion-col text-center>\r\n          <button>\r\n            <ion-icon name=\"bookmark-outline\"></ion-icon>\r\n            <div>Favorito</div>\r\n          </button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-footer>\r\n  </ion-card>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button [routerLink]=\"['/videojuegos/nuevo']\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n");

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