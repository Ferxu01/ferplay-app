import { Component, OnInit } from '@angular/core';
import { Compra } from '../../interfaces/Compra';
import { HistorialComprasService } from '../services/historial-compras.service';

import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { DetallesCompraPage } from '../detalles-compra/detalles-compra.page';

@Component({
  selector: 'app-historial-compras',
  templateUrl: './historial-compras.page.html',
  styleUrls: ['./historial-compras.page.scss'],
})
export class HistorialComprasPage implements OnInit {
  compras: Compra[];
  fechaCompra: string = '';

  constructor(private historialCompraService: HistorialComprasService, private modalCtrl: ModalController) { }

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

  async verDetalleCompra() {
    const modal = await this.modalCtrl.create({
      component: DetallesCompraPage
    });
    return await modal.present();
  }
}
