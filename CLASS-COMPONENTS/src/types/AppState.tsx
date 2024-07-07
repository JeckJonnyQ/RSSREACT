import { PokemonList, PokemonDetails } from "./PokemonArray";

export interface AppState {
  query: string;
  pokemonList: PokemonList[];
  pokemonDetails: PokemonDetails[];
}
