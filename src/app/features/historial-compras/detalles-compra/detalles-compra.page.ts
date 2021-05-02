import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Compra } from '../../interfaces/Compra';
import { DetalleCompraService } from '../services/detalle-compra.service';

@Component({
  selector: 'app-detalles-compra',
  templateUrl: './detalles-compra.page.html',
  styleUrls: ['./detalles-compra.page.scss'],
})
export class DetallesCompraPage implements OnInit {
  @Input() lineaCompra: number;
  videojuegosCompra: Compra[];

  constructor(private detalleCompraService: DetalleCompraService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.obtenerDetallesCompra();
  }

  obtenerDetallesCompra() {
    this.detalleCompraService.getDetalleCompra(this.lineaCompra).subscribe(
      resp => {
        this.videojuegosCompra = resp
      }
    );
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

}
