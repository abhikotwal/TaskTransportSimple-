import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonPAgesLayoutComponent } from './shared/copmonent/Layout/common-pages-layout/common-pages-layout.component';
import { CommonLayoutComponent } from './shared/copmonent/Layout/common-layout/common-layout.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }