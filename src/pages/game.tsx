import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import { Pokemon, PokemonClient } from "pokenode-ts";
import { randomNumberByRange } from "../utils/random";
import MainGameComponent from "../components/games/Main";
import { GENERATION_VIII } from "../utils/constants";
import { useTimer } from "react-use-precision-timer";
import ReactConfetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

const GamePage = () => {
  const { width, height } = useWindowSize();
  const totalTime = 60000; // in milliseconds

  const generation = GENERATION_VIII;
  const api = new PokemonClient();
  const [data, setData] = useState<Pokemon>();
  const [loading, setLoading] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = React.useState(totalTime);
  const [result, setResult] = useState<boolean>();

  const timerDelay = 10;

  let dexNumber = randomNumberByRange(generation);

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
        (
          document.getElementById("result-modal") as HTMLDialogElement
        )?.showModal();
      }
    }
  );

  useEffect(() => {
    if (!data) {
      getPokemon();
    }
  }, []);

  const onFinish = (win: boolean) => {
    setResult(win);
    timer.stop();
    if (win) {
      (
        document.getElementById("result-modal") as HTMLDialogElement
      )?.showModal();
    }
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

  const resetGame = () => {
    setTimeLeft(totalTime);
    dexNumber = randomNumberByRange(generation);
    setResult(undefined);
    timer.start();
    getPokemon();
  };

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

        {/* Game result */}
        {result && <ReactConfetti width={width} height={height} />}
        <dialog id="result-modal" className="modal text-center">
          <div className="modal-box">
            <div className="text-3xl font-bold">
              {result ? "Congratulations" : "Shoot"}
            </div>
            <div className="mt-2">
              {result ? (
                <>You guessed it correct!</>
              ) : (
                <>
                  Time's up buddy! The correct answer is{" "}
                  <span className="font-bold">{data.name}</span>
                </>
              )}
            </div>
            <div className="modal-action justify-center">
              <form method="dialog" className="flex gap-4">
                <a href={`/info/${data.id}`} className="btn btn-ghost">
                  See pokemon info
                </a>
                <button onClick={resetGame} className="btn">
                  Play again
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    );

  return <>Error</>;
};

export default GamePage;
