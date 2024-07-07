import { Component } from "react";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import SearchForm from "../src/SearchForm/SearchForm";
import SearchResult from "../src/SearchResult/SearchResult";

import { fetchPokemonData, fetchSingleData } from "./api/api";
import { PokemonList, PokemonDetails } from "../src/types/PokemonArray";

interface AppState {
  query: string;
  pokemonList: PokemonList[];
  pokemonDetails: PokemonDetails[];
  searchValue: string;
}

class App extends Component<object, AppState> {
  state: AppState = {
    query: "",
    pokemonList: [],
    pokemonDetails: [],
    searchValue: "",
  };

  componentDidMount() {
    const searchValue = localStorage.getItem("searchValue");

    if (!searchValue) {
      localStorage.setItem("searchValue", this.state.searchValue);
      this.fetchDataAllPokemon();
      this.fetchSinglePokemon(this.state.pokemonList);
    } else {
      this.setState({ query: searchValue, searchValue: searchValue });
      this.fetchSinglePokemon(this.state.pokemonList);
      console.log(searchValue);
      console.log(this.state.query);
    }
  }

  async fetchDataAllPokemon() {
    try {
      const data = await fetchPokemonData();
      this.setState({ pokemonList: data.results });

      this.fetchSinglePokemon(data.results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  async fetchSinglePokemon(pokemonList: PokemonList[]) {
    try {
      const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
        const data = await fetchSingleData(pokemon.url);
        return data;
      });

      const pokemonDetails = await Promise.all(pokemonDetailsPromises);
      this.setState({ pokemonDetails });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.trim();
    this.setState({ searchValue });
    localStorage.setItem("searchValue", searchValue);
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ query: this.state.searchValue });
  };

  handleThrowError = () => {
    throw new Error("Test error"); // Вызываем ошибку для демонстрации
  };

  render() {
    const { query, searchValue, pokemonList, pokemonDetails } = this.state;
    return (
      <>
        <ErrorBoundary>
          <SearchForm
            searchValue={searchValue}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            onThrowError={this.handleThrowError}
            pokemonList={pokemonList}
          />
          <SearchResult
            query={query}
            pokemonList={pokemonList}
            pokemonDetails={pokemonDetails}
          />
        </ErrorBoundary>
      </>
    );
  }
}

export default App;
