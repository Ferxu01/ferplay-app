import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEditarComponent } from './modals/modal-editar/modal-editar.component';
import { IonicModule } from '@ionic/angular';
import { VideojuegoCardComponent } from './videojuegos/videojuego-card/videojuego-card.component';
import { RouterModule } from '@angular/router';
import { ModalDetalleCompraComponent } from './modals/modal-detalle-compra/modal-detalle-compra.component';



@NgModule({
  declarations: [ModalEditarComponent, VideojuegoCardComponent, ModalDetalleCompraComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ModalEditarComponent,
    ModalDetalleCompraComponent,
    VideojuegoCardComponent
  ]
})
export class SharedModule { }
