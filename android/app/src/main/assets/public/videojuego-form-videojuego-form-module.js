(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["videojuego-form-videojuego-form-module"],{

/***/ "9DYZ":
/*!***********************************************************************!*\
  !*** ./src/app/videojuegos/videojuego-form/videojuego-form.module.ts ***!
  \***********************************************************************/
/*! exports provided: VideojuegoFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideojuegoFormPageModule", function() { return VideojuegoFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _videojuego_form_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./videojuego-form.page */ "ti6u");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







const routes = [
    {
        path: '',
        component: _videojuego_form_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoFormPage"]
    }
];
let VideojuegoFormPageModule = class VideojuegoFormPageModule {
};
VideojuegoFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        declarations: [_videojuego_form_page__WEBPACK_IMPORTED_MODULE_5__["VideojuegoFormPage"]]
    })
], VideojuegoFormPageModule);



/***/ }),

/***/ "9btc":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videojuegos/videojuego-form/videojuego-form.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"editando\">\r\n      Editar videojuego\r\n    </ion-title>\r\n    <ion-title *ngIf=\"!editando\">\r\n      Nuevo videojuego\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <form #productForm=\"ngForm\" (ngSubmit)=\"enviarFormulario()\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Title</ion-label>\r\n        <ion-input minlength=\"5\" name=\"title\" required [(ngModel)]=\"nuevoVideojuego.nombre\" #titleModel=\"ngModel\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"titleModel.dirty && titleModel.valid\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Description</ion-label>\r\n        <ion-input name=\"description\" required [(ngModel)]=\"nuevoVideojuego.descripcion\" #descriptionModel=\"ngModel\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"descriptionModel.dirty && descriptionModel.valid\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Category</ion-label>\r\n        <ion-select required #categoryModel=\"ngModel\" name=\"category\" [(ngModel)]=\"nuevoVideojuego.plataforma\">\r\n          <ion-select-option value=\"0\">Choose a category...</ion-select-option>\r\n          <ion-select-option *ngFor=\"let plataforma of plataformas\" [value]=\"plataforma.id\">{{plataforma.nombre}}</ion-select-option>\r\n        </ion-select>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"categoryModel.dirty && categoryModel.valid && categoryModel.value !== 0\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Price</ion-label>\r\n        <ion-input type=\"number\" min=\"0.00\" step=\"0.01\" name=\"price\" required [(ngModel)]=\"nuevoVideojuego.precio\" #priceModel=\"ngModel\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"priceModel.dirty && priceModel.valid\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Stock</ion-label>\r\n        <ion-input type=\"number\" min=\"0\" name=\"stock\" required [(ngModel)]=\"nuevoVideojuego.stock\" #stockModel=\"ngModel\"></ion-input>\r\n        <ion-icon name=\"checkmark-circle\" slot=\"end\" color=\"success\" *ngIf=\"stockModel.dirty && stockModel.valid\"></ion-icon>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"inset\">Image</ion-label>\r\n        <ion-button color=\"secondary\" (click)=\"obtenerFotoCamara()\">\r\n          <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\r\n          Camera\r\n        </ion-button>\r\n        <ion-button color=\"tertiary\" (click)=\"obtenerFotoGaleria()\">\r\n          <ion-icon name=\"images\" slot=\"start\"></ion-icon>\r\n          Gallery\r\n        </ion-button>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-img [src]=\"nuevoVideojuego.imagen\" *ngIf=\"nuevoVideojuego.imagen && !editando\"></ion-img>\r\n\r\n    <ion-img *ngIf=\"editando\" [src]=\"nuevoVideojuego.imagen\"></ion-img>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button *ngIf=\"!editando\" type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"productForm.invalid || !nuevoVideojuego.imagen\">\r\n            <ion-icon name=\"paper-plane\" slot=\"start\"></ion-icon>\r\n            Subir videojuego\r\n          </ion-button>\r\n\r\n          <ion-button *ngIf=\"editando\" type=\"submit\" color=\"primary\" expand=\"block\" [disabled]=\"productForm.invalid || !nuevoVideojuego.imagen\">\r\n            <ion-icon name=\"paper-plane\" slot=\"start\"></ion-icon>\r\n            Editar videojuego\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button color=\"danger\" expand=\"block\" fill=\"outline\" [routerLink]=\"['/videojuegos']\" [routerDirection]=\"'root'\">\r\n            <ion-icon name=\"arrow-undo\" slot=\"start\"></ion-icon>\r\n            Cancelar\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n");

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

/***/ })

}]);
//# sourceMappingURL=videojuego-form-videojuego-form-module.js.map