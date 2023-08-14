import { PropsWithChildren, useMemo, useState } from "react";
import Film from "../../../types";
import FilmsContext from "./FilmsContext";
import FilmsContextStructure from "./types";

const FilmsContextProvider = ({ children }: PropsWithChildren) => {
  const [films] = useState<Film[]>([]);

  const filmsContextValue = useMemo(
    (): FilmsContextStructure => ({
      films,
    }),
    [films],
  );

  return (
    <FilmsContext.Provider value={filmsContextValue}>
      {children}
    </FilmsContext.Provider>
  );
};

export default FilmsContextProvider;
