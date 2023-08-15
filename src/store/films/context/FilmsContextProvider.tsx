import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useFilmsApi from "../../../hooks/useFilmsApi";
import { Film } from "../../../types";
import FilmsContext from "./FilmsContext";
import FilmsContextStructure from "./types";

const FilmsContextProvider = ({ children }: PropsWithChildren) => {
  const [films, setFilms] = useState<Film[]>([]);

  const { getFilmsApi, addFilm: addFilmToOrigin } = useFilmsApi();

  const loadFilms = useCallback(async () => {
    const apiFilms = await getFilmsApi();
    setFilms([...apiFilms]);
  }, [getFilmsApi]);

  const addFilm = useCallback(
    async (film: Film) => {
      const newFilm = await addFilmToOrigin(film);

      setFilms((films) => [...films, newFilm]);
    },
    [addFilmToOrigin],
  );

  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({
      films,
      loadFilms,
      addFilm,
    }),
    [films, loadFilms, addFilm],
  );

  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
