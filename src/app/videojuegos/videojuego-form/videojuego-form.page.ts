import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { NavController } from '@ionic/angular';
import { CameraPlugin } from 'src/app/interfaces/native-plugins/CameraPlugin';
import { Plataforma } from '../interfaces/Plataforma';
import { Videojuego } from '../interfaces/Videojuego';
import { PlataformaService } from '../services/plataforma.service';
import { VideojuegoService } from '../services/videojuego.service';

@Component({
  selector: 'app-videojuego-form',
  templateUrl: './videojuego-form.page.html',
  styleUrls: ['./videojuego-form.page.scss'],
})
export class VideojuegoFormPage implements OnInit, CameraPlugin {
  nuevoVideojuego: Videojuego = {
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    plataforma: {
      id: 1,
      nombre: ''
    }
  };

  plataformas: Plataforma[];
  editando: boolean = false;

  constructor(
    private plataformaService: PlataformaService,
    private videojuegoService: VideojuegoService,
    private route: ActivatedRoute,
    private nav: NavController
  ) { }

  ngOnInit() {
    this.plataformaService.obtenerPlataformas().subscribe(
      plataformas => this.plataformas = plataformas,
      (error: string) => console.error(error)
    );

    if (this.route.snapshot.params.id !== undefined) {
      const id = this.route.snapshot.params.id;

      this.videojuegoService.obtenerVideojuego(parseInt(id)).subscribe(
        resp => {
          console.warn(resp);
          this.nuevoVideojuego = {
            id: resp.id,
            nombre: resp.nombre,
            descripcion: resp.descripcion,
            precio: resp.precio,
            imagen: resp.imagen,
            plataforma: resp.plataforma,
            stock: resp.stock
          };

          this.editando = true;
        }
      )
    }
  }

  enviarFormulario() {
    if (this.editando) {
      this.editarVideojuego();
    } else {
      this.subirVideojuego();
    }
  }

  subirVideojuego() {
    this.videojuegoService.subirVideojuego(this.nuevoVideojuego).subscribe(
      async () => {
        await console.log('aloha 2');
      }
    )
  }

  editarVideojuego() {
    this.videojuegoService.editarVideojuego(this.nuevoVideojuego).subscribe(
      async () => {
        console.log('editado');
        await this.nav.navigateRoot(['/videojuegos']);
      }
    )
  }

  async obtenerFotoCamara() {
    const foto = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      height: 640,
      width: 640,
      resultType: CameraResultType.DataUrl
    });

    this.nuevoVideojuego.imagen = foto.dataUrl;
  }

  async obtenerFotoGaleria() {
    const foto = await Camera.getPhoto({
      source: CameraSource.Photos,
      height: 640,
      width: 640,
      resultType: CameraResultType.DataUrl
    });

    this.nuevoVideojuego.imagen = foto.dataUrl;
  }
}
