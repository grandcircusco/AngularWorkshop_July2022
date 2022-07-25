import { Component, OnInit } from '@angular/core';
import { PokemonResult } from 'src/app/interfaces/pokemon-api-model';
import { PokemonListItem, pokemonResultToListItem } from 'src/app/interfaces/pokemon-list-item';
import { PokemonApiService } from 'src/app/services/pokemon-api.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  results: PokemonListItem[] = [];

  constructor(private pokemonApiService: PokemonApiService) { }

  ngOnInit(): void {
    this.pokemonApiService.fetchAllPokemon().subscribe(data => {
      // Because the Pokemon API does not include the "id" directly as
      // a property, here we transform the results to include the "id", which
      // is extracted from the Pokemon's "url".
      this.results = data.results.map(pokemonResultToListItem);
    });
  }

}
