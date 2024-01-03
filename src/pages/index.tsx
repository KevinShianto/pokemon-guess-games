import React, { useEffect, useState } from "react";
import { PokemonClient, Pokemon } from "pokenode-ts";

const HomePage = () => {
  const api = new PokemonClient();
  const [data, setData] = useState<Pokemon>();

  useEffect(() => {
    api.getPokemonByName("pikachu").then((res) => {
      setData(res);
    });
  }, []);

  return (
    <>
      <div className="text-xl">{data?.id}</div>
      <div className="text-xl">{data?.name}</div>
    </>
  );
};

export default HomePage;
