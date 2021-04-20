import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./../videojuegos/home/home.module').then(m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: 'carro',
    loadChildren: () => import('./carro-compra/carro-compra/carro-compra.module').then(m => m.CarroCompraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
