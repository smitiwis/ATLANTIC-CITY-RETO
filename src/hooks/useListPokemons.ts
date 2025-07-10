/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { usePokemonsStore } from "../store/authStore";
import apiClient from "@/services/apiClient";

export const useListPokemon = () => {
  const [loading, setLoading] = useState(false);
  const { pokemons, setPokemons } = usePokemonsStore();

  const ListPokemon = async () => {
    setLoading(true);
    const response = await apiClient.get("/pokemon");
    const pokemons = response.data.results.map((result: any) => {
      const id = result.url.split("/").slice(-2, -1)[0];
      return {
        name: result.name,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
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
