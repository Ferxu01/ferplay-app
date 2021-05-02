import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { CameraPlugin } from 'src/app/interfaces/native-plugins/CameraPlugin';
import { Provincia } from 'src/app/interfaces/Provincia';
import { ProvinciaService } from 'src/app/usuarios/services/provincia.service';
import { UsuarioRegistro } from '../interfaces/UsuarioRegistro';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit, CameraPlugin {
  usuario: UsuarioRegistro = {
    nombre: '',
    apellidos: '',
    email: '',
    nickname: '',
    password: '',
    avatar: '',
    provincia: 1
  };
  password2: string;
  provincias: Provincia[];

  constructor(private authService: AuthService, private provinciaService: ProvinciaService) { }

  ngOnInit() {
    this.provinciaService.obtenerProvincias().subscribe(
      resp => {
        console.log(resp);
        this.provincias = resp;
      }
    );
  }

  registrar() {
    console.log(this.usuario);
    this.authService.registrar(this.usuario).subscribe(
      () => {
        console.log('Usuario registrado');
      }
    );
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
    this.usuario.avatar = photo.dataUrl;
  }

  async obtenerFotoGaleria() {
    const photo = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });

    this.usuario.avatar = photo.dataUrl;
  }
}
