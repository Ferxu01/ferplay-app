import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Compra } from 'src/app/shared/interfaces/features/Compra';
import { ComprasResponse } from 'src/app/shared/interfaces/Responses';

@Injectable({
  providedIn: 'root'
})
export class DetalleCompraService {

  constructor(private http: HttpClient) { }

  getDetalleCompra(lineaCompra: number): Observable<Compra[]> {
    return this.http.get<ComprasResponse>(`profile/buy/${lineaCompra}`).pipe(
      map(resp => resp.data)
    );
  }
}
