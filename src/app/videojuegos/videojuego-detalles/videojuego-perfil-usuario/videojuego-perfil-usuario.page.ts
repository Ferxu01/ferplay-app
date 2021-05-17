import { Component, Inject, OnInit } from '@angular/core';
import { shuffle } from 'lodash';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';
import { Videojuego } from '../../interfaces/Videojuego';
import { VideojuegoService } from '../../services/videojuego.service';
import { VideojuegoDetallesPage } from '../videojuego-detalles.page';

@Component({
  selector: 'app-videojuego-perfil-usuario',
  templateUrl: './videojuego-perfil-usuario.page.html',
  styleUrls: ['./videojuego-perfil-usuario.page.scss'],
})
export class VideojuegoPerfilUsuarioPage implements OnInit {
  usuarioLogueado: Usuario;
  usuario: Usuario;

  videojuegosUsuario: Videojuego[] = []

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

        //Escoger 4-5 videojuegos aleatorios para mostrar
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

  slidear(slides) {
    slides.startAutoplay();
  }

}
