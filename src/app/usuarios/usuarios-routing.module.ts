import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilResolverService } from '../shared/usuarios/resolvers/perfil-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'videojuegos',
    pathMatch: 'full'
  },
  {
    path: 'me',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule),
    resolve: {
      usuario: PerfilResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
