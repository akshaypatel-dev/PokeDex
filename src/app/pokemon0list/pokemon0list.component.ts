import {Component} from '@angular/core';
import {GetOnePokemonReturn} from "../service/data.service";
import {DataStateService} from "../service/data-state.service";

@Component({
  selector: 'app-pokemon0list',
  templateUrl: './pokemon0list.component.html',
  styleUrls: ['./pokemon0list.component.css']
})
export class Pokemon0listComponent {
  pokemonList$ = this.dataState.pokemonObservable$;
  pokemonTyped = (input: any) => input as GetOnePokemonReturn
  constructor(
    private dataState: DataStateService
  ) {
    this.pokemonList$.subscribe(
      data => {
        console.log(`poke list updated`, data);
      }
    )
  }

  refresh(): void {
    this.dataState.getAllPokemons();
  }
}
