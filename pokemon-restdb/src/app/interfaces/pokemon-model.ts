export interface PokemonListItem {
  id: number;
  name: string;
}

export interface PokemonDetails extends PokemonListItem {
  _id?: string; // For items stored in the deck
  species: string;
  types: string[];
  sprites: PokemonSprites;
}

export interface PokemonSprites {
  defaultFront: string;
  defaultBack: string;
  shinyFront: string;
  shinyBack: string;
  home: string;
  dreamworld: string;
  officialArtwork: string;
}