import { Component } from "react";

interface SearchResultProps {
  id: number;
  name: string;
  is_main_series: boolean;
}

interface Props {
  query: string;
  pokemonList: SearchResultProps[];
}

class SearchResultsComponent extends Component<Props> {
  render() {
    const { pokemonList } = this.props;

    return (
      <div>
        {pokemonList.map((result) => (
          <div key={result.name}>
            <h3>{result.name}</h3>
            {/* <p>{result.description}</p> */}
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResultsComponent;
