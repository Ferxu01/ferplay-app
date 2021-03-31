import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../interfaces/Videojuego';
import { VideojuegoService } from '../services/videojuego.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  videojuegos: Videojuego[] = [];

  constructor(private videojuegoService: VideojuegoService) { }

  ngOnInit() {
    this.obtenerVideojuegos();
  }

  obtenerVideojuegos() {
    this.videojuegoService.obtenerVideojuegos().subscribe(
      resp => this.videojuegos = resp
    );
  }

}
