import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})

export class SuperHeroService {

  private URLApi: string = `https://superheroapi.com/api/`;
  private key: string = `10219913818230089/`;

  constructor(private httpClient: HttpClient) { }

  public ObtenerInfoHeroe(id: string) {

    return this.httpClient.get(`${this.URLApi}${this.key}${id}`);
  }

  public busquedaHeroe(name: string) {
    return this.httpClient.get(`${this.URLApi}${this.key}search/${name}`)
  }
}
