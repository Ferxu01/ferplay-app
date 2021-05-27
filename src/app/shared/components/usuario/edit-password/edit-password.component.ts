import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';
import { ToastAlertComponent } from 'src/app/shared/toasts/toast-alert/toast-alert.component';


@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss'],
})
export class EditPasswordComponent implements OnInit {
  password: string;
  password2: string;

  constructor(private usuarioService: UsuariosService, private modalCtrl: ModalController, private toastAlert: ToastAlertComponent) { }

  ngOnInit() {}

  editarPassword() {
    this.usuarioService.editarPassword(this.password).subscribe(
      () => {
        this.cerrarModal();

        this.toastAlert.crearAlertaMensaje('Contraseña editada correctamente', 'success', 'toast-confirmacion');
      },
      error => console.error(error)
    );
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
