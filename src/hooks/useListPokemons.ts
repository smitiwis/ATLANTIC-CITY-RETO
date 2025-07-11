/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import apiClient from "@/services/apiClient";
import { usePokemonsStore } from "@/store/pokemonStore";
import type { PokemonListResponse } from "@/interfaces";

const pathBase = import.meta.env.VITE_APP_IMAGEN_POKEMON;
export const useListPokemon = () => {
  const [loading, setLoading] = useState(false);
  const { pokemons, setPokemons } = usePokemonsStore();

  const ListPokemon = async () => {
    setLoading(true);
    const response = await apiClient.get<PokemonListResponse>("/pokemon");
    const pokemons = response.data.results.map((result) => {
      const id = result.url.split("/").slice(-2, -1)[0];
      return {
        name: result.name,
        url: `${pathBase}/${id}.svg`,
        id,
      };
    });
    setPokemons(pokemons);
    setLoading(false);
  };

  useEffect(() => {
    ListPokemon();
  }, []);

  return {
    loading,
    pokemons,
  };
};
