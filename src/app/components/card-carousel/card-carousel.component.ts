import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductoCaracteristicas } from '../../data/productocaracteristicas';

@Component({
  selector: 'app-card-carousel',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.scss'
})
export class CardCarouselComponent {
  isHover: boolean = false;
  caracteristicas = input<ProductoCaracteristicas>();
  disponibles = input<number>();
  changeIcon() {
    this.isHover = true;
  }

  resetIcon() {
    this.isHover = false;
  }

  onAddToCart() {
  }
}
