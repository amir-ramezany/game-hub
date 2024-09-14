import { GameQuery } from "../pages/HomePage";
import useData from "./useData";

export interface platforms {
  id: number;
  name: string;
  slug: string;
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Publisher {
  id: number;
  name: string;
}

export interface Screenshot {
  id: number;
  image: string;
  width: number;
  height: number;
}

export interface Trailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: platforms }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );

export default useGames;
