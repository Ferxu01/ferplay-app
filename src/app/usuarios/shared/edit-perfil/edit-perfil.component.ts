import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/interfaces/Provincia';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosService } from '../../services/usuarios.service';
import { ProvinciaService } from '../../services/provincia.service';
import { ModalController } from '@ionic/angular';
import { ToastAlertComponent } from 'src/app/shared/toasts/toast-alert/toast-alert.component';

@Component({
  selector: 'app-edit-perfil',
  templateUrl: './edit-perfil.component.html',
  styleUrls: ['./edit-perfil.component.scss'],
})
export class EditPerfilComponent implements OnInit {
  usuario: Usuario;
  nombre: string;
  apellidos: string;
  nickname: string;
  provincia: number;

  provincias: Provincia[];

  constructor(
    private modalCtrl: ModalController,
    private usuarioService: UsuariosService,
    private provinciaService: ProvinciaService,
    private toastAlert: ToastAlertComponent
  ) { }

  ngOnInit() {
    this.provinciaService.obtenerProvincias().subscribe(
      resp => {
        this.provincias = resp;
      }
    );

    this.obtenerDatosPerfil();
  }

  obtenerDatosPerfil() {
    this.usuarioService.obtenerMiPerfil().subscribe(
      resp => {
        this.usuario = resp;
        this.nombre = this.usuario.nombre;
        this.apellidos = this.usuario.apellidos;
        this.nickname = this.usuario.nickname;
        this.provincia = this.usuario.provincia.id;
      }
    );
  }

  editarPerfil() {
    this.usuarioService.editarPerfil(this.nombre, this.apellidos, this.usuario.email, this.nickname, this.provincia).subscribe(
      resp => {
        this.cerrarModal();

        this.toastAlert.crearAlertaMensaje('Perfil editado correctamente', 'success', 'toast-confirmacion');
      }
    );
  }

  cerrarModal() {
    this.modalCtrl.dismiss({
      nombre: this.nombre,
      apellidos: this.apellidos,
      nickname: this.nickname,
      provincia: this.provincia
    });
  }

}
