import { UUID } from "crypto";
import { Usuario } from "./usuario";
import { Producto } from "./producto";

export interface Carrito {
  id: UUID,
  usuario: Usuario,
  productos: Producto[],
  activo: boolean
}
