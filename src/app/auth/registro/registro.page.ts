import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { CameraPlugin } from 'src/app/interfaces/native-plugins/CameraPlugin';
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
    apellidos: 'aloha',
    email: '',
    nickname: 'bot1',
    password: '',
    avatar: '',
    provincia: 1
  };
  password2: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
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
