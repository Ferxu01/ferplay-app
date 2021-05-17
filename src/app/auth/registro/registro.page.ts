import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, AlertController, NavController } from '@ionic/angular';
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
  usuario: UsuarioRegistro;

  password2: string = '';
  provincias: Provincia[];
  errores: string[];

  constructor(private authService: AuthService, private provinciaService: ProvinciaService, private router: Router, private navCtrl: NavController, private alertCtrl: AlertController, private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.resetearFormulario();

    this.provinciaService.obtenerProvincias().subscribe(
      resp => {
        this.provincias = resp;
      }
    );
  }

  //Provisional
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
        console.warn(error);
        console.log(this.errores);
        //this.errores = error.error.errores.mensaje;
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
