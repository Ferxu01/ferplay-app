import { Usuario } from "src/app/shared/interfaces/usuarios/Usuario";
import { Videojuego } from "../videojuegos/Videojuego";

export interface CarroCompra {
  id?: number;
  videojuego: Videojuego;
  usuario: Usuario;
  cantidad: number;
}
