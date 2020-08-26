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
  public pokemones$: Observable<Pokemone[]>;

  constructor(public pokemoneService: PokemoneService) {
    this.getPokemones();
  }

  public getPokemones() : void {
      this.pokemones$ = this.pokemoneService.getPokemones();
  }

  public onSubmit(value: string) : void {
    this.pokemones$ = this.pokemoneService.getFilterPokemones(value);
  }

  public weaknessFilter(event:any) : void {
    alert(event.target.value);
    this.pokemones$ = this.pokemoneService.getWeaknessFilter(event.target.value);
  }

}
