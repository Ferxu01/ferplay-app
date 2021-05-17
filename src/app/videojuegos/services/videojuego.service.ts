import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { VideojuegoResponse, VideojuegosResponse } from 'src/app/interfaces/Responses';
import { Videojuego } from '../interfaces/Videojuego';
import { VideojuegoNuevo } from '../interfaces/VideojuegoNuevo';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  private readonly videojuegoURL = 'videojuegos';

  videojuegoCreado$ = new Subject<Videojuego>();

  constructor(private http: HttpClient) {}

  getVideojuegoCreado(): Observable<Videojuego> {
    return this.videojuegoCreado$.asObservable();
  }

  obtenerVideojuegos(): Observable<Videojuego[]> {
    return this.http.get<VideojuegosResponse>(`${this.videojuegoURL}`).pipe(
      map(resp => resp.data)
    );
  }

  obtenerVideojuego(id: number): Observable<Videojuego> {
    return this.http.get<VideojuegoResponse>(`${this.videojuegoURL}/${id}`).pipe(
      map(resp => resp.data)
    );
  }

  obtenerVideojuegosUsuario(idUsuario: number): Observable<Videojuego[]> {
    return this.http.get<VideojuegosResponse>(`${this.videojuegoURL}/usuario/${idUsuario}`).pipe(
      map(resp => resp.data)
    );
  }

  subirVideojuego(videojuego: VideojuegoNuevo): Observable<Videojuego> {
    return this.http.post<VideojuegoResponse>(this.videojuegoURL, videojuego).pipe(
      map(resp => {
        this.videojuegoCreado$.next(resp.data);
        return resp.data;
      })
    );
  }

  editarVideojuego(videojuego: VideojuegoNuevo): Observable<Videojuego> {
    return this.http.put<VideojuegoResponse>(`${this.videojuegoURL}/edit/${videojuego.id}`, {
      nombre: videojuego.nombre,
      descripcion: videojuego.descripcion,
      precio: videojuego.precio,
      imagen: videojuego.imagen,
      plataforma: videojuego.plataforma,
      stock: videojuego.stock
    }).pipe(
      map(resp => {
        this.videojuegoCreado$.next(resp.data);
        return resp.data;
      })
    );
  }

  borrarVideojuego(id: number): Observable<void> {
    return this.http.delete<void>(`${this.videojuegoURL}/${id}`);
  }

  obtenerVideojuegosFavoritos(): Observable<Videojuego[]> {
    return this.http.get<VideojuegosResponse>(`${this.videojuegoURL}/favoritos`).pipe(
      map(resp => resp.data),
      catchError((error: any) => {
        return throwError(error.error);
      })
    );
  }

  darLike(id: number): Observable<void> {
    return this.http.post<void>(`${this.videojuegoURL}/${id}/like`, {liked: true});
  }

  eliminarLike(id: number): Observable<void> {
    return this.http.delete<void>(`${this.videojuegoURL}/${id}/like`);
  }

  darFavorito(id: number): Observable<void> {
    return this.http.post<void>(`${this.videojuegoURL}/${id}/favourite`, {favourite: true});
  }

  eliminarFavoritos(id: number): Observable<void> {
    return this.http.delete<void>(`${this.videojuegoURL}/${id}/favourite`);
  }
}
