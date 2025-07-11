/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PokemonState } from "@/interfaces";

export const usePokemonsStore = create<PokemonState>()(
  persist(
    (set) => ({
      pokemons: [],
      detailPokemon: null,
      setPokemons: (pokemons) => set({ pokemons }),
      setDetailPokemon: (detailPokemon: any) => set({ detailPokemon }),
    }),
    {
      name: "pokemons-storage",
    }
  )
);
