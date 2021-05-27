import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilResolverService } from '../shared/resolvers/perfil-resolver.service';

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
  },
  {
    path: ':id',
    loadChildren: () => import('./perfil-usuario/perfil-usuario.module').then( m => m.PerfilUsuarioPageModule),
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
