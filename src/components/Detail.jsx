import React from "react";

const Detail = ({ detail, setShowDetail }) => {
  const exitDetail = () => {
    setShowDetail(false);
  };

  const {
    Title,
    Released,
    Runtime,
    Genre,
    Director,
    Actors,
    Plot,
    Poster,
    imdbRating,
  } = detail;
  return (
    <div id="detail-div" className="flex gap-3 justify-center flex-wrap relative w-screen sm:w-[820px]">
      <i
        onClick={exitDetail}
        className="fa-solid cursor-pointer fa-xmark fa-2x absolute right-3 top-2 text-red-400 hover:text-red-700 transition-colors"
      ></i>
      <div
        className="w-[200px] h-[320px] sm:w-[300px] sm:h-[450px] bg-center bg-cover bg-no-repeat rounded-3xl mx-auto"
        style={{ backgroundImage: `url(${Poster})` }}
      ></div>
      <div className="bg-purple-200 p-3 rounded-3xl w-[500px] text-purple-900 mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">{Title}</h1>
        </div>
        <div className="ml-2 mt-4">
          <p>
            Directed by{"  "}
            <span className="font-bold text-purple-500">{Director}</span>
          </p>
          <p>
            Starring <span className="font-bold text-purple-500">{Actors}</span>
          </p>
          <p>
            Release date{" "}
            <span className="font-bold text-purple-500">{Released}</span>
          </p>
          <p>
            Running time{" "}
            <span className="font-bold text-purple-500">{Runtime}</span>
          </p>
          <p>
            Genres{" "}
            <span className="font-bold text-purple-500">
              {Genre?.replaceAll(",", " - ")}
            </span>
          </p>
        </div>
        <p className="indent-5 mt-6">{Plot}</p>
        <p className="font-light absolute right-3 bottom-3">
          {imdbRating}
          <i className="fa-solid fa-star text-yellow-400 ml-1"></i>
        </p>
      </div>
    </div>
  ) 
};

export default Detail;
