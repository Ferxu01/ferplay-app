import { Comentario } from "../videojuegos/interfaces/Comentario";
import { Videojuego } from "../videojuegos/interfaces/Videojuego";
import { Usuario } from "./Usuario";

export interface VideojuegosResponse {
  data: Videojuego[];
}

export interface UsuarioResponse {
  data: Usuario;
}
export interface VideojuegoResponse {
  data: Videojuego;
}

export interface UsuarioResponse {
  data: Usuario;
}

export interface ComentariosResponse {
  data: Comentario[];
}
