import Film from "../../../types";

interface FilmsContextStructure {
  films: Film[];
  loadFilms: () => Promise<void>;
}

export default FilmsContextStructure;
