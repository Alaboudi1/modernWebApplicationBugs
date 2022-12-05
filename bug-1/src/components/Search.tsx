import React, { useState } from "react";
import "./search.css";
const Search = ({ search }: { search: search }): JSX.Element => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e: any): void => {
    search(searchValue);
    resetInputField();
    e.preventDefault();
  };

  return (
    <form onSubmit={callSearchFunction}>
      <input
        className="searchInput"
        value={searchValue}
        onChange={handleSearchInputChanges}
        type="text"
        placeholder="Search for a movie..."
      />

      <input className="searchButton" type="submit" value="🔎" />
    </form>
  );
};

type search = (searchValue: string) => void;
export default Search;
