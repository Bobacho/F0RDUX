import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart-set',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './cart-set.component.html',
  styleUrl: './cart-set.component.scss'
})
export class CartSetComponent {
  products = [
    {
      "id": 1,
      "nombre": "Netflix",
      "urlImagen": "netflix.jpg",
      "precio": 9.99
    },
    {
      "id": 2,
      "nombre": "Netflix",
      "urlImagen": "netflix.jpg",
      "precio": 9.99
    }
  ];
}
