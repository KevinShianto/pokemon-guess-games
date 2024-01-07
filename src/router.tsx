import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages";
import PokemonInfoPage from "./pages/info";
import GamePage from "./pages/game";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    ),
  },
  {
    path: "/info/:pokemonName",
    element: (
      <DefaultLayout>
        <PokemonInfoPage />
      </DefaultLayout>
    ),
  },
  {
    path: "/game",
    element: (
      <DefaultLayout>
        <GamePage />
      </DefaultLayout>
    ),
  },
]);
