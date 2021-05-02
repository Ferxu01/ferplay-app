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
  },
  {
    path: 'compras/historial',
    loadChildren: () => import('./historial-compras/historial-compras/historial-compras.module').then( m => m.HistorialComprasPageModule)
  },
  {
    path: 'detalles-compra',
    loadChildren: () => import('./historial-compras/detalles-compra/detalles-compra.module').then( m => m.DetallesCompraPageModule)
  },
  {
    path: 'favoritos',
    loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
