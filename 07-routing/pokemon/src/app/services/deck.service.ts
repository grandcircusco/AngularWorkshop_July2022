import { Injectable } from '@angular/core';
import { PokemonDetails } from '../interfaces/pokemon-api-model';

@Injectable({
  providedIn: 'root',
})
export class DeckService {
  private deck: PokemonDetails[] = [];

  constructor() {}

  getDeck(): PokemonDetails[] {
    return this.deck;
  }
  addToDeck(pokemon: PokemonDetails): void {
    this.deck.push(pokemon);
  }
  removeFromDeck(id: number): void {
    const index = this.deck.findIndex((poke) => poke.id === id);
    if (index !== -1) {
      this.deck.splice(index, 1);
    }
  }
  isInDeck(id: number): boolean {
    return this.deck.some((poke) => poke.id === id);
  }
}
