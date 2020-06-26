import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardsSuperheroComponent } from './components/cards-superhero/cards-superhero.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BusquedaHeroeComponent } from './components/busqueda-heroe/busqueda-heroe.component';
import { APP_ROUTES} from "./app.routes";
import { DescripcionheroeComponent } from './components/descripcionheroe/descripcionheroe.component';
import { AboutComponent } from './components/about/about.component';
import {HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardsSuperheroComponent,
    NavbarComponent,
    BusquedaHeroeComponent,
    DescripcionheroeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
