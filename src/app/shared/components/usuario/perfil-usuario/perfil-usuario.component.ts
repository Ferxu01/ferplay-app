import { Component, Input, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController } from '@ionic/angular';
import { CameraPlugin } from 'src/app/shared/interfaces/native-plugins/CameraPlugin';
import { Usuario } from 'src/app/shared/interfaces/usuarios/Usuario';
import { ProvinciaService } from 'src/app/shared/services/usuarios/provincia.service';
import { ModalEditarComponent } from '../../../modals/modal-editar/modal-editar.component';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.scss'],
})
export class PerfilUsuarioComponent implements OnInit, CameraPlugin {
  @Input() usuario: Usuario;
  @Input() usuarioLogueado: Usuario;

  constructor(
    private modalEditar: ModalEditarComponent,
    private actionSheetController: ActionSheetController,
    private provinciaService: ProvinciaService
  ) { }

  ngOnInit() {}

  async mostrarActionSheet() {
    const actionSheet = await this.actionSheetController.create({
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
            this.actionSheetController.dismiss();
          }
        }
  ]
    });

    await actionSheet.present();
  }

  async obtenerFotoCamara() {
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
    this.modalEditar.crearModalEditarPerfil().then(
      resp => {
        if (resp !== null) {
          this.usuario.nombre = resp.nombre;
          this.usuario.apellidos = resp.apellidos;
          this.usuario.nickname = resp.nickname;

          this.provinciaService.obtenerProvincia(resp.provincia).subscribe(
            resp => {
              this.usuario.provincia = resp;
            }
          );
        }
      }
    );
  }

  modalEditarAvatar(avatar: string) {
    this.modalEditar.crearModalEditarAvatar(avatar).then(
      resp => {
        if (resp !== null) {
          this.usuario.avatar = resp.avatar;
        }
      }
    );
  }

  cerrarModal() {
    this.modalEditar.cerrarModal();
  }

}
