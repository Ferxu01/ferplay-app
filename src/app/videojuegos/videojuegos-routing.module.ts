import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideojuegoResolverService } from './resolvers/videojuego-resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    pathMatch: 'full'
  },
  {
    path: ':id',
    loadChildren: () => import('./videojuego-detalles/videojuego-detalles.module').then( m => m.VideojuegoDetallesPageModule),
    resolve: {
      videojuego: VideojuegoResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideojuegosRoutingModule { }
