import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: "", redirectTo: "page", pathMatch: "full" },
  {path: "page",loadChildren: () => import('./shared/copmonent/copmonent.module').then(m => m.CopmonentModule)},
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    RouterModule.forRoot(appRoutes, { useHash: false,  scrollPositionRestoration: 'enabled', scrollOffset: [0, 0],
    anchorScrolling: 'enabled',})
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
