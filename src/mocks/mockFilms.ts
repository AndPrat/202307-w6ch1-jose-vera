import { Film, NewFilm } from "../types";

export const mockFilms: Film[] = [
  {
    id: 1,
    title: "Viaje a Darjeeling",
    poster:
      "https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/67/28/56/20350733.jpg",
    director: "Wes Anderson",
    year: 2007,
  },
  {
    id: 2,
    title: "Moonlight",
    poster: "https://pics.filmaffinity.com/moonlight-232276883-mmed.jpg",
    director: "Barry Jenkins",
    year: 2016,
  },
];

export const newMockFilms: NewFilm = {
  title: "Troll 2",
  poster:
    "https://ih1.redbubble.net/image.3162044071.7295/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  director: "Claudio Fragasso",
  year: 1990,
};
