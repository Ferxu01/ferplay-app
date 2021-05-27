import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { AlertController, NavController } from '@ionic/angular';
import { CameraPlugin } from 'src/app/shared/interfaces/native-plugins/CameraPlugin';
import { Provincia } from 'src/app/shared/interfaces/usuarios/Provincia';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ProvinciaService } from 'src/app/shared/services/usuarios/provincia.service';
import { UsuarioRegistro } from '../../shared/interfaces/auth/UsuarioRegistro';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit, CameraPlugin {
  usuario: UsuarioRegistro;

  password2: string = '';
  provincias: Provincia[];
  errores: string[];

  constructor(
    private authService: AuthService,
    private provinciaService: ProvinciaService,
    private navCtrl: NavController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.resetearFormulario();

    this.provinciaService.obtenerProvincias().subscribe(
      resp => {
        this.provincias = resp;
      }
    );
  }

  async mostrarAlerta() {
    const alert = await this.alertCtrl.create({
      cssClass: 'alert-registro',
      message: 'Usuario registrado correctamente',
      mode: 'md'
    });

    await alert.present();

    setTimeout(() => {
      alert.dismiss();
    }, 1500);
  }

  resetearFormulario() {
    this.usuario = {
      nombre: '',
      apellidos: '',
      email: '',
      nickname: '',
      password: '',
      avatar: '',
      provincia: 0
    };
    this.password2 = '';
  }

  registrar() {
    console.log(this.usuario);
    this.authService.registrar(this.usuario).subscribe(
      () => {
        this.navCtrl.navigateRoot('/auth/login');
        this.mostrarAlerta();
      },
      error => {
        this.errores = error.error.errores.mensaje;
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
