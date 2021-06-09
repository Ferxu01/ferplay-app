import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ToastAlertComponent } from 'src/app/shared/toasts/toast-alert/toast-alert.component';
import { CarroCompraService } from 'src/app/shared/services/features/carro-compra.service';
import { CompraService } from 'src/app/shared/services/features/compra.service';
import { CarroCompra } from 'src/app/shared/interfaces/features/Carro-compra';
import { Videojuego } from 'src/app/shared/interfaces/videojuegos/Videojuego';

@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.page.html',
  styleUrls: ['./carro-compra.page.scss'],
})
export class CarroCompraPage implements OnInit {
  videojuegosCarro: CarroCompra[] = [];
  error: string = '';
  comprado: boolean = false;

  terminado: boolean = false;
  eventAddVideojuego: Subscription;

  constructor(
    private carroService: CarroCompraService,
    private compraService: CompraService,
    private toastAlert: ToastAlertComponent,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.obtenerVideojuegosCarro();
  }

  ionViewWillEnter() {
    this.eventAddVideojuego = this.carroService.obtenerEventObservable().subscribe(
      resp => {
        this.obtenerVideojuegosCarro();
      }
    );
  }

  obtenerVideojuegosCarro(event?) {
    this.carroService.obtenerVideojuegosCarro().subscribe(
      resp => {
        if (event) {
          event.target.complete();
        }
        this.videojuegosCarro = resp;
        this.error = null;
        this.terminado = true;
      },
      error => {
        this.terminado = true;
        this.error = error.error.errores.mensajes;
      }
    );
  }

  eliminarVideojuegoCarro(idVideojuego: number, idVideojuegoCarro: number, indexVideojuego: number) {
    this.carroService.removeVideojuegoCarro(idVideojuego, idVideojuegoCarro).subscribe(
      () => {
        this.toastAlert.crearAlertaMensaje('Videojuego eliminado del carro', 'success', 'toast-confirmacion');
        this.videojuegosCarro.splice(indexVideojuego, 1);

        if (this.videojuegosCarro.length === 0) {
          this.error = 'No has añadido ningún videojuego aún';
        }
      }
    );
  }

  aumentarStockVideojuego(videojuego: Videojuego, videojuegoCarro: CarroCompra) {
    this.carroService.aumentarStock(videojuego,videojuegoCarro).subscribe(
      resp => {
        const videojuego = this.videojuegosCarro.find(
          v => v.videojuego.id === videojuegoCarro.videojuego.id
        );
        videojuego.cantidad += 1;
      }
    );
  }

  decrementarStockVideojuego(videojuego: Videojuego, videojuegoCarro: CarroCompra) {
    this.carroService.decrementarStock(videojuego,videojuegoCarro).subscribe(
      resp => {
        const videojuego = this.videojuegosCarro.find(
          v => v.videojuego.id === videojuegoCarro.videojuego.id
        );
        videojuego.cantidad -= 1;
      }
    );
  }

  getTotal() {
    if (this.videojuegosCarro) {
      return this.videojuegosCarro.reduce(
        (i, j) => i + j.videojuego.precio * j.cantidad, 0
      );
    }

  }

  async realizarCompra() {
    const alert = await this.alertCtrl.create({
      header: '¡Atención!',
      message: '¿Estás seguro de que quieres realizar la compra?',
      buttons: [
        {
          text: 'No',
          role: 'cancel'
        },
        {
          text: 'Sí',
          handler: () => {
            this.showConfirmacionCompra();
          }
        }
      ]
    });

    await alert.present();
  }

  showConfirmacionCompra() {
    this.compraService.comprar().subscribe(
      () => {
        this.obtenerVideojuegosCarro();
        this.carroService.setContVideojuegosCarro(0);
        this.router.navigate(['/videojuegos']);

        this.toastAlert.crearAlertaMensaje('Compra realizada correctamente', 'success', 'toast-confirmacion');

        this.videojuegosCarro = [];
        this.comprado = true;
        this.error = 'No has añadido ningún videojuego aún';

        let elements = document.getElementsByClassName('elements');
        const array = Array.from(elements);

        Array.prototype.filter.call(elements, element => {
          array.map(el => {
            el.parentNode.removeChild(el);
          });
        });
      }
    );
  }
}
