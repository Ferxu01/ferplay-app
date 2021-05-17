import { Component, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-toast-alert',
  templateUrl: './toast-alert.component.html',
  styleUrls: ['./toast-alert.component.scss'],
})
export class ToastAlertComponent {

  constructor(private toastCtrl: ToastController) { }

  async crearAlertaMensaje(mensaje: string, color: string, claseToast: string, tiempo: number = 3500) {
    const toast = await this.toastCtrl.create({
      cssClass: claseToast,
      message: mensaje,
      duration: tiempo,
      color: color
    });
    toast.present();
  }
}
