import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Videojuego } from 'src/app/videojuegos/interfaces/Videojuego';
import { CarroCompra } from '../interfaces/carro-compra';

@Injectable({
  providedIn: 'root'
})
export class CarroCompraService {
  private readonly urlCarro = 'carro';

  constructor(private http: HttpClient) { }

  addVideojuegoCarro(videojuego: Videojuego): Observable<CarroCompra> {
    return this.http.post<CarroCompra>(`videojuegos/${videojuego.id}/${this.urlCarro}`, videojuego).pipe(
      map(resp => resp)
    );
  }
}
