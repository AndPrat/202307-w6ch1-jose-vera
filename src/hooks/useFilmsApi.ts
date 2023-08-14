import { useCallback } from "react";
import Film from "../types";

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

  return { getFilmsApi };
};

export default useFilmsApi;
