import { createContext, useState, ReactElement } from "react";
import { fetchStarWarsPeople } from "../api/api";
import { DataCharacter } from "../types/dataInterface";
import { ProviderProps } from "../types/ProvaiderProps";

export function StarWarsProvider({ children }: ProviderProps): ReactElement {
  const [searchValue, setSearchValue] = useState<string>("");
  const [charactersList, setCharactersList] = useState<DataCharacter[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);

  const fetchAllCharacters = async () => {
    try {
      const data = await fetchStarWarsPeople("");
      setCharactersList(data.results);
      setError(undefined); // Сбрасываем ошибку, если запрос прошел успешно
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching all characters:", error);
        setError(error);
      }
    }
  };

  const fetchSingleCharacter = async () => {
    try {
      const data = await fetchStarWarsPeople(searchValue);
      setCharactersList(data.results);
      setError(undefined); // Сбрасываем ошибку, если запрос прошел успешно
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error fetching all characters:", error);
        setError(error);
      }
    }
  };

  const contextValue: ContextType = {
    searchValue,
    setSearchValue,
    charactersList,
    fetchAllCharacters,
    fetchSingleCharacter,
    error,
    setError,
  };

  return (
    <StarWarsContext.Provider value={contextValue}>
      {children}
    </StarWarsContext.Provider>
  );
}

const InitialDataState: ContextType = {
  searchValue: "",
  setSearchValue: () => {},
  charactersList: [],
  fetchAllCharacters: () => Promise.resolve(),
  fetchSingleCharacter: () => Promise.resolve(),
  error: undefined,
  setError: () => {},
};

interface InitialState {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  charactersList: DataCharacter[];
  error: Error | undefined;
  setError: React.Dispatch<React.SetStateAction<Error | undefined>>;
}

export interface ContextType extends InitialState {
  fetchAllCharacters: () => Promise<void>;
  fetchSingleCharacter: () => Promise<void>;
}

export const StarWarsContext = createContext<ContextType>(InitialDataState);
