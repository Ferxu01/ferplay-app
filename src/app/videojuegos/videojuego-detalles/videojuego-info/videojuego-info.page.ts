import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Videojuego } from '../../interfaces/Videojuego';
import { VideojuegoService } from '../../services/videojuego.service';
import { VideojuegoDetallesPage } from '../videojuego-detalles.page';

@Component({
  selector: 'app-videojuego-info',
  templateUrl: './videojuego-info.page.html',
  styleUrls: ['./videojuego-info.page.scss'],
})
export class VideojuegoInfoPage implements OnInit {
  videojuego: Videojuego;

  buttons: any[] = [];

  constructor(
    @Inject(VideojuegoDetallesPage) private parentComponent: VideojuegoDetallesPage,
    private videojuegoService: VideojuegoService,
    private router: Router,
    private actionSheetCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.videojuego = this.parentComponent.videojuego;

    this.buttons = [
      {
        text: 'Borrar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.videojuegoService.borrarVideojuego(this.videojuego.id).subscribe(
            () => {
              this.router.navigate(['/videojuegos']);
              console.log('elem borrado');
            }
          );
        }
      },
      {
        text: 'Añadir al carro',
        icon: 'cart',
        handler: () => {
          console.log('Añadiendo al carro');
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancelar clickado');
        }
      }
    ];
  }

  async showActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: this.buttons
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
