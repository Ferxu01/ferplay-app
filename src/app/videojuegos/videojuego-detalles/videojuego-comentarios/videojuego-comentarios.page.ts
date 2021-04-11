import { Component, Inject, OnInit } from '@angular/core';
import { Comentario } from '../../interfaces/Comentario';
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

  comentario: Comentario = {
    texto: ''
  };

  constructor(
    private comentarioService: ComentarioService,
    @Inject(VideojuegoDetallesPage) private parentComponent: VideojuegoDetallesPage
  ) { }

  ngOnInit() {
    this.idVideojuego = this.parentComponent.videojuego.id;
    this.obtenerComentarios(this.idVideojuego);
  }

  obtenerComentarios(id: number) {
    this.comentarioService.obtenerComentarios(id).subscribe(
      resp => {
        this.comentarios = resp;
      },
      error => {
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
