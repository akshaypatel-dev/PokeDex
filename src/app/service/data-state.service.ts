import {Injectable} from "@angular/core";
import {DataService, GetOnePokemonReturn} from "./data.service";
import {forkJoin, Observable, ReplaySubject} from "rxjs";
import {switchMap} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class DataStateService {
  // ReplaySubject stores the current values;
  private pokemons$: ReplaySubject<GetOnePokemonReturn[]> = new ReplaySubject<GetOnePokemonReturn[]>(1);
  // I want this here to be a read only version of pokemons$
  pokemonObservable$: Observable<GetOnePokemonReturn[]> = this.pokemons$.asObservable();

  constructor(
    private dataService: DataService
  ) {
    this.getAllPokemons();
  }

  getAllPokemons(): void {
    this.dataService.GetPokemon().pipe(
      switchMap((response) => {
        const callsToMake: Observable<GetOnePokemonReturn>[] = [];
        for (const result of response.results) {
          callsToMake.push(this.dataService.GetPokemonName(result.name));
        }
        return forkJoin(callsToMake)
      })
    )
      .subscribe((response) => {
        this.pokemons$.next(response);
      })
  }
}
