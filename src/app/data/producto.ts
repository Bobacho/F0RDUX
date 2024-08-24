import { UUID } from "crypto";
import { ProductoCaracteristicas } from "./productocaracteristicas";

export interface Producto {
  id: UUID,
  productoCaracteristicas: ProductoCaracteristicas,
  activo: Boolean,
  codigo: string,
  correo: string,
  contraseña: string
}
