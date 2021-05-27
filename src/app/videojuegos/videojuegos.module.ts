import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideojuegosRoutingModule } from './videojuegos-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    VideojuegosRoutingModule,
    SharedModule
  ]
})
export class VideojuegosModule { }
