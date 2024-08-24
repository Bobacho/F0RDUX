import { Component } from '@angular/core';
import { CardCarouselComponent } from '../../components/card-carousel/card-carousel.component';
import { ProductoCaracteristicas } from '../../data/productocaracteristicas';
import { ProductoCaracteristicasService } from '../../services/productocaracteristicas.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CardCarouselComponent],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {
  caracteristicas: ProductoCaracteristicas[] = [];

  constructor(private productoCaracteristicasService: ProductoCaracteristicasService, private cookieService: CookieService) {
    productoCaracteristicasService.listRanking(cookieService.get("authToken"))
      .subscribe(res => {
        if (res.status === 200) {
          this.caracteristicas = res.body!!;
        }
      })
  }
}
