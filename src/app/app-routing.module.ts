import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginActivateGuard } from './auth/guards/login-activate.guard';
import { LogoutActivateGuard } from './auth/guards/logout-activate.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/videojuegos',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate: [LogoutActivateGuard]
  },
  {
    path: 'videojuegos',
    loadChildren: () => import('./videojuegos/videojuegos.module').then(m => m.VideojuegosModule),
    canActivate: [LoginActivateGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
