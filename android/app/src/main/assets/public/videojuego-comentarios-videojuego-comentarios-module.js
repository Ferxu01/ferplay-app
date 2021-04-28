(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videojuego-comentarios-videojuego-comentarios-module"],{

/***/ "5OX7":
/*!*********************************************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-comentarios/videojuego-comentarios.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: VideojuegoComentariosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoComentariosPageModule", function() { return VideojuegoComentariosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _videojuego_comentarios_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videojuego-comentarios.page */ "swPk");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _videojuego_comentarios_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoComentariosPage"]
    }
];
let VideojuegoComentariosPageModule = class VideojuegoComentariosPageModule {
};
VideojuegoComentariosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_videojuego_comentarios_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoComentariosPage"]]
    })
], VideojuegoComentariosPageModule);



/***/ }),

/***/ "7TDo":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videojuegos/videojuego-detalles/videojuego-comentarios/videojuego-comentarios.page.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Comentarios</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item-sliding *ngFor=\"let comentario of comentarios\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"comentario.usuario.avatar\" alt=\"\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>{{comentario.usuario.nickname}}</h3>\r\n        <p>{{comentario.texto}}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    <ion-item-options side=\"end\">\r\n      <ion-item-option color=\"danger\" (click)=\"borrarComentario(comentario.id)\">\r\n        <ion-icon name=\"trash\"></ion-icon>\r\n      </ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n  <div *ngIf=\"error\" class=\"alert alert-warning\">\r\n    {{error}}\r\n  </div>\r\n</ion-content>\r\n<ion-item-divider></ion-item-divider>\r\n<ion-item>\r\n  <ion-input placeholder=\"Comenta aquí\" [(ngModel)]=\"comentario.texto\"></ion-input>\r\n  <ion-button (click)=\"comentar()\" color=\"light\">Comentar</ion-button>\r\n</ion-item>\r\n");

/***/ }),

/***/ "FUfF":
/*!************************************************************!*\
  !*** ./src/app/videojuegos/services/comentario.service.ts ***!
  \************************************************************/
/*! exports provided: ComentarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComentarioService", function() { return ComentarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let ComentarioService = class ComentarioService {
    constructor(http) {
        this.http = http;
        this.comentarioUrl = 'comentarios';
    }
    obtenerComentarios(id) {
        return this.http.get(`videojuegos/${id}/${this.comentarioUrl}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => resp.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error.error);
        }));
    }
    nuevoComentario(id, comentario) {
        return this.http.post(`videojuegos/${id}/comentario`, {
            comentario: comentario.texto
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(resp => resp.data));
    }
    borrarComentario(idVideojuego, idComentario) {
        return this.http.delete(`videojuegos/${idVideojuego}/comentario/${idComentario}`);
    }
};
ComentarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ComentarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], ComentarioService);



/***/ }),

/***/ "ODjb":
/*!*********************************************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-comentarios/videojuego-comentarios.page.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".alert-warning {\n  background: darkblue;\n  opacity: 0.8;\n  color: #fff;\n}\n\nion-icon {\n  font-size: 25px;\n}\n\nion-item-option {\n  width: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmlkZW9qdWVnby1jb21lbnRhcmlvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0YiLCJmaWxlIjoidmlkZW9qdWVnby1jb21lbnRhcmlvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxlcnQtd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZDogZGFya2JsdWU7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG5pb24taXRlbS1vcHRpb24ge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "swPk":
/*!*******************************************************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-detalles/videojuego-comentarios/videojuego-comentarios.page.ts ***!
  \*******************************************************************************************************/
/*! exports provided: VideojuegoComentariosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoComentariosPage", function() { return VideojuegoComentariosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_videojuego_comentarios_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./videojuego-comentarios.page.html */ "7TDo");
/* harmony import */ var _videojuego_comentarios_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videojuego-comentarios.page.scss */ "ODjb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_comentario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/comentario.service */ "FUfF");
/* harmony import */ var _videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../videojuego-detalles.page */ "PWwL");






let VideojuegoComentariosPage = class VideojuegoComentariosPage {
    constructor(comentarioService, parentComponent) {
        this.comentarioService = comentarioService;
        this.parentComponent = parentComponent;
        this.comentarios = [];
        this.comentario = {
            texto: ''
        };
    }
    ngOnInit() {
        this.idVideojuego = this.parentComponent.videojuego.id;
        this.obtenerComentarios(this.idVideojuego);
    }
    obtenerComentarios(id) {
        this.comentarioService.obtenerComentarios(id).subscribe(resp => {
            this.comentarios = resp;
        }, error => {
            this.error = error.errores.mensaje;
        });
    }
    comentar() {
        this.comentarioService.nuevoComentario(this.idVideojuego, this.comentario).subscribe(resp => {
            this.comentarios.push(resp);
            this.comentario.texto = '';
            if (this.error) {
                this.error = null;
            }
        });
    }
    borrarComentario(idComentario) {
        this.comentarioService.borrarComentario(this.idVideojuego, idComentario).subscribe(() => {
            this.obtenerComentarios(this.idVideojuego);
            if (this.comentarios.length === 1) {
                this.comentarios = [];
            }
        });
    }
};
VideojuegoComentariosPage.ctorParameters = () => [
    { type: _services_comentario_service__WEBPACK_IMPORTED_MODULE_4__["ComentarioService"] },
    { type: _videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoDetallesPage"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_videojuego_detalles_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoDetallesPage"],] }] }
];
VideojuegoComentariosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-videojuego-comentarios',
        template: _raw_loader_videojuego_comentarios_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_videojuego_comentarios_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VideojuegoComentariosPage);



/***/ })

}]);
//# sourceMappingURL=videojuego-comentarios-videojuego-comentarios-module.js.map