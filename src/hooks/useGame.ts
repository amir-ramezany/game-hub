import { useQuery } from "@tanstack/react-query";
import { APIClient } from "../services/api-client";
import { Game } from "../hooks/useGames";
// import axios from "axios";

// const apiClient = new APIClient<Game>("/games");
// const apiClient = axios
//   .get("https://api.rawg.io/api/games")
//   .then((res) => res.data);
const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
