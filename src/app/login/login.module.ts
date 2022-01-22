import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  SessionsRoutes } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,
    // LoginRoutingModule,
    RouterModule.forChild(SessionsRoutes)
  ]
})
export class LoginModule { }
