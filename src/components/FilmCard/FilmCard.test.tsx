import { render, screen } from "@testing-library/react";
import { mockFilms } from "../../mocks/mockFilms";
import FilmCard from "../FilmCard/FilmCard";

describe("Given a FilmCard component", () => {
  describe("When it receives 'Viaje a Darjeeling' film", () => {
    test("Then it should show 'Viaje a Darjeeling' text title film", () => {
      const expectedTitle = "Viaje a Darjeeling";

      render(<FilmCard film={mockFilms[0]} />);

      const filmTitle = screen.getByRole("heading", {
        name: expectedTitle,
      });
      expect(filmTitle).toBeInTheDocument();
    });
  });

  test("Then it should show a film poster of the film 'Viaje a Darjeeling'", () => {
    const altText = "Viaje a Darjeeling";

    render(<FilmCard film={mockFilms[0]} />);

    const posterFilm = screen.getByAltText(altText);

    expect(posterFilm).toBeInTheDocument();
  });

  describe("When it receives the 'Moonlight' film", () => {
    test("Then it should show the film director's name text", () => {
      const ariaLabelText = "Barry Jenkins";

      render(<FilmCard film={mockFilms[1]} />);

      const direction = screen.getByLabelText(ariaLabelText);

      expect(direction).toBeInTheDocument();
    });

    test("Then it should show the film director's name text", () => {
      const ariaLabelText = "2016";

      render(<FilmCard film={mockFilms[1]} />);

      const direction = screen.getByLabelText(ariaLabelText);

      expect(direction).toBeInTheDocument();
    });
  });
});
