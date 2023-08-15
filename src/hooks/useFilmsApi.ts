import { useCallback } from "react";
import { Film } from "../types";

const useFilmsApi = () => {
  const apiUrl = `${import.meta.env.VITE_FILMS_API_URL}films`;

  const getFilmsApi = useCallback(async () => {
    try {
      const response = await fetch(apiUrl);
      const apiFilms = (await response.json()) as Film[];

      return apiFilms;
    } catch (error) {
      throw new Error("Can't get any film");
    }
  }, [apiUrl]);

  const addFilm = useCallback(
    async (film: Film) => {
      const response = await fetch(apiUrl, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(film),
      });
      const newFilm = (await response.json()) as Film;

      return newFilm;
    },
    [apiUrl],
  );

  return { getFilmsApi, addFilm };
};

export default useFilmsApi;
