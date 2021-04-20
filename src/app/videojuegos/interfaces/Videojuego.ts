import { Plataforma } from "./Plataforma";
import { VideojuegoBase } from "./VideojuegoBase";

export interface Videojuego extends VideojuegoBase {
  plataforma: Plataforma;
}
