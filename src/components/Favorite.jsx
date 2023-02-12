import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Favorite = ({setClickedMovie, setShowDetail, favoriteDetail }) => {
  
  const newSliderClick = (e) => {
    let movieName = e.target.getAttribute('value');
      setClickedMovie(movieName);;
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
        Favorites
      </h2>
      <Carousel className="bg-purple-500 rounded-3xl" responsive={responsive}>
        {favoriteDetail?.map((f,i) => {
          let title = f[0]
          let poster = f[1]
          return(
        <div
        onClick={newSliderClick}
        key={i}
        className="cursor-pointer w-28 h-40 md:h-[200px] md:w-36 lg:h-[280px] lg:w-48 rounded-3xl bg-purple-100 bg-center bg-no-repeat bg-cover p-4 my-3 mx-auto hover:opacity-80 transition-all"
        style={{
          backgroundImage: `url(${poster})`,
        }}
        value={`${title}`}
      ></div>)
        })}
      </Carousel>
    </div>
  );
};

export default Favorite;
