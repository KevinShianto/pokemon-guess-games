import React from "react";
import { getPokemonGenerationName } from "../../../utils/pokemon";

export type GenerationHintProps = {
  id: number;
};

const GenerationHint = ({ id }: GenerationHintProps) => {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center gap-1 bg-base-200 p-4 rounded-lg">
      <div className="text-xl font-medium">This pokemon is from</div>
      <div className="text-5xl font-bold">
        <span className="font-bold">
          {getPokemonGenerationName(id).toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default GenerationHint;
