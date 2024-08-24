import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-cart',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home-cart.component.html',
  styleUrl: './home-cart.component.scss'
})
export class HomeCartComponent {
  openCart = output<boolean>();
  showCart = false;
  cookieService: CookieService;

  constructor(cookieService: CookieService) {
    this.cookieService = cookieService;
  }
  onShowCart() {
    this.showCart = !this.showCart;
    this.openCart.emit(this.showCart);
    console.log(this.showCart);
  }
}
