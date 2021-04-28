import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-edit-avatar',
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.scss'],
})
export class EditAvatarComponent implements OnInit {
  usuario: Usuario;
  @Input() avatar: string;

  constructor(private modalCtrl: ModalController, private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.usuarioService.obtenerMiPerfil().subscribe(
      resp => this.usuario = resp
    );
  }

  editarAvatar() {
    this.usuarioService.editarAvatar(this.avatar).subscribe(
      () => {
        console.log('Avatar editado');
        this.modalCtrl.dismiss();
      }
    );
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }
}
