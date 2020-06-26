import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { SuperHeroService } from "./../../Services/super-hero.service";
import { concatMap, map } from "rxjs/operators";
import { from } from "rxjs";
import { SuperHeroes, Heroes } from "./../../Interfaces/Interfaces";

@Component({
  selector: 'app-cards-superhero',
  templateUrl: './cards-superhero.component.html',
  styleUrls: ['./cards-superhero.component.css']
})

export class CardsSuperheroComponent implements OnInit {

  public ArrowRight = "./../../../assets/IMG/right.png";
  public ArrowLeft = "./../../../assets/IMG/back.png";
  public ArrayHeroes: Array<any> = [];
  public IndicePaginacion = 1;
  public loading = false;
  public ids: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  @Input() HeroeFiltrado: any;
  @Input() mostrarBoton: boolean = false;

  constructor(private router: Router, private AWService: SuperHeroService) {
    this.getheros();
  }

  ngOnInit(): void {
  }

  public getheros() {
    //se limpia el ArrayHeroes en cada llamada al método 
    this.ArrayHeroes = [];
    this.loading = true;
    from(this.ids).pipe(
      concatMap((id: number) => this.AWService.ObtenerInfoHeroe(id.toString())
        .pipe(
          map((hero: SuperHeroes) => {
            let InfoHero: Heroes = {
              id: hero.id,
              name: hero.name,
              image: hero.image.url,
            }
            return InfoHero;
          })
        ))
    ).subscribe((hero: any) => {
      this.ArrayHeroes.push(hero);
      if (this.ArrayHeroes.length === 12) {
        this.loading = false;
      }
    })
  }

  public IraDescripcionHeroe(id: string) {
    this.router.navigate(["DescripcionHeroe", id]);
  }

  public right() {
    this.IndicePaginacion++;
    for (let i = 0; i < this.ids.length; i++) {
      this.ids[i] += 12;
    }
    this.getheros();
  }

  public left() {
    if (this.IndicePaginacion == 1) return;
    this.IndicePaginacion--;

    for (let i = 0; i < this.ids.length; i++) {
      this.ids[i] -= 12;
    }
    this.getheros();
  }
}
