import { Usuario } from "src/app/shared/interfaces/usuarios/Usuario";
import { Videojuego } from "../videojuegos/Videojuego";

export interface Compra {
  id?: number;
  usuario: Usuario;
  videojuego: Videojuego;
  cantidad: number;
  precio: number;
  lineaCompra: number;
  fechaCompra: string;
}
