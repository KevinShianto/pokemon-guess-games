import React from "react";

export type AnswerBoxProps = {
  onChange: (val: string) => void;
  isFalse?: boolean;
};

const AnswerBox = ({ onChange, isFalse }: AnswerBoxProps) => {
  return (
    <div className="col-span-2">
      <div className="text-3xl my-3">Your answer:</div>
      <input
        className={`input w-full text-center text-5xl h-3/5 ${
          isFalse ? "input-error" : ""
        }`}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
      <div className="font-light mt-2">
        <div>
          Notes: for a pok&eacute;mon with 2 words, use{" "}
          <span className="kbd kbd-sm">-</span> instead of spaces
        </div>
        <div>e.g.: zygarde-50, iron-crown, walking-wake, etc.</div>
      </div>
    </div>
  );
};

export default AnswerBox;
