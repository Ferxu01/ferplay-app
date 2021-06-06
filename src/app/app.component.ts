import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { GeneralService } from './shared/services/general/general.service';
import { Usuario } from './shared/interfaces/usuarios/Usuario';
import { AuthService } from './shared/services/auth/auth.service';
import { CarroCompraService } from './shared/services/features/carro-compra.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: Usuario;
  numVideojuegosCarro: BehaviorSubject<number>;
  menuDisabled: boolean = true;
  default: boolean = true;

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
          this.menuDisabled = !logged;
        }
      );
    }

  async ngOnInit() {
    this.numVideojuegosCarro = this.carroService.obtenerContVideojuegosCarro();
  }

  defaultUser() {
    this.user = {
      nombre: 'Unnamed user',
      email: 'unnamed@user.com',
      avatar: '../assets/default.png'
    }
  }

  checkCargado() {
    this.obtenerInfoUsuario();
  }

  async obtenerInfoUsuario() {
    this.generalService.obtenerUsuarioLogueado().subscribe(
      resp => {
        this.user = resp;
        this.default = false;
      },
      error => {
        this.defaultUser();
        this.default = true;
      }
    );
  }

  async cerrarSesion() {
    await this.authService.cerrarSesion();
    this.nav.navigateRoot(['/auth/login']);
  }
}
