import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { TokenResponse } from '../interfaces/responses';
import { LoginUsuario } from '../interfaces/LoginUsuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authURL = 'auth';
  logged: boolean = false;
  loginChange$ = new Subject<boolean>();

  constructor(private http: HttpClient) { }

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

  cerrarSesion(): void {
    localStorage.removeItem('token');
    this.logged = false;
    this.loginChange$.next(false);
  }
}
