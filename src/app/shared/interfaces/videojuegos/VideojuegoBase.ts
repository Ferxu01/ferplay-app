import { Usuario } from "src/app/shared/interfaces/usuarios/Usuario";

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
