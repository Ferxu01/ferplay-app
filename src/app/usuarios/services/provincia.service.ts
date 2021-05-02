import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Provincia } from 'src/app/interfaces/Provincia';
import { ProvinciasResponse } from 'src/app/interfaces/Responses';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private readonly provinciaUrl = 'provincias';

  constructor(private http: HttpClient) { }

  obtenerProvincias(): Observable<Provincia[]> {
    return this.http.get<ProvinciasResponse>(`${this.provinciaUrl}`).pipe(
      map(resp => resp.data)
    );
  }
}