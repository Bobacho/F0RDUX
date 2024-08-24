import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-login-button',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home-login-button.component.html',
  styleUrl: './home-login-button.component.scss'
})
export class HomeLoginButtonComponent {
  user: string;
  route: string;
  constructor(private cookieService: CookieService) {
    this.user = cookieService.get("correo");
    if (this.user) {
      this.route = "/home";
    }
    else {
      this.route = "/login";
    }
  }

  onLogout() {
    if (!this.user) {
      return;
    }
    this.cookieService.deleteAll();
  }
}
