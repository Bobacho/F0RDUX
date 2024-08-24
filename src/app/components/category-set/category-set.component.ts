import { Component, input } from '@angular/core';
import { ProductoCaracteristicas } from '../../data/productocaracteristicas';
import { ProductoCaracteristicasService } from '../../services/productocaracteristicas.service';
import { CookieService } from 'ngx-cookie-service';
import { CardCarouselComponent } from '../card-carousel/card-carousel.component';

@Component({
  selector: 'app-category-set',
  standalone: true,
  imports: [CardCarouselComponent],
  templateUrl: './category-set.component.html',
  styleUrl: './category-set.component.scss'
})
export class CategorySetComponent {
  category = input<string>();
  products: ProductoCaracteristicas[] = []

  constructor(private productoCaracteristicasService: ProductoCaracteristicasService,
    private cookieService: CookieService) { }

  ngOnChanges() {
    this.productoCaracteristicasService.listCategory(this.category()!, this.cookieService.get("authToken"))
      .subscribe(res => {
        if (res.status === 200) {
          this.products = res.body!!;
        }
      })
  }
}
