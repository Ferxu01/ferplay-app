import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Videojuego } from 'src/app/shared/interfaces/videojuegos/Videojuego';
import { VideojuegoService } from 'src/app/shared/services/videojuegos/videojuego.service';

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
    this.videojuego.liked = true;
    this.videojuego.numLikes += 1;

    this.videojuegoService.darLike(this.videojuego.id).subscribe(
      () => {
      },
      error => {
        this.videojuego.liked = false;
        this.videojuego.numLikes -= 1;
      }
    );
  }

  eliminarLike() {
    this.liked.emit();
    this.videojuego.liked = false;
    this.videojuego.numLikes -= 1;

    this.videojuegoService.eliminarLike(this.videojuego.id).subscribe(
      () => {
      },
      error => {
        this.videojuego.liked = true;
        this.videojuego.numLikes += 1;
      }
    );
  }

  addFavoritos() {
    this.favourite.emit();
    this.videojuego.favourite = true;

    this.videojuegoService.darFavorito(this.videojuego.id).subscribe(
      () => {
      },
      error => {
        this.videojuego.favourite = false;
      }
    );
  }

  eliminarFavoritos() {
    this.favourite.emit();
    this.videojuego.favourite = false;

    this.videojuegoService.eliminarFavoritos(this.videojuego.id).subscribe(
      () => {
      },
      error => {
        this.videojuego.favourite = true;
      }
    );
  }
}
