import { PokemonType } from "pokenode-ts";
import React from "react";

export type ElementProps = {
  elements: PokemonType[];
};

const ElementHint = ({ elements }: ElementProps) => {
  return (
    <div className="flex flex-col justify-center w-full h-full items-center gap-3 bg-base-200 p-4 rounded-lg">
      <div className="text-xl font-medium">
        Has {elements.length > 1 ? "these" : "this"} type
        {elements.length > 1 && "s"}
      </div>
      <div className="flex justify-center gap-5">
        {elements.map((element) => (
          <div
            className={`elements elements-${element.type.name} h-full w-full`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ElementHint;
