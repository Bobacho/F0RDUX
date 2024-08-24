import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoCaracteristicas } from '../data/productocaracteristicas';
import { environment } from '../../environments/environment';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ProductoCaracteristicasService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

  listSearch(pattern: string, token: string): Observable<HttpResponse<ProductoCaracteristicas[]>> {
    return this.http.get<ProductoCaracteristicas[]>(`${this.baseUrl}/api/caracteristicas/list-search`, {
      params: {
        "nombre": pattern
      },
      observe: 'response'
    })
  }
  listCategory(category: string, token: string): Observable<HttpResponse<ProductoCaracteristicas[]>> {
    return this.http.get<ProductoCaracteristicas[]>(`${this.baseUrl}/api/caracteristicas/list-categorias`, {
      params: {
        "categoria": category
      },
      observe: 'response'
    })
  }
  listRanking(token: string): Observable<HttpResponse<ProductoCaracteristicas[]>> {
    return this.http.get<ProductoCaracteristicas[]>(`${this.baseUrl}/api/caracteristicas/list-ranking`, {
      observe: 'response'
    })
  }
}
