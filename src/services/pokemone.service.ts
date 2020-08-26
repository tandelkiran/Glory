import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemone } from 'src/models/pokemone';

@Injectable({
  providedIn: 'root'
})
export class PokemoneService {

  // base URL for dataset
  public baseURL: string = "http://localhost:3000/pokemone";
  // observable of pokemone
  public pokemone$: Observable<Pokemone[]>;

  constructor(public http: HttpClient) {
    this.getPokemones();
  }

  /** get pokemone list */
  public getPokemones(): Observable<Pokemone[]> {
    return this.http.get<Pokemone[]>(`${this.baseURL}`);
  }

  /** get filtter pokemone by name */
  public getFilterPokemones(name: string): Observable<Pokemone[]> {
    return this.http.get<Pokemone[]>(`${this.baseURL}?name=${name}`);
  }

  /** filtter by weakness */
  public getWeaknessFilter(weakness: string): Observable<Pokemone[]> {
     return this.http.get<Pokemone[]>(`${this.baseURL}?weaknesses=${weakness}`);
  }
}
