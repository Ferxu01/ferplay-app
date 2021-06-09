import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/shared/interfaces/auth/LoginUsuario';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('loginForm') loginForm: NgForm;
  usuario: LoginUsuario;
  error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.resetearForm();
  }

  resetearForm() {
    this.usuario = {
      username: '',
      password: ''
    }
  }

  ionViewWillEnter() {
    this.resetearForm();
    this.error = null;
  }

  login(): void {
    this.authService.login({
      username: this.usuario.username,
      password: this.usuario.password
    }).subscribe(
      () => {
        this.resetearForm();
        this.router.navigate(['/videojuegos']);
      },
      error => {
        this.error = error.error.message;
      }
    );
  }

}
