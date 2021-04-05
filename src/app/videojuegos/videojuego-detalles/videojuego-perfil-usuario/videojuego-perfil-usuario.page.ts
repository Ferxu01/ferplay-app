import { Component, Inject, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/Usuario';
import { VideojuegoDetallesPage } from '../videojuego-detalles.page';

@Component({
  selector: 'app-videojuego-perfil-usuario',
  templateUrl: './videojuego-perfil-usuario.page.html',
  styleUrls: ['./videojuego-perfil-usuario.page.scss'],
})
export class VideojuegoPerfilUsuarioPage implements OnInit {
  usuario: Usuario;

  constructor(
    @Inject(VideojuegoDetallesPage) private parentComponent: VideojuegoDetallesPage
  ) { }

  ngOnInit() {
    this.usuario = this.parentComponent.videojuego.usuario;
  }

}
