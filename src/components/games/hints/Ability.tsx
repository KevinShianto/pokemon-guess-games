import { PokemonAbility, PokemonMove } from "pokenode-ts";
import React, { useEffect, useState } from "react";
import { randomNumberByRange } from "../../../utils/random";

export type AbilityHintProps = {
  abilities: PokemonAbility[];
};

const AbilityHint = ({ abilities }: AbilityHintProps) => {
  const [abilityIndex, setAbilityIndex] = useState<number>(-1);
  useEffect(() => {
    if (abilityIndex < 0 && abilities.length > 0)
      setAbilityIndex(randomNumberByRange(abilities.length - 1, 0));
  }, abilities);

  return (
    <div className="flex flex-col justify-center w-full h-full items-center gap-1 bg-base-200 p-4 rounded-lg">
      <div className="text-xl font-medium">It has ability</div>
      <div className="text-5xl font-bold">
        {abilities.length > abilityIndex &&
          abilityIndex > -1 &&
          abilities[abilityIndex].ability.name.toUpperCase()}
      </div>
    </div>
  );
};

export default AbilityHint;
