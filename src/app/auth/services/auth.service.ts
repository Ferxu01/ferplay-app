import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { TokenResponse } from '../interfaces/responses';
import { LoginUsuario } from '../interfaces/LoginUsuario';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioResponse } from 'src/app/interfaces/Responses';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authURL = 'auth';
  logged: boolean = false;
  loginChange$ = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  //Provisional
  /*obtenerUsuarioLogueado(): Observable<Usuario> {
    return this.http.get<UsuarioResponse>('profile/me').pipe(
      map(resp => resp.data)
    );
  }*/

  isLogged(): Observable<boolean> {
    if (this.logged) {
      return of(true);
    } else if (!this.logged && !localStorage.getItem('token')) {
      return of(false);
    }

    return of(false);
  }

  login(usuario: LoginUsuario): Observable<void> {
    return this.http.post<TokenResponse>(`${this.authURL}/login`, usuario).pipe(
      map(resp => {
        localStorage.setItem('token', resp.token);
        this.logged = true;
        this.loginChange$.next(true);
      })
    );
  }
}
