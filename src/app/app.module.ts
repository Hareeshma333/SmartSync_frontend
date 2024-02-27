import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouteModule } from './app.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavComponent,
    HomeComponent,
    AboutComponent,
    AppRouteModule
  ]
})
export class AppModule { }
