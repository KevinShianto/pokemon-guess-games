import { Pokemon } from "pokenode-ts";
import React, { useEffect, useState } from "react";
import {
  getAbilitiesQuestionText,
  getGenerationQuestionText,
  getMovesQuestionText,
  getTypeQuestionText,
} from "../../utils/pokemon";

export type MainGameComponentProps = {
  data: Pokemon;
  timeLeft: number;
  totalTimes: number;
};

const numberOfHints = 5;

const MainGameComponent = ({
  data,
  timeLeft,
  totalTimes,
}: MainGameComponentProps) => {
  const { name, moves, abilities, types, sprites } = data;

  const timerPerHints = totalTimes / numberOfHints; // we have 5 hints

  const [hints, setHints] = useState<React.ReactNode[]>([]);
  const timeElapsed = totalTimes - timeLeft;

  const progress = (num: number) => {
    return (
      <progress
        className="progress progress-warning w-56"
        value={num}
        max="100"
      ></progress>
    );
  };

  useEffect(() => {
    const nextHint = hints?.length + 1;

    if (
      timeLeft <= timerPerHints * (numberOfHints - nextHint) &&
      hints.length < numberOfHints
    )
      setHints((hints) => [...hints, getHints(nextHint)]);
  }, [timeLeft]);

  const getHints = (hint: number) => {
    if (hint === 1) return getTypeQuestionText(types);
    else if (hint === 2) return getMovesQuestionText(moves);
    else if (hint === 3) return getAbilitiesQuestionText(abilities);
    else if (hint === 4) return getGenerationQuestionText(data.id);
  };

  return (
    <div className="grid md:grid-cols-2 sm:grid-cols-1">
      <div className="left-side-information">
        <div className="text-3xl mb-4">Guest the Pokémon</div>
        <div className="text-lg">
          {hints &&
            hints.map((hint, index) => (
              <div>
                {index + 1}. {hint}
              </div>
            ))}
          {Array.from(
            Array(Math.max(numberOfHints - 1 - hints.length, 0)).keys()
          ).map((n, index) => (
            <div>
              {progress(
                index == 0
                  ? Math.round(
                      ((timeElapsed % timerPerHints) / timerPerHints) * 100
                    )
                  : 0
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="right-side-information">
        {/* 5th hint: silhoutte */}
        {/* <div>time per hints: {timerPerHints}</div>
        <div>time left: {timeLeft}</div>
        <div>time elapsed: {timeElapsed}</div> */}
        {sprites.other?.["official-artwork"].front_default &&
          hints.length >= 4 && (
            <img
              src={sprites.other?.["official-artwork"].front_default}
              style={{
                filter: "contrast(0%) brightness(50%)",
              }}
            />
          )}
      </div>
    </div>
  );
};

export default MainGameComponent;
