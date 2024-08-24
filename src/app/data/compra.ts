import { UUID } from "crypto";
import { Carrito } from "./carrito";

export interface Compra {
  id: UUID,
  carrito: Carrito,
  fechaCompra: Date,
  fechaFinalizacion: Date,
}
