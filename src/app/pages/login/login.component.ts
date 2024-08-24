import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UUID } from 'crypto';
import { UsuarioService } from './../../services/usuario.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  baseUrl: string = ""
  correo: string = "";
  password: string = "";
  incorrectCredentials: boolean;
  typePassword: string;
  usuarioService: UsuarioService;
  cookieService: CookieService;
  constructor(private router: Router, usuarioService: UsuarioService, cookieService: CookieService) {
    this.typePassword = "password";
    this.incorrectCredentials = false;
    this.usuarioService = usuarioService;
    this.cookieService = cookieService;
  }
  onSubmit() {
    this.usuarioService.login(this.correo, this.password)
      .subscribe(
        res => {
          if (res.status === 200) {
            this.cookieService.set("authToken", res.body as string);
            this.cookieService.set("correo", this.correo);
            console.log("Cookie Registrada");
            this.router.navigate(['home']);
          }
          else {
            this.incorrectCredentials = true;
          }
        }
      )
  }
  changeTypePassword() {
    if (this.typePassword === "password") {
      this.typePassword = "text";
      return;
    }
    this.typePassword = "password";
  }
}
