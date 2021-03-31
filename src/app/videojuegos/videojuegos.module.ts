import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideojuegosRoutingModule } from './videojuegos-routing.module';
import { HomePageModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VideojuegosRoutingModule
  ],
  exports: [
    HomePageModule
  ]
})
export class VideojuegosModule { }
