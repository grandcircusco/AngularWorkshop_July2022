import { PokemonResult } from "./pokemon-api-model";

export interface PokemonListItem {
  id: number;
  name: string;
}

export function pokemonResultToListItem(result: PokemonResult): PokemonListItem {
  const id = parseInt((result.url.match(/\d+\/$/) ?? [''])[0]);
  return { name: result.name, id: id };
}
