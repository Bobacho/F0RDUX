import { Component, output, input } from '@angular/core';
import { HomeCartComponent } from '../home-cart/home-cart.component';
import { HomeSearcherComponent } from '../home-searcher/home-searcher.component';
import { HomeLoginButtonComponent } from '../home-login-button/home-login-button.component';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [HomeCartComponent, HomeSearcherComponent, HomeLoginButtonComponent],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {
  isShowingCategories = input<boolean>();
  showCart = output<boolean>();
  showCategories = output<boolean>();
  onShowCategories() {
    this.showCategories.emit(true);
  }
  onShowCart(flag: boolean) {
    if (typeof (flag) === "boolean") {
      console.log(flag);
      this.showCart.emit(flag);
    }
  }
}
