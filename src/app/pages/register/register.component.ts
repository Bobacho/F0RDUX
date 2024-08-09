import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  typePassword: string;
  constructor() {
    this.typePassword = "password";
  }
  changeTypePassword() {
    if (this.typePassword === "password") {
      this.typePassword = "text";
      return;
    }
    this.typePassword = "password";
  }
}
