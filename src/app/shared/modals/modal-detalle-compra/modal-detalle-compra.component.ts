import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallesCompraPage } from 'src/app/features/historial-compras/detalles-compra/detalles-compra.page';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-modal-detalle-compra',
  templateUrl: './modal-detalle-compra.component.html',
  styleUrls: ['./modal-detalle-compra.component.scss'],
})
export class ModalDetalleCompraComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async crearModalDetalleCompra(lineaCompra: number) {
    const modal = await this.modalCtrl.create({
      component: DetallesCompraPage,
      componentProps: {
        lineaCompra: lineaCompra
      }
    });

    return await modal.present();
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
