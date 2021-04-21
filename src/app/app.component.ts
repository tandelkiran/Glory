import { Component } from '@angular/core';
import { PokemoneService } from 'src/services/pokemone.service';
import { Observable } from 'rxjs';
import { Pokemone } from 'src/models/pokemone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GloryAutoTechTest';

  // observable of pokemone
  public pokemones$: Observable<Pokemone[]>;
  public txt:string;
  constructor(public pokemoneService: PokemoneService) {
    this.txt='';
    this.getPokemones();
  }

  /**
   * get list of all pokemones
   */
  public getPokemones() : void {
      this.pokemones$ = this.pokemoneService.getPokemones();
  }

  /**
   * to search by pokemone name
   * @param value string for input pokemone name
   */
  public searchPokemone(val: string) : void {
    this.txt = val.charAt(0).toUpperCase() + val.slice(1);
    this.pokemones$ = this.pokemoneService.getFilterPokemones(this.txt);
  }

  public weaknessFilter(event:any) : void {
    this.pokemones$ = this.pokemoneService.getWeaknessFilter(event.target.value);
  }

}
