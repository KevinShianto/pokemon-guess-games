import { PokemonAbility, PokemonMove, PokemonType } from "pokenode-ts";
import {
  GENERATION_II,
  GENERATION_III,
  GENERATION_IV,
  GENERATION_IX,
  GENERATION_V,
  GENERATION_VI,
  GENERATION_VII,
  GENERATION_VIII,
} from "./constants";
import { randomNumberByRange } from "./random";

export const getPokemonGeneration = (number: number) => {
  if (number > GENERATION_IX) return 9;
  else if (number > GENERATION_VIII) return 8;
  else if (number > GENERATION_VII) return 7;
  else if (number > GENERATION_VI) return 6;
  else if (number > GENERATION_V) return 5;
  else if (number > GENERATION_IV) return 4;
  else if (number > GENERATION_III) return 3;
  else if (number > GENERATION_II) return 2;
  else return 1;
};

export const getTypeQuestionText = (types: PokemonType[]) => {
  const multitype = types.length > 1;
  return (
    <>
      This pokemon has <span className="font-bold">{types[0].type.name}</span>{" "}
      {multitype ? (
        <span>
          and <span className="font-bold">{types[1].type.name}</span>{" "}
        </span>
      ) : (
        ""
      )}
      type{multitype && "s"}.
    </>
  );
};

export const getMovesQuestionText = (moves: PokemonMove[]) => {
  const randomMove = randomNumberByRange(moves.length) - 1;
  return (
    <>
      It can learn{" "}
      <span className="font-bold">{moves[randomMove].move.name}</span>.
    </>
  );
};

export const getAbilitiesQuestionText = (abilities: PokemonAbility[]) => {
  const randomAbility = randomNumberByRange(abilities.length) - 1;
  return (
    <>
      {abilities.length > 1
        ? "One of its abilities is "
        : "It only has one ability "}
      <span className="font-bold">{abilities[randomAbility].ability.name}</span>
      .
    </>
  );
};

export const getGenerationQuestionText = (id: number) => {
  return (
    <>
      This pokemon is from gen{" "}
      <span className="font-bold">{getPokemonGeneration(id)}</span>.
    </>
  );
};
