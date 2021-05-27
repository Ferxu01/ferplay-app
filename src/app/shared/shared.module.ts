import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEditarComponent } from './modals/modal-editar/modal-editar.component';
import { IonicModule } from '@ionic/angular';
import { VideojuegoCardComponent } from './components/videojuegos/videojuego-card/videojuego-card.component';
import { RouterModule } from '@angular/router';
import { ModalDetalleCompraComponent } from './modals/modal-detalle-compra/modal-detalle-compra.component';
import { PasswordMatchDirective } from './validators/password-match.directive';
import { DefaultOptionSelectDirective } from './validators/default-option-select.directive';
import { PerfilUsuarioComponent } from './components/usuario/perfil-usuario/perfil-usuario.component';
import { HeaderModalComponent } from './components/utils/header-modal/header-modal.component';
import { PositiveValueDirective } from './validators/positive-value.directive';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { CapitalizeTextPipe } from './pipes/capitalize-text.pipe';
import { FormsModule } from '@angular/forms';
import { EditPasswordComponent } from './components/usuario/edit-password/edit-password.component';
import { EditAvatarComponent } from './components/usuario/edit-avatar/edit-avatar.component';
import { EditPerfilComponent } from './components/usuario/edit-perfil/edit-perfil.component';

@NgModule({
  declarations: [ModalEditarComponent, VideojuegoCardComponent, ModalDetalleCompraComponent, PasswordMatchDirective, DefaultOptionSelectDirective, PerfilUsuarioComponent, HeaderModalComponent, PositiveValueDirective, CurrencyFormatPipe, CapitalizeTextPipe, EditPasswordComponent, EditAvatarComponent, EditPerfilComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    ModalEditarComponent,
    ModalDetalleCompraComponent,
    VideojuegoCardComponent,
    PasswordMatchDirective,
    DefaultOptionSelectDirective,
    PositiveValueDirective,
    PerfilUsuarioComponent,
    HeaderModalComponent,
    CurrencyFormatPipe,
    CapitalizeTextPipe
  ]
})
export class SharedModule { }
