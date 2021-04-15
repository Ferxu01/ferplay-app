import { Provincia } from "./Provincia";

export interface Usuario {
  id?: number;
  nombre?: string;
  apellidos?: string;
  email: string;
  password?: string;
  avatar?: string;
  nickname?: string;
  provincia?: Provincia;
  fechaCreacion?: string;
}
