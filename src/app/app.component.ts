import { Component, OnInit } from '@angular/core';
import { Usuario } from './interfaces/Usuario';
import { Plugins } from '@capacitor/core';
import { GeneralService } from './services/general.service';
import { AuthService } from './auth/services/auth.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: Usuario = {
    email: 'hola',
    nickname: 'nickname',
    avatar: ''
  };

  public appPages = [
    { title: 'Home', url: '/videojuegos', icon: 'home' },
    { title: 'Subir un videojuego', url: '/videojuegos/nuevo', icon: 'add-circle' },
    { title: 'Favoritos', url: '/folder/Favorites', icon: 'bookmark' },
    { title: 'Carro de compra', url: '/folder/Archived', icon: 'cart' },
    { title: 'Mis compras', url: '/folder/Trash', icon: 'list' },
    { title: 'Mi perfil', url: '/profile/me', icon: 'person' },
  ];

  constructor(private generalService: GeneralService, private authService: AuthService, private nav: NavController) {}

  ngOnInit(): void {
    this.obtenerInfoUsuario();
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
