import { UUID } from "crypto";


export interface ProductoCaracteristicas {
  id: UUID,
  nombre: string,
  precio: number,
  categoria: string,
  busquedas: number,
  imageUrl: string
}
