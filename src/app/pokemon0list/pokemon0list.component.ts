import { Component, OnInit } from '@angular/core';
import {DataService} from "../service/data.service";

@Component({
  selector: 'app-pokemon0list',
  templateUrl: './pokemon0list.component.html',
  styleUrls: ['./pokemon0list.component.css']
})
export class Pokemon0listComponent implements OnInit {
pokemons: any[] = [];
page = 1;
totalpokemons: number = 1;
  constructor( private dataservice:DataService) {
  }

  ngOnInit(): void {
    this.dataservice.GetPokemon()
      .subscribe((response:any) => {
        this.totalpokemons = response.count;
        response.results.forEach ((result:any) =>
        { this.dataservice.GetPokemonName(result.name)
          .subscribe((response:any) => this.pokemons.push(response))})
        console.log(this.pokemons)
      })
  }

}
