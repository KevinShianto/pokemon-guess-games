import React from "react";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-7xl font-bold">PokéGuess</h1>
          <p className="py-6">Ready to test you Pokémon knowledge?</p>
          <button className="btn btn-accent">I'm Ready</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
