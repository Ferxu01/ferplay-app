import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioResponse } from '../interfaces/Responses';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private readonly urlPerfil = 'profile';

  constructor(private http: HttpClient) { }

  obtenerUsuarioLogueado(): Observable<Usuario> {
    return this.http.get<UsuarioResponse>(`${this.urlPerfil}/me`).pipe(
      map(resp => resp.data)
    );
  }
}
