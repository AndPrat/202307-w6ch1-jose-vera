import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewFilmForm from "./NewFilm";

describe("Given a NewFilm component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'title', 'director', 'poster' and 'year' fields", () => {
      const titleInputLabelText = "Título:";
      const directorInputLabelText = "Dirección:";
      const posterInputLabelText = "URL cartel:";
      const yearsInputLabelText = "Año:";

      render(<NewFilmForm />);

      const titleInput = screen.getByLabelText(
        titleInputLabelText,
      ) as HTMLInputElement;
      const directorInput = screen.getByLabelText(
        directorInputLabelText,
      ) as HTMLInputElement;
      const posterInput = screen.getByLabelText(
        posterInputLabelText,
      ) as HTMLInputElement;
      const yearsInput = screen.getByLabelText(
        yearsInputLabelText,
      ) as HTMLInputElement;

      expect(titleInput).toBeInTheDocument();
      expect(directorInput).toBeInTheDocument();
      expect(posterInput).toBeInTheDocument();
      expect(yearsInput).toBeInTheDocument();
    });
  });
  describe("When it's type the film information on the form", () => {
    test("Then it should create a film with 'Troll 2' title, 'https://ih1.redbubble.net/image.3162044071.7295/flat,750x,075,f-pad,750x1000,f8f8f8.jpg' poster, 'Claudio Fragasso' director and 1990 year", async () => {
      const titleText = "Troll 2";
      const directorText = "Claudio Fragasso";
      const posterText =
        "https://ih1.redbubble.net/image.3162044071.7295/flat,750x,075,f-pad,750x1000,f8f8f8.jpg";
      const yearText = 1990;

      render(<NewFilmForm />);

      const newTitle = screen.getByRole("textbox", {
        name: /título/i,
      }) as HTMLInputElement;
      const newdirector = screen.getByRole("textbox", {
        name: /dirección/i,
      }) as HTMLInputElement;
      const newPoster = screen.getByRole("textbox", {
        name: /url cartel/i,
      }) as HTMLInputElement;
      const newYear = screen.getByRole("spinbutton", {
        name: /año/i,
      }) as HTMLInputElement;

      await userEvent.type(newTitle, titleText);
      await userEvent.type(newdirector, directorText);
      await userEvent.type(newPoster, posterText);
      await userEvent.type(newYear, yearText.toString());

      expect(newTitle.value).toBe(titleText);
      expect(newdirector.value).toBe(directorText);
      expect(newPoster.value).toBe(posterText);
      expect(newYear.value).toBe(yearText.toString());
    });
  });

  describe("When NewFilm component is rendered and some inputs is empty", () => {
    test("Then it should show a disabled button", () => {
      render(<NewFilmForm />);

      const button = screen.getByRole("button", { name: "Crear película" });

      expect(button).toBeDisabled();
    });
  });
});
