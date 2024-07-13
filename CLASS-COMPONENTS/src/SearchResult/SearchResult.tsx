import { ReactElement } from "react";
import "./SearchResult.scss";

import { useStarWarsContext } from "../Context/Context";

export function SearchResult(): ReactElement {
  const { charactersList } = useStarWarsContext();

  return (
    <div className="wrapper__card">
      {charactersList.map((item) => (
        <div key={item.name} className="card__content">
          <h3 className="card__content_title">{item.name}</h3>
          <p className="card__content_desc">{item.height}</p>
          <p className="card__content_desc">{item.mass}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
