import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonDetails } from '../interfaces/pokemon-model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private baseUrl = "https://pokemon-c33f.restdb.io/rest/deck";
  private apiKey = environment.apiKey;
  private deck: PokemonDetails[] = [
    { "id": 2, "name": "ivysaur", "species": "ivysaur", "types": [ "grass", "poison" ], "sprites": { "defaultFront": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png", "defaultBack": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png", "shinyFront": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png", "shinyBack": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/2.png", "home": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png", "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg", "officialArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png" } },
    { "id": 197, "name": "umbreon", "species": "umbreon", "types": [ "dark" ], "sprites": { "defaultFront": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png", "defaultBack": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/197.png", "shinyFront": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/197.png", "shinyBack": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/197.png", "home": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/197.png", "dreamworld": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/197.svg", "officialArtwork": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/197.png" } }
  ];

  constructor(private http: HttpClient) {}

  getDeck(): Observable<PokemonDetails[]> {
    return this.http.get<PokemonDetails[]>(`${this.baseUrl}`, {
      headers: { "x-apikey": this.apiKey }
    });
  }
  addToDeck(pokemon: PokemonDetails): Observable<PokemonDetails> {
    return this.http.post<PokemonDetails>(`${this.baseUrl}`, pokemon, {
      headers: { "x-apikey": this.apiKey }
    });
  }
  removeFromDeck(id?: string): Observable<void> {
    if (!id) {
      return of();
    }
    return this.http.delete<void>(`${this.baseUrl}/${id}`, {
      headers: { "x-apikey": this.apiKey }
    });
  }
}
