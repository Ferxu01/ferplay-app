import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideojuegoDetallesPage } from './videojuego-detalles.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VideojuegoDetallesPage,
    children: [
      {
        path: 'info',
        loadChildren: () => import('./videojuego-info/videojuego-info.module').then(m => m.VideojuegoInfoPageModule)
      },
      {
        path: 'comentarios',
        loadChildren: () => import('./videojuego-comentarios/videojuego-comentarios.module').then(m => m.VideojuegoComentariosPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./videojuego-perfil-usuario/videojuego-perfil-usuario.module').then(m => m.VideojuegoPerfilUsuarioPageModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'info'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideojuegoDetallesPage]
})
export class VideojuegoDetallesPageModule {}
