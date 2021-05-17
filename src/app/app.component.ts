import { Component, OnInit } from '@angular/core';
import { Usuario } from './interfaces/Usuario';
import { Plugins } from '@capacitor/core';
import { GeneralService } from './services/general.service';
import { AuthService } from './auth/services/auth.service';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CarroCompraService } from './features/carro-compra/services/carro-compra.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: Usuario = {
    email: '',
    nickname: '',
    avatar: ''
  };

  numVideojuegosCarro: BehaviorSubject<number>;

  menuDisabled = true;

  public appPages = [
    { title: 'Home', url: '/videojuegos', icon: 'home' },
    { title: 'Subir un videojuego', url: '/videojuegos/nuevo', icon: 'add-circle' },
    { title: 'Favoritos', url: '/features/favoritos', icon: 'bookmark' },
    { title: 'Mi perfil', url: '/usuarios/me', icon: 'person' },
    { title: 'Carro de compra', url: '/features/carro', icon: 'cart' },
    { title: 'Mis compras', url: '/features/compras/historial', icon: 'list' },
  ];

  constructor(
    private generalService: GeneralService,
    private authService: AuthService,
    private carroService: CarroCompraService,
    private nav: NavController) {
      this.authService.loginChange$.subscribe(
        logged => {
          console.log('logged: '+logged);
          this.menuDisabled = !logged;
          console.warn(this.menuDisabled);
        }
      );
    }

  ngOnInit() {
    console.log('App component ngOnInit ejecutado');
    this.defaultUser();
    this.obtenerInfoUsuario();
    this.numVideojuegosCarro = this.carroService.obtenerContVideojuegosCarro();
  }

  defaultUser() {
    this.user = {
      nombre: 'Unnamed user',
      email: 'unnamed@user.com',
      avatar: '../assets/default.png'
    }
  }

  obtenerInfoUsuario() {
    this.generalService.obtenerUsuarioLogueado().subscribe(
      resp => {
        this.user = resp;

        console.log(this.user);
      }
    );
  }

  async cerrarSesion() {
    await this.authService.cerrarSesion();
    this.nav.navigateRoot(['/auth/login']);
  }
}
