import { PokemonAbility } from "pokenode-ts";
import React from "react";

export type AbilitiesProps = {
  abilities?: PokemonAbility[];
};

const Abilities = ({ abilities }: AbilitiesProps) => {
  if (!abilities) return <>Error</>;

  return (
    <div className="m-5 grid grid-cols-3 gap-5 overflow-auto">
      {abilities.map((ability) => (
        <div className="card bg-base-100 w-full">
          <div className="card-body p-4 text-center text-lg justify-center min-h-24 gap-0">
            {ability.is_hidden && (
              <div className="text-xs font-thin">Hidden Ability</div>
            )}
            <div className="font-semibold">
              {ability.ability.name.toUpperCase()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Abilities;
