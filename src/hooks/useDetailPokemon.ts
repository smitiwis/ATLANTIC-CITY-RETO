/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import apiClient from "@/services/apiClient";
import { usePokemonsStore } from "@/store/pokemonStore";
import { useNavigate } from "react-router-dom";

export const useDetailPokemon = (id?: string) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { detailPokemon, setDetailPokemon } = usePokemonsStore();

  const ListPokemon = async () => {
    if (!id) navigate("/home");
    setLoading(true);
    const response = await apiClient.get<any>(`/pokemon/${id}`);
    if (response.status === 200) {
      setDetailPokemon(response.data);
    } else {
      alert("Error al obtener los detalles del Pokémon");
    }
    setLoading(false);
  };

  useEffect(() => {
    ListPokemon();
  }, []);

  return {
    loading,
    detailPokemon,
  };
};
