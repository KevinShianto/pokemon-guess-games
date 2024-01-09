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

export const getPokemonGenerationName = (number: number) => {
  if (number > GENERATION_IX) return "Paldea";
  else if (number > GENERATION_VIII) return "Galar";
  else if (number > GENERATION_VII) return "Alola";
  else if (number > GENERATION_VI) return "Kalos";
  else if (number > GENERATION_V) return "Unova";
  else if (number > GENERATION_IV) return "Sinnoh";
  else if (number > GENERATION_III) return "Hoenn";
  else if (number > GENERATION_II) return "Johto";
  else return "Kanto";
};
