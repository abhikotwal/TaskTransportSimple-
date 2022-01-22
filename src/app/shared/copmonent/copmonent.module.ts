import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonLayoutComponent } from './Layout/common-layout/common-layout.component';
import { CommonPAgesLayoutComponent } from './Layout/common-pages-layout/common-pages-layout.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonPaginationComponent } from './common-pagination/common-pagination.component';
// import { AuthGuard } from '../Services/';
const appRoutes: Routes = [
  {
    path: "", component: CommonLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./../../../app/login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'UserLogin',
        loadChildren: () => import('./../../../app/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  
  {
    path: "", component: CommonPAgesLayoutComponent,
    children: [
      
      
      {
        path: 'Common',
      
        loadChildren: () => import('./../../pages/pages.module').then(m => m.PagesModule)
      }
    ]
  }
  
 
  
  ];

@NgModule({
  declarations: [
    CommonLayoutComponent,
    CommonPAgesLayoutComponent,
    CommonPaginationComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(appRoutes)
  ]
  ,exports:  [
    CommonLayoutComponent,
    CommonPAgesLayoutComponent,CommonPaginationComponent
  ]
})
export class CopmonentModule { }
