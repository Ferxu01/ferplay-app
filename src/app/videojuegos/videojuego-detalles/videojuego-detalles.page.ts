import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Videojuego } from '../interfaces/Videojuego';
import { VideojuegoService } from '../services/videojuego.service';

@Component({
  selector: 'app-videojuego-detalles',
  templateUrl: './videojuego-detalles.page.html',
  styleUrls: ['./videojuego-detalles.page.scss'],
})
export class VideojuegoDetallesPage implements OnInit {
  videojuego: Videojuego;
  videojuego$: Observable<Videojuego>;

  constructor(private videojuegoService: VideojuegoService, private route: ActivatedRoute) {
    /*this.route.data.subscribe(
      resp => {
        this.videojuego = resp.videojuego;
      }
    );*/
    //this.videojuego$ = this.videojuegoService.obtenerVideojuego(this.route.snapshot.params.id).pipe(shareReplay(1));
  }

  ngOnInit() {
    this.route.data.subscribe(
      resp => {
        this.videojuego = resp.videojuego;
      }
    );
  }

}
