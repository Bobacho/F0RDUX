import { Component } from '@angular/core';
import { HomeHeaderComponent } from '../../components/home-header/home-header.component';
import { HomeCarouselComponent } from '../../components/home-carousel/home-carousel.component';
import { HomeSocialNetworksComponent } from '../../components/home-social-networks/home-social-networks.component';
import { HomeFooterComponent } from '../../components/home-footer/home-footer.component';
import { HomeAboutMeComponent } from '../../components/home-about-me/home-about-me.component';
import { HomeCategoriesComponent } from '../../components/home-categories/home-categories.component';
import { CartSetComponent } from '../../components/cart-set/cart-set.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeCarouselComponent, HomeSocialNetworksComponent, HomeFooterComponent, HomeAboutMeComponent, HomeCategoriesComponent, CartSetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showCategories: boolean = false;
  showCart: boolean = false;
  onShowCategories(flag: boolean) {
    if (typeof (flag) === "boolean") {
      this.showCategories = flag
      console.log(this.showCategories);
    }
  }
  onShowCart(flag: boolean) {
    if (typeof (flag) === "boolean") {
      this.showCart = flag;
      console.log(this.showCart);
    }
  }
}
