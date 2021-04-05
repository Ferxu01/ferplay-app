import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from '../../interfaces/Videojuego';
import { VideojuegoDetallesPage } from '../videojuego-detalles.page';

@Component({
  selector: 'app-videojuego-info',
  templateUrl: './videojuego-info.page.html',
  styleUrls: ['./videojuego-info.page.scss'],
})
export class VideojuegoInfoPage implements OnInit {
  videojuego: Videojuego;

  constructor(
    @Inject(VideojuegoDetallesPage) private parentComponent: VideojuegoDetallesPage,
    private router: Router
  ) {}

  ngOnInit() {
    this.videojuego = this.parentComponent.videojuego;
    /*this.parentComponent.videojuego$.subscribe(
      videojuego => this.videojuego = videojuego
    );*/

    console.log(this.videojuego);
  }

}
