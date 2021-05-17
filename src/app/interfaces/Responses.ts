import { Comentario } from "../videojuegos/interfaces/Comentario";
import { Plataforma } from "../videojuegos/interfaces/Plataforma";
import { Videojuego } from "../videojuegos/interfaces/Videojuego";
import { Provincia } from "./Provincia";
import { Usuario } from "./Usuario";

export interface UsuarioResponse {
  data: Usuario;
}

export interface VideojuegosResponse {
  data: Videojuego[];
}

export interface VideojuegoResponse {
  data: Videojuego;
}

export interface PlataformasResponse {
  data: Plataforma[];
}

export interface UsuarioResponse {
  data: Usuario;
}

export interface ComentariosResponse {
  data: Comentario[];
}

export interface ComentarioResponse {
  data: Comentario;
}

export interface ProvinciasResponse {
  data: Provincia[];
}

export interface ProvinciaResponse {
  data: Provincia;
}
