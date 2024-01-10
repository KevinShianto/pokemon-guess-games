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
        className={`input w-full text-center text-5xl h-4/5 ${
          isFalse ? "input-error" : ""
        }`}
        type="text"
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    </div>
  );
};

export default AnswerBox;
