import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../data/usuario';
import { UUID } from 'crypto';
@Injectable(
  {
    providedIn: 'root'
  }
)
export class UsuarioService {
  baseUrl: string = environment.baseUrl;

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  login(correo: string, password: string): Observable<HttpResponse<string>> {
    return this.http.get<string>(`${this.baseUrl}/auth/login`, {
      params: {
        "correo": correo,
        "contraseña": password
      },
      responseType: 'text' as 'json',
      observe: 'response'
    })
  }

  register(correo: string, password: string): Observable<HttpResponse<string>> {
    let usuario: Usuario = {
      id: "" as UUID,
      correo: correo,
      contraseña: password,
      administrador: false
    }

    return this.http.post<string>(`${this.baseUrl}/auth/sign-in`, usuario, {
      responseType: 'text' as 'json',
      observe: 'response'
    })
  }
}
