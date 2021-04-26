import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditPasswordComponent } from 'src/app/usuarios/shared/edit-password/edit-password.component';
import { VideojuegoFormPage } from 'src/app/videojuegos/videojuego-form/videojuego-form.page';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.component.html',
  styleUrls: ['./modal-editar.component.scss'],
})
export class ModalEditarComponent implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  async crearModalEditarPassword() {
    const modal = await this.modalCtrl.create({
      component: EditPasswordComponent
    });
    return await modal.present();
  }

  async crearModalEditarPerfil() {

  }

  async crearModalEditarAvatar() {

  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
