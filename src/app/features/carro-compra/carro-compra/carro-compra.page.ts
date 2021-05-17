import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastAlertComponent } from 'src/app/shared/toasts/toast-alert/toast-alert.component';
import { Videojuego } from 'src/app/videojuegos/interfaces/Videojuego';
import { CompraService } from '../../compra/services/compra.service';
import { CarroCompra } from '../interfaces/carro-compra';
import { CarroCompraService } from '../services/carro-compra.service';

@Component({
  selector: 'app-carro-compra',
  templateUrl: './carro-compra.page.html',
  styleUrls: ['./carro-compra.page.scss'],
})
export class CarroCompraPage implements OnInit {
  videojuegosCarro: CarroCompra[] = [];
  error: string = '';
  comprado: boolean = false;

  constructor(
    private carroService: CarroCompraService,
    private compraService: CompraService,
    private toastAlert: ToastAlertComponent,
    private router: Router
  ) {
    this.obtenerVideojuegosCarro();
  }

  ngOnInit() {
    this.obtenerVideojuegosCarro();
  }

  obtenerVideojuegosCarro() {
    this.carroService.obtenerVideojuegosCarro().subscribe(
      resp => {
        this.videojuegosCarro = resp;
      },
      error => {
        this.error = error.error.errores.mensajes;
      }
    );
  }

  eliminarVideojuegoCarro(idVideojuego: number, idVideojuegoCarro: number, indexVideojuego: number) {
    this.carroService.removeVideojuegoCarro(idVideojuego, idVideojuegoCarro).subscribe(
      () => {
        console.log('videojuego borrado');
        this.videojuegosCarro.splice(indexVideojuego, 1);
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

  realizarCompra() {
    this.compraService.comprar().subscribe(
      () => {
        this.carroService.setContVideojuegosCarro(0);
        this.router.navigate(['/videojuegos']);

        this.toastAlert.crearAlertaMensaje('Compra realizada correctamente', 'success', 'toast-confirmacion');

        this.videojuegosCarro = [];
        this.comprado = true;

        let elements = document.getElementsByClassName('elements');

        const array = Array.from(elements);

        Array.prototype.filter.call(elements, element => {
          element.parentNode.removeChild(element)
        });
      }
    );
  }
}
