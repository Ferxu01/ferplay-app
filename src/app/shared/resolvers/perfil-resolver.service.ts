import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Usuario } from 'src/app/shared/interfaces/usuarios/Usuario';
import { UsuariosService } from '../services/usuarios/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class PerfilResolverService implements Resolve<Usuario> {

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Usuario | Observable<Usuario> | Promise<Usuario> {
    const id = route.params.id;

    if (isNaN(id)) {
      return this.usuariosService.obtenerMiPerfil().pipe(
        catchError(error => {
          this.router.navigate(['/videojuegos']);
          return EMPTY;
        })
      );
    } else {
      return this.usuariosService.obtenerPerfil(+id).pipe(
        catchError(error => {
          this.router.navigate(['/videojuegos']);
          return EMPTY;
        })
      );
    }
  }
}
