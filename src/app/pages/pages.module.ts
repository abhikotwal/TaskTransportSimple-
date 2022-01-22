import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from './../../app/shared/Services/data.service';
import { PagesRoutingModule } from './pages-routing.module';
import { AddDataComponent } from './add-data/add-data.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import {CopmonentModule} from './../../app/shared/copmonent/copmonent.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
const appRoutes: Routes = [
  { path: "AdData", component: AddDataComponent, },
  { path: "List", component: ListComponent, }
]
@NgModule({
  declarations: [
    AddDataComponent,
    ListComponent
  ],
  imports: [//SharedModule,
    HttpClientModule,CommonModule,CopmonentModule,FormsModule, ReactiveFormsModule,
    PagesRoutingModule, RouterModule.forChild(appRoutes)
  ],
  providers: [DataService],
})
export class PagesModule { }
