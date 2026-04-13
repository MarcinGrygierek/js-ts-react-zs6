export type SingleListPokemonElement = {
  name: string;
};

export type SinglePokemon = {
  name: string;
  order: number;
  abilities: {
    ability: {
      name: string;
    };
  }[];
};

export type PokemonListResult = {
  count: number;
  previous: string | null;
  next: string | null;
  results: SingleListPokemonElement[];
};
