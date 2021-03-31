import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VideojuegosResponse } from 'src/app/interfaces/Responses';
import { Videojuego } from '../interfaces/Videojuego';

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
}
