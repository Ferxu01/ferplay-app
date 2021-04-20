import { Usuario } from "src/app/interfaces/Usuario";
import { Videojuego } from "src/app/videojuegos/interfaces/Videojuego";

export interface CarroCompra {
  id?: number;
  videojuego: Videojuego;
  usuario: Usuario;
  cantidad: number;
}
