import { UUID } from "crypto";

export interface Usuario {
  id: UUID,
  correo: string,
  contraseña: string,
  administrador: boolean
}
