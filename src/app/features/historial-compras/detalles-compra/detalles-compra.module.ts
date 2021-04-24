import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesCompraPageRoutingModule } from './detalles-compra-routing.module';

import { DetallesCompraPage } from './detalles-compra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesCompraPageRoutingModule
  ],
  declarations: [DetallesCompraPage]
})
export class DetallesCompraPageModule {}
