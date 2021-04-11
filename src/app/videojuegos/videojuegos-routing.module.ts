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
    path: 'nuevo',
    loadChildren: () => import('./videojuego-form/videojuego-form.module').then( m => m.VideojuegoFormPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./videojuego-detalles/videojuego-detalles.module').then( m => m.VideojuegoDetallesPageModule),
    resolve: {
      videojuego: VideojuegoResolverService
    }
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./videojuego-form/videojuego-form.module').then(m => m.VideojuegoFormPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideojuegosRoutingModule { }
