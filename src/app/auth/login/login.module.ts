import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { RouterModule, Routes } from '@angular/router';
import { GoogleLoginModule } from '../google-login/google-login.module';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    RouterModule.forChild(routes),
    GoogleLoginModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
