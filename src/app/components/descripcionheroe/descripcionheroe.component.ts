import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHeroService } from "./../../Services/super-hero.service";
import { ActivatedRoute } from '@angular/router';
import { map, } from "rxjs/operators";
import { SuperHeroes } from "./../../Interfaces/Interfaces";

@Component({
  selector: 'app-descripcionheroe',
  templateUrl: './descripcionheroe.component.html',
  styleUrls: ["./descripcionheroe.component.css"]
})

export class DescripcionheroeComponent implements OnInit {

  public loading: boolean = true;
  public HeroeRecibido: Array<SuperHeroes> = [];
  public currentHeroe: any = {};
  public color:any;

  constructor(private AWServices: SuperHeroService, private ActivatedRouter: ActivatedRoute,
  ) {

    this.loading = true;
    const heroes: string = this.ActivatedRouter.snapshot.paramMap.get('id');
    this.currentHeroe = this.AWServices.ObtenerInfoHeroe(heroes)
      .pipe(
        map((heroe: SuperHeroes) => {
          console.log(heroe);
          const HeroeFiltrado = {
            id: heroe.id,
            name: heroe.name,
            image: heroe.image.url,
            intelligence: heroe.powerstats.intelligence,
            strength: heroe.powerstats.strength,
            speed: heroe.powerstats.speed,
            durability: heroe.powerstats.durability,
            power: heroe.powerstats.power,
            combat: heroe.powerstats.combat,
            work: heroe.work.occupation,
          };
          return HeroeFiltrado;
        }))
      .subscribe((HeroeFiltrado) => {
        this.currentHeroe = HeroeFiltrado;
        this.loading = false;
      });
  }

  ngOnInit(): void {
  }

  public IraDescripcionHeroe(id: string): Observable<any> {
    return this.AWServices.ObtenerInfoHeroe(id);
  }
}
