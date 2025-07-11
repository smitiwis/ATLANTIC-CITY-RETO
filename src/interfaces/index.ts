/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PokemonListResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface Pokemon {
  name: string;
  url: string;
  id: string;
}

export interface PokemonState {
  pokemons: Pokemon[];
  detailPokemon: any;
  setPokemons: (pokemons: Pokemon[]) => void;
  setDetailPokemon: (detailPokemon: any) => void;
}
