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
  setPokemons: (pokemons: Pokemon[]) => void;
}
