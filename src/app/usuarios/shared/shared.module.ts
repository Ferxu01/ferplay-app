import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPasswordComponent } from './edit-password/edit-password.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EditPerfilComponent } from './edit-perfil/edit-perfil.component';
import { EditAvatarComponent } from './edit-avatar/edit-avatar.component';



@NgModule({
  declarations: [EditPasswordComponent, EditPerfilComponent, EditAvatarComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [
    EditPasswordComponent,
    EditPerfilComponent,
    EditAvatarComponent
  ]
})
export class SharedModule { }
