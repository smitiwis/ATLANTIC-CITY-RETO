/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDetailPokemon } from "@/hooks/useDetailPokemon";
import React from "react";
import { useParams } from "react-router-dom";

type PokemonData = {
  base_experience: number;
  forms: { name: string }[];
  cries: { latest: string };
  abilities: {
    ability: { name: string };
    is_hidden: boolean;
  }[];
};

type Props = {
  data: PokemonData;
};

const Pokemon: React.FC<Props> = () => {
  const { id } = useParams();

  const { loading, detailPokemon } = useDetailPokemon(id);
  console.log("Pokemon Detail:", detailPokemon);

  if (loading) {
    return (
      <div className="absolute top-1/2 transform -translate-y-1/2 text-center text-gray-500">
        Cargando detalles del Pokémon...
      </div>
    );
  }
  return (
    <div style={{ padding: "1rem", fontFamily: "sans-serif" }}>
      <img
        src={detailPokemon.sprites.back_default}
        alt={detailPokemon.species.name}
      />
      <h1>Pokémon: {detailPokemon.forms[0].name}</h1>
      <p>
        <strong>Experiencia base:</strong> {detailPokemon.base_experience}
      </p>

      <h2>Habilidades</h2>
      <ul>
        {detailPokemon.abilities.map((item: any, index: any) => (
          <li key={index}>
            {item.ability.name} {item.is_hidden ? "(oculta)" : ""}
          </li>
        ))}
      </ul>

      <h2>Grito</h2>
      <audio controls src={detailPokemon.cries.latest}>
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
};

export default Pokemon;
