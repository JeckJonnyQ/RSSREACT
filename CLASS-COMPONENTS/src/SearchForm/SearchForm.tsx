import { Component } from "react";
import "./SearchForm.scss";

import { PokemonList } from "../types/PokemonArray";

interface SearchFormProps {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  pokemonList: PokemonList[];
}

interface SearchFormState {
  hasError: boolean;
}

const asd: any = "asd";
const qwe: any = "asd";


class SearchForm extends Component<SearchFormProps, SearchFormState> {
  state = {
    hasError: false,
  };

  handleButtonClick = () => {
    try {
      throw new Error("Error triggered by button click in SearchForm");
    } catch (error) {
      console.error("Error caught in SearchForm:", error);
      this.setState({ hasError: true });
    }
  };

  render() {
    const { searchValue, onChange, onSubmit } = this.props;

    if (this.state.hasError) {
      throw new Error("Error in SearchForm component");
    }

    return (
      <div className="wrapper__search">
        <form className="search__form" onSubmit={onSubmit}>
          <input
            className="search__form_input"
            type="text"
            value={searchValue}
            onChange={onChange}
            placeholder="Search..."
          />
          <div className="search__form-inner">
            <button
              className="search__form-inner_btn"
              type="submit"
              style={{ marginRight: "12px" }}
            >
              Search
            </button>
            <button
              className="search__form-inner_btn"
              type="button"
              onClick={this.handleButtonClick}
            >
              Error
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
