import { render, screen, waitFor } from "@testing-library/react";
import FilmsListPage from "../../pages/FilmsListPage/FilmsListPage";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";

describe("Given a FilmList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of games", async () => {
      const expectedTitle = "Viaje a Darjeeling";

      render(
        <FilmsContextProvider>
          <FilmsListPage />
        </FilmsContextProvider>,
      );

      const firstFilm = await waitFor(() =>
        screen.getByRole("heading", {
          name: expectedTitle,
        }),
      );

      expect(firstFilm).toBeInTheDocument();
    });
  });
});
