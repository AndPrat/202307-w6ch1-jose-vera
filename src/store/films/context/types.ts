import { Film } from "../../../types";

interface FilmsContextStructure {
  films: Film[];
  loadFilms: () => Promise<void>;
  addFilm: (film: Film) => Promise<void>;
}

export default FilmsContextStructure;
