import { Videojuego } from "../videojuegos/interfaces/Videojuego";
import { Usuario } from "./Usuario";

export interface VideojuegosResponse {
  data: Videojuego[];
}

export interface UsuarioResponse {
  data: Usuario;
}
