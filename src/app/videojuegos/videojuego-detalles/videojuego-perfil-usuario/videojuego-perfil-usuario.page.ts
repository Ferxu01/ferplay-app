import { Component, Inject, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { CameraPlugin } from 'src/app/interfaces/native-plugins/CameraPlugin';
import { Usuario } from 'src/app/interfaces/Usuario';
import { ModalEditarComponent } from 'src/app/shared/modals/modal-editar/modal-editar.component';
import { Videojuego } from '../../interfaces/Videojuego';
import { VideojuegoService } from '../../services/videojuego.service';
import { VideojuegoFormPage } from '../../videojuego-form/videojuego-form.page';
import { VideojuegoDetallesPage } from '../videojuego-detalles.page';

@Component({
  selector: 'app-videojuego-perfil-usuario',
  templateUrl: './videojuego-perfil-usuario.page.html',
  styleUrls: ['./videojuego-perfil-usuario.page.scss'],
})
export class VideojuegoPerfilUsuarioPage implements OnInit, CameraPlugin {
  usuario: Usuario;

  videojuegosUsuario: Videojuego[] = []

  constructor(
    @Inject(VideojuegoDetallesPage) private parentComponent: VideojuegoDetallesPage,
    private videojuegosService: VideojuegoService,
    private modalEditar: ModalEditarComponent,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.usuario = this.parentComponent.videojuego.usuario;

    this.videojuegosService.obtenerVideojuegosUsuario(this.usuario.id).subscribe(
      resp => {
        this.videojuegosUsuario = resp
      }
    );
  }

  slidear(slides) {
    slides.startAutoplay();
  }

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

  obtenerFotoCamara() {
    console.log('hazte una foto');
  }

  obtenerFotoGaleria() {
    console.log('selecciona una imagen de la galería');
  }

  modalEditarPassword() {
    this.modalEditar.crearModalEditarPassword();
  }

  cerrarModal() {
    this.modalEditar.cerrarModal();
  }

}
