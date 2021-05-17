import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root',
})
export class InitializeProviderService {

  constructor(private http: HttpClient) { }

  userResponse: Usuario;

  obtenerDatosUsuarioLogueado() {
    return this.http.get('profile/me').toPromise().then(
      (response: any) => {
        console.warn(response.data);
        this.userResponse = response.data;
      }
    );
  }
}
