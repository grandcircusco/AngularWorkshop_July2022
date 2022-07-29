import { Component, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/interfaces/pokemon-model';
import { DeckService } from 'src/app/services/deck.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  deck: PokemonDetails[] = [];
  loading = true;

  constructor(private deckService: DeckService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.loadDeck();
  }

  loadDeck() {
    this.loading = true;
    this.deckService.getDeck().subscribe(newDeck => {
      this.deck = newDeck;
      this.loading = false;
    });
  }

  removeFromDeck(pokemon: PokemonDetails) {
    this.deck = [];
    this.loading = true;
    this.deckService.removeFromDeck(pokemon._id).subscribe(() => {
      this.loadDeck();
      if (this.profileService.getPet() === pokemon.sprites.defaultFront) {
        this.profileService.setPet(null);
      }
    });
  }

  setPet(pokemon: PokemonDetails) {
    this.profileService.setPet(pokemon.sprites.defaultFront);
  }

}
