import { PokemonMove } from "pokenode-ts";
import React from "react";

export type MovesProps = {
  moves?: PokemonMove[];
};

const Moves = ({ moves }: MovesProps) => {
  if (!moves) return <>Loading...</>;

  return (
    <div className="m-5 grid grid-cols-3 gap-5 overflow-auto">
      {moves.map((move) => (
        <div className="card bg-base-100 w-full">
          <div className="card-body p-4 text-center font-semibold text-lg justify-center min-h-24">
            {move.move.name.toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Moves;
