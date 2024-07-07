import { Component } from "react";
import "./SearchResult.scss";
import { PokemonList, PokemonDetails } from "../types/PokemonArray";

interface Props {
  query: string;
  pokemonList: PokemonList[];
  pokemonDetails: PokemonDetails[];
}

class SearchResult extends Component<Props> {
  render() {
    const { pokemonDetails, query } = this.props;

    // Фильтруем покемонов по данным query запроса/пропса
    const filteredPokemonDetails = pokemonDetails.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );

    const displayPokemonDetails = query
      ? filteredPokemonDetails
      : pokemonDetails;

    return (
      <div className="wrapper__card">
        {displayPokemonDetails.map((pokemon) => (
          <div key={pokemon.name} className="card__content">
            <h3 className="card__content_title">{pokemon.name}</h3>
            <p className="card__content_desc">
              Pokemon Height: {pokemon.height}
            </p>
            <p className="card__content_desc">
              Pokemon Weight: {pokemon.weight}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResult;
