import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ComentarioResponse, ComentariosResponse } from 'src/app/interfaces/Responses';
import { Comentario } from '../interfaces/Comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {
  private readonly comentarioUrl = 'comentarios';

  constructor(private http: HttpClient) { }

  obtenerComentarios(id: number): Observable<Comentario[]> {
    return this.http.get<ComentariosResponse>(`videojuegos/${id}/${this.comentarioUrl}`).pipe(
      map(resp => resp.data),
      catchError((error: any) => {
        return throwError(error.error);
      })
    )
  }

  nuevoComentario(id: number, comentario: Comentario): Observable<Comentario> {
    return this.http.post<ComentarioResponse>(`videojuegos/${id}/comentario`, {
      comentario: comentario.texto
    }).pipe(
      map(resp => resp.data)
    );
  }

  borrarComentario(idVideojuego: number, idComentario: number): Observable<void> {
    return this.http.delete<void>(`videojuegos/${idVideojuego}/comentario/${idComentario}`);
  }
}
