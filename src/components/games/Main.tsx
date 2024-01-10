import { Pokemon } from "pokenode-ts";
import React, { useEffect, useState } from "react";
import ElementHint from "./hints/Element";
import MoveHint from "./hints/Move";
import AbilityHint from "./hints/Ability";
import GenerationHint from "./hints/Generation";
import SpriteHint from "./hints/Sprite";
import AnswerBox from "./Answer";

export type MainGameComponentProps = {
  data: Pokemon;
  timeLeft: number;
  totalTimes: number;
  onFinish: (answer: string) => void;
};

const numberOfHints = 5;

const MainGameComponent = ({
  data,
  timeLeft,
  totalTimes,
  onFinish,
}: MainGameComponentProps) => {
  const { name, moves, abilities, types, sprites } = data;
  const [isFalse, setIsFalse] = useState<boolean>();
  const timerPerHints = totalTimes / numberOfHints; // we have 5 hints

  const timeElapsed = totalTimes - timeLeft;
  const [isWinning, setIsWinning] = useState<boolean>(false);

  const checkAnswer = (val: string) => {
    // no need to check if already win
    if (isWinning) return;

    if (val.toLowerCase() === name.toLowerCase()) {
      // correct answer
      setIsFalse(false);
      onFinish(name);
      setIsWinning(true);
    } else {
      setIsFalse(true);
    }
  };

  return (
    <div className="">
      <div className="text-3xl mb-4">Guest the Pokémon</div>
      <div className="left-side-information grid xl:grid-cols-4 grid-cols-2 h-32 gap-y-6 gap-x-4">
        <ElementHint elements={types} />
        <MoveHint
          moves={moves}
          isOpen={isWinning || timeElapsed >= timerPerHints * 1}
          waitingText={`${Math.round(
            (timerPerHints * 1 - timeElapsed) / 1000
          )}s`}
        />
        <AbilityHint
          abilities={abilities}
          isOpen={isWinning || timeElapsed >= timerPerHints * 2}
          waitingText={`${Math.round(
            (timerPerHints * 2 - timeElapsed) / 1000
          )}s`}
        />
        <GenerationHint
          id={data.id}
          isOpen={isWinning || timeElapsed >= timerPerHints * 3}
          waitingText={`${Math.round(
            (timerPerHints * 3 - timeElapsed) / 1000
          )}s`}
        />
        <SpriteHint
          sprite={sprites.other?.["official-artwork"].front_default}
          isOpen={isWinning || timeElapsed >= timerPerHints * 4}
          waitingText={`${Math.round(
            (timerPerHints * 4 - timeElapsed) / 1000
          )}s`}
          gameOver={isWinning || timeLeft === 0}
        />
        <AnswerBox onChange={checkAnswer} isFalse={isFalse} />
      </div>
    </div>
  );
};

export default MainGameComponent;
