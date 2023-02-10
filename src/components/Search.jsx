import React from "react";

const Search = ({setMovie}) => {

    const formSubmit = (e) => {
        e.preventDefault()
        e.target.reset()
    }

    const movieName = (e) => {
        setMovie(e.target.value)
    }

  return (
    <div
      id="search"
      className="fixed bg-opacity-0 w-full h-12 m-auto flex justify-end items-end transition-all duration-300 skew-x-[90deg] z-10"
    >
      <form onSubmit={formSubmit} className="mb-[6px] mr-10">
        <input
          type="text"
          className="bg-purple-50 text-purple-700 font-semibold outline-0 px-2 py-1 rounded-md mr-2"
          onChange={movieName}
        />
        <button className="text-purple-700">
          <i className="fa-solid fa-magnifying-glass pl-1" />
        </button>
      </form>
    </div>
  );
};

export default Search;
