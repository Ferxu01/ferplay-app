import { Component, Inject, OnInit } from '@angular/core';
import { shuffle } from 'lodash';
import { Usuario } from 'src/app/shared/interfaces/usuarios/Usuario';
import { Videojuego } from 'src/app/shared/interfaces/videojuegos/Videojuego';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';
import { VideojuegoService } from 'src/app/shared/services/videojuegos/videojuego.service';
import { VideojuegoDetallesPage } from '../videojuego-detalles.page';

@Component({
  selector: 'app-videojuego-perfil-usuario',
  templateUrl: './videojuego-perfil-usuario.page.html',
  styleUrls: ['./videojuego-perfil-usuario.page.scss'],
})
export class VideojuegoPerfilUsuarioPage implements OnInit {
  usuarioLogueado: Usuario;
  usuario: Usuario;

  videojuegosUsuario: Videojuego[] = [];
  totalVideojuegosUsuario: number = 0;

  constructor(
    @Inject(VideojuegoDetallesPage) private parentComponent: VideojuegoDetallesPage,
    private videojuegosService: VideojuegoService,
    private usuarioService: UsuariosService,
  ) { }

  ngOnInit() {
    this.usuarioService.obtenerMiPerfil().subscribe(
      resp => {
        this.usuarioLogueado = resp
      });

    this.usuario = this.parentComponent.videojuego.usuario;

    this.videojuegosService.obtenerVideojuegosUsuario(this.usuario.id).subscribe(
      resp => {
        this.videojuegosUsuario = resp;
        this.totalVideojuegosUsuario = this.videojuegosUsuario.length;

        //Obtener 5 videojuegos aleatorios del usuario
        this.videojuegosUsuario = shuffle(this.videojuegosUsuario);

        if (this.videojuegosUsuario.length > 5) {
          let videojuegosMostrar = [];

          for (let i = 0; i < 5; i++) {
            videojuegosMostrar.push(this.videojuegosUsuario[i]);
          }

          this.videojuegosUsuario = videojuegosMostrar;
        }
      }
    );
  }

  playSlider(slides) {
    slides.startAutoplay();
  }

}
