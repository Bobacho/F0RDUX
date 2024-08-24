import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductoCaracteristicas } from '../../data/productocaracteristicas';
import { CarritoService } from '../../services/carrito.service';
import { CookieService } from 'ngx-cookie-service';
import { Carrito } from '../../data/carrito';

@Component({
  selector: 'app-cart-set',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './cart-set.component.html',
  styleUrl: './cart-set.component.scss'
})
export class CartSetComponent {
  products: ProductoCaracteristicas[] = [];
  id: string;
  correo: string = this.cookieService.get("correo");
  constructor(private cookieService: CookieService, private carritoService: CarritoService) {
    let carrito: Carrito;
    this.id = cookieService.get("idCarrito");
    if (!this.id) {
      carritoService.createCarrito(cookieService.get("correo"), cookieService.get("authToken"))
        .subscribe(res => {
          console.log(res.status);
          if (res.status === 200) {
            console.log(res.body);
            this.id = res.body!!;
            cookieService.set("idCarrito", this.id);
          }
          carritoService.findCarritoById(this.id, cookieService.get("authToken"))
            .subscribe(res => {
              if (res.status === 200) {
                carrito = res.body!!;
                carrito.productos
                  .map(producto => producto.productoCaracteristicas)
                  .forEach(caracteristicas => {
                    if (this.products.includes(caracteristicas)) {
                      return;
                    }
                    this.products.push(caracteristicas);
                  })
              }
            });

        });
    }
    else {
      carritoService.findCarritoById(this.id, cookieService.get("authToken"))
        .subscribe(res => {
          if (res.status === 200) {
            carrito = res.body!!;
            carrito.productos
              .map(producto => producto.productoCaracteristicas)
              .forEach(caracteristicas => {
                if (this.products.includes(caracteristicas)) {
                  return;
                }
                this.products.push(caracteristicas);
              })
          }
        });

    }
  }
}
