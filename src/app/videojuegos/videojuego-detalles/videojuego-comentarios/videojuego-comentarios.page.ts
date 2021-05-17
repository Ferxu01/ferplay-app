import { Component, Inject, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';
import { Comentario } from '../../interfaces/Comentario';
import { Videojuego } from '../../interfaces/Videojuego';
import { ComentarioService } from '../../services/comentario.service';
import { VideojuegoDetallesPage } from '../videojuego-detalles.page';

@Component({
  selector: 'app-videojuego-comentarios',
  templateUrl: './videojuego-comentarios.page.html',
  styleUrls: ['./videojuego-comentarios.page.scss'],
})
export class VideojuegoComentariosPage implements OnInit {
  comentarios: Comentario[] = [];
  idVideojuego: number;
  error: string;

  usuario: Usuario;

  terminado: boolean = false;

  comentario: Comentario = {
    texto: ''
  };

  constructor(
    private comentarioService: ComentarioService,
    @Inject(VideojuegoDetallesPage) private parentComponent: VideojuegoDetallesPage,
    private usuarioService: UsuariosService
  ) { }

  ngOnInit() {
    this.idVideojuego = this.parentComponent.videojuego.id;
    this.usuarioService.obtenerMiPerfil().subscribe(
      resp => {
        this.usuario = resp
      }
    );

    this.obtenerComentarios(this.idVideojuego);
  }

  obtenerComentarios(id: number, event?) {
    this.comentarioService.obtenerComentarios(id).subscribe(
      resp => {
        if (event) {
          event.target.complete();
        }
        this.comentarios = resp;
        this.terminado = true;
      },
      error => {
        if (event) {
          event.target.complete();
        }
        this.terminado = true;
        this.error = error.errores.mensaje;
      }
    );
  }

  comentar() {
    this.comentarioService.nuevoComentario(this.idVideojuego, this.comentario).subscribe(
      resp => {
        this.comentarios.push(resp);
        this.comentario.texto = '';

        if (this.error) {
          this.error = null;
        }
      }
    );
  }

  borrarComentario(idComentario: number) {
    this.comentarioService.borrarComentario(this.idVideojuego, idComentario).subscribe(
      () => {
        this.obtenerComentarios(this.idVideojuego);

        if (this.comentarios.length === 1) {
          this.comentarios = [];
        }
      }
    );
  }
}
