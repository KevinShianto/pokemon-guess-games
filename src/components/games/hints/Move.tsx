import { PokemonMove } from "pokenode-ts";
import React, { useEffect, useState } from "react";
import { randomNumberByRange } from "../../../utils/random";

export type MoveHintProps = {
  moves: PokemonMove[];
  isOpen?: boolean;
  waitingText: string | number;
};

const MoveHint = ({ moves, isOpen = false, waitingText }: MoveHintProps) => {
  const [moveIndex, setMoveIndex] = useState<number>(-1);

  useEffect(() => {
    if (moveIndex < 0 && moves.length > 0)
      setMoveIndex(randomNumberByRange(moves.length - 1, 0));
  }, moves);

  return (
    <div
      className={`flex flex-col justify-center w-full h-full items-center gap-1 bg-base-200 p-4 rounded-lg text-center min-h-28 ${
        !isOpen && "skeleton"
      }`}
    >
      {isOpen ? (
        <>
          <div className="text-xl font-medium">It can learn</div>
          <div className="text-3xl font-bold">
            {moves.length > moveIndex &&
              moveIndex > -1 &&
              moves[moveIndex].move.name.toUpperCase()}
          </div>
        </>
      ) : (
        <div className="text-xl font-medium">{waitingText}</div>
      )}
    </div>
  );
};

export default MoveHint;
