import { Component, OnInit } from '@angular/core';
import { Compra } from '../../interfaces/Compra';
import { HistorialComprasService } from '../services/historial-compras.service';

import * as moment from 'moment';
import { ModalDetalleCompraComponent } from 'src/app/shared/modals/modal-detalle-compra/modal-detalle-compra.component';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.page.html',
  styleUrls: ['./historial-compras.page.scss'],
})
export class HistorialComprasPage implements OnInit {
  compras: Compra[];
  fechaCompra: string = '';

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
      }
    )
  }

  async verDetalleCompra(lineaCompra: number) {
    this.modalDetalleCompra.crearModalDetalleCompra(lineaCompra);
  }
}
