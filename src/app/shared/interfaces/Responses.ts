import { Compra } from "src/app/shared/interfaces/features/Compra";
import { Comentario } from "./videojuegos/Comentario";
import { CarroCompra } from "./features/Carro-compra";
import { Provincia } from "./usuarios/Provincia";
import { Usuario } from "./usuarios/Usuario";
import { Videojuego } from "./videojuegos/Videojuego";
import { Plataforma } from "./videojuegos/Plataforma";

export interface TokenResponse {
  token: string;
}

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

export interface ComprasResponse {
  data: Compra[];
}

export interface CompraResponse {
  data: Compra;
}

export interface CarroCompraResponse {
  data: CarroCompra[];
}
