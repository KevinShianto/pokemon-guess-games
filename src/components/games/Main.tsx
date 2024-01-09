import { Pokemon } from "pokenode-ts";
import React, { useEffect, useState } from "react";
import ElementHint from "./hints/Element";
import MoveHint from "./hints/Move";
import AbilityHint from "./hints/Ability";
import GenerationHint from "./hints/Generation";

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
    console.log("data", data);
  }, [data]);

  useEffect(() => {
    const nextHint = hints?.length + 1;

    if (
      timeLeft <= timerPerHints * (numberOfHints - nextHint + 1) &&
      hints.length < numberOfHints
    ) {
      // TODO: open the hint one by one
    }
  }, [timeLeft]);

  return (
    <div className="">
      <div className="text-3xl mb-4">Guest the Pokémon</div>
      <div className="left-side-information grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 h-32 gap-y-6 gap-x-4">
        {/* 1st hint */}
        {/* 5th hint: silhoutte */}
        {/* <div>time per hints: {timerPerHints}</div>
        <div>time left: {timeLeft}</div>
        <div>time elapsed: {timeElapsed}</div> */}
        <ElementHint elements={types} />
        <MoveHint moves={moves} />
        <AbilityHint abilities={abilities} />
        <GenerationHint id={data.id} />
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
