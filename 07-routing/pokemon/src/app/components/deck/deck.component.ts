import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/interfaces/pokemon-api-model';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  deck: PokemonDetails[] = [];

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.deck = this.deckService.getDeck();
  }

  removeFromDeck(pokemon: PokemonDetails) {
    this.deckService.removeFromDeck(pokemon.order);
  }

}
