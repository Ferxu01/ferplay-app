import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/interfaces/Usuario';
import { ModalEditarComponent } from 'src/app/shared/modals/modal-editar/modal-editar.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario: Usuario;

  constructor(
    private modalEditar: ModalEditarComponent,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.usuario = data.usuario;
      }
    );
  }

  modalEditarPassword() {
    this.modalEditar.crearModalEditarPassword();
  }
}
