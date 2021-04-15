import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UsuarioResponse } from 'src/app/interfaces/Responses';
import { Usuario } from 'src/app/interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private readonly usuariosUrl = 'profile';

  constructor(private http: HttpClient) { }

  obtenerMiPerfil(): Observable<Usuario> {
    return this.http.get<UsuarioResponse>(`${this.usuariosUrl}/me`).pipe(
      map(resp => resp.data)
    );
  }

  obtenerPerfil(id: number): Observable<Usuario> {
    return this.http.get<UsuarioResponse>(`${this.usuariosUrl}/${id}`).pipe(
      map(resp => resp.data),
      catchError((error: HttpErrorResponse) => {
        return throwError(`No se pudo obtener el perfil`);
      })
    );
  }
}
