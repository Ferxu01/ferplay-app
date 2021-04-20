import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, debounce, debounceTime, delay, map } from 'rxjs/operators';
import { Videojuego } from 'src/app/videojuegos/interfaces/Videojuego';
import { CarroCompra } from '../interfaces/carro-compra';
import { CarroCompraResponse } from '../interfaces/Responses';

@Injectable({
  providedIn: 'root'
})
export class CarroCompraService {
  private readonly urlCarro = 'carro';

  private numVideojuegosCarroCompra: number = 0;
  private contVideojuegosCarro = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  obtenerContVideojuegosCarro() {
    return this.contVideojuegosCarro;
  }

  obtenerNumVideojuegosCarroCompra() {
    return this.numVideojuegosCarroCompra;
  }

  obtenerVideojuegosCarro(): Observable<CarroCompra[]> {
    return this.http.get<CarroCompraResponse>(`videojuegos/${this.urlCarro}`).pipe(
      map(resp => {
        this.contVideojuegosCarro.next(resp.data.length);
        return resp.data;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }

  addVideojuegoCarro(videojuego: Videojuego): Observable<CarroCompra> {
    return this.http.post<CarroCompra>(`videojuegos/${videojuego.id}/${this.urlCarro}`, videojuego).pipe(
      map(resp => {
        this.numVideojuegosCarroCompra += 1;
        this.contVideojuegosCarro.next(this.contVideojuegosCarro.value + this.numVideojuegosCarroCompra);
        return resp;
      })
    );
  }

  removeVideojuegoCarro(idVideojuego: number, idVideojuegoCarro: number): Observable<void> {
    this.contVideojuegosCarro.next(this.contVideojuegosCarro.value - 1);
    return this.http.delete<void>(`videojuegos/${idVideojuego}/${this.urlCarro}/${idVideojuegoCarro}`);
  }

  aumentarStock(videojuego: Videojuego, videojuegoCarro: CarroCompra): Observable<CarroCompra> {
    return this.http.patch<CarroCompra>(`videojuegos/${videojuego.id}/${this.urlCarro}/${videojuegoCarro.id}`, {
      stock: videojuegoCarro.cantidad + 1
    }).pipe(
      map(resp => resp)
    );
  }

  decrementarStock(videojuego: Videojuego, videojuegoCarro: CarroCompra): Observable<CarroCompra> {
    return this.http.patch<CarroCompra>(`videojuegos/${videojuego.id}/${this.urlCarro}/${videojuegoCarro.id}`, {
      stock: videojuegoCarro.cantidad - 1
    }).pipe(
      map(resp => resp)
    );
  }
}
