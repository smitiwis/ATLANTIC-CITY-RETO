import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PokemonState } from "@/interfaces";

export const usePokemonsStore = create<PokemonState>()(
  persist(
    (set) => ({
      pokemons: [],
      setPokemons: (pokemons) => set({ pokemons }),
    }),
    {
      name: "pokemons-storage",
    }
  )
);
