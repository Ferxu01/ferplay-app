import { Component, OnInit } from '@angular/core';
import { Compra } from '../../../shared/interfaces/features/Compra';

import * as moment from 'moment';
import { ModalDetalleCompraComponent } from 'src/app/shared/modals/modal-detalle-compra/modal-detalle-compra.component';
import { HistorialComprasService } from 'src/app/shared/services/features/historial-compras.service';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.page.html',
  styleUrls: ['./historial-compras.page.scss'],
})
export class HistorialComprasPage implements OnInit {
  compras: Compra[];
  fechaCompra: string = '';
  error: string = null;

  constructor(private historialCompraService: HistorialComprasService, private modalDetalleCompra: ModalDetalleCompraComponent) { }

  ngOnInit() {
    //Configurar librería moment en idioma español
    moment.locale('es');

    this.obtenerHistorialCompras();
  }

  obtenerHistorialCompras() {
    this.historialCompraService.obtenerHistorialCompras().subscribe(
      resp => {
        this.compras = resp;

        this.compras.forEach(compra => {
          compra.fechaCompra = moment(compra.fechaCompra).fromNow();
        });
      },
      error => {
        this.error = error.error.errores.mensajes;
      }
    )
  }

  async verDetalleCompra(lineaCompra: number) {
    this.modalDetalleCompra.crearModalDetalleCompra(lineaCompra);
  }
}
