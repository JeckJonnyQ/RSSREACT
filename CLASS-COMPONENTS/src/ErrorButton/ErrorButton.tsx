import { useState } from "react";
import "../SearchForm/SearchForm.scss";

export default function ErrorButton() {
  const [errorState, setErrorState] = useState(false);

  function throwError() {
    setErrorState(true);
  }

  if (errorState) {
    throw new Error("Error triggered by button click in SearchForm");
  } else {
    return (
      <button className="search__form-inner_btn" onClick={() => throwError()}>
        Error
      </button>
    );
  }
}
