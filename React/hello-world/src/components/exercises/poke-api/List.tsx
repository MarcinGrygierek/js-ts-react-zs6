import { useEffect, useState } from "react";
import { useApi } from "./api/useApi";
import type { PokemonListResult, SingleListPokemonElement } from "./types";
import { Link } from "react-router-dom";

export const List = () => {
  const { apiGet } = useApi("https://pokeapi.co/api/v2");
  const [pokemons, setPokemons] = useState<SingleListPokemonElement[]>([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [loading, setLoading] = useState(false);

  const getPokemonList = async (pageToRead: number) => {
    setLoading(true);
    const offset = (pageToRead - 1) * 20;
    const data = await apiGet<PokemonListResult>(
      `pokemon?offset=${offset}&limit=20`,
    );

    setLoading(false);
    if (!data) return;

    setPokemons(data.results);
    setHasNext(!!data.next);
  };

  useEffect(() => {
    getPokemonList(page);
  }, [page]);

  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <>
      <ul>
        {pokemons.map((p) => (
          <li key={p.name}>
            {p.name}
            <Link to={`/${p.name}`}>Details</Link>
          </li>
        ))}
      </ul>
      {page > 1 ? (
        <button disabled={loading} onClick={handlePrev}>
          {"<"}
        </button>
      ) : null}
      {hasNext ? (
        <button disabled={loading} onClick={handleNext}>
          {">"}
        </button>
      ) : null}
    </>
  );
};
