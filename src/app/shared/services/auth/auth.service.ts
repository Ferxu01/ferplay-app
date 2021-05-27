import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { UsuarioRegistro } from 'src/app/shared/interfaces/auth/UsuarioRegistro';
import { LoginUsuario } from '../../interfaces/auth/LoginUsuario';
import { TokenResponse } from '../../interfaces/Responses';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authURL = 'auth';
  logged: boolean = false;
  loginChange$ = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  isLogged(): Observable<boolean> {
    if (this.logged && localStorage.getItem('token')) {
      return of(true);
    } else if (!this.logged && !localStorage.getItem('token')) {
      return of(false);
    } else if(!this.logged && localStorage.getItem('token') !== '') {
      this.logged = true;
      this.loginChange$.next(true);
      return of(true);
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

  registrar(usuario: UsuarioRegistro): Observable<void> {
    return this.http.post<void>(`${this.authURL}/register`, usuario);
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    this.logged = false;
    this.loginChange$.next(false);
  }
}
