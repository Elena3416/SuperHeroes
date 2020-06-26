import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { pluck, debounceTime, switchMap, map, concatMap, tap } from 'rxjs/operators';
import { SuperHeroService } from "./../../Services/super-hero.service";
import { Router } from '@angular/router';
import { SuperHeroes } from '../../Interfaces/Interfaces'

@Component({
  selector: 'app-busqueda-heroe',
  templateUrl: './busqueda-heroe.component.html',
  styleUrls: ['./busqueda-heroe.component.css'],
})

export class BusquedaHeroeComponent implements OnInit, AfterViewInit {

  public HeroeRecibido: SuperHeroes;
  public loading: boolean = true;
  public Heroe: any;
  public MostrarTarjeta: boolean = false;
  public Imageback = `./../../../assets/IMG/back.png`;

  @ViewChild('inputSearch') inputHeroe: ElementRef;

  constructor(private AWService: SuperHeroService, private Router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.SearchHeroes();
  }

  public SearchHeroes() {
    fromEvent(this.inputHeroe.nativeElement, "keyup").pipe(
      tap(() => (this.MostrarTarjeta = false)),
      pluck('target', 'value'),
      debounceTime(1500),
      switchMap((name: string) => this.AWService.busquedaHeroe(name).pipe(
        map((heroe: any) => {
          let hero = {
            response: heroe.response,
            id: heroe.results[0].id,
            name: heroe.results[0].name,
            powerstats: heroe.results[0].powerstats,
            biography: heroe.results[0].biography,
            appearance: heroe.results[0].appearance,
            work: heroe.results[0].work,
            connections: heroe.results[0].connections,
            image: heroe.results[0].image.url,
          }
          return hero
        })
      ))
    ).subscribe((hero: any) => {
      this.HeroeRecibido = hero,
      this.MostrarTarjeta = true,
      this.loading == false;
    },
      (error) => this.SearchHeroes()
    );
  }

  public RegresaraCards() {
    this.Router.navigate(["cards"]);
  }

  public IraDescripcionHeroe(id: string) {
    this.Router.navigate(["DescripcionHeroe", id]);
  }
}

