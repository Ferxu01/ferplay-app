import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { Videojuego } from '../interfaces/Videojuego';
import { VideojuegoService } from '../services/videojuego.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  videojuegos: Videojuego[] = [];

  //id del videojuego a borrar al retornar de los detalles
  idVideojuego: number;

  //Observable para obtener el videojuego a añadir
  videojuegoCreado$: Observable<Videojuego>;

  videojuegoSubscription: Subscription;

  cargado: boolean = false;
  loading: any;

  constructor(private videojuegoService: VideojuegoService, private route: ActivatedRoute, private loadingCtrl: LoadingController) { }

  async ngOnInit() {
    await this.mostrarLoading().then(
      resp => this.loading = resp
    );

    this.obtenerVideojuegos();
    this.loading.dismiss();

    this.idVideojuego = +this.route.snapshot.paramMap.get('idVideojuego');

    if (this.idVideojuego) {
      this.videojuegos = this.videojuegos.filter(v => {
        v.id !== this.idVideojuego
      });
    }

    this.videojuegoCreado$ = this.videojuegoService.getVideojuegoCreado();
    this.videojuegoSubscription = this.videojuegoCreado$.subscribe(
      resp => {
        this.videojuegos.unshift(resp);

        this.obtenerVideojuegos();
      }
    );
  }

  obtenerVideojuegos() {
    this.videojuegoService.obtenerVideojuegos().subscribe(
      resp => {
        this.videojuegos = resp;
      }
    );
  }

  recargarVideojuegos(event) {
    this.obtenerVideojuegos();

    event.target.complete();
  }

  async mostrarLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'Cargando datos...'
    });
    this.loading.present();
    return this.loading;
  }

  ngOnDestroy() {
    this.videojuegoSubscription.unsubscribe();
  }

}
