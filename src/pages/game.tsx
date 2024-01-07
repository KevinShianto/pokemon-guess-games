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
  const timerDelay = 10;

  const timer = useTimer(
    {
      delay: timerDelay,
    },
    () => {
      setTimeLeft((timeleft) => timeleft - timerDelay);
      if (timeLeft <= 0) {
        setTimeLeft(0);
        timer.stop();
      }
    }
  );

  useEffect(() => {
    const dexNumber = randomNumberByRange(generation);
    setLoading(true);
    api
      .getPokemonById(dexNumber)
      .then((response) => {
        setData(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    timer.start();
  }, [timer]);

  if (loading) return <Loading></Loading>;

  if (data)
    return (
      <div className="py-16 px-60">
        <MainGameComponent
          data={data}
          timeLeft={timeLeft}
          totalTimes={totalTime}
        />
      </div>
    );

  return <>Error</>;
};

export default GamePage;
