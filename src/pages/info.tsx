import { Pokemon, PokemonClient } from "pokenode-ts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PokemonInfoPage = () => {
  const api = new PokemonClient();
  const [data, setData] = useState<Pokemon>();

  const { pokemonName } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    if (pokemonName)
      api
        .getPokemonByName(pokemonName)
        .then((res) => {
          setData(res);
          setError("");
        })
        .catch((err) => {
          setError(err);
        });
  }, [pokemonName]);

  return (
    <center>
      {!error && data?.sprites.other?.["official-artwork"].front_default && (
        <img
          src={data?.sprites.other?.["official-artwork"].front_default}
          alt=""
        />
      )}
      {!error && data?.id && (
        <div className="text-4xl">
          #{data?.id} {data?.name.toUpperCase()}
        </div>
      )}
      {error && <>Error</>}
    </center>
  );
};

export default PokemonInfoPage;
