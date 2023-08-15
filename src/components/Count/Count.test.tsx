import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { mockFilms } from "../../mocks/mockFilms";
import FilmsListPage from "../../pages/FilmsListPage/FilmsListPage";
import FilmsContextProvider from "../../store/films/context/FilmsContextProvider";

describe("Given a FilmListPage component", () => {
  describe("When it receives a new loadFilms", () => {
    test("Then it should show 'Listando 2 películas'", async () => {
      const loadFilms = mockFilms.length;
      const labelText = `Listando ${loadFilms} películas`;

      render(
        <FilmsContextProvider>
          <BrowserRouter>
            <FilmsListPage />
          </BrowserRouter>
        </FilmsContextProvider>,
      );
      const span = await waitFor(() => screen.getByLabelText(labelText));

      expect(span).toBeInTheDocument();
      expect(span).toHaveTextContent("Listando 2 películas");
    });
  });
});
