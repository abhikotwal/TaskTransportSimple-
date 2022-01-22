import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonPAgesLayoutComponent } from './copmonent/Layout/common-pages-layout/common-pages-layout.component';
import { CommonLayoutComponent } from './copmonent/Layout/common-layout/common-layout.component';
import { RouterModule } from '@angular/router';
import { SessionsRoutes } from '../login/login-routing.module';
import {CopmonentModule} from './copmonent/copmonent.module'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   
    
  ],
  imports: [
    CommonModule,CopmonentModule,BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],  
  exports: [
    CopmonentModule
  ]
})



export class SharedModule { }
