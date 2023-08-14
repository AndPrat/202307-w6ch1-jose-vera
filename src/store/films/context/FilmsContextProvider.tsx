import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import useFilmsApi from "../../../hooks/useFilmsApi";
import Film from "../../../types";
import FilmsContext from "./FilmsContext";
import FilmsContextStructure from "./types";

const FilmsContextProvider = ({ children }: PropsWithChildren) => {
  const [films, setFilms] = useState<Film[]>([]);

  const { getFilmsApi } = useFilmsApi();

  const loadFilms = useCallback(async () => {
    const apiFilms = await getFilmsApi();

    setFilms([...apiFilms]);
  }, [getFilmsApi]);

  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({
      films,
      loadFilms,
    }),
    [films, loadFilms],
  );

  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
