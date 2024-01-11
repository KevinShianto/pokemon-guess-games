import React from "react";
import { randomNumberByRange } from "../../utils/random";
import { GENERATION_VIII } from "../../utils/constants";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost text-xl">
          Pok&eacute;Guess
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href={`/info/${randomNumberByRange(GENERATION_VIII, 1)}`}>
              Random pokemon info
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
