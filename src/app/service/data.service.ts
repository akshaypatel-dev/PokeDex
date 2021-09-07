import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http:HttpClient
  ) { }

 // get pokemons function
  GetPokemon(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=151
`)
  }
  GetPokemonName(name:string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  }
}
