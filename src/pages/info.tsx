import { Pokemon, PokemonClient, PokemonSpecies } from "pokenode-ts";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";
import SideInformation from "../components/games/info/side-information";

const PokemonInfoPage = () => {
  const api = new PokemonClient();
  const [data, setData] = useState<Pokemon>();
  const [species, setSpecies] = useState<PokemonSpecies>();

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

  useEffect(() => {
    if (!data) return;
    api.getPokemonSpeciesById(data.id).then((res) => {
      setSpecies(res);
    });
  }, [data]);

  if (loading) return <Loading></Loading>;

  if (error) return <>Error</>;

  return (
    <div className="flex flex-col md:flex-row p-16 h-full">
      {/* left side main information */}
      <div className="justify-center items-center h-full flex flex-col w-full md:w-2/5">
        {data?.id && (
          <div className="text-4xl mb-2">
            #{data?.id} {data?.name.toUpperCase()}
          </div>
        )}
        {data?.sprites.other?.["official-artwork"].front_default && (
          <img
            src={data?.sprites.other?.["official-artwork"].front_default}
            alt=""
            className="md:w-96 w-2/3 mb-2"
          />
        )}
        {data?.types && data.types.length > 0 && (
          <div className="flex gap-6">
            {data.types.map((type) => (
              <div
                className={`elements elements-${type.type.name} h-full w-full`}
              ></div>
            ))}
          </div>
        )}
      </div>
      {/* right side information */}
      <div className="w-full md:w-3/5">
        <SideInformation
          species={species}
          moves={data?.moves}
          abilities={data?.abilities}
        />
      </div>
    </div>
  );
};

export default PokemonInfoPage;
