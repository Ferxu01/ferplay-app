import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Provincia } from 'src/app/interfaces/Provincia';
import { Usuario } from 'src/app/interfaces/Usuario';
import { ModalEditarComponent } from 'src/app/shared/modals/modal-editar/modal-editar.component';
import { UsuariosService } from '../../services/usuarios.service';
import { ProvinciaService } from '../../services/provincia.service';
import { ModalController } from '@ionic/angular';

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

  constructor(private modalCtrl: ModalController, private usuarioService: UsuariosService, private provinciaService: ProvinciaService) { }

  ngOnInit() {
    this.provinciaService.obtenerProvincias().subscribe(
      resp => {
        this.provincias = resp;
      }
    );

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
      () => {
        console.log('Perfil editado');
      }
    );
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }

}
