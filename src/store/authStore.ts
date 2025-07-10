import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  usuario: string;
  email?: string;
}
interface Pokemon {
  name: string;
  url: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  login: (userData: User) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
}

interface PokemonState {
  pokemons: Pokemon[];

  setPokemons: (pokemons: Pokemon[]) => void;
}

// ========== Auth Store ==========
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      isLoading: false,

      login: (userData) =>
        set({
          user: userData,
          isAuthenticated: true,
          isLoading: false,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        }),

      setLoading: (loading) => set({ isLoading: loading }),
    }),
    {
      name: "auth-storage",
    }
  )
);

// ========== Pokemon Store ==========

export const usePokemonsStore = create<PokemonState>()(
  persist((set) => ({
    pokemons: [],
    setPokemons: (pokemons) => set({ pokemons }),
  }), {
    name: "pokemons-storage",
  })
);
