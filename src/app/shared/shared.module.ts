import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEditarComponent } from './modals/modal-editar/modal-editar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ModalEditarComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    ModalEditarComponent
  ]
})
export class SharedModule { }
