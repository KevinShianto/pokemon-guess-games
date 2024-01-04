import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages";
import PokemonInfoPage from "./pages/info";

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
]);
