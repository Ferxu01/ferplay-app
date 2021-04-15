import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideojuegoResponse, VideojuegosResponse } from 'src/app/interfaces/Responses';
import { Videojuego } from '../interfaces/Videojuego';
import { VideojuegoNuevo } from '../interfaces/VideojuegoNuevo';

@Injectable({
  providedIn: 'root'
})
export class VideojuegoService {
  private readonly videojuegoURL = 'videojuegos';

  constructor(private http: HttpClient) { }

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

  subirVideojuego(videojuego: VideojuegoNuevo): Observable<Videojuego> {
    console.log('aloha');
    console.log(videojuego);
    return this.http.post<VideojuegoResponse>(this.videojuegoURL, videojuego).pipe(
      map(resp => resp.data)
    );
  }

  editarVideojuego(videojuego: VideojuegoNuevo): Observable<void> {
    return this.http.put<void>(`${this.videojuegoURL}/edit/${videojuego.id}`, {
      nombre: videojuego.nombre,
      descripcion: videojuego.descripcion,
      precio: videojuego.precio,
      imagen: videojuego.imagen,
      plataforma: videojuego.plataforma,
      stock: videojuego.stock
    });
  }

  borrarVideojuego(id: number): Observable<void> {
    return this.http.delete<void>(`${this.videojuegoURL}/${id}`);
  }
}
