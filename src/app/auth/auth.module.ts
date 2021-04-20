import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { GoogleLoginModule } from './google-login/google-login.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
