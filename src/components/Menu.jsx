import React from "react";
import Search from "./Search";

const Menu = ({setMovie, setHome}) => {
    const movieName = (e) => {
        setMovie(e.target.value)
    }
    const changeSearcPage = (e) => {
        setHome(false)
    }
    const changeHome = (e) => {
        setHome(true)
    }
  return (
    <div id="menu-div" className="w-screen h-[100px] absolute bg-purple-700 -top-[48px] grid grid-rows-2 transition-all duration-300 z-[19]">
      <div className="flex justify-center items-center">
        <form>
          <input
          id="menu-inp"
            type="text"
            className="bg-purple-50 text-purple-700 font-semibold outline-0 px-2 py-1 rounded-md mr-2"
            onChange={movieName}
            onClick={changeSearcPage}
          />
          <button className="text-purple-50">
            <i className="fa-solid fa-magnifying-glass pl-1" />
          </button>
        </form>
      </div>
      <div className="flex justify-center items-center">
        <a
          href="#"
          className="px-5 py-1 rounded-md hover:bg-purple-200 hover:text-purple-800 transition-colors focus:bg-purple-200 focus:text-purple-800"
          onClick={changeHome}
        >
          Home
        </a>
      </div>
    </div>
  );
};

export default Menu;
