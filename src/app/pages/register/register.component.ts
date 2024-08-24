import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  correo: string = "";
  password: string = "";
  passwordConfirm: string = "";
  typePassword: string;
  errorMessage: string = "";
  constructor(private usuarioService: UsuarioService, private router: Router) {
    this.typePassword = "password";
  }
  changeTypePassword() {
    if (this.typePassword === "password") {
      this.typePassword = "text";
      return;
    }
    this.typePassword = "password";
  }

  onSubmit() {
    if (this.password !== this.passwordConfirm) {
      this.errorMessage = "Contraseña no coincide";
      return;
    }
    this.usuarioService.register(this.correo, this.password).subscribe(
      res => {
        if (res.status === 200) {
          this.router.navigate(['login']);
        }
        else {
          this.errorMessage = "Usuario ya creado";
        }
      }
    )
  }
}
