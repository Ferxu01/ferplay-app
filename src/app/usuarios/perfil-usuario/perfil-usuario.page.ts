import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/shared/interfaces/usuarios/Usuario';
import { UsuariosService } from 'src/app/shared/services/usuarios/usuarios.service';

@Component({
  selector: 'app-pagina-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {
  usuario: Usuario;
  usuarioLogueado: Usuario;

  constructor(private route: ActivatedRoute, private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.route.data.subscribe(
      resp => {
        this.usuario = resp.usuario;

        this.usuarioService.obtenerMiPerfil().subscribe(
          resp => {
            this.usuarioLogueado = resp;
          }
        );
      }
    );
  }

}
