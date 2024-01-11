import { Pokemon, PokemonClient } from "pokenode-ts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";

const PokemonInfoPage = () => {
  const api = new PokemonClient();
  const [data, setData] = useState<Pokemon>();

  const { pokemonName } = useParams();
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (pokemonName) {
      setLoading(true);
      api
        .getPokemonByName(pokemonName)
        .then((res) => {
          setData(res);
          setError("");
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [pokemonName]);

  if (loading) return <Loading></Loading>;

  return (
    <div className="flex flex-col px-16 py-16">
      <div className="justify-center w-full">
        {!error && data?.id && (
          <div className="text-4xl">
            #{data?.id} {data?.name.toUpperCase()}
          </div>
        )}
        {!error && data?.sprites.other?.["official-artwork"].front_default && (
          <img
            src={data?.sprites.other?.["official-artwork"].front_default}
            alt=""
          />
        )}
      </div>
      {error && <>Error</>}
    </div>
  );
};

export default PokemonInfoPage;
