import { Usuario } from "src/app/interfaces/Usuario";
import { Videojuego } from "src/app/videojuegos/interfaces/Videojuego";

export interface Compra {
  id?: number;
  usuario: Usuario;
  videojuego: Videojuego;
  cantidad: number;
  precio: number;
  fechaCompra: string;
}
