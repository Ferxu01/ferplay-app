import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { CarroCompraService } from 'src/app/features/carro-compra/services/carro-compra.service';
import { Videojuego } from '../../interfaces/Videojuego';
import { VideojuegoService } from '../../services/videojuego.service';
import { VideojuegoDetallesPage } from '../videojuego-detalles.page';
import * as moment from 'moment';
import { ToastAlertComponent } from 'src/app/shared/toasts/toast-alert/toast-alert.component';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-videojuego-info',
  templateUrl: './videojuego-info.page.html',
  styleUrls: ['./videojuego-info.page.scss'],
})
export class VideojuegoInfoPage implements OnInit, OnDestroy {
  videojuego: Videojuego;

  //Observable para obtener el videojuego a añadir
  videojuegoCreado$: Observable<Videojuego>;

  videojuegoSubscription: Subscription;

  botones: any[] = [];

  constructor(
    @Inject(VideojuegoDetallesPage) private parentComponent: VideojuegoDetallesPage,
    private videojuegoService: VideojuegoService,
    private carroCompraService: CarroCompraService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController,
    private toastAlert: ToastAlertComponent,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    moment.locale('es');

    this.videojuego = this.parentComponent.videojuego;
    this.videojuego.fechaCreacion = moment(this.videojuego.fechaCreacion).fromNow();

    //Cambiar botones del action sheet
    this.botones = [
      {
        text: 'Añadir al carro',
        icon: 'cart',
        handler: () => {
          this.addVideojuegoCarro();
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }
    ];

    this.videojuegoCreado$ = this.videojuegoService.getVideojuegoCreado();
    this.videojuegoSubscription = this.videojuegoCreado$.subscribe(
      resp => {
        moment.locale('es');
        resp.mine = true;
        resp.fechaCreacion = moment(resp.fechaCreacion).fromNow();

        this.videojuego = resp;
      }
    );

    if (this.videojuego.mine) {
      this.botones.unshift({
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.showConfirmacionBorrar();
        }
      });
    }
  }

  async showActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: this.botones
    });
    await actionSheet.present();
  }

  async showConfirmacionBorrar() {
    const alert = await this.alertCtrl.create({
      header: '¡Atención!',
      message: '¿Estás seguro de que quieres borrar el videojuego?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.videojuegoService.borrarVideojuego(this.videojuego.id).subscribe(
              () => {
                this.router.navigate(['/videojuegos', {idVideojuego: this.videojuego.id}]);

                this.toastAlert.crearAlertaMensaje('Videojuego borrado correctamente', 'success', 'toast-confirmacion');
              }
            );
          }
        },
        {
          text: 'No'
        }
      ]
    });

    await alert.present();
  }

  addVideojuegoCarro() {
    if (this.videojuego.stock > 0) {
      this.carroCompraService.addVideojuegoCarro(this.videojuego).subscribe(
        resp => {
          this.toastAlert.crearAlertaMensaje('Videojuego añadido al carro', 'success', 'toast-confirmacion', 1000);
        }
      );
    } else {
      this.toastAlert.crearAlertaMensaje('El videojuego no tiene stock disponible', 'danger', 'toast-error', 2000);
    }
  }

  ngOnDestroy() {
    this.videojuegoSubscription.unsubscribe();
  }

}
