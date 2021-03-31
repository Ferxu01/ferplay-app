export interface Videojuego {
  id?: number;
  nombre: string;
  imagen: string;
  descripcion: string;
  numLikes?: number;
  stock?: number;
  fechaCreacion?: string;
}
