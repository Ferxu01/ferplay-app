import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { AuthService } from '../../services/auth.service';

const { GoogleAuth } = Plugins;

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss'],
})
export class GoogleLoginComponent implements OnInit {
  usuario = null;

  constructor(private authService: AuthService) { }

  ngOnInit() {}

  async login() {
    try {
      this.usuario = await Plugins.GoogleAuth.signIn();

      this.authService.loginGoogle(this.usuario.authentication.idToken).subscribe(
        () => {
          console.log('Logueado con Google');
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

}
