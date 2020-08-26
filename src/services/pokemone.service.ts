import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemone } from 'src/models/pokemone';

@Injectable({
  providedIn: 'root'
})
export class PokemoneService {

  public baseURL: string = "http://localhost:3000/pokemone";
  pokemone$: Observable<Pokemone[]>;

  constructor(public http: HttpClient) {
    this.getPokemones();
  }

  public getPokemones(): Observable<Pokemone[]> {
    return this.http.get<Pokemone[]>(`${this.baseURL}`);
  }

  public getFilterPokemones(name: string): Observable<Pokemone[]> {
    return this.http.get<Pokemone[]>(`${this.baseURL}?name=${name}`);
  }

  public getWeaknessFilter(weakness: string): Observable<Pokemone[]> {
    return this.http.get<Pokemone[]>(`${this.baseURL}?weaknesses=${weakness}`);
  }
}
