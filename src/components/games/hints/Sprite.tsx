import React from "react";

export type SpriteHintProps = {
  sprite?: string | null;
  isOpen?: boolean;
  waitingText: string | number;
  gameOver: boolean;
};

const SpriteHint = ({
  sprite,
  isOpen = false,
  waitingText,
  gameOver,
}: SpriteHintProps) => {
  return (
    <div
      className={`flex flex-col col-span-2 justify-center w-full h-full items-center gap-1 bg-base-200 p-4 rounded-lg text-center xl:min-h-96 min-h-52 ${
        !isOpen && "skeleton"
      }`}
    >
      {isOpen ? (
        sprite && (
          <>
            <img
              src={sprite}
              style={{
                filter: gameOver ? "unset" : "contrast(0%) brightness(50%)",
              }}
              alt={"silhoutte-sprite"}
              className="h-full"
            />
          </>
        )
      ) : (
        <div className="text-xl font-medium">{waitingText}</div>
      )}
    </div>
  );
};

export default SpriteHint;
