import { Routes, RouterModule }  from "@angular/router";
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardsSuperheroComponent } from './components/cards-superhero/cards-superhero.component';
import { BusquedaHeroeComponent } from './components/busqueda-heroe/busqueda-heroe.component';
import { DescripcionheroeComponent } from './components/descripcionheroe/descripcionheroe.component';
import { AboutComponent } from './components/about/about.component';

const Rutas: Routes = [
    {path:"cards", component:CardsSuperheroComponent},
    {path:"Busqueda", component:BusquedaHeroeComponent},
    {path:"DescripcionHeroe/:id" , component:DescripcionheroeComponent},
    {path: "Aboutus", component:AboutComponent},
    {path: "**", pathMatch: "full", redirectTo: "cards"},
];

export const APP_ROUTES = RouterModule.forRoot(Rutas);