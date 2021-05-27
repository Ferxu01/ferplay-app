import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/shared/interfaces/usuarios/Usuario';
import { EditAvatarComponent } from 'src/app/shared/components/usuario/edit-avatar/edit-avatar.component';
import { EditPasswordComponent } from '../../components/usuario/edit-password/edit-password.component';
import { EditPerfilComponent } from '../../components/usuario/edit-perfil/edit-perfil.component';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-modal-editar',
  template: ''
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
    await modal.present();

    const { data } = await modal.onWillDismiss();
    return data;
  }

  async crearModalEditarAvatar(avatar: string) {
    const modal = await this.modalCtrl.create({
      component: EditAvatarComponent,
      componentProps: {avatar: avatar}
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    return data;
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
