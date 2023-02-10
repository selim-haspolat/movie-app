import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const New = ({setClickedMovie, setShowDetail}) => {

  const newSliderClick = (e) => {
    let movieName = e.target.getAttribute('value');
      setClickedMovie(movieName);
      console.log(movieName);
      setShowDetail(true)
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return (
    <div className="mt-10">
      <h2 className="font-bold text-4xl border-l-8 border-purple-400 pl-2 mb-2 text-purple-700">
        In theaters
      </h2>
      <Carousel className="bg-purple-500 rounded-3xl" responsive={responsive}>
        <div
          className="cursor-pointer w-28 h-40 md:h-[200px] md:w-36 lg:h-[280px] lg:w-48 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto hover:opacity-80 transition-all"
          style={{
            backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_SX300.jpg)`,
          }}
          onClick={newSliderClick}
          value="Puss in Boots: The Last Wish"
        ></div>
        <div
          className="cursor-pointer w-28 h-40 md:h-[200px] md:w-36 lg:h-[280px] lg:w-48 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto hover:opacity-80 transition-all"
          style={{
            backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg)`,
          }}
          onClick={newSliderClick}
          value="Avatar: The Way of Water"
        ></div>
        <div
          className="cursor-pointer w-28 h-40 md:h-[200px] md:w-36 lg:h-[280px] lg:w-48 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto hover:opacity-80 transition-all"
          style={{
            backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BZTc4MjU0MjMtYTEwNy00YjNlLTk2MGYtMjNlNzFjMmY4MjQ0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg)`,
          }}
          onClick={newSliderClick}
          value="Knock at the Cabin"
        ></div>
        <div
          className="cursor-pointer w-28 h-40 md:h-[200px] md:w-36 lg:h-[280px] lg:w-48 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto hover:opacity-80 transition-all"
          style={{
            backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BNmRlN2Y1MjAtNGZjZS00YTk4LTk2ZjMtNzJmYTJkNDdiNDU0XkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_SX300.jpg)`,
          }}
          onClick={newSliderClick}
          value="Kutsal Damacana 4"
        ></div>
        <div
          className="cursor-pointer w-28 h-40 md:h-[200px] md:w-36 lg:h-[280px] lg:w-48 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto hover:opacity-80 transition-all"
          style={{
            backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BM2NlZDI0ZDktNTg5OS00ZjQ1LWI4MDEtN2I0MDE5NWRiNzA4XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg)`,
          }}
          onClick={newSliderClick}
          value="The Banshees of Inisherin"
        ></div>
        <div
          className="cursor-pointer w-28 h-40 md:h-[200px] md:w-36 lg:h-[280px] lg:w-48 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto hover:opacity-80 transition-all"
          style={{
            backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BZGM1MzczNmQtMjBmYS00NTRhLWI0MzctNTFkZDc4OGUyODdjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg)`,
          }}
          onClick={newSliderClick}
          value="The Fabelmans"
        ></div>
        <div
          className="cursor-pointer w-28 h-40 md:h-[200px] md:w-36 lg:h-[280px] lg:w-48 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto hover:opacity-80 transition-all"
          style={{
            backgroundImage: `url(https://m.media-amazon.com/images/M/MV5BZDQ4Njg4YTctNGZkYi00NWU1LWI4OTYtNmNjOWMyMjI1NWYzXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_SX300.jpg)`,
          }}
          onClick={newSliderClick}
          value="The Whale"
        ></div>
        <div
          className="cursor-pointer w-28 h-40 md:h-[200px] md:w-36 lg:h-[280px] lg:w-48 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto hover:opacity-80 transition-all"
          style={{
            backgroundImage: `url("https://m.media-amazon.com/images/M/MV5BMDIzM2FlNTctNjAzZi00YzhkLThjYWQtMDY5Njc0NjdmMGVlXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_SX300.jpg)`,
          }}
          onClick={newSliderClick}
          value="Ant-Man and the Wasp: Quantumania"
        ></div>
      </Carousel>
    </div>
  );
};

export default New;
