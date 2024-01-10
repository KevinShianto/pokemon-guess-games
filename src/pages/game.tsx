import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { randomNumberByRange } from "../utils/random";
import MainGameComponent from "../components/games/Main";
import { GENERATION_VIII } from "../utils/constants";
import { useTimer } from "react-use-precision-timer";

const GamePage = () => {
  const totalTime = 60000; // in milliseconds

  const generation = GENERATION_VIII;
  const api = new PokemonClient();
  const [data, setData] = useState<Pokemon>();
  const [loading, setLoading] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = React.useState(totalTime);
  const [result, setResult] = useState<boolean>();

  const timerDelay = 10;

  const dexNumber = randomNumberByRange(generation);

  const timer = useTimer(
    {
      delay: timerDelay,
    },
    () => {
      setTimeLeft((timeleft) => timeleft - timerDelay);
      if (timeLeft <= 0) {
        setTimeLeft(0);
        timer.stop();
        if (result === undefined) setResult(false);
      }
    }
  );

  useEffect(() => {
    if (!data) {
      getPokemon();
    }
  }, []);

  const onFinish = (answer: string) => {
    setResult(true);
    timer.stop();
  };

  const getPokemon = async () => {
    setLoading(true);
    await api
      .getPokemonById(dexNumber)
      .then((response) => {
        setData(response);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    timer.start();
  }, [timer]);

  if (loading) return <Loading></Loading>;

  if (data)
    return (
      <div className="lg:py-10 lg:px-40 md:p-12 p-4">
        <MainGameComponent
          data={data}
          timeLeft={timeLeft}
          totalTimes={totalTime}
          onFinish={onFinish}
        />
      </div>
    );

  return <>Error</>;
};

export default GamePage;
