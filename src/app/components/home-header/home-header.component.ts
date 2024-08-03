import { Component } from '@angular/core';
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

}
