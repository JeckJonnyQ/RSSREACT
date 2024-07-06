import { Component } from "react";
import "./SearchForm.scss";

interface SearchFormProps {
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

class SearchForm extends Component<SearchFormProps> {
  render() {
    const { searchValue, onChange, onSubmit } = this.props;

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
            <button className="search__form-inner_btn" type="button">
              Error
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchForm;
