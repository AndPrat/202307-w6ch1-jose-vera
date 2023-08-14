import React, { useContext } from "react";
import FilmsContext from "../../store/films/context/FilmsContext";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmsList.css";

const FilmsList = (): React.ReactElement => {
  const { films } = useContext(FilmsContext);

  return (
    <div>
      <ul className="films">
        {films.map((film) => (
          <li key={film.id}>
            <FilmCard film={film} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmsList;
