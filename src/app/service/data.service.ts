import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) {
  }

  // get pokemons function
  GetPokemon(): Observable<GetAllPokemonReturn> {
    return this.http.get<GetAllPokemonReturn>(`https://pokeapi.co/api/v2/pokemon?limit=151`)
  }

  GetPokemonName(name: string): Observable<GetOnePokemonReturn> {
    return this.http.get<GetOnePokemonReturn>(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}

export interface GetAllPokemonReturn {
  count: number;
  next: string;
  previous: string;
  results: PokemonSimpleObject[];
}

export interface PokemonSimpleObject {
  pokemon?: GetOnePokemonReturn;
  name: string;
  url: string;
}

export interface GetOnePokemonReturn {
  abilities: any[];
  forms: any[];
  game_indices: any[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: any[];
  name: string;
  order: number;
  past_types: any[];
  species: any[];
  sprites: {
    front_default: string;
  };
  stats: any[];
  types: any[];
  weight: number;
}
