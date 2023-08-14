import { X } from "react-feather";
import Film from "../../types";
import Button from "../Button/Button";
import "./FilmCard.css";

interface FilmsCardProps {
  film: Film;
}

const FilmCard = ({ film }: FilmsCardProps): React.ReactElement => {
  return (
    <article className="film">
      <h3>{film.title}</h3>
      <img
        className="film__poster"
        src={film.poster}
        alt=""
        width="300"
        height="406"
      />
      <ul>
        <li>Dirección: {film.director}</li>
        <li>Year: {film.year}</li>
      </ul>
      <Button className="film__button">
        <X aria-label="eliminar película" />
      </Button>
    </article>
  );
};

export default FilmCard;
