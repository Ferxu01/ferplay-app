import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PlataformasResponse } from 'src/app/interfaces/Responses';
import { Plataforma } from '../interfaces/Plataforma';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  private readonly URL = 'plataformas';

  constructor(private http: HttpClient) { }

  obtenerPlataformas(): Observable<Plataforma[]> {
    return this.http.get<PlataformasResponse>(this.URL).pipe(
      map(resp => resp.data),
      catchError((error: HttpErrorResponse) => {
        return throwError(`Error ${error.status}. No se obtuvieron las plataformas`)
      })
    )
  }
}
