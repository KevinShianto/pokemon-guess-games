import { PokemonSpecies } from "pokenode-ts";
import React from "react";

export type DescriptionProps = {
  species?: PokemonSpecies;
};

const Description = ({ species }: DescriptionProps) => {
  if (!species) return <>Loading...</>;
  return (
    <div className="m-4 text-xl">
      {
        species.flavor_text_entries.find((desc) => desc.language.name === "en")
          ?.flavor_text
      }
    </div>
  );
};

export default Description;
