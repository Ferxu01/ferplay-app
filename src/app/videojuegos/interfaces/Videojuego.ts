import { Usuario } from "src/app/interfaces/Usuario";
import { Plataforma } from "./Plataforma";

export interface Videojuego {
  id?: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  numLikes?: number;
  stock?: number;
  fechaCreacion?: string;
  usuario?: Usuario;
  plataforma: Plataforma;
  precio: number;
}
