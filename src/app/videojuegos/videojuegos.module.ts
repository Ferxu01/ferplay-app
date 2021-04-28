import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideojuegosRoutingModule } from './videojuegos-routing.module';
import { HomePageModule } from './home/home.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    VideojuegosRoutingModule,
    SharedModule
  ],
  exports: [
    HomePageModule
  ]
})
export class VideojuegosModule { }
