// Response for a listing of pokemon
export interface PokemonResults {
  count:    number;
  next:     string;
  previous: null;
  results:  PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url:  string;
}


// Details for a particular pokemon
export interface PokemonDetails {
  name: string;
  order: number;
  sprites: Sprites;
}

export interface Sprites {
  back_default:       string;
  back_shiny:         string;
  front_default:      string;
  front_shiny:        string;
  other:             Other;
}

export interface Other {
  dream_world:        DreamWorld;
  home:               Home;
  "official-artwork": OfficialArtwork;
}

export interface DreamWorld {
  front_default: string;
}
export interface Home {
  front_default:      string;
  front_shiny:        string;
}
export interface OfficialArtwork {
  front_default: string;
}