import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from '../interfaces/LoginUsuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  usuario: LoginUsuario;

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {
    this.usuario = {
      username: '',
      password: ''
    }
  }

  login(): void {
    this.authService.login({
      username: this.usuario.username,
      password: this.usuario.password
    }).subscribe(
      () => {
        this.router.navigate(['/videojuegos']);
      },
      error => {
        console.error(error);
      }
    );
  }

}
