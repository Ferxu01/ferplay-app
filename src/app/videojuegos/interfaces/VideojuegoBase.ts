import { Usuario } from "src/app/interfaces/Usuario";

export interface VideojuegoBase {
  id?: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  numLikes?: number;
  stock?: number;
  fechaCreacion?: string;
  usuario?: Usuario;
  precio: number;
  liked?: boolean;
  favourite?: boolean;
  mine?: boolean;
}
