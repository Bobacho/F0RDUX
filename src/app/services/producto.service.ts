import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  countProductosByCaracteristicas(caracteristicas: string): Observable<HttpResponse<number>> {
    return this.http.get<number>(`${this.baseUrl}/api/producto/count`, {
      params: {
        "caracteristicasId": caracteristicas
      },
      observe: 'response'
    })
  }
}
