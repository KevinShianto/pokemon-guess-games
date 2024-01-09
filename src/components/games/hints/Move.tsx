import { PokemonMove } from "pokenode-ts";
import React, { useEffect, useState } from "react";
import { randomNumberByRange } from "../../../utils/random";

export type MoveHintProps = {
  moves: PokemonMove[];
};

const MoveHint = ({ moves }: MoveHintProps) => {
  const [moveIndex, setMoveIndex] = useState<number>(-1);
  useEffect(() => {
    if (moveIndex < 0 && moves.length > 0)
      setMoveIndex(randomNumberByRange(moves.length - 1, 0));
  }, moves);

  return (
    <div className="flex flex-col justify-center w-full h-full items-center gap-1 bg-base-200 p-4 rounded-lg">
      <div className="text-xl font-medium">It can learn</div>
      <div className="text-5xl font-bold">
        {moves.length > moveIndex &&
          moveIndex > -1 &&
          moves[moveIndex].move.name.toUpperCase()}
      </div>
    </div>
  );
};

export default MoveHint;
