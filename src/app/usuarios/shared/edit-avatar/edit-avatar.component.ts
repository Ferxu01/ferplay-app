import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/Usuario';
import { ToastAlertComponent } from 'src/app/shared/toasts/toast-alert/toast-alert.component';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-edit-avatar',
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.scss'],
})
export class EditAvatarComponent implements OnInit {
  usuario: Usuario;
  @Input() avatar: string;
  avatarUsuario: string;

  constructor(
    private modalCtrl: ModalController,
    private usuarioService: UsuariosService,
    private toastAlert: ToastAlertComponent
  ) { }

  ngOnInit() {
    this.usuarioService.obtenerMiPerfil().subscribe(
      resp => this.usuario = resp
    );
  }

  editarAvatar() {
    this.usuarioService.editarAvatar(this.avatar).subscribe(
      resp => {
        this.cerrarModal();

        this.toastAlert.crearAlertaMensaje('Avatar editado correctamente', 'success', 'toast-confirmacion');
      }
    );
  }

  cerrarModal() {
    this.modalCtrl.dismiss({
      avatar: this.usuario.avatar
    });
  }
}
