import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  private readonly compraUrl = 'buy';

  constructor(private http: HttpClient) { }

  comprar(): Observable<void> {
    return this.http.post<void>(`videojuegos/${this.compraUrl}`, {});
  }
}
