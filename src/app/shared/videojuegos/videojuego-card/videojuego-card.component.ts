import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Videojuego } from 'src/app/videojuegos/interfaces/Videojuego';
import { VideojuegoService } from 'src/app/videojuegos/services/videojuego.service';
import * as moment from 'moment';

@Component({
  selector: 'app-videojuego-card',
  templateUrl: './videojuego-card.component.html',
  styleUrls: ['./videojuego-card.component.scss'],
})
export class VideojuegoCardComponent implements OnInit {
  @Input() videojuego: Videojuego;
  @Output() liked = new EventEmitter<void>();
  @Output() favourite = new EventEmitter<void>();

  constructor(private videojuegoService: VideojuegoService) { }

  ngOnInit() {
    moment.locale('es');
    this.videojuego.fechaCreacion = moment(this.videojuego.fechaCreacion).fromNow();
  }

  setLike() {
    if (this.videojuego.liked === true) {
      this.eliminarLike();
    } else {
      this.darLike();
    }
  }

  setFavorito() {
    if (this.videojuego.favourite) {
      this.eliminarFavoritos();
    } else {
      this.addFavoritos();
    }
  }

  darLike() {
    this.liked.emit();

    this.videojuegoService.darLike(this.videojuego.id).subscribe(
      () => {
        this.videojuego.liked = true;
        console.log('Videojuego like');
      }
    );
  }

  eliminarLike() {
    this.videojuegoService.eliminarLike(this.videojuego.id).subscribe(
      () => {
        this.videojuego.liked = false;
        console.log('Videojuego like eliminado');
      }
    );
  }

  addFavoritos() {
    this.favourite.emit();

    this.videojuegoService.addFavoritos(this.videojuego.id).subscribe(
      () => {
        this.videojuego.favourite = true;
        console.log('Videojuego favorito');
      }
    );
  }

  eliminarFavoritos() {
    this.favourite.emit();

    this.videojuegoService.eliminarFavoritos(this.videojuego.id).subscribe(
      () => {
        this.videojuego.favourite = false;
        console.log('Videojuego favorito eliminado');
      }
    );
  }
}
