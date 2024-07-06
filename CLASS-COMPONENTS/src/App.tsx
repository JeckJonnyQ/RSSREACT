import { Component } from "react";
import SearchForm from "../src/SearchForm/SearchForm";
import SearchResult from "../src/SearchResult/SearchResult";
// import ErrorBoundary from "./ErrorBoundary";

import { fetchPokemonData } from "./api/api";

interface AppState {
  query: string;
  pokemonList: [];
  searchValue: string;
}

class App extends Component<object, AppState> {
  state: AppState = {
    query: "",
    pokemonList: [],
    searchValue: "",
  };

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    try {
      const data = await fetchPokemonData();
      this.setState({ pokemonList: data.results });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value.trim() });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ query: this.state.searchValue });
  };

  render() {
    const { query, searchValue, pokemonList } = this.state;

    return (
      <>
        {/* <ErrorBoundary> */}
        <SearchForm
          searchValue={searchValue}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <SearchResult query={query} pokemonList={pokemonList} />
        {/* </ErrorBoundary> */}
      </>
    );
  }
}

export default App;
