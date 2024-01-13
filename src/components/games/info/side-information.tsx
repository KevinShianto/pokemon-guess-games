import React, { useState } from "react";
import Description from "./description";
import { PokemonAbility, PokemonMove, PokemonSpecies } from "pokenode-ts";
import Moves from "./moves";
import Abilities from "./abilities";

const DESCRIPTION_TAB = 1;
const MOVES_TAB = 2;
const ABILITIES_TAB = 3;

export type SideInformationProps = {
  species?: PokemonSpecies;
  moves?: PokemonMove[];
  abilities?: PokemonAbility[];
};

const SideInformation = ({
  species,
  moves,
  abilities,
}: SideInformationProps) => {
  const [tab, setTab] = useState<number>(DESCRIPTION_TAB);
  return (
    <div className="flex flex-col h-full">
      <div role="tablist" className="tabs tabs-bordered">
        <div
          role="tab"
          className={`tab ${
            tab === DESCRIPTION_TAB && "tab-active font-bold"
          } text-xl pb-4`}
          onClick={() => setTab(DESCRIPTION_TAB)}
        >
          Description
        </div>
        <div
          role="tab"
          className={`tab ${
            tab === MOVES_TAB && "tab-active font-bold"
          } text-xl pb-4`}
          onClick={() => setTab(MOVES_TAB)}
        >
          Moves
        </div>
        <div
          role="tab"
          className={`tab ${
            tab === ABILITIES_TAB && "tab-active font-bold"
          } text-xl pb-4`}
          onClick={() => setTab(ABILITIES_TAB)}
        >
          Abilities
        </div>
      </div>
      {tab === DESCRIPTION_TAB && <Description species={species} />}
      {tab === MOVES_TAB && <Moves moves={moves} />}
      {tab === ABILITIES_TAB && <Abilities abilities={abilities} />}
    </div>
  );
};

export default SideInformation;
