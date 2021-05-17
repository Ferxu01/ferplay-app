import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEditarComponent } from './modals/modal-editar/modal-editar.component';
import { IonicModule } from '@ionic/angular';
import { VideojuegoCardComponent } from './videojuegos/videojuego-card/videojuego-card.component';
import { RouterModule } from '@angular/router';
import { ModalDetalleCompraComponent } from './modals/modal-detalle-compra/modal-detalle-compra.component';
import { PasswordMatchDirective } from './validators/password-match.directive';
import { DefaultOptionSelectDirective } from './validators/default-option-select.directive';
import { PerfilUsuarioComponent } from './usuarios/perfil-usuario/perfil-usuario.component';
import { HeaderModalComponent } from './utils/header-modal/header-modal.component';
import { PositiveValueDirective } from './validators/positive-value.directive';



@NgModule({
  declarations: [ModalEditarComponent, VideojuegoCardComponent, ModalDetalleCompraComponent, PasswordMatchDirective, DefaultOptionSelectDirective, PerfilUsuarioComponent, HeaderModalComponent, PositiveValueDirective],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ModalEditarComponent,
    ModalDetalleCompraComponent,
    VideojuegoCardComponent,
    PasswordMatchDirective,
    DefaultOptionSelectDirective,
    PositiveValueDirective,
    PerfilUsuarioComponent,
    HeaderModalComponent
  ]
})
export class SharedModule { }
