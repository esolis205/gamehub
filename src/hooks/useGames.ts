import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useGenres, { Genre } from "./useGenres";
import useData from "./useData";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.selectedGenre?.id,
        platforms: gameQuery.selectedPlatform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );

export default useGames;
