import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideojuegosRoutingModule } from './videojuegos-routing.module';
import { HomePageModule } from './home/home.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    VideojuegosRoutingModule
  ],
  exports: [
    HomePageModule
  ]
})
export class VideojuegosModule { }
