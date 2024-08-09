import { Component } from '@angular/core';
import { CardCarouselComponent } from '../../components/card-carousel/card-carousel.component';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [CardCarouselComponent],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.scss'
})
export class HomeCarouselComponent {

}
