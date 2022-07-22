import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetails, PokemonResults } from '../interfaces/pokemon-api-model';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  constructor(private http: HttpClient) { }

  fetchAllPokemon(): Observable<PokemonResults> {
    return this.http.get<PokemonResults>("https://pokeapi.co/api/v2/pokemon/?limit=200");
  }

  fetchPokemonById(id: number): Observable<PokemonDetails> {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
    return this.http.get<PokemonDetails>(url);
  }
}
