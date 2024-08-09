import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
  onShowCart() {
    this.showCart = !this.showCart;
    this.openCart.emit(this.showCart);
    console.log(this.showCart);
  }
}
