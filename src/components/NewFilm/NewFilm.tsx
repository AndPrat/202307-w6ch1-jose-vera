import { useState } from "react";
import Film from "../../types";
import Button from "../Button/Button";
import "./NewFilm.css";

const NewFilmForm = (): React.ReactElement => {
  const [canSubmit] = useState(false);

  const initialFilmData = {
    id: 0,
    title: "",
    poster: "",
    director: "",
    year: 0,
  };

  const [newFilm, setNewFilm] = useState<Film>(initialFilmData);

  const changeNewFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilm((newFilm) => ({
      ...newFilm,
      [event.target.id]: event.target.type,
    }));
  };

  return (
    <form
      className="form-film"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="form-control">
        <label htmlFor="title">Título: </label>
        <input
          type="text"
          id="title"
          value={newFilm.title}
          onChange={changeNewFilm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="director">Dirección: </label>
        <input
          type="text"
          id="director"
          value={newFilm.director}
          onChange={changeNewFilm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="year">Año: </label>
        <input
          type="number"
          id="year"
          value={newFilm.year}
          onChange={changeNewFilm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="poster">URL cartel: </label>
        <input
          type="url"
          id="poster"
          value={newFilm.poster}
          onChange={changeNewFilm}
        />
      </div>
      <div className="form-control">
        <Button disabled={!canSubmit}>Crear película</Button>
      </div>
    </form>
  );
};

export default NewFilmForm;
