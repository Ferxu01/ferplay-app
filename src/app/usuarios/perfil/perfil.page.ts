import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/Usuario';
import { ModalEditarComponent } from 'src/app/shared/modals/modal-editar/modal-editar.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: Usuario;

  constructor(
    private actionSheetCtrl: ActionSheetController,
    private modalEditar: ModalEditarComponent,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.usuario = data.usuario;
      }
    );
  }

  async mostrarActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Seleccionar una imagen',
      buttons: [
        {
          text: 'Hacer foto',
          icon: 'camera',
          handler: () => {
            this.obtenerFotoCamara();
          }
        },
        {
          text: 'Seleccionar una imagen',
          icon: 'images',
          handler: () => {
            this.obtenerFotoGaleria();
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            this.actionSheetCtrl.dismiss();
          }
        }
  ]
    });

    await actionSheet.present();
  }

  async obtenerFotoCamara() {
    console.log('hazte una foto');

    const photo = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });

    this.modalEditarAvatar(photo.dataUrl);
  }

  async obtenerFotoGaleria() {
    console.log('selecciona una imagen de la galería');

    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });

    this.modalEditarAvatar(photo.dataUrl);
  }

  modalEditarPerfil() {
    this.modalEditar.crearModalEditarPerfil();
  }

  modalEditarPassword() {
    this.modalEditar.crearModalEditarPassword();
  }

  modalEditarAvatar(avatar: string) {
    this.modalEditar.crearModalEditarAvatar(avatar);
  }

  cerrarModal() {
    this.modalEditar.cerrarModal();
  }

}
