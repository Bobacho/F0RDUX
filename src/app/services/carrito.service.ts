import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carrito } from '../data/carrito';

@Injectable({
  providedIn: 'root',
}
)
export class CarritoService {
  baseUrl: string = environment.baseUrl;

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  createCarrito(correo: string, token: string): Observable<HttpResponse<string>> {
    return this.http.get<string>(this.baseUrl + "/api/carrito/create", {
      headers: {
        "Authorization": `Bearer ${token}`
      },
      params: {
        "correo": correo
      },
      observe: 'response'
    })
  }

  findCarritoById(id: string, token: string): Observable<HttpResponse<Carrito>> {
    return this.http.get<Carrito>(`${this.baseUrl}/api/carrito`, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
      params: {
        "id": id
      },
      responseType: 'json',
      observe: 'response'
    });
  }
}
