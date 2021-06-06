import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Videojuego } from 'src/app/shared/interfaces/videojuegos/Videojuego';
import { VideojuegoService } from 'src/app/shared/services/videojuegos/videojuego.service';


@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  videojuegosFavoritos: Videojuego[] = [];

  terminado: boolean = false;
  error: string = null;

  eventAddVideojuego: Subscription;

  constructor(private videojuegoService: VideojuegoService) { }

  ngOnInit() {
    this.obtenerVideojuegosFavoritos();
  }

  ionViewWillEnter() {
    this.eventAddVideojuego = this.videojuegoService.obtenerEventObservable().subscribe(
      resp => {
        this.obtenerVideojuegosFavoritos();
      }
    );
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
        this.terminado = true;
        this.error = error.errores.mensaje;
      }
    );
  }
}
