import { Component, input } from '@angular/core';
import { ProductoCaracteristicasService } from '../../services/productocaracteristicas.service';
import { CookieService } from 'ngx-cookie-service';
import { ProductoCaracteristicas } from '../../data/productocaracteristicas';
import { CardCarouselComponent } from '../card-carousel/card-carousel.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CardCarouselComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  pattern = input<string>();
  caracteristicas: ProductoCaracteristicas[] = []
  constructor(private productoCaracteristicasService: ProductoCaracteristicasService, private cookieService: CookieService) {

  }
  ngOnChanges() {
    this.productoCaracteristicasService.listSearch(this.pattern()!, this.cookieService.get("authToken"))
      .subscribe(res => {
        if (res.status === 200) {
          console.log(res);
          this.caracteristicas = res.body!!
        }
      })
    console.log(this.caracteristicas);
  }
}
