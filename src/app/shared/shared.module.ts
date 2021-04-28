import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEditarComponent } from './modals/modal-editar/modal-editar.component';
import { IonicModule } from '@ionic/angular';
import { VideojuegoCardComponent } from './videojuegos/videojuego-card/videojuego-card.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ModalEditarComponent, VideojuegoCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    ModalEditarComponent,
    VideojuegoCardComponent
  ]
})
export class SharedModule { }
