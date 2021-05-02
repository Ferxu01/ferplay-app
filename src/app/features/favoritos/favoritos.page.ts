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

  constructor(private videojuegoService: VideojuegoService) { }

  ngOnInit() {
    this.obtenerVideojuegosFavoritos();
  }

  obtenerVideojuegosFavoritos() {
    this.videojuegoService.obtenerVideojuegosFavoritos().subscribe(
      resp => {
        this.videojuegosFavoritos = resp
      }
    );
  }
}
