import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Usuario } from './interfaces/Usuario';
import { Plugins } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  user: Usuario = {
    email: 'hola',
    nickname: 'nickname',
    avatar: ''
  };

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    //this.obtenerInfoUsuario();
  }

  /*obtenerInfoUsuario() {
    this.authService.obtenerUsuarioLogueado().subscribe(
      resp => {
        console.log(resp);
        this.user = resp;
      }
    );
  }*/
}
