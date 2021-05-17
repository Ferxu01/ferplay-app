import { Component, OnInit } from '@angular/core';
import { Videojuego } from 'src/app/videojuegos/interfaces/Videojuego';
import { VideojuegoService } from 'src/app/videojuegos/services/videojuego.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  videojuegosFavoritos: Videojuego[];

  terminado: boolean = false;
  error: string = null;

  constructor(private videojuegoService: VideojuegoService) {
    this.obtenerVideojuegosFavoritos();
  }

  ngOnInit() {
    this.obtenerVideojuegosFavoritos();
  }

  obtenerVideojuegosFavoritos(event?) {
    this.videojuegoService.obtenerVideojuegosFavoritos().subscribe(
      resp => {
        if (event) {
          event.target.complete();
        }
        this.videojuegosFavoritos = resp;
        this.error = null;
        this.terminado = true;
      },
      error => {
        this.error = error.errores.mensaje;
      }
    );
  }
}
