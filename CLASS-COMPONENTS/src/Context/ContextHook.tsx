import { useContext } from "react";
import { StarWarsContext } from "./ContextProvider";

export function useStarWarsContext() {
  const context = useContext(StarWarsContext);
  if (!context) {
    throw new Error(
      "useStarWarsContext must be used within a StarWarsProvider"
    );
  }
  return context;
}
