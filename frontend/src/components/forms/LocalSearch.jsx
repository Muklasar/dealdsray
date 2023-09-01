import React from "react";

const LocalSearch = ({ keyword, setKeyword }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control mt-2 mb-3"
      onChange={handleSearch}
      value={keyword}
      placeholder="Search"
    />
  );
};

export default LocalSearch;
