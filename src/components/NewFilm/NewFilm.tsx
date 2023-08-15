import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./NewFilm.css";

const NewFilmForm = (): React.ReactElement => {
  const initialFilmData = {
    id: 0,
    title: "",
    poster: "",
    director: "",
    year: 0,
  };

  const [newFilm, setNewFilm] = useState(initialFilmData);
  const { title, poster, director, year } = newFilm;

  const changeNewFilm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewFilm((newFilm) => ({
      ...newFilm,
      [event.target.id]: event.target.value,
    }));
  };

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (title !== "" && poster !== "" && director !== "" && year !== 0) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [title, poster, director, year]);

  return (
    <form className="form-film">
      <div className="form-control">
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" value={title} onChange={changeNewFilm} />
      </div>
      <div className="form-control">
        <label htmlFor="director">Dirección:</label>
        <input
          type="text"
          id="director"
          value={director}
          onChange={changeNewFilm}
        />
      </div>
      <div className="form-control">
        <label htmlFor="year">Año: </label>
        <input type="number" id="year" value={year} onChange={changeNewFilm} />
      </div>
      <div className="form-control">
        <label htmlFor="poster">URL cartel:</label>
        <input type="url" id="poster" value={poster} onChange={changeNewFilm} />
      </div>
      <div className="form-control">
        <Button disabled={disabled}>Crear película</Button>
      </div>
    </form>
  );
};

export default NewFilmForm;
