import { ReactElement, useEffect, useState } from "react";
import "./SearchForm.scss";

import ErrorButton from "../ErrorButton/ErrorButton";
import { useStarWarsContext } from "../Context/Context";

export function SearchForm(): ReactElement {
  const {
    searchValue,
    setSearchValue,
    fetchAllCharacters,
    fetchSingleCharacter,
  } = useStarWarsContext();

  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (searchValue.trim().length) {
      await fetchSingleCharacter();
    } else {
      await fetchAllCharacters();
    }

    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchAllCharacters()
      .then(() => setIsLoading(false))
      .catch((error) => {
        setIsLoading(false);
        console.error("Error loading characters:", error);
      });
  }, []);

  return (
    <>
      <div>{searchValue}</div>
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
            <ErrorButton />
          </div>
        </form>
      </div>
      {isLoading && <div className="loader">Loading...</div>}
    </>
  );
}

export default SearchForm;
