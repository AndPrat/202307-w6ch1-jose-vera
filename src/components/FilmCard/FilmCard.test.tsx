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
});
