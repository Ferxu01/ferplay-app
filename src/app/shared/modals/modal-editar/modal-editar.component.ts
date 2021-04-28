import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';
import { EditAvatarComponent } from 'src/app/usuarios/shared/edit-avatar/edit-avatar.component';
import { EditPasswordComponent } from 'src/app/usuarios/shared/edit-password/edit-password.component';
import { EditPerfilComponent } from 'src/app/usuarios/shared/edit-perfil/edit-perfil.component';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss'],
})
export class ModalEditarComponent implements OnInit {
  usuario: Usuario;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() { }

  async crearModalEditarPassword() {
    const modal = await this.modalCtrl.create({
      component: EditPasswordComponent
    });
    return await modal.present();
  }

  async crearModalEditarPerfil() {
    const modal = await this.modalCtrl.create({
      component: EditPerfilComponent,
      componentProps: {usuario: this.usuario}
    });
    return await modal.present();
  }

  async crearModalEditarAvatar(avatar: string) {
    const modal = await this.modalCtrl.create({
      component: EditAvatarComponent,
      componentProps: {avatar: avatar}
    });
    return await modal.present();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
