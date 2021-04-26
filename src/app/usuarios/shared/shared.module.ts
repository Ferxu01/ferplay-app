import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';



@NgModule({
  declarations: [EditPasswordComponent, EditPerfilComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    EditPasswordComponent,
    EditPerfilComponent
  ]
})
export class SharedModule { }
