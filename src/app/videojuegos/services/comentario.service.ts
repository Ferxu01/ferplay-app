import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ComentariosResponse } from 'src/app/interfaces/Responses';
import { Comentario } from '../interfaces/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private readonly comentarioUrl = 'comentarios';

  constructor(private http: HttpClient) { }

  obtenerComentarios(id: number): Observable<Comentario[]> {
    return this.http.get<ComentariosResponse>(`videojuegos/${id}/${this.comentarioUrl}`).pipe(
      map(resp => resp.data)
    );
  }
}
