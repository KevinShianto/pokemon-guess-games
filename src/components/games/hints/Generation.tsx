import React from "react";
import { getPokemonGenerationName } from "../../../utils/pokemon";

export type GenerationHintProps = {
  id: number;
  isOpen?: boolean;
  waitingText: string | number;
};

const GenerationHint = ({
  id,
  isOpen = false,
  waitingText,
}: GenerationHintProps) => {
  return (
    <div
      className={`flex flex-col justify-center w-full h-full items-center gap-1 bg-base-200 p-4 rounded-lg text-center min-h-28 ${
        !isOpen && "skeleton"
      }`}
    >
      {isOpen ? (
        <>
          <div className="text-xl font-medium">This pokemon is from</div>
          <div className="text-3xl font-bold">
            <span className="font-bold">
              {getPokemonGenerationName(id).toUpperCase()}
            </span>
          </div>
        </>
      ) : (
        <div className="text-xl font-medium">{waitingText}</div>
      )}
    </div>
  );
};

export default GenerationHint;
