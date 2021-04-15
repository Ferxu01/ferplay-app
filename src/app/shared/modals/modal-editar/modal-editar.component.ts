import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  async crearModal() {
    const modal = await this.modalCtrl.create({
      component: VideojuegoFormPage
    });
    return await modal.present();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
