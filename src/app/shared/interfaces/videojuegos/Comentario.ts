import { Usuario } from "src/app/shared/interfaces/usuarios/Usuario";
import { Videojuego } from "./Videojuego";

export interface Comentario {
  id?: number;
  texto: string;
  usuario?: Usuario;
  videojuego?: Videojuego;
  fechaCreacion?: string;
}
