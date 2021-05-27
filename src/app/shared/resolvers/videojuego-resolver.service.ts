import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Videojuego } from '../interfaces/videojuegos/Videojuego';
import { VideojuegoService } from '../services/videojuegos/videojuego.service';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoResolverService implements Resolve<Videojuego> {

  constructor(private router: Router, private videojuegoService: VideojuegoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Videojuego | Observable<Videojuego> | Promise<Videojuego> {
    const id = route.params.id;

    return this.videojuegoService.obtenerVideojuego(+id).pipe(
      catchError(error => {
        this.router.navigate(['/videojuegos']);
        return EMPTY;
      })
    );
  }
}
