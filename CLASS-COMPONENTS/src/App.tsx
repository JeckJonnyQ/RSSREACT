import { ReactElement } from "react";

import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import SearchForm from "../src/SearchForm/SearchForm";
import SearchResult from "../src/SearchResult/SearchResult";

import { StarWarsProvider } from "./Context/ContextProvider";

export function App(): ReactElement {
  return (
    <>
      <StarWarsProvider>
        <ErrorBoundary>
          <SearchForm />
          <SearchResult />
        </ErrorBoundary>
      </StarWarsProvider>
    </>
  );
}

export default App;
