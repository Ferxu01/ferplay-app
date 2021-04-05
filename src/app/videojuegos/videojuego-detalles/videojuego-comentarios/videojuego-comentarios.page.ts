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
  comentarios: Comentario[];

  constructor(
    private comentarioService: ComentarioService,
    @Inject(VideojuegoDetallesPage) private parentComponent: VideojuegoDetallesPage
  ) { }

  ngOnInit() {
    const id = this.parentComponent.videojuego.id;
    this.obtenerComentarios(id);
  }

  obtenerComentarios(id: number) {
    this.comentarioService.obtenerComentarios(id).subscribe(
      resp => {
        this.comentarios = resp;
      }
    );
  }

}
