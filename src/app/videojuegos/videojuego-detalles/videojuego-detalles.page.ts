import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Videojuego } from '../interfaces/Videojuego';
import { VideojuegoService } from '../services/videojuego.service';

@Component({
  selector: 'app-videojuego-detalles',
  templateUrl: './videojuego-detalles.page.html',
  styleUrls: ['./videojuego-detalles.page.scss'],
})
export class VideojuegoDetallesPage implements OnInit, OnDestroy {
  videojuego: Videojuego;
  videojuego$: Observable<Videojuego>;

  videojuegoSubscription: Subscription;

  constructor(private videojuegoService: VideojuegoService, private route: ActivatedRoute) {
    /*this.route.data.subscribe(
      resp => {
        this.videojuego = resp.videojuego;
      }
    );*/
    //this.videojuego$ = this.videojuegoService.obtenerVideojuego(this.route.snapshot.params.id).pipe(shareReplay(1));

    this.videojuego$ = this.videojuegoService.getVideojuegoCreado();
    this.videojuegoSubscription = this.videojuego$.subscribe(
      resp => {
        this.videojuego = resp
      }
    );
  }

  ngOnInit() {
    this.route.data.subscribe(
      resp => {
        this.videojuego = resp.videojuego;
      }
    );


  }

  ngOnDestroy() {
    this.videojuegoSubscription.unsubscribe();
  }

}
