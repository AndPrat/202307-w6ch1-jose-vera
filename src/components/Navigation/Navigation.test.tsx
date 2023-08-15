import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Listado de películas' and 'Añadir película'", () => {
      const expectedHomeText = "Listado de películas";
      const expectedAddFilmsText = "Añadir película";

      render(
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>,
      );

      const homeLink = screen.getByRole("link", { name: expectedHomeText });
      const addFilmLink = screen.getByRole("link", {
        name: expectedAddFilmsText,
      });

      expect(homeLink).toBeInTheDocument();
      expect(addFilmLink).toBeInTheDocument();
    });
  });
});
