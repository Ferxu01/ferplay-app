import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { CameraPlugin } from 'src/app/shared/interfaces/native-plugins/CameraPlugin';
import { Plataforma } from 'src/app/shared/interfaces/videojuegos/Plataforma';
import { VideojuegoNuevo } from 'src/app/shared/interfaces/videojuegos/VideojuegoNuevo';
import { PlataformaService } from 'src/app/shared/services/videojuegos/plataforma.service';
import { VideojuegoService } from 'src/app/shared/services/videojuegos/videojuego.service';
import { ToastAlertComponent } from 'src/app/shared/toasts/toast-alert/toast-alert.component';

@Component({
  selector: 'app-videojuego-form',
  templateUrl: './videojuego-form.page.html',
  styleUrls: ['./videojuego-form.page.scss'],
})
export class VideojuegoFormPage implements OnInit, CameraPlugin {
  nuevoVideojuego: VideojuegoNuevo = {
    nombre: '',
    descripcion: '',
    precio: 0,
    imagen: '',
    plataforma: 0
  };

  plataformas: Plataforma[];
  editando: boolean = false;

  constructor(
    private plataformaService: PlataformaService,
    private videojuegoService: VideojuegoService,
    private route: ActivatedRoute,
    private router: Router,
    private toastAlert: ToastAlertComponent
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
          this.nuevoVideojuego = {
            id: resp.id,
            nombre: resp.nombre,
            descripcion: resp.descripcion,
            precio: resp.precio,
            imagen: resp.imagen,
            plataforma: resp.plataforma.id,
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
      async resp => {
        this.toastAlert.crearAlertaMensaje('Videojuego subido correctamente', 'success', 'toast-confirmacion');

        await this.router.navigate(['/videojuegos']);
      }
    )
  }

  editarVideojuego() {
    this.videojuegoService.editarVideojuego(this.nuevoVideojuego).subscribe(
      async resp => {
        this.toastAlert.crearAlertaMensaje('Videojuego editado correctamente', 'success', 'toast-confirmacion');

        await this.router.navigate(['/videojuegos', resp.id]);
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
