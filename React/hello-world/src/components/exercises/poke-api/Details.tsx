import { Link, useParams } from "react-router-dom";
import { useApi } from "./api/useApi";
import { useEffect, useState } from "react";
import type { SinglePokemon } from "./types";

export const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { apiGetOne } = useApi("https://pokeapi.co/api/v2");
  const [pokemon, setPokemon] = useState<SinglePokemon | null>(null);

  const getSinglePokemon = async () => {
    if (!id) return;
    const data = await apiGetOne<SinglePokemon>("pokemon", id);
    if (!data) return;
    setPokemon(data);
  };

  useEffect(() => {
    getSinglePokemon();
  }, []);

  if (!pokemon) return null;

  return (
    <>
      <Link to="/">Go back</Link>
      <h1>Details - {pokemon.name}</h1>
      <ul>
        {pokemon.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
    </>
  );
};
