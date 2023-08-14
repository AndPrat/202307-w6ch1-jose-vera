import { createContext } from "react";
import FilmsContextStructure from "./types";

const FilmsContext = createContext({} as FilmsContextStructure);

export default FilmsContext;
