import { useEffect, useState } from "react";
import { usePokemonsStore } from "../store/authStore";
import apiClient from "@/services/apiClient";

export const useListPokemon = () => {
  const [loading, setLoading] = useState(false);
  const { pokemons, setPokemons } = usePokemonsStore();

  const ListPokemon = async () => {
    setLoading(true);
    const response = await apiClient.get("/pokemon");
    const pokemons = response.data.results;
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
