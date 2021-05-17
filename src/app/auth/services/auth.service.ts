import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { TokenResponse } from '../interfaces/responses';
import { LoginUsuario } from '../interfaces/LoginUsuario';
import { UsuarioRegistro } from '../interfaces/UsuarioRegistro';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authURL = 'auth';
  logged: boolean = false;
  loginChange$ = new Subject<boolean>();

  constructor(private http: HttpClient) {
    if (localStorage.getItem('token') !== '') {
      this.logged = true;
    }
  }

  isLogged(): Observable<boolean> {
    console.warn('isLogged: '+this.logged);

    if (this.logged && localStorage.getItem('token')) {
      console.log('aloha 1');
      return of(true);
    } else if (!this.logged && !localStorage.getItem('token')) {
      console.warn('aloha 2: '+this.logged);
      console.log('aloha 2');
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

  registrar(usuario: UsuarioRegistro): Observable<void> {
    return this.http.post<void>(`${this.authURL}/register`, usuario);
  }

  loginGoogle(token: string): Observable<void> {
    return this.http.post<TokenResponse>(`${this.authURL}/google`, {access_token: token}).pipe(
      map(resp => {
        localStorage.setItem('token', resp.token);
        this.loginChange$.next(true);
        this.logged = true;
      })
    );
  }

  cerrarSesion(): void {
    localStorage.removeItem('token');
    this.logged = false;
    this.loginChange$.next(false);
  }
}
