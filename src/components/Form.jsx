import React, { useState } from "react";

const Form = ({ handleSubmit, history }) => {
  const [searchEntry, setSearchEntry] = useState("");

  const updateSearchInput = evt => {
    setSearchEntry(evt.target.value);
  };

  return (
    <form className="search-form" onSubmit={evt => handleSubmit(evt, history, searchEntry)}>
      <input type="text" name="search" onChange={updateSearchInput} value={searchEntry}/>
      <button type="submit" className={`search-button ${searchEntry.trim() ? "active" : null}`} disabled={!searchEntry.trim()}>
      <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png" alt=""/>
      </button>
    </form>
  );
};

export default Form;
