import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuariosService } from '../../services/usuarios.service';


@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html',
  styleUrls: ['./edit-password.component.scss'],
})
export class EditPasswordComponent implements OnInit {
  password: string;
  password2: string;

  constructor(private usuarioService: UsuariosService, private modalCtrl: ModalController) { }

  ngOnInit() {}

  editarPassword() {
    this.usuarioService.editarPassword(this.password).subscribe(
      () => {
        console.log('Contraseña editada');
      },
      error => console.error(error)
    );
  }

  cancelar() {
    this.modalCtrl.dismiss({changed: false});
  }

}
