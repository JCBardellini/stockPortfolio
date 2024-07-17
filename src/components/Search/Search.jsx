import React, { useState } from "react";
import "./search.scss";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [search, setSearch] = useState("");
  const navLink = "Stocks";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
    console.log(search);
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchIcon = () => {
    document.getElementById("searchForm").submit();
    console.log(search);
  };

  return (
    <section id="searchContainer">
      <div className="searchTitle">
        <HomeIcon />
        <h2>Dashboard /</h2>
        {/* the selectedNavLink will change depending on what section we are looking at */}
        <h2 className="selectedNavLink">{navLink}</h2>
      </div>

      <form onSubmit={handleSubmit} id="searchForm" className="searchForm">
        <div className="inputContainer">
          <input
            type="search"
            placeholder="Search"
            className="searchInput"
            value={search}
            onChange={handleChange}
          />
          <SearchIcon className="searchIcon" onClick={handleSearchIcon} />
        </div>
      </form>
    </section>
  );
};

export default Search;
